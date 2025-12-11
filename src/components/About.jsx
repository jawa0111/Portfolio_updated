import React from 'react';

const About = () => {
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
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Who I Am</h3>
                        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            I am a passionate creative professional dedicated to crafting unique digital solutions.
                            My journey began with a curiosity for how things work, leading me to master the art of
                            web development and design.
                        </p>
                        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            I specialize in building clean, responsive, and user-friendly websites.
                            I am constantly learning new technologies to stay ahead of the curve and deliver
                            the best possible results for my clients.
                        </p>
                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--accent-color)' }}>My Goals</h4>
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <li style={{ marginBottom: '10px' }}>✓ To create impactful user experiences</li>
                                <li style={{ marginBottom: '10px' }}>✓ To work with innovative teams</li>
                                <li style={{ marginBottom: '10px' }}>✓ To continuously grow my skill set</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
