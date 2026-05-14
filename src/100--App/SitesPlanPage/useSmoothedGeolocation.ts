import { useEffect, useRef, useState } from 'react';
import { gpsToPlanPosition } from '../../Utils/gpsToPlanPosition';

type CalibrationPoint = {
  lat: number;
  lng: number;
  x: number;
  y: number;
};

type RawPosition = {
  lat: number;
  lng: number;
  accuracy: number;
  timestamp: number;
};

const MAX_HISTORY_LENGTH = 8;
const MAX_REASONABLE_ACCURACY = 120;
const RECENCY_HALF_LIFE_MS = 12000;

const clampToPlan = (value: number) => Math.min(100, Math.max(0, value));

export type UserPlanPosition = {
  left: number;
  top: number;
  accuracy: number;
  lat: number;
  lng: number;
  timestamp: number;
};

export type GeolocationStatus = 'idle' | 'prompt' | 'granted' | 'denied' | 'unsupported';

export const useSmoothedGeolocation = (
  enabled: boolean,
  calibrationPoints: CalibrationPoint[]
) => {
  const [position, setPosition] = useState<UserPlanPosition | null>(null);
  const [status, setStatus] = useState<GeolocationStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const watchIdRef = useRef<number | null>(null);
  const positionHistory = useRef<RawPosition[]>([]);

  useEffect(() => {
    if (!navigator.permissions) {
      setStatus('prompt');
      return;
    }

    navigator.permissions
      .query({ name: 'geolocation' as PermissionName })
      .then((permissionStatus) => {
        const normalized = permissionStatus.state as GeolocationStatus;
        setStatus(normalized);

        permissionStatus.onchange = () => {
          setStatus(permissionStatus.state as GeolocationStatus);
        };
      })
      .catch(() => {
        setStatus('prompt');
      });
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (!navigator.geolocation) {
      setError('Géolocalisation indisponible sur ce navigateur.');
      setStatus('unsupported');
      return;
    }

    setError(null);

    const smoothPositions = (rawPositions: RawPosition[]) => {
      const now = rawPositions[rawPositions.length - 1]?.timestamp ?? Date.now();
      const reliablePositions = rawPositions.filter((entry) => entry.accuracy <= MAX_REASONABLE_ACCURACY);
      const positions = reliablePositions.length > 0 ? reliablePositions : rawPositions.slice(-1);

      const weighted = positions.map((entry) => {
        const age = Math.max(0, now - entry.timestamp);
        const recencyWeight = Math.exp(-age / RECENCY_HALF_LIFE_MS);
        const accuracyWeight = 1 / Math.max(entry.accuracy, 5) ** 1.35;

        return {
          ...entry,
          weight: recencyWeight * accuracyWeight,
        };
      });

      const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);

      const lat = weighted.reduce((sum, entry) => sum + entry.lat * entry.weight, 0) / totalWeight;
      const lng = weighted.reduce((sum, entry) => sum + entry.lng * entry.weight, 0) / totalWeight;
      const accuracy = Math.max(
        5,
        weighted.reduce((sum, entry) => sum + entry.accuracy * entry.weight, 0) / totalWeight
      );
      const timestamp = weighted[weighted.length - 1].timestamp;

      return { lat, lng, accuracy, timestamp };
    };

    const updatePosition = (coords: GeolocationCoordinates, timestamp: number) => {
      if (!Number.isFinite(coords.latitude) || !Number.isFinite(coords.longitude)) {
        return;
      }

      positionHistory.current.push({
        lat: coords.latitude,
        lng: coords.longitude,
        accuracy: Math.max(coords.accuracy ?? 1, 1),
        timestamp,
      });

      if (positionHistory.current.length > MAX_HISTORY_LENGTH) {
        positionHistory.current.shift();
      }

      const smoothed = smoothPositions(positionHistory.current);
      const planPosition = gpsToPlanPosition(smoothed.lat, smoothed.lng, calibrationPoints);

      setPosition({
        left: clampToPlan(planPosition.x),
        top: clampToPlan(planPosition.y),
        accuracy: smoothed.accuracy,
        lat: smoothed.lat,
        lng: smoothed.lng,
        timestamp: smoothed.timestamp,
      });
    };

    const handleSuccess = (position: GeolocationPosition) => {
      setStatus('granted');
      updatePosition(position.coords, position.timestamp || Date.now());
      setError(null);
    };

    const handleError = (error: GeolocationPositionError) => {
      if (error.code === error.PERMISSION_DENIED) {
        setStatus('denied');
      }

      setError(error.message || 'Erreur de géolocalisation.');
    };

    const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      maximumAge: 2000,
      timeout: 15000,
    });

    watchIdRef.current = watchId;

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, [enabled, calibrationPoints]);

  return { position, status, error };
};
