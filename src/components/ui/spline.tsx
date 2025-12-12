'use client'

import { Suspense, lazy, useEffect, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  fallbackImage?: string;
}

export function SplineScene({ 
  scene, 
  className = '', 
  fallbackImage = '/images/robot-fallback.png' 
}: SplineSceneProps) {
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') as WebGLRenderingContext | null || 
                 canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
      
      if (!gl) {
        console.warn('WebGL is not available in this browser');
        setWebGLAvailable(false);
        setIsLoading(false);
        return;
      }

      // Additional check for WebGL rendering
      if ('getExtension' in gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (!debugInfo) {
          console.warn('WebGL debug info not available, limited support');
        }
      }
    } catch (error) {
      console.error('Error checking WebGL support:', error);
      setWebGLAvailable(false);
      setIsLoading(false);
    }
  }, []);

  // Show fallback if WebGL is not available
  if (!webGLAvailable) {
    return (
      <div className={`relative w-full h-full ${className}`} style={{ backgroundColor: '#000' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-full max-w-md h-64 flex items-center justify-center">
              <img
                src={fallbackImage}
                alt="3D Model Preview"
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // If the fallback image fails to load, show a colored placeholder
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPjNEL01vYmlsZSBWaWV3PC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Interactive 3D preview not available
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <Suspense fallback={null}>
        <Spline
          scene={scene}
          className="w-full h-full"
          onLoad={() => {
            console.log('Spline scene loaded successfully');
            setIsLoading(false);
          }}
          onError={(error) => {
            console.error('Spline error:', error);
            setWebGLAvailable(false);
            setIsLoading(false);
          }}
        />
      </Suspense>
    </div>
  );
}
