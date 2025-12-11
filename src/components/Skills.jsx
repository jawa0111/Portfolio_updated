import React from 'react';

const Skills = () => {
    const skills = [
        { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'] },
        { category: 'Backend', items: ['Node.js', 'Express','Java', 'Python', 'SQL'] },
        { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Eclipse','Jira'] },
        { category: 'Soft Skills', items: ['Leadership','Communication', 'Problem Solving', 'Teamwork','Time Mnagemnet'] }
    ];

    return (
        <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                    {skills.map((skillGroup, index) => (
                        <div key={index}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '20px',
                                borderLeft: '4px solid var(--accent-color)',
                                paddingLeft: '15px'
                            }}>
                                {skillGroup.category}
                            </h3>
                            <ul style={{ listStyle: 'none' }}>
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} style={{
                                        marginBottom: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '1.1rem',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            backgroundColor: 'var(--accent-color)',
                                            borderRadius: '50%',
                                            marginRight: '10px'
                                        }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
