import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProgressBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    setProgress(0);

    const frameId = requestAnimationFrame(() => {
      setProgress(100);
    });
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 850);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-[2px] w-full">
      <div
        className={`h-full bg-emerald-500 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: `${progress}%`,
          transition: 'width 0.8s ease-out, opacity 0.2s ease-out',
          boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
        }}
      />
    </div>
  );
}
