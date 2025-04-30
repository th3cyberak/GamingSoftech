import React, { useState } from 'react';
import { Brain, Target, ShieldCheck, Headphones, Zap, GaugeCircle } from 'lucide-react';

interface Stat {
  name: string;
  value: number;
  maxValue: number;
  icon: React.ReactNode;
  label: string;
  color: string;
  description: string;
}

const About: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  const stats: Stat[] = [
    {
      name: "experience",
      value: 90,
      maxValue: 100,
      icon: <Brain className="w-5 h-5" />,
      label: "Industry Experience",
      color: "neon-blue",
      description: "Specialized expertise in sports betting and gaming solutions, with extensive knowledge of global markets and regulatory requirements."
    },
    {
      name: "process",
      value: 95,
      maxValue: 100,
      icon: <Target className="w-5 h-5" />,
      label: "Transparent Process",
      color: "neon-purple",
      description: "Clear development roadmap with continuous client involvement throughout the project lifecycle, ensuring your vision is realized."
    },
    {
      name: "security",
      value: 100,
      maxValue: 100,
      icon: <ShieldCheck className="w-5 h-5" />,
      label: "Advanced Security",
      color: "neon-pink",
      description: "State-of-the-art encryption, secure payment processing, and continuous vulnerability testing to ensure platform integrity."
    },
    {
      name: "support",
      value: 99,
      maxValue: 100,
      icon: <Headphones className="w-5 h-5" />,
      label: "24/7 Support",
      color: "neon-blue",
      description: "Round-the-clock technical assistance, proactive monitoring, and dedicated support teams available via multiple channels."
    },
    {
      name: "speed",
      value: 85,
      maxValue: 100,
      icon: <Zap className="w-5 h-5" />,
      label: "Deployment Speed",
      color: "neon-purple",
      description: "Rapid development cycles with white label solutions available for launch within 3 days and custom solutions optimized for quick deployment."
    },
    {
      name: "customization",
      value: 97,
      maxValue: 100,
      icon: <GaugeCircle className="w-5 h-5" />,
      label: "Customization Level",
      color: "neon-pink",
      description: "Highly adaptable solutions tailored to your specific business goals, brand identity, and target audience preferences."
    }
  ];

  const getRankLabel = (value: number): string => {
    if (value >= 95) return "LEGENDARY";
    if (value >= 85) return "EPIC";
    if (value >= 75) return "RARE";
    return "COMMON";
  };

  const handleStatHover = (statName: string) => {
    setHoveredStat(statName);
  };

  const handleStatLeave = () => {
    setHoveredStat(null);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-game"></div>
      <div className="absolute inset-0 bg-mission-grid opacity-10"></div>
      
      {/* Holographic Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-neon-purple/5 blur-3xl animate-pulse-slow pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-game-purple/30 text-neon-blue text-sm font-mono mb-4 border border-neon-blue/20">
            GUILD PROFILE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-glow">
            <span className="text-transparent bg-clip-text bg-gradient-neon">Why Gaming Softech</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Your Success Partner for Sports Betting Website Development
            <span className="block mt-2 text-sm text-blue-300 font-mono">[ GUILD LEVEL: S-TIER | REPUTATION: MAXED ]</span>
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Guild Emblem / Team Hologram */}
          <div className="lg:w-2/5">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated Frame */}
              <div className="absolute inset-0 border-2 border-neon-blue rounded-lg overflow-hidden shadow-neon animate-pulse-slow">
                {/* Scanline Effect */}
                <div className="scanline"></div>
                
                {/* Image with Holographic Overlay */}
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Gaming Development Team" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-game-blue/70 via-transparent to-game-purple/70 mix-blend-overlay"></div>
                  
                  {/* Status Indicators */}
                  <div className="absolute top-4 left-4 bg-game-blue/80 backdrop-blur-sm px-3 py-1 rounded-md border border-neon-blue/30 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></div>
                    <span className="text-neon-blue text-xs font-mono">ELITE SQUAD</span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-game-blue/80 backdrop-blur-sm px-3 py-1 rounded-md border border-neon-blue/30 flex items-center gap-2">
                    <span className="text-neon-blue text-xs font-mono">MISSIONS: 50+</span>
                  </div>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-neon-blue"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-neon-purple"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-neon-purple"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-neon-blue"></div>
            </div>
            
            {/* Mission Statement Panel */}
            <div className="mt-8 bg-game-blue/40 backdrop-blur-sm p-5 rounded-lg border border-neon-blue/20 shadow-neon">
              <div className="text-xs font-mono text-gray-400 mb-2">MISSION STATEMENT</div>
              <p className="text-blue-100 mb-3">
                Gaming Softech delivers comprehensive betting and gaming solutions from idea to scale - 
                building, securing, marketing, and supporting your entire betting business.
              </p>
              <div className="text-xs font-mono text-neon-blue">
                // From idea to scale, we build, secure, market & support your entire betting business.
              </div>
            </div>
          </div>
          
          {/* Character Stats / Guild Reputation */}
          <div className="lg:w-3/5">
            <div className="bg-game-blue/30 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/20 shadow-neon">
              <div className="text-sm font-mono text-neon-blue mb-4">CHARACTER STATS</div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {stats.map((stat) => (
                  <div 
                    key={stat.name}
                    className="relative bg-game-purple/20 p-4 rounded-md border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300 cursor-pointer group"
                    onMouseEnter={() => handleStatHover(stat.name)}
                    onMouseLeave={handleStatLeave}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className={`p-1.5 rounded-md bg-${stat.color}/20 text-${stat.color} mr-2`}>
                          {stat.icon}
                        </div>
                        <h3 className="text-white font-medium">{stat.label}</h3>
                      </div>
                      <span className={`text-${stat.color} text-xs font-mono px-2 py-0.5 rounded bg-game-blue/50`}>
                        {getRankLabel(stat.value)}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-game-blue/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${stat.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-400">0</span>
                      <span className={`text-${stat.color} text-xs font-bold`}>{stat.value}/{stat.maxValue}</span>
                    </div>
                    
                    {/* Description Tooltip */}
                    <div 
                      className={`
                        absolute left-0 right-0 bottom-full mb-2 p-3 rounded-md bg-game-blue/90 border border-${stat.color}/30
                        backdrop-blur-sm shadow-neon z-20 transform transition-all duration-200
                        ${hoveredStat === stat.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                      `}
                    >
                      <div className="text-sm text-white">{stat.description}</div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-game-blue/90 border-r border-b border-${stat.color}/30"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Guild Badges */}
              <div className="border-t border-neon-blue/20 pt-4 mt-2">
                <div className="text-sm font-mono text-neon-blue mb-2">ACHIEVEMENTS</div>
                <div className="flex flex-wrap gap-3">
                  <div className="p-2 bg-game-purple/30 rounded-md border border-neon-blue/20 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center">
                      <Brain size={18} className="text-neon-blue" />
                    </div>
                    <span className="text-sm text-white">90+ XP</span>
                  </div>
                  
                  <div className="p-2 bg-game-purple/30 rounded-md border border-neon-blue/20 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <Target size={18} className="text-neon-purple" />
                    </div>
                    <span className="text-sm text-white">Trust Level: Epic</span>
                  </div>
                  
                  <div className="p-2 bg-game-purple/30 rounded-md border border-neon-blue/20 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center">
                      <Headphones size={18} className="text-neon-pink" />
                    </div>
                    <span className="text-sm text-white">Support Rank: Legendary</span>
                  </div>
                  
                  <div className="p-2 bg-game-purple/30 rounded-md border border-neon-blue/20 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center">
                      <GaugeCircle size={18} className="text-neon-blue" />
                    </div>
                    <span className="text-sm text-white">Flexibility: S-Tier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;