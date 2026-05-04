import { useEffect, useState } from "react";

type Props = {
  userPosition: { left: number; top: number; accuracy: number } | null;
  dotSize: number;
};

const OrientationComponent = ({ userPosition, dotSize }: Props) => {
  const [heading, setHeading] = useState<number>(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let compassHeading: number | null = null;

      // iOS
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((event as any).webkitCompassHeading !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        compassHeading = (event as any).webkitCompassHeading;
      }
      // Android
      else if (event.alpha !== null) {
        compassHeading = 360 - event.alpha;
      }

      if (compassHeading !== null) {
        setHeading(compassHeading);
      }
    };

    window.addEventListener("deviceorientation", handleOrientation, true);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  if (!userPosition) return null;

  return (
    <div
      className="absolute "
      style={{
        left: `${userPosition.left}%`,
        top: `${userPosition.top}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div 
        style={{
          transform:`rotate(${heading + 90}deg)`,
          transformOrigin: "50% 70%",
          height: `${dotSize}px`,
          width: `${dotSize}px`,
        }}
      >
        <div 
          style={{
            width: 0,
            height: 0,
            borderLeft: `${dotSize / 3}px solid transparent`,
            borderRight: `${dotSize / 3}px solid transparent`,
            borderBottom: `${dotSize}px solid #EDFF29`,
          }}
        />
      </div>
    </div>
  );
};

export default OrientationComponent;