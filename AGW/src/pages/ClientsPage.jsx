import React, { useEffect, useState } from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const clientImages = [
  '/images/client1.png',
  '/images/client2.png',
  '/images/client3.png',
  '/images/client4.png',
  '/images/client5.png',
  '/images/client6.png',
  '/images/client7.png',
  '/images/client8.png',
];

const ClientsPage = () => {
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    // Staggered animation: reveal one client image every 300ms with alternating slide direction
    const timers = clientImages.map((_, index) => 
      setTimeout(() => {
        setVisibleIndices(prev => [...prev, index]);
      }, index * 300)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Users size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
            Our Valued Clients
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Trusted Partners in Innovation and Growth
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            We proudly serve leading organizations across industries, delivering exceptional results through collaboration and excellence.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Esteemed Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
            {clientImages.map((image, index) => (
              <div
                key={index}
                className={`
                  w-40 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center transform overflow-hidden
                  transition-all duration-1000 ease-out delay-${index * 100}ms
                  ${visibleIndices.includes(index) 
                    ? (index % 2 === 0 
                        ? 'opacity-100 scale-100 translate-x-0 rotate-0' 
                        : 'opacity-100 scale-100 -translate-x-0 rotate-0'
                      ) 
                    : 'opacity-0 scale-75 translate-x-8 rotate-5'
                  } hover:scale-110 cursor-pointer hover:shadow-2xl hover:-rotate-3
                `}
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className="w-36 h-36 object-contain rounded-lg transition-transform duration-500 hover:scale-110"
                  onLoad={() => setVisibleIndices(prev => [...prev, index])} // Fallback for late loads
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">And Partners With Us</h2>
          <p className="text-xl opacity-80 mb-8">
            Patnering With Admirals Group
          </p>
          {/* <Link
            to="/contact"
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Become a Partner <ChevronRight className="w-5 h-5 ml-2 inline" />
          </Link> */}
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;