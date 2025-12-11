import React from 'react';

const Resume = () => {
    const resumePDF = '/JudeJawakker.pdf';
    return (
        <section id="resume" className="section">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>Resume</h2>
                    <a 
                        href={resumePDF} 
                        className="btn btn-primary"
                        download="Jude_Jawakker_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </div>

                <div style={{ borderLeft: '2px solid #333', paddingLeft: '40px', position: 'relative' }}>
                    {/* Experience Item 1 */}
                    <div style={{ marginBottom: '40px', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: '-49px',
                            top: '0',
                            width: '16px',
                            height: '16px',
                            backgroundColor: 'var(--accent-color)',
                            borderRadius: '50%',
                            boxShadow: 'var(--accent-glow)'
                        }}></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Intern Software Engineer</h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', marginBottom: '10px' }}>Amerck. | 2025 April - 2025 November</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Experienced in web development with strong skills in QA testing and staging deployments. I also bring solid business analysis expertise and confident client-handling abilities.
                        </p>
                    </div>

                    {/* Experience Item 2 */}
                    <div style={{ marginBottom: '40px', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: '-49px',
                            top: '0',
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#333',
                            borderRadius: '50%'
                        }}></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Freelance Designer</h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', marginBottom: '10px' }}>Self-Employed | 2025 - present</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Worked with diverse clients to create unique brand identities and websites.
                            Managed projects from concept to deployment.
                        </p>
                    </div>

                    {/* Education */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: '-49px',
                            top: '0',
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#333',
                            borderRadius: '50%'
                        }}></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>BSC(Hons) Degree</h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', marginBottom: '10px' }}>SLIIT-Sri Lankan Institute of Information Technology | 2022 - present</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Specialized in Information Technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
