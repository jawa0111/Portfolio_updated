import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineScene = ({ scene, className = '' }) => {
  const canvasRef = useRef(null);
  const spline = useRef(null);

  useEffect(() => {
    if (canvasRef.current && !spline.current) {
      spline.current = new Application(canvasRef.current);
      if (scene) {
        spline.current.load(scene);
      }
    }

    return () => {
      if (spline.current) {
        spline.current = null;
      }
    };
  }, [scene]);

  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

export { SplineScene };
export default SplineScene;
