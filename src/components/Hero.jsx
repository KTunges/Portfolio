import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
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

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content animate-fadeIn">
                    <p className="hero-greeting">Hi, my name is</p>
                    <h1 className="hero-name">
                        <span className="gradient-text">Your Name</span>
                    </h1>
                    <h2 className="hero-title">I build things for the web.</h2>
                    <p className="hero-description">
                        I'm a full-stack developer specializing in building exceptional digital experiences.
                        Currently, I'm focused on building accessible, human-centered products.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Get In Touch
                        </button>
                        <button className="btn btn-outline" onClick={scrollToAbout}>
                            Learn More
                        </button>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:your.email@example.com" className="social-link">
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
