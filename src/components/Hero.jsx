import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDownloadCV = () => {
        // Create a link and trigger download
        const link = document.createElement('a');
        link.href = `${import.meta.env.BASE_URL}Kim-Tung-CV.pdf`;
        link.download = 'Kim-Tung-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className="hero">
            {/* Galaxy Background with Stars */}
            <div className="galaxy-background">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="star"
                        style={{
                            '--x': `${Math.random() * 100}%`,
                            '--y': `${Math.random() * 100}%`,
                            '--duration': `${Math.random() * 3 + 2}s`,
                            '--delay': `${Math.random() * 2}s`,
                            '--size': `${Math.random() * 2 + 1}px`
                        }}
                    />
                ))}
                <div className="galaxy-gradient"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content animate-fadeIn">
                    <p className="hero-greeting">Xin chào, tôi là</p>
                    <h1 className="hero-name">
                        <span className="gradient-text">Nguyễn Kim Tùng</span>
                    </h1>
                    <h2 className="hero-title">Junior Frontend & Flutter Developer</h2>
                    <p className="hero-description">
                        Tôi là một lập trình viên đam mê với kinh nghiệm phát triển ứng dụng web (React, PHP, .NET)
                        và mobile (Flutter). Mong muốn tham gia các dự án thực tế để nâng cao kỹ năng
                        và phát triển sự nghiệp trong lĩnh vực Software Engineering.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            <FaEnvelope /> Liên Hệ
                        </button>
                        <button className="btn btn-outline" onClick={handleDownloadCV}>
                            <FaDownload /> Tải CV
                        </button>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/KTunges" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/kim-tung-444450377/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:kimtung5576@gmail.com" className="social-link" title="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="scroll-indicator" onClick={scrollToAbout}>
                    <FaArrowDown className="animate-float" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
