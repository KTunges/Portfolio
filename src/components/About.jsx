import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <FaCode />,
            title: 'Clean Code',
            description: 'I write maintainable and scalable code following best practices.'
        },
        {
            icon: <FaRocket />,
            title: 'Fast Performance',
            description: 'Optimized applications for the best user experience.'
        },
        {
            icon: <FaLightbulb />,
            title: 'Creative Solutions',
            description: 'Innovative approaches to solve complex problems.'
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title animate-fadeIn">About Me</h2>

                <div className="about-content">
                    <div className="about-text animate-slideInLeft">
                        <p className="about-paragraph">
                            Hello! I'm a passionate full-stack developer who loves building amazing web applications.
                            My journey in web development started several years ago, and I've been constantly learning
                            and improving my skills ever since.
                        </p>
                        <p className="about-paragraph">
                            I specialize in creating responsive, user-friendly applications using modern technologies.
                            I enjoy taking complex problems and turning them into simple, beautiful, and intuitive solutions.
                        </p>
                        <p className="about-paragraph">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source
                            projects, or sharing my knowledge with the developer community.
                        </p>
                    </div>

                    <div className="about-highlights">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="highlight-card glass-card animate-fadeIn"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="highlight-icon">{item.icon}</div>
                                <h3 className="highlight-title">{item.title}</h3>
                                <p className="highlight-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
