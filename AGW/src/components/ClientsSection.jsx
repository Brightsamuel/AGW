// components/ClientsSection.jsx (clean version - replace the entire file content)
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ClientsSection = ({ clients }) => {
  const { images, links } = clients;
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    // Staggered animation: reveal one client image every 300ms with alternating slide direction
    const timers = images.map((_, index) => 
      setTimeout(() => {
        setVisibleIndices(prev => [...prev, index]);
      }, index * 300)
    );
    return () => timers.forEach(clearTimeout);
  }, [images]);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Esteemed Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
          {images.map((image, index) => (
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
              {links[index] ? (
                <a href={links[index]} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt={`Client ${index + 1}`}
                    className="w-36 h-36 object-contain rounded-lg transition-transform duration-500 hover:scale-110"
                    onLoad={() => setVisibleIndices(prev => [...prev, index])}
                  />
                </a>
              ) : (
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className="w-36 h-36 object-contain rounded-lg transition-transform duration-500 hover:scale-110"
                  onLoad={() => setVisibleIndices(prev => [...prev, index])} // Fallback for late loads
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;