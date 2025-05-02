import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Matthews",
      position: "CEO",
      company: "GlobalTech Solutions",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "GamingSofTech delivered an exceptional betting platform that has significantly increased our online revenue. Their expertise in the gaming industry is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Lisa Thompson",
      position: "CTO",
      company: "BetMatrix",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Working with GamingSofTech was a game-changer for our business. Their white-label solution got us to market in record time with all the features we needed.",
      rating: 5
    },
    {
      id: 3,
      name: "Robert Kim",
      position: "Operations Director",
      company: "CasinoKings",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The casino platform developed by GamingSofTech has revolutionized how we engage with our players. Their attention to security and user experience is outstanding.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with our gaming and betting solutions.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full -ml-20 -mb-20"></div>
            
            <Quote size={40} className="text-purple-500/20 absolute top-4 left-4" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="md:w-1/3">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-500/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20"></div>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3"> 
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < testimonials[currentIndex].rating ? "text-purple-500 fill-purple-500" : "text-gray-600"} 
                    />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic mb-6 text-lg">"{testimonials[currentIndex].quote}"</blockquote>
                <div>
                  <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
                  <p className="text-purple-400">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-purple-600 transition-colors text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-purple-600 transition-colors text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
