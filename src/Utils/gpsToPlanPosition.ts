type CalibrationPoint = {
  lat: number;
  lng: number;
  x: number; // left %
  y: number; // top %
};

export function gpsToPlanPosition(
  lat: number,
  lng: number,
  points: CalibrationPoint[]
) {
  if (points.length < 3) {
    throw new Error("At least 3 calibration points are required.");
  }

  const p1 = points[0];
  const p2 = points[1];
  const p3 = points[2];

  const det =
    p1.lng * (p2.lat - p3.lat) +
    p2.lng * (p3.lat - p1.lat) +
    p3.lng * (p1.lat - p2.lat);

  if (det === 0) {
    throw new Error("Calibration points are invalid or aligned.");
  }

  const a =
    (p1.x * (p2.lat - p3.lat) +
      p2.x * (p3.lat - p1.lat) +
      p3.x * (p1.lat - p2.lat)) /
    det;

  const b =
    (p1.lng * (p2.x - p3.x) +
      p2.lng * (p3.x - p1.x) +
      p3.lng * (p1.x - p2.x)) /
    det;

  const c =
    (p1.lng * (p2.lat * p3.x - p3.lat * p2.x) +
      p2.lng * (p3.lat * p1.x - p1.lat * p3.x) +
      p3.lng * (p1.lat * p2.x - p2.lat * p1.x)) /
    det;

  const d =
    (p1.y * (p2.lat - p3.lat) +
      p2.y * (p3.lat - p1.lat) +
      p3.y * (p1.lat - p2.lat)) /
    det;

  const e =
    (p1.lng * (p2.y - p3.y) +
      p2.lng * (p3.y - p1.y) +
      p3.lng * (p1.y - p2.y)) /
    det;

  const f =
    (p1.lng * (p2.lat * p3.y - p3.lat * p2.y) +
      p2.lng * (p3.lat * p1.y - p1.lat * p3.y) +
      p3.lng * (p1.lat * p2.y - p2.lat * p1.y)) /
    det;

  return {
    x: a * lng + b * lat + c,
    y: d * lng + e * lat + f,
  };
}