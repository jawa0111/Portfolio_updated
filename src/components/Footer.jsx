import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px 0', textAlign: 'center', borderTop: '1px solid #222' }}>
            <div className="container">
                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '20px' }}>
                    LET'S <span style={{ color: 'var(--accent-color)' }}>CONNECT</span>
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                    {/* Social Placeholders */}
                    <a href="https://www.linkedin.com/in/jude-jawakker/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>LinkedIn</a>
                    <a href="https://github.com/jawa0111" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>GitHub</a>
                    <a href="jawakkerjude@gmail.com" style={{ fontSize: '1.2rem' }}>Email</a>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Jude Jawakker. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
