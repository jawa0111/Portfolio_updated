'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
    const [webGLAvailable, setWebGLAvailable] = useState(true);

    useEffect(() => {
        // Check WebGL support
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            setWebGLAvailable(false);
            // Redirect to about section after a short delay
            const timer = setTimeout(() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!webGLAvailable) {
        // Return an empty fragment since we're redirecting
        return <></>;
    }

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
                    <Suspense fallback={<div className="h-full w-full bg-gray-900/50 rounded-2xl flex items-center justify-center">
                        <div className="text-gray-400">Loading animation...</div>
                    </div>}>
                        <div className="w-full h-full flex items-center justify-center">
                            <Spline
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="h-full w-full"
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