import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Digital Marketing Website',
            description: 'A web application built with React and Node.js. Features include user authentication and real-time data.',
            tools: ['React', 'Node.js', 'MongoDB'],
            link: 'https://dasandco.lovable.app/'
        },
        {
            title: 'Online Food Ordering',
            description: 'A web-based platform that allows users to browse menus, customize meals, and place orders seamlessly. ',
            tools: ['React.js', 'Node.js', 'MongoDB'],
            link: 'https://thehoreo.vercel.app/'
        },
        {
            title: 'Construction Site',
            description: 'A clean and responsive construction website built with modern design principles, crafted to present a professional brand identity.',
            tools: ['React.js', 'Node.js', 'MongoDB'],
            link: 'https://solidcore-lake.vercel.app/'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">My Work</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '30px',
                            border: '1px solid #333',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#333';
                            }}
                        >
                            <div style={{
                                height: '200px',
                                marginBottom: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                backgroundColor: '#000'
                            }}>
                                {project.title === 'Digital Marketing Website' ? (
                                    <img 
                                        src="/DIGI.png" 
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center top'
                                        }}
                                    />
                                ) : project.title === 'Online Food Ordering' ? (
                                    <img 
                                        src="/Horeo.png" 
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center top'
                                        }}
                                    />
                                ) : project.title === 'Construction Site' ? (
                                    <img 
                                        src="/construction.png" 
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center top'
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#666',
                                        fontSize: '1.2rem',
                                        fontStyle: 'italic'
                                    }}>
                                        Preview Coming Soon
                                    </div>
                                )}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.9rem' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                {project.tools.map((tool, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.8rem',
                                        padding: '5px 10px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '20px'
                                    }}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            <a 
                                href={project.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--accent-color)',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    textDecoration: 'none'
                                }}
                            >
                                View Project &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
