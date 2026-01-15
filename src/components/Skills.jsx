import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython,
    FaGitAlt, FaDocker, FaDatabase, FaFigma
} from 'react-icons/fa';
import {
    SiTypescript, SiMongodb, SiPostgresql, SiFirebase,
    SiTailwindcss, SiRedux, SiExpress, SiVite
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: <FaReact />, color: '#61DAFB' },
                { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
                { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
                { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
                { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
                { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
                { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
                { name: 'Vite', icon: <SiVite />, color: '#646CFF' }
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
                { name: 'Express', icon: <SiExpress />, color: '#000000' },
                { name: 'Python', icon: <FaPython />, color: '#3776AB' },
                { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
                { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
                { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
            ]
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
                { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
                { name: 'Database', icon: <FaDatabase />, color: '#336791' },
                { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title animate-fadeIn">Skills & Technologies</h2>

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
            </div>
        </section>
    );
};

export default Skills;
