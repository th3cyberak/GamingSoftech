import React, { useState } from 'react';
import { Globe, Server, Gamepad, Cable, Headphones, TrendingUp, ChevronRight, Zap } from 'lucide-react';

interface ServiceNodeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  powerLevel: number;
  launchTime?: string;
  color: string;
  index: number;
}

const ServiceNode: React.FC<ServiceNodeProps> = ({ 
  icon, 
  title, 
  description, 
  powerLevel, 
  launchTime, 
  color, 
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate delay for staggered entrance animation
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className={`relative group cursor-pointer transform transition-all duration-500 ${
        index % 3 === 0 ? 'lg:translate-y-8' : index % 3 === 1 ? 'lg:translate-y-0' : 'lg:translate-y-16'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay }}
    >
      {/* Connection Lines */}
      <div className="absolute top-1/2 -right-12 w-12 h-0.5 bg-gradient-to-r from-transparent to-neon-blue/50 hidden lg:block"></div>
      <div className="absolute top-1/2 -left-12 w-12 h-0.5 bg-gradient-to-l from-transparent to-neon-blue/50 hidden lg:block"></div>
      
      {/* Node */}
      <div className={`
        neo-card p-1 transition-all duration-300 ${isHovered ? 'shadow-neon-hover scale-105' : ''}
        border-${color} bg-game-blue/60
      `}>
        {/* Glowing Hexagon Frame */}
        <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-md"></div>
        
        {/* Power Level Indicator */}
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-game-blue/90 border border-neon-blue/50 flex items-center justify-center shadow-neon z-10">
          <span className="text-xs font-bold text-neon-blue">
            {isHovered ? (
              <Zap size={14} className="animate-pulse" />
            ) : (
              `L${powerLevel}`
            )}
          </span>
        </div>
        
        <div className="p-5">
          {/* Icon with glow effect */}
          <div className={`
            text-${color} mb-4 w-12 h-12 rounded-full flex items-center justify-center
            bg-game-purple/20 backdrop-blur-sm border border-${color}/30
            ${isHovered ? `animate-pulse shadow-[0_0_15px_rgba(var(--${color}-rgb),0.5)]` : ''}
          `}>
            {icon}
          </div>
          
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            {launchTime && (
              <div className="ml-2 text-xs px-2 py-1 rounded-md bg-neon-blue/20 text-neon-blue font-mono">
                {launchTime}
              </div>
            )}
          </div>
          
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          
          {/* Power Bar */}
          <div className="w-full h-1 bg-game-purple/30 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-neon transition-all duration-1000 ease-out ${isHovered ? 'w-full' : `w-${powerLevel * 10}%`}`}
            ></div>
          </div>
          
          {/* Button that appears on hover */}
          <div className={`
            mt-4 flex justify-end items-center text-${color} text-sm font-medium
            transform transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            <span>Learn More</span>
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Custom Sports Betting Website",
      description: "Build fully customized, branded betting platforms with advanced features and seamless UX.",
      powerLevel: 9,
      color: "neon-blue"
    },
    {
      icon: <Server size={28} />,
      title: "White Label Betting Site",
      description: "Launch your platform in record time with our ready-to-go white label solution.",
      powerLevel: 8,
      launchTime: "⚡Launch in 3 Days",
      color: "neon-purple"
    },
    {
      icon: <Gamepad size={28} />,
      title: "Online Casino Development",
      description: "Create immersive casino experiences with live games, slots, and poker interfaces.",
      powerLevel: 9,
      color: "neon-pink"
    },
    {
      icon: <Cable size={28} />,
      title: "Sports API Integration",
      description: "Connect to real-time sports data, odds, and stats with our reliable API solutions.",
      powerLevel: 7,
      color: "neon-blue"
    },
    {
      icon: <Headphones size={28} />,
      title: "24/7 Technical Support",
      description: "Round-the-clock support and maintenance ensuring maximum platform uptime.",
      powerLevel: 10,
      color: "neon-purple"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Digital Marketing",
      description: "Drive traffic and boost conversions with our influencer and paid ads strategies.",
      powerLevel: 8,
      color: "neon-pink"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden backdrop-blur-sm">
      {/* Section Background */}
      <div className="absolute inset-0 bg-game-blue/30 backdrop-blur-sm"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-cyberpunk-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-block px-4 py-1 rounded-full bg-game-purple/30 text-neon-blue text-sm font-mono mb-4 border border-neon-blue/20">
            POWER TREE
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-glow">
            <span className="text-transparent bg-clip-text bg-gradient-neon">Our Services</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Select a power node to unlock premium betting and gaming solutions
            {/* <span className="block mt-2 text-sm text-blue-300 font-mono">[ CLASS: AAA GAMING SOLUTIONS ]</span> */}
          </p>
        </div>
        
        {/* Ability Tree / Skill Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Central Node Connection */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-neon-blue/20 hidden lg:block"></div>
          
          {services.map((service, index) => (
            <ServiceNode 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              powerLevel={service.powerLevel}
              launchTime={service.launchTime}
              color={service.color}
              index={index}
            />
          ))}
        </div>
        
        {/* Power Level Legend */}
        {/* <div className="mt-16 flex justify-center">
          <div className="bg-game-blue/40 backdrop-blur-sm p-4 rounded-md border border-neon-blue/20">
            <div className="text-xs text-blue-300 mb-2 font-mono">POWER LEVEL LEGEND</div>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-neon-blue mr-2"></div>
                <span className="text-sm text-blue-100">Lvl 7-8: Advanced</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-neon-purple mr-2"></div>
                <span className="text-sm text-blue-100">Lvl 9: Elite</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-neon-pink mr-2"></div>
                <span className="text-sm text-blue-100">Lvl 10: Legendary</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
