'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
    const [webGLAvailable, setWebGLAvailable] = useState(true);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
            console.log('WebGL not available, redirecting to about section');
            setWebGLAvailable(false);
            // Smoothly scroll to about section
            setTimeout(() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    const handleSplineError = (error) => {
        console.error('Spline error:', error);
        // On error, scroll to about section
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        setWebGLAvailable(false);
    };

    // If WebGL is not available, return null (no rendering)
    if (!webGLAvailable) {
        return null;
    }

    // If WebGL is available, show the 3D model immediately
    return (
        <section 
            id="home" 
            className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-black via-black/80 to-black/60"
        >
            <div className="h-full w-full flex items-center justify-center">
                <motion.div 
                    className="relative w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <Suspense fallback={null}>
                        <div className="w-full h-full flex items-center justify-center">
                            <Spline
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="h-full w-full"
                                onError={handleSplineError}
                            />
                        </div>
                    </Suspense>
                </motion.div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>
        </section>
    );
};

export default Hero;