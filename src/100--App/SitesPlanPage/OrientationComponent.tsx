type Props = {
  userPosition: { left: number; top: number; accuracy: number } | null;
  dotSize: number;
};

const OrientationComponent = ({ userPosition, dotSize }: Props) => {
  if (!userPosition) return null;

  const coreSize = Math.max(dotSize, 3);
  const accuracySize = Math.min(54, Math.max(coreSize * 4.8, Math.sqrt(userPosition.accuracy) * 3.1));
  const pulseSize = Math.max(coreSize * 2.8, 12);
  const highlightSize = Math.max(coreSize * 0.26, 1.2);
  const glintSize = Math.max(coreSize * 0.18, 1);

  return (
    <div
      className="absolute pointer-events-none z-20"
      style={{
        left: `${userPosition.left}%`,
        top: `${userPosition.top}%`,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: 'relative',
          width: `${accuracySize}px`,
          height: `${accuracySize}px`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: `${accuracySize}px`,
            height: `${accuracySize}px`,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, rgba(14, 165, 233, 0.1) 58%, rgba(14, 165, 233, 0) 72%)',
            border: '1px solid rgba(14, 165, 233, 0.28)',
            boxShadow: '0 0 18px rgba(14, 165, 233, 0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: `${pulseSize}px`,
            height: `${pulseSize}px`,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            backgroundColor: 'rgba(14, 165, 233, 0.16)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: `${coreSize}px`,
            height: `${coreSize}px`,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #67e8f9 0%, #0ea5e9 58%, #2563eb 100%)',
            boxShadow:
              '0 1px 4px rgba(15, 23, 42, 0.35), 0 0 0 2px rgba(255, 255, 255, 0.95), 0 0 14px rgba(14, 165, 233, 0.58)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '31%',
              top: '27%',
              width: `${highlightSize}px`,
              height: `${highlightSize}px`,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '55%',
              top: '58%',
              width: `${glintSize}px`,
              height: `${glintSize}px`,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrientationComponent;
