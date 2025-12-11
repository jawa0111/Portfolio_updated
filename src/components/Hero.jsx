import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Hello, I'm\nJude Jawakker";
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prevText => prevText + fullText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 60); // Slower typing speed (higher value = slower)
            
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);
    return (
        <section id="home" className="section" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'radial-gradient(circle at center, #1a0005 0%, #000000 70%)',
            '--blink-animation': currentIndex < fullText.length ? 'blink 1s step-end infinite' : 'none'
        }}>
            <style jsx global>{`
                @keyframes blink {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
            <div className="container">
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: '900',
                    lineHeight: '1.1',
                    marginBottom: '20px',
                    textTransform: 'uppercase'
                }}>
                    {text.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <br />}
                            {line.includes('Jude Jawakker') ? (
                                <span style={{
                                    color: 'transparent',
                                    WebkitTextStroke: '2px var(--accent-color)',
                                    textShadow: '0 0 20px rgba(255, 0, 51, 0.5)',
                                    whiteSpace: 'pre',
                                    borderRight: currentIndex < fullText.length ? '2px solid var(--accent-color)' : 'none'
                                }}>
                                    {line}
                                </span>
                            ) : (
                                <span style={{ whiteSpace: 'pre' }}>{line}</span>
                            )}
                        </React.Fragment>
                    ))}
                    {currentIndex < fullText.length && (
                        <span style={{
                            display: 'inline-block',
                            width: '0.5em',
                            height: '1.2em',
                            marginLeft: '2px',
                            backgroundColor: 'var(--accent-color)',
                            animation: 'blink 1s step-end infinite'
                        }} />
                    )}
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Creative Developer & Designer building immersive digital experiences.
                </p>
                <a href="#projects" className="btn btn-primary">
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;
