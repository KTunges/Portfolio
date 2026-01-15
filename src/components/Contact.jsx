import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaHeart } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/yourusername',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: 'https://linkedin.com/in/yourusername',
            color: '#0077B5'
        },
        {
            name: 'Email',
            icon: <FaEnvelope />,
            url: 'mailto:your.email@example.com',
            color: '#EA4335'
        },
        {
            name: 'Twitter',
            icon: <FaTwitter />,
            url: 'https://twitter.com/yourusername',
            color: '#1DA1F2'
        }
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title animate-fadeIn">Get In Touch</h2>

                <div className="contact-content animate-fadeIn">
                    <p className="contact-description">
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-email">
                        <a href="mailto:your.email@example.com" className="btn btn-primary">
                            <FaEnvelope /> Say Hello
                        </a>
                    </div>

                    <div className="contact-social">
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

                <footer className="footer">
                    <p className="footer-text">
                        Built with <FaHeart className="heart-icon" /> using React & Vite
                    </p>
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
