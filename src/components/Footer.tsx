import React from 'react';
import { Code, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Code size={32} className="text-purple-400 mr-2" />
              <span className="text-xl font-bold">GamingSofTech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your success partner in the Sports Gaming Industry, offering all gaming services under one roof.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Custom Sports Betting Website',
                'White Label Solutions',
                'Online Casino Development',
                'Sports API Integration',
                'Technical Support',
                'Digital Marketing'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Team', href: '#team' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-purple-400" />
                <div>
                  <p className="mb-2">#303 3rd Floor Al - Tayer Building Opposite Karama Park Dubai, UAE</p>
                  <p>91springboard Outer Ring Road, Mahadevapura, Bengaluru, Karnataka 560048</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-purple-400" />
                <a href="tel:+919886226236" className="hover:text-white">+91 988 622 6236</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-purple-400" />
                <a href="mailto:hello@gamingsoftech.com" className="hover:text-white">hello@gamingsoftech.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GamingSofTech. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              Back to top
              <ArrowUp size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;