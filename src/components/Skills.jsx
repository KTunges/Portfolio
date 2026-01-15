import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython,
    FaGitAlt, FaDocker, FaDatabase, FaPhp, FaBootstrap
} from 'react-icons/fa';
import {
    SiTypescript, SiMongodb, SiPostgresql, SiMysql, SiDotnet,
    SiTailwindcss, SiFlutter, SiDart, SiArduino, SiCplusplus
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: <FaReact />, color: '#61DAFB' },
                { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
                { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
                { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
                { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
                { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' }
            ]
        },
        {
            title: 'Backend & Database',
            skills: [
                { name: '.NET', icon: <SiDotnet />, color: '#512BD4' },
                { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
                { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
                { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
                { name: 'SQL Server', icon: <FaDatabase />, color: '#CC2927' },
                { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
                { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' }
            ]
        },
        {
            title: 'Mobile & Embedded',
            skills: [
                { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
                { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
                { name: 'Arduino', icon: <SiArduino />, color: '#00979D' },
                { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C' }
            ]
        },
        {
            title: 'Tools & DevOps',
            skills: [
                { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
                { name: 'GitHub', icon: <FaGitAlt />, color: '#181717' },
                { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
                { name: 'RESTful API', icon: <FaDatabase />, color: '#FF6C37' }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title animate-fadeIn">Kỹ Năng & Công Nghệ</h2>

                <div className="skills-container">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={catIndex}
                            className="skills-category animate-fadeIn"
                            style={{ animationDelay: `${catIndex * 0.1}s` }}
                        >
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skill-card glass-card"
                                        style={{ '--skill-color': skill.color }}
                                    >
                                        <div className="skill-icon">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="certifications animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <h3 className="certification-title">Chứng Chỉ</h3>
                    <div className="cert-list">
                        <div className="cert-item glass-card">
                            <div className="cert-icon">📜</div>
                            <div className="cert-info">
                                <h4>MOS (Microsoft Office Specialist)</h4>
                                <p>2025</p>
                            </div>
                        </div>
                        <div className="cert-item glass-card">
                            <div className="cert-icon">🌐</div>
                            <div className="cert-info">
                                <h4>TOEIC (Test of English for International Communication)</h4>
                                <p>2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
