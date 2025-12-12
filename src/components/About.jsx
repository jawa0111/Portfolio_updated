import React, { useState, useEffect } from 'react';


const About = () => {
    const [text, setText] = useState('');
    const fullText = "Hello, I'm Jude Jawakker";
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(50);

    useEffect(() => {
        let timer;
        const handleTyping = () => {
            const currentIndex = isDeleting ? text.length - 1 : text.length + 1;
            const newText = fullText.substring(0, currentIndex);
            
            setText(newText);
            
            if (!isDeleting && newText === fullText) {
                // Pause at the end of typing
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && newText === '') {
                setIsDeleting(false);
                setLoopNum(prevLoopNum => prevLoopNum + 1);
            }
            
            const speed = isDeleting ? 50 : 100;
            setTypingSpeed(speed);
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                    <div style={{ 
                        flex: '1 1 400px', 
                        height: '450px',
                        overflow: 'hidden', 
                        borderRadius: '10px', 
                        boxShadow: '10px 10px 0 var(--accent-color)', 
                        border: '2px solid var(--accent-color)' 
                    }}>
                        <img 
                            src="/jude.jpeg" 
                            alt="Jude Jawakker" 
                            style={{
                                width: '100%',
                                height: '100%',
                                objectPosition: 'center 20%',
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        />
                    </div>
                    <div style={{ flex: '1 1 400px' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', minHeight: '2.5rem' }}>
                            <span role="img" aria-label="hi" style={{ color: 'var(--accent-color)' }}>👋</span>
                            <span style={{ color: 'var(--accent-color)' }}>
                                {text}
                                <span style={{ opacity: 0.7 }}>|</span>
                            </span>
                        </h3>
                        <blockquote style={{
                            fontSize: '1.2rem',
                            fontStyle: 'italic',
                            color: 'var(--text-secondary)',
                            borderLeft: '3px solid var(--accent-color)',
                            paddingLeft: '15px',
                            margin: '0 0 20px 0',
                            lineHeight: '1.6',
                            opacity: 0.9
                        }}>
                            "Where imagination meets Dev + AI to create immersive digital worlds."
                        </blockquote>
                        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            A passionate creative professional dedicated to crafting unique digital solutions.
                            My journey began with a curiosity for how things work, leading me to master the art of
                            web development and design.
                        </p>
                        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            I specialize in building clean, responsive, and user-friendly websites.
                            I am constantly learning new technologies to stay ahead of the curve and deliver
                            the best possible results for my clients.
                        </p>
                      
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
