import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: 'https://github.com/yourusername/project1',
            demo: 'https://project1-demo.com',
            image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=E-Commerce'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress.',
            technologies: ['React', 'Firebase', 'Material-UI'],
            github: 'https://github.com/yourusername/project2',
            demo: 'https://project2-demo.com',
            image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Task+Manager'
        },
        {
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard that provides real-time weather data and forecasts using external APIs with interactive charts.',
            technologies: ['React', 'Chart.js', 'Weather API'],
            github: 'https://github.com/yourusername/project3',
            demo: 'https://project3-demo.com',
            image: 'https://via.placeholder.com/600x400/f093fb/ffffff?text=Weather+App'
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React and deployed on GitHub Pages. Features smooth animations and dark mode.',
            technologies: ['React', 'Vite', 'CSS3'],
            github: 'https://github.com/yourusername/portfolio',
            demo: 'https://yourusername.github.io',
            image: 'https://via.placeholder.com/600x400/4facfe/ffffff?text=Portfolio'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title animate-fadeIn">My Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass-card animate-fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
