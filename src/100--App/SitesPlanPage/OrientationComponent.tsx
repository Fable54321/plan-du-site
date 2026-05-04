import { useEffect, useState } from "react";

type Props = {
    userPosition: { left: number; top: number, accuracy: number } | null;
    dotSize: number;
}

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

  // 👉 Keep YOUR dot size logic exactly as you had it
 // <-- replace with your existing logic if dynamic

  return (
    <>
      {userPosition && (
        <div
          className="absolute"
          style={{
            left: `${userPosition.left}%`,
            top: `${userPosition.top}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* 🔵 Your dot (UNCHANGED STYLE) */}
          <div
            className="rounded-full bg-blue-500 border-2 border-white"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
            }}
          />

          {/* 🔺 Direction arrow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -120%) rotate(${heading}deg)`,
              transformOrigin: "50% 100%",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "16px solid #3b82f6", // same blue family
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OrientationComponent;