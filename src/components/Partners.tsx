import React, { useState } from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  category: 'data' | 'payment' | 'compliance';
}

const Partners: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'data' | 'compliance' | 'payment'>('data');
  
  const partners: Partner[] = [
    { id: 1, name: 'Betradar', logo: '/logos/betradar.png', category: 'data' },
    { id: 2, name: 'Stats', logo: '/logos/stats.png', category: 'data' },
    { id: 3, name: 'Exefeed', logo: '/logos/exefeed.png', category: 'data' },
    { id: 4, name: 'Goalserve', logo: '/logos/goalserve.png', category: 'data' },
    { id: 5, name: 'FantasyData', logo: '/logos/fantasydata.png', category: 'data' },
    { id: 6, name: 'TheEar', logo: '/logos/theear.png', category: 'data' },
    { id: 7, name: 'LSports', logo: '/logos/lsports.png', category: 'data' },
    { id: 8, name: 'Paypal', logo: '/logos/paypal.png', category: 'payment' },
    { id: 9, name: 'Stripe', logo: '/logos/stripe.png', category: 'payment' },
    { id: 10, name: 'Visa', logo: '/logos/visa.png', category: 'payment' },
    { id: 11, name: 'MasterCard', logo: '/logos/mastercard.png', category: 'payment' },
    { id: 12, name: 'GDPR', logo: '/logos/gdpr.png', category: 'compliance' },
    { id: 13, name: 'ISO', logo: '/logos/iso.png', category: 'compliance' },
  ];
  
  const filteredPartners = partners.filter(partner => partner.category === activeTab);
  
  return (
    <section className="py-24 bg-#0101011a">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            Experience Excellence with the Best Data Feed <br />
            Providers.
          </h2>
          <div className="w-32 h-1 bg-red-500 mx-auto my-8"></div>
          <p className="text-xl text-white max-w-4xl mx-auto">
            Get the leading data feed providers that guarantee excellence at every interaction
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          <button
            onClick={() => setActiveTab('data')}
            className={`
              px-8 py-3 rounded-md text-lg font-medium transition-all duration-300
              ${activeTab === 'data' 
                ? 'bg-white text-blue-700 shadow-lg' 
                : 'bg-transparent text-white border border-white hover:bg-white/10'}
            `}
          >
            Data Partners
          </button>
          {/* <button
            onClick={() => setActiveTab('compliance')}
            className={`
              px-8 py-3 rounded-md text-lg font-medium transition-all duration-300
              ${activeTab === 'compliance' 
                ? 'bg-white text-blue-700 shadow-lg' 
                : 'bg-transparent text-white border border-white hover:bg-white/10'}
            `}
          >
            Compliances
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`
              px-8 py-3 rounded-md text-lg font-medium transition-all duration-300
              ${activeTab === 'payment' 
                ? 'bg-white text-blue-700 shadow-lg' 
                : 'bg-transparent text-white border border-white hover:bg-white/10'}
            `}
          >
            Payment Gateways
          </button> */}
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {filteredPartners.map(partner => (
            <div 
              key={partner.id} 
              className="bg-white rounded-md p-4 flex items-center justify-center h-24 shadow-lg transition-transform hover:scale-105"
            >
              {/* Fallback to text if image fails to load */}
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
            className="inline-block px-10 py-4 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-all duration-300 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners; 
