import { FaCode, FaRocket, FaLightbulb, FaMobileAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <FaCode />,
            title: 'Web Development',
            description: 'Phát triển ứng dụng web với React, PHP, .NET và RESTful API.'
        },
        {
            icon: <FaMobileAlt />,
            title: 'Mobile Development',
            description: 'Xây dựng ứng dụng mobile đa nền tảng với Flutter.'
        },
        {
            icon: <FaRocket />,
            title: 'Cloud & DevOps',
            description: 'Triển khai ứng dụng trên môi trường cloud và quản lý source code với Git.'
        },
        {
            icon: <FaLightbulb />,
            title: 'Problem Solving',
            description: 'Tư duy logic, phân tích yêu cầu và giải quyết vấn đề hiệu quả.'
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title animate-fadeIn">Về Tôi</h2>

                <div className="about-content">
                    <div className="about-main">
                        <div className="about-image-container animate-slideInLeft">
                            <div className="image-wrapper">
                                <img src="/profile.jpg" alt="Nguyễn Kim Tùng" className="profile-image" />
                                <div className="image-border"></div>
                            </div>
                        </div>

                        <div className="about-text animate-slideInRight">
                            <p className="about-paragraph">
                                Xin chào! Tôi là <strong>Nguyễn Kim Tùng</strong>, một lập trình viên đam mê với nền tảng về
                                React, Flutter và phát triển ứng dụng mobile. Hiện tại đang là sinh viên năm 4 ngành
                                <strong> Công nghệ Thông tin</strong> tại <strong>Trường Đại học Nguyễn Tất Thành</strong>.
                            </p>
                            <p className="about-paragraph">
                                Tôi có kinh nghiệm phát triển ứng dụng web sử dụng <strong>React, PHP, .NET</strong> và
                                ứng dụng mobile với <strong>Flutter</strong>. Đã tham gia nhiều dự án học tập thực tế bao gồm
                                hệ thống <strong>Data Warehouse cho Trường ĐH Sư Phạm TP.HCM</strong>, xe điều khiển thông minh tự hành
                                với lập trình nhúng, và các ứng dụng web/mobile đa dạng.
                            </p>
                            <p className="about-paragraph">
                                Mục tiêu của tôi là trở thành <strong>Junior Frontend / Flutter Developer</strong> trong 1-2 năm tới,
                                tham gia các dự án thực tế để nâng cao kỹ năng chuyên môn, khả năng giải quyết vấn đề
                                và phát triển sự nghiệp lâu dài trong lĩnh vực Software Engineering.
                            </p>
                        </div>
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
