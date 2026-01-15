import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Hệ Thống Data Warehouse - Trường ĐH Sư Phạm',
            description: 'Hệ thống Data Warehouse phục vụ quản lý và phân tích dữ liệu cho trường Đại học Sư Phạm. Xây dựng backend API với .NET, frontend dashboard với React, và database với SQL Server.',
            technologies: ['React', '.NET', 'SQL Server', 'RESTful API', 'Data Analysis'],
            github: 'https://github.com/KTunges/datawarehouse',
            demo: '#',
            image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Data+Warehouse'
        },
        {
            title: 'Xe Điều Khiển Thông Minh Tự Hành',
            description: 'Dự án lập trình nhúng xe tự hành có khả năng tránh vật cản tự động. Sử dụng Arduino/ESP32, cảm biến siêu âm và thuật toán điều khiển để xe có thể di chuyển và tránh chướng ngại vật.',
            technologies: ['Arduino', 'C/C++', 'IoT', 'Embedded Systems', 'Sensors'],
            github: 'https://github.com/KTunges/smart-car',
            demo: '#',
            image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Smart+Car'
        },
        {
            title: 'Ứng Dụng Quản Lý với React & .NET',
            description: 'Ứng dụng web quản lý dữ liệu với đầy đủ chức năng CRUD, authentication, và authorization. Frontend React kết nối với .NET Core API, sử dụng Entity Framework và SQL Server.',
            technologies: ['React', '.NET Core', 'Entity Framework', 'SQL Server', 'JWT'],
            github: 'https://github.com/KTunges/react-dotnet-app',
            demo: '#',
            image: 'https://via.placeholder.com/600x400/f093fb/ffffff?text=React+.NET+App'
        },
        {
            title: 'Ứng Dụng Flutter Multi-Platform',
            description: 'Ứng dụng mobile đa nền tảng (iOS & Android) với Flutter. Bao gồm các chức năng đăng nhập, danh sách dữ liệu, chi tiết, CRUD operations, và kết nối API backend.',
            technologies: ['Flutter', 'Dart', 'RESTful API', 'State Management', 'UI/UX'],
            github: 'https://github.com/KTunges/flutter-app',
            demo: '#',
            image: 'https://via.placeholder.com/600x400/4facfe/ffffff?text=Flutter+App'
        },
        {
            title: 'Website PHP với MVC Architecture',
            description: 'Website quản lý được xây dựng với PHP thuần, áp dụng mô hình MVC. Bao gồm authentication, quản lý users, CRUD operations và dashboard.',
            technologies: ['PHP', 'MySQL', 'MVC', 'Bootstrap', 'JavaScript'],
            github: 'https://github.com/KTunges/php-mvc',
            demo: '#',
            image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=PHP+MVC'
        },
        {
            title: 'Portfolio Website',
            description: 'Portfolio website cá nhân được xây dựng với React và Vite. Features bao gồm animations mượt mà, galaxy background effects, responsive design và dark theme.',
            technologies: ['React', 'Vite', 'CSS3', 'Animations', 'GitHub Pages'],
            github: 'https://github.com/KTunges/portfolio',
            demo: 'https://ktunges.github.io',
            image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Portfolio'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title animate-fadeIn">Dự Án Của Tôi</h2>

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
                                        {project.github !== '#' && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                                                <FaGithub />
                                            </a>
                                        )}
                                        {project.demo !== '#' && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
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
