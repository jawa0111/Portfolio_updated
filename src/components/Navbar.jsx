import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '15px 0' : '25px 0',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(255, 0, 51, 0.2)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '1px' }}>
          PORT<span style={{ color: 'var(--accent-color)' }}>FOLIO</span>
        </a>

        {/* Desktop Menu */}
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none' }} className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu Styles would typically go in CSS, but inline for simplicity here or added to index.css later. 
          For now, I'll rely on the desktop view primarily and add media queries to index.css for the .desktop-menu and .mobile-toggle 
      */}
    </nav>
  );
};

export default Navbar;
