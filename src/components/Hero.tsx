import React, { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Optional: Initialize any animations or effects here
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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-game overflow-hidden">
      {/* Cyberpunk/Holographic Background */}
      <div className="absolute inset-0 bg-cyberpunk-grid bg-center opacity-30"></div>
      
      {/* Animated Holographic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-32 h-32 rounded-full bg-neon-purple/20 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[10%] w-40 h-40 rounded-full bg-neon-blue/20 blur-xl animate-float"></div>
        <div className="absolute top-[30%] left-[25%] w-24 h-24 rounded-full bg-neon-pink/20 blur-xl animate-pulse-slow"></div>
      </div>
      
      {/* Floating UI Elements - Betting Dashboard Previews */}
      <div className="absolute -right-20 top-1/3 transform -rotate-12 opacity-60 animate-float hidden lg:block">
        <div className="w-64 h-40 bg-game-blue/80 backdrop-blur-sm border border-neon-blue/30 rounded-lg shadow-neon overflow-hidden">
          <div className="h-6 bg-gradient-neon w-full flex items-center px-2">
            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="p-2">
            <div className="h-2 bg-neon-purple/40 rounded mb-2 w-3/4"></div>
            <div className="h-2 bg-neon-blue/40 rounded mb-2"></div>
            <div className="grid grid-cols-2 gap-1 mt-3">
              <div className="h-4 bg-game-purple/70 rounded"></div>
              <div className="h-4 bg-game-purple/70 rounded"></div>
              <div className="h-4 bg-game-purple/70 rounded"></div>
              <div className="h-4 bg-game-purple/70 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -left-10 top-2/3 transform rotate-6 opacity-60 animate-float delay-500 hidden lg:block">
        <div className="w-56 h-32 bg-game-purple/80 backdrop-blur-sm border border-neon-purple/30 rounded-lg shadow-neon overflow-hidden">
          <div className="h-5 bg-gradient-neon w-full"></div>
          <div className="p-2">
            <div className="flex justify-between items-center mb-2">
              <div className="h-2 w-1/3 bg-neon-blue/40 rounded"></div>
              <div className="h-2 w-1/5 bg-neon-pink/40 rounded"></div>
            </div>
            <div className="h-16 bg-game-blue/50 rounded mt-1"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-[4.5rem]">
        <div className="max-w-5xl mx-auto text-center">
          {/* Glitch Title Effect */}
          <div className="mb-8">
            <span className={`text-xl md:text-2xl font-mono text-neon-blue font-bold tracking-wide inline-block transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              #1 GLOBALLY TRUSTED
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 neon-glow transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              Sports Betting Website
            </span>
            <br /> 
            <span className="relative">
              Development Company
              <span className="absolute -inset-1 bg-gradient-neon blur-sm opacity-30"></span>
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl text-blue-100 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            Gaming Softech delivers world-class sports & casino platforms with 
            <span className="font-bold text-neon-blue"> futuristic technology </span>
            & unbeatable engagement.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            {/* <a 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-neon hover:bg-gradient-to-r hover:from-neon-pink hover:to-neon-blue text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-neon-hover flex items-center justify-center"
            >
              Request a Quote
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a> */}
            <a 
              href="#services" 
              className="group px-8 py-4 bg-gradient-neon hover:bg-gradient-to-r hover:from-neon-pink hover:to-neon-blue text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-neon-hover flex items-center justify-center"
            >
              Launch a Betting Platform
              <Play size={18} className="ml-2 group-hover:scale-110 transition-transform" fill="currentColor" />
            </a>
            <a 
              href="#portfolio" 
              className="group px-8 py-4 bg-gradient-neon hover:bg-gradient-to-r hover:from-neon-pink hover:to-neon-blue text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-neon-hover flex items-center justify-center"
            >
              Explore Demo Sites
              <ExternalLink size={18} className="ml-2 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
          
          {/* Stats Counter */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center bg-game-blue/30 backdrop-blur-sm p-4 rounded-lg border border-neon-blue/20 shadow-neon">
              <div className="text-4xl font-bold text-neon-blue mb-2 animate-pulse-slow">10+</div>
              <p className="text-blue-200 uppercase tracking-wide text-sm">Countries Served</p>
              {/* Progress Bar */}
              <div className="w-full bg-game-purple/50 h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-gradient-neon h-full w-full animate-pulse-slow"></div>
              </div>
            </div>
            <div className="text-center bg-game-blue/30 backdrop-blur-sm p-4 rounded-lg border border-neon-purple/20 shadow-neon">
              <div className="text-4xl font-bold text-neon-purple mb-2 animate-pulse-slow">20+</div>
              <p className="text-blue-200 uppercase tracking-wide text-sm">Elite Team Members</p>
              {/* Progress Bar */}
              <div className="w-full bg-game-purple/50 h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-gradient-neon h-full w-4/5 animate-pulse-slow"></div>
              </div>
            </div>
            <div className="text-center bg-game-blue/30 backdrop-blur-sm p-4 rounded-lg border border-neon-pink/20 shadow-neon">
              <div className="text-4xl font-bold text-neon-pink mb-2 animate-pulse-slow">50+</div>
              <p className="text-blue-200 uppercase tracking-wide text-sm">Projects Delivered</p>
              {/* Progress Bar */}
              <div className="w-full bg-game-purple/50 h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-gradient-neon h-full w-full animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cyberpunk Grid Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-game-blue to-transparent"></div>
    </section>
  );
};

export default Hero;
