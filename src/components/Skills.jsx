import React, { useEffect, useRef } from 'react';

// Emoji mapping for skills
const skillEmojis = {
    'React': '⚛️',
    'Node.js': '🟢',
    'HTML5': '📄',
    'CSS3': '🎨',
    'JavaScript': '📜',
    'Git': '🔀',
    'Figma': '✏️',
    'Java': '☕',
    'Python': '🐍',
    'SQL': '🗄️',
    'Next.js': '⏭️',
    'Express': '🚀',
    'VS Code': '💻',
    'Jira': '📊',
    'Eclipse': '🌑'
};

const Skills = () => {
    const containerRef = useRef(null);
    const icons = Object.entries(skillEmojis).map(([name, emoji]) => ({
        name,
        emoji
    }));

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create floating icons
        const createFloatingIcon = () => {
            const icon = document.createElement('div');
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            
            const emojiSize = Math.random() * 30 + 30; // Increased base size from 20 to 30
            icon.innerHTML = `
                <div style="
                    font-size: ${emojiSize}px; 
                    color: rgba(var(--accent-rgb), 0.2);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                ">
                    <span style="font-size: 1.5em">${randomIcon.emoji}</span>
                    <span style="font-size: 0.5em">${randomIcon.name}</span>
                </div>
            `;
            
            Object.assign(icon.style, {
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: '0',
                transition: `all ${Math.random() * 10 + 10}s linear`,
                pointerEvents: 'none',
                zIndex: '0',
                transform: 'translate(-50%, -50%)',
                whiteSpace: 'nowrap'
            });

            container.appendChild(icon);

            // Animate
            setTimeout(() => {
                icon.style.opacity = '0.3';
                icon.style.transform = `translate(${Math.random() * 100}%, ${Math.random() * 100}%) rotate(${Math.random() * 360}deg)`;
            }, 10);

            // Remove after animation
            setTimeout(() => {
                if (container.contains(icon)) {
                    container.removeChild(icon);
                }
            }, 15000);
        };

        // Create initial icons
        for (let i = 0; i < 15; i++) {
            setTimeout(createFloatingIcon, i * 1000);
        }

        // Continue creating new icons
        const interval = setInterval(createFloatingIcon, 1000);

        return () => clearInterval(interval);
    }, []);
    const skills = [
        { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'] },
        { category: 'Backend', items: ['Node.js', 'Express','Java', 'Python', 'SQL'] },
        { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Eclipse','Jira'] },
        { category: 'Soft Skills', items: ['Leadership','Communication', 'Problem Solving', 'Teamwork','Time Mnagemnet'] }
    ];

    return (
        <section id="skills" className="section" style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div ref={containerRef} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
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
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0) rotate(0deg); }
                }
            `}</style>
        </section>
    );
};

export default Skills;
