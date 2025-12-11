import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                padding: '15px',
                                backgroundColor: '#000',
                                border: '1px solid #333',
                                color: '#fff',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-main)'
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={{
                                padding: '15px',
                                backgroundColor: '#000',
                                border: '1px solid #333',
                                color: '#fff',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-main)'
                            }}
                        />
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            style={{
                                padding: '15px',
                                backgroundColor: '#000',
                                border: '1px solid #333',
                                color: '#fff',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-main)',
                                resize: 'vertical'
                            }}
                        ></textarea>
                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Send Message
                        </button>
                    </form>

                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>Or email me directly at:</p>
                        <a href="jawakkerjude@gmail.com" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                            jawakkerjude@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
