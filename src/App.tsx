import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add cyberpunk cursor trail effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);
    
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="font-sans bg-gradient-game text-white min-h-screen overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-game-purple/30 via-game-blue/20 to-transparent pointer-events-none"></div>
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-cyberpunk-grid bg-repeat opacity-10 pointer-events-none"></div>
      
      {/* Animated glow elements */}
      <div className="fixed top-1/4 left-1/3 w-64 h-64 rounded-full bg-neon-blue/5 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl animate-pulse-slow pointer-events-none"></div>
      
      {/* Scanlines effect */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-5 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>
      
      {/* Main content */}
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;