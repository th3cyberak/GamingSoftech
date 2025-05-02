import React, { useState, useEffect } from 'react';
import { Menu, X, Power, Shield, Users, BarChart, Gamepad2, MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { name: 'Home', icon: <Power size={18} />, href: '#home' },
    { name: 'Services', icon: <Shield size={18} />, href: '#services' },
    { name: 'About', icon: <BarChart size={18} />, href: '#about' },
    { name: 'Portfolio', icon: <Gamepad2 size={18} />, href: '#portfolio' },
    { name: 'Team', icon: <Users size={18} />, href: '#team' },
    { name: 'Contact', icon: <MessageSquare size={18} />, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveItem(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-game-blue/80 backdrop-blur-md border-b border-neon-blue/20 shadow-neon' 
        : 'bg-transparent'
    }`}>
      <div className="scanline"></div>
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Logo with cyberpunk style */}
            <div className="relative mr-2 w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-neon rounded-md animate-pulse-slow opacity-80"></div>
              <div className="absolute inset-[3px] bg-game-blue rounded-sm flex items-center justify-center">
                <span className="font-bold text-lg text-neon-blue">GS</span>
              </div>
            </div>
            
            <span className="text-xl font-bold neon-text">
              <span className="text-white">Gaming</span>
              <span className="text-neon-blue">Sof</span>
              <span className="text-neon-purple">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 bg-game-purple/30 backdrop-blur-sm px-2 py-1 rounded-md border border-neon-blue/10">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`
                  relative px-3 py-2 rounded-md font-medium text-sm transition-all duration-300 flex items-center space-x-2
                  group hover:bg-game-purple/50
                  ${activeItem === item.name.toLowerCase() 
                    ? 'text-neon-blue bg-game-purple/50 shadow-neon' 
                    : 'text-gray-300 hover:text-neon-blue'}
                `}
              >
                <span className={`${activeItem === item.name.toLowerCase() ? 'text-neon-blue' : 'text-gray-400 group-hover:text-neon-blue'}`}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
                {activeItem === item.name.toLowerCase() && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-neon"></span>
                )}
              </a>
            ))}
          </div>

          {/* CTA Button on desktop */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/919886222236"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyberpunk-border px-4 py-2 bg-game-blue text-neon-blue font-medium rounded-md hover:shadow-neon-hover transition-all duration-300"
            >
              Get Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isOpen ? 'bg-game-purple text-neon-blue' : 'text-white hover:bg-game-purple/30'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-game-blue/90 backdrop-blur-md border-b border-neon-blue/20 transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={`
                flex items-center space-x-4 px-4 py-3 mb-2 rounded-md transition-all duration-300
                ${activeItem === item.name.toLowerCase() 
                  ? 'bg-game-purple/50 text-neon-blue shadow-neon' 
                  : 'text-gray-300 hover:bg-game-purple/30 hover:text-neon-blue'}
              `}
              onClick={() => setIsOpen(false)}
            >
              <span className={activeItem === item.name.toLowerCase() ? 'text-neon-blue' : 'text-gray-400'}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
          
          <div className="mt-6 mb-2">
            <a 
              href="https://wa.me/919886222236" 
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center cyberpunk-border py-3 bg-game-blue text-neon-blue font-medium rounded-md hover:shadow-neon-hover transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
