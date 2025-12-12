import React from 'react';

const Hero = () => {
    const heroLines = ["Hello, I'm", 'Jude Jawakker'];
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)'
        }}>
            {/* Text Content */}
            <div style={{
                padding: '2rem',
                zIndex: 2,
                maxWidth: '800px',
                textAlign: 'center'
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
                    margin: '0 auto 40px',
                    maxWidth: '600px',
                    textAlign: 'center'
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
            </div> {/* Close content div */}
        </section>
    );
};

export default Hero;
