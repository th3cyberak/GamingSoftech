import React from 'react';

interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
}

const Partners: React.FC = () => {
  const partners: PartnerLogo[] = [
    { id: 1, name: 'Betradar', logo: '/Betradar.png' },
    { id: 2, name: 'Evolution', logo: '/Evolution.png' },
    { id: 3, name: 'Betfair', logo: '/Betfair.png' },
    { id: 4, name: 'Jili', logo: '/Jili.png' },
    { id: 5, name: 'Ezugi', logo: '/Ezugi.png' },
    { id: 6, name: 'Vivo', logo: '/Vivo.png' },
   
  ];
  
  return (
    <section className="py-24 bg-[#1a1245]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            Experience Excellence with the Best Data Feed <br />
            Providers
          </h2>
          <div className="w-32 h-1 bg-red-500 mx-auto my-8"></div>
          <p className="text-xl text-white max-w-4xl mx-auto">
            Get the leading data feed providers that guarantee excellence at every interaction
          </p>
        </div>
        
        {/* Static Data Partners Button */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          <div className="px-8 py-3 rounded-md text-lg font-medium bg-white text-[#1a1245] shadow-lg">
            Data Partners
          </div>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {partners.map(partner => (
            <div 
              key={partner.id} 
              className="bg-white rounded-md p-4 flex items-center justify-center h-24 shadow-lg transition-transform hover:scale-105"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://via.placeholder.com/150x50?text=${partner.name}`;
                }} 
              />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/919886222236" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-[#1a1245] font-medium rounded-md hover:bg-blue-50 transition-all duration-300 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners; 
