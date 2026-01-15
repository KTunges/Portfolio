import { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let frameId;
    let lastTime = 0;
    const throttleTime = 50; // Throttle to 20fps for particle creation

    const handleMouseMove = (e) => {
      const currentTime = Date.now();

      // Update cursor position immediately for smooth tracking
      setMousePos({ x: e.clientX, y: e.clientY });

      // Throttle particle creation to reduce lag
      if (currentTime - lastTime > throttleTime) {
        const particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };

        setParticles(prev => [...prev.slice(-5), particle]); // Reduced from 20 to 5
        lastTime = currentTime;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Cleanup old particles more frequently
    const interval = setInterval(() => {
      setParticles(prev => prev.slice(-3));
    }, 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="App">
      {/* Mouse Cursor Effect - Optimized */}
      <div
        className="cursor-glow"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
        }}
      />

      {/* Particle Trail - Reduced count for performance */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="particle-trail"
          style={{
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            opacity: (index / particles.length) * 0.8,
          }}
        />
      ))}

      {/* Nebula Background Effect */}
      <div className="nebula-effect" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
