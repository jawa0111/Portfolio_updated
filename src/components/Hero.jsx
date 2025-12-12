import React from 'react';
import { SplineScene } from './ui/spline';

const Hero = () => {
    const heroLines = ["Hello, I'm", 'Jude Jawakker'];
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            '--blink-animation': 'none',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            background: 'linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)'
        }}>
            {/* Left Side - Text Content */}
            <div style={{
                flex: '1',
                padding: '2rem',
                zIndex: 2,
                maxWidth: '50%',
                paddingLeft: '10%'
            }}>
            <style jsx global>{`
                @keyframes blink {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
            <div className="container">
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                    fontWeight: '900',
                    lineHeight: '1.1',
                    marginBottom: '20px',
                    textTransform: 'uppercase'
                }}>
                    {heroLines.map((line, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <br />}
                            <span style={{
                                color: 'transparent',
                                WebkitTextStroke: '2px var(--accent-color)',
                                textShadow: '0 0 20px rgba(255, 0, 51, 0.5)',
                                whiteSpace: 'pre'
                            }}>
                                {line}
                            </span>
                        </React.Fragment>
                    ))}
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    marginLeft: '0',
                    marginRight: 'auto',
                    textAlign: 'left'
                }}>
                    "Where imagination meets Dev + AI to create immersive digital worlds."
                </p>
                <a href="#projects" className="btn btn-primary" style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    backgroundColor: 'var(--accent-color)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    marginTop: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    alignSelf: 'flex-start'
                }}>
                    View My Work
                </a>
            </div>
            </div> {/* Close left content div */}
            
            {/* Right Side - 3D Robot */}
            <div style={{
                flex: '1',
                height: '100vh',
                position: 'relative',
                zIndex: 1
            }}>
                <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>
        </section>
    );
};

export default Hero;
