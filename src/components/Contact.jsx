import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaDownload } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'kimtung5576@gmail.com',
            link: 'mailto:kimtung5576@gmail.com',
            color: '#EA4335'
        },
        {
            icon: <FaPhone />,
            label: 'Điện thoại',
            value: '0353835576',
            link: 'tel:0353835576',
            color: '#34A853'
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Địa chỉ',
            value: '588/50 Tỉnh lộ 10, Bình Tân, TP.HCM',
            link: '#',
            color: '#FBBC05'
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/KTunges',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/kim-tung-444450377/',
            color: '#0077B5'
        },
        {
            name: 'Email',
            icon: <FaEnvelope />,
            url: 'mailto:kimtung5576@gmail.com',
            color: '#EA4335'
        }
    ];

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Kim-Tung-CV.pdf';
        link.download = 'Kim-Tung-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title animate-fadeIn">Liên Hệ</h2>

                <div className="contact-content animate-fadeIn">
                    <p className="contact-description">
                        Tôi đang tìm kiếm cơ hội làm việc và học hỏi mới. Nếu bạn có dự án thú vị
                        hoặc muốn trao đổi về công việc, đừng ngần ngại liên hệ với tôi!
                    </p>

                    {/* Contact Info Cards */}
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                className="contact-info-card glass-card"
                                style={{ '--contact-color': info.color }}
                            >
                                <div className="contact-info-icon">{info.icon}</div>
                                <div className="contact-info-text">
                                    <span className="contact-info-label">{info.label}</span>
                                    <span className="contact-info-value">{info.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="contact-buttons">
                        <a href="mailto:kimtung5576@gmail.com" className="btn btn-primary">
                            <FaEnvelope /> Gửi Email
                        </a>
                        <button onClick={handleDownloadCV} className="btn btn-outline">
                            <FaDownload /> Tải CV
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="contact-social">
                        <p className="social-title">Kết nối với tôi:</p>
                        <div className="social-links-grid">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-link glass-card"
                                    style={{ '--social-color': link.color }}
                                    title={link.name}
                                >
                                    <div className="social-icon">{link.icon}</div>
                                    <span className="social-name">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <p className="footer-text">
                        Được xây dựng với <FaHeart className="heart-icon" /> bằng React & Vite
                    </p>
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Nguyễn Kim Tùng. All rights reserved.
                    </p>
                    <p className="footer-info">
                        Sinh viên năm 4 - Công nghệ Thông tin - Trường Đại học Nguyễn Tất Thành
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
