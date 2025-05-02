import React, { useState } from 'react';
import { ExternalLink, Star, Award, Trophy, PlayCircle, MessageCircle } from 'lucide-react';
import image1 from '../assets/images/image1.png'; 
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  level: number;
  rating: number;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "DiamondExch99",
      category: "betting",
      description: "Premium sports betting platform with live odds and multiple betting options.",
      image: "https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "diamondexch99.com",
      level: 5,
      rating: 4.9
    },
    {
      id: 2,
      title: "D247",
      category: "casino",
      description: "24/7 online casino platform featuring slots, poker, and live dealer games.",
      image: "https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "D247.com",
      level: 4,
      rating: 4.7
    },
    {
      id: 3,
      title: "ReddyBook",
      category: "betting",
      description: "Comprehensive sports booking platform with advanced features.",
      image: "https://images.pexels.com/photos/2072389/pexels-photo-2072389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "ReddyBook.club",
      level: 5,
      rating: 4.8
    },
    {
      id: 4,
      title: "Mahadev World",
      category: "casino",
      description: "Premium casino gaming platform with extensive game selection.",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "Mahadev.world",
      level: 4,
      rating: 4.6
    },
    {
      id: 5,
      title: "Dream444",
      category: "betting",
      description: "Feature-rich sports betting platform with real-time odds.",
      image: "https://images.pexels.com/photos/2267339/pexels-photo-2267339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "Dream444.com",
      level: 5,
      rating: 4.9
    },
    {
      id: 6,
      title: "Lotus365",
      category: "casino",
      description: "Modern casino platform with innovative gaming features.",
      image: "https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "Lotus365.com",
      level: 4,
      rating: 4.7
    }
  ];

  // const filters = [
  //   { id: 'all', label: 'All Achievements', icon: <Trophy size={16} /> },
  //   { id: 'betting', label: 'Sports Betting', icon: <Star size={16} /> },
  //   { id: 'casino', label: 'Casino Games', icon: <Award size={16} /> }
  // ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleMouseEnter = (id: number) => {
    setActiveProject(id);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-game relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-game-blue/40 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-vault-bg opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-neon-pink/10 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-neon-blue/10 blur-xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* <div className="inline-block px-4 py-1 rounded-full bg-game-purple/30 text-neon-blue text-sm font-mono mb-4 border border-neon-blue/20">
            MISSION VAULT
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-glow">
            <span className="text-transparent bg-clip-text bg-gradient-neon">Our Trending Solutions</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Access our collection of legendary missions completed for premium clients
            {/* <span className="block mt-2 text-sm text-blue-300 font-mono">[ ACHIEVEMENT SHOWCASE: LEVEL S BUILDS ]</span> */}
          </p>
        </div>
        
        {/* Filter Controls - Redesigned as Game Filter Interface */}
        {/* <div className="flex flex-wrap justify-center mb-12 gap-3">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2
                cyberpunk-border
                ${activeFilter === filter.id
                  ? 'bg-game-purple/70 text-neon-blue shadow-neon'
                  : 'bg-game-blue/50 text-gray-300 hover:bg-game-purple/40 hover:text-neon-blue'
                }
              `}
            >
              <span className={activeFilter === filter.id ? 'text-neon-blue' : 'text-gray-400'}>
                {filter.icon}
              </span>
              {filter.label}
            </button>
          ))}
        </div> */}
        
        {/* Projects as Game Collectible Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative perspective"
              // onMouseEnter={() => handleMouseEnter(project.id)}
              // onMouseLeave={handleMouseLeave}
            >
              {/* Card Front - Game Collectible Card */}
              <div 
                className={`
                  relative bg-game-blue/40 backdrop-blur-md rounded-lg overflow-hidden shadow-neon
                  transition-all duration-500 transform-gpu preserve-3d
                  group-hover:shadow-neon-hover 
                  ${activeProject === project.id ? 'rotate-y-180 opacity-0' : 'rotate-y-0 opacity-100'}
                `}
              >
                {/* Rarity Frame */}
                <div className="absolute inset-0 p-1">
                  <div className="absolute inset-0 bg-gradient-neon opacity-20 rounded-lg"></div>
                </div>
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-game-blue via-transparent to-transparent"></div>
                  
                  {/* Level Indicator */}
                  <div className="absolute top-3 right-3 flex items-center space-x-1 px-2 py-1 rounded-md bg-game-blue/70 backdrop-blur-sm border border-neon-blue/30">
                    {Array.from({ length: project.level }).map((_, i) => (
                      <Star key={i} size={12} className="text-neon-blue fill-neon-blue" />
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`text-xs font-mono uppercase px-2 py-1 rounded-sm ${
                        project.category === 'betting' 
                          ? 'bg-neon-blue/20 text-neon-blue' 
                          : 'bg-neon-purple/20 text-neon-purple'
                      }`}>
                        {project.category === 'betting' ? 'SPORTS BETTING' : 'SPORTS BATTING'}
                      </span>
                      <h3 className="text-xl font-bold mt-2 text-white glitch" data-text={project.title}>{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-neon-blue font-mono text-sm">{project.url}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">{project.rating}</span>
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-neon-blue animate-pulse flex items-center">
                    <span>Details</span>
                    <PlayCircle size={14} className="ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Card Back - Expanded Details */}
              <div 
                className={`
                  absolute inset-0 bg-game-purple/50 backdrop-blur-md rounded-lg overflow-hidden
                  transition-all duration-500 transform-gpu preserve-3d
                  ${activeProject === project.id ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0'}
                `}
              >
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-neon-blue mb-4">{project.title}</h3>
                  
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="text-xs font-mono text-gray-400 mb-1">CLIENT FEEDBACK</h4>
                      <div className="flex items-start space-x-2">
                        <MessageCircle size={16} className="text-neon-pink mt-1" />
                        <p className="text-gray-200 italic text-sm">
                          "The team at GamingSofTech delivered beyond our expectations. 
                          The platform has seen a 40% increase in user engagement."
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-mono text-gray-400 mb-1">KEY FEATURES</h4>
                      <ul className="text-sm text-gray-300 space-y-1 pl-5 list-disc">
                        <li>Real-time betting odds integration</li>
                        <li>Multi-currency support</li>
                        <li>Advanced user analytics</li>
                        <li>24/7 technical monitoring</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-neon-blue/20">
                    <a 
                      // href={`https://${project.url}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2 bg-game-blue/50 rounded-md text-neon-blue hover:bg-game-blue/70 transition-all duration-300"
                    >
                      <span>Visit Project</span>
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block relative overflow-hidden">
            <a 
              href="https://wa.me/919886222236" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-neon text-white font-medium rounded-md hover:shadow-neon-hover transition-all duration-300"
            >
              Get Demo Now
            </a>
            <div className="absolute inset-0 bg-white/20 animate-pulse-slow opacity-0 hover:opacity-30 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
