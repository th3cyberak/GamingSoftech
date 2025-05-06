import React from 'react';
import { Linkedin, Twitter, Mail, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamCard: React.FC<TeamMember> = ({ name, role, image, expertise, social }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-col items-center space-y-3">
              {expertise.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-purple-400 mt-1">{role}</p>
          </div>
          <Award className="text-purple-500" size={24} />
        </div>
        <div className="mt-4 flex space-x-4">
          {social.linkedin && (
            <a href={social.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter size={20} />
            </a>
          )}
          {social.email && (
            <a href={`mailto:${social.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      expertise: ["Strategic Leadership", "Gaming Industry", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@example.com"
      }
    },
    {
      name: "David Chen",
      role: "CTO",
      image: "https://images.pexels.com/photos/7647553/pexels-photo-7647553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      expertise: ["System Architecture", "Blockchain", "Security"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@example.com"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      expertise: ["Full Stack", "API Integration", "Gaming Platforms"],
      social: {
        linkedin: "#",
        email: "michael@example.com"
      }
    },
    {
      name: "Emily Wilson",
      role: "UX/UI Designer",
      image: "https://images.pexels.com/photos/6893659/pexels-photo-6893659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      expertise: ["UI/UX Design", "User Research", "Gaming Interface"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@example.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our talented team of gaming industry professionals is dedicated to delivering innovative betting solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
