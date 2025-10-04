import React, { useEffect, useState } from "react";
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  "/images/img2.jpg",
  "/images/eng1.jpg",
  "/images/eng2.jpg",
  "/images/eng3.jpg",
  "/images/eng4.jpg",
  // Add more image paths as needed
];

const EngineeringServicesPage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Half the transition time for smooth overlap
    }, 5000); // Shuffle every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Preload images to prevent loading delays
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section with Shuffling Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {images.map((image, index) => {
            const isCurrent = index === bgIndex;
            const isNext = index === (bgIndex + 1) % images.length && isTransitioning;
            const isPrevious = index === (bgIndex - 1 + images.length) % images.length && isTransitioning;

            return (
              <div
                key={index}
                className={`
                  absolute inset-0 transition-all duration-1000 ease-in-out transform
                  ${isCurrent ? 'opacity-100 scale-100 translate-x-0' : ''}
                  ${isNext ? 'opacity-50 scale-105 translate-x-full' : ''}
                  ${isPrevious ? 'opacity-50 scale-105 -translate-x-full' : ''}
                  ${!isCurrent && !isNext && !isPrevious ? 'opacity-0 scale-90 translate-x-0' : ''}
                `}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: isCurrent ? 2 : isNext || isPrevious ? 1 : 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Engineering Services</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed drop-shadow-md">
            Tailored to Agricultural, Civil & Mechanical Engineering.
          </p>
          <p className="text-base opacity-80 max-w-2xl mx-auto drop-shadow-sm">
            Providing metal fabrication, earth works, project management, and more for innovative solutions.
          </p>
        </div>
      </section>

      {/* Main Content Section - Building on Original Design */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Engineering Services</h2>
            <p className="mb-8 text-gray-700 text-center leading-relaxed">
              Admirals Group offers comprehensive engineering services across multiple disciplines, ensuring quality, innovation, and reliability in every project.
            </p>
            
            <div className="space-y-8">
              {/* Mechanical Engineering Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  Mechanical Engineering
                </h3>
                <ul className="space-y-3 text-gray-700 pl-6 list-disc">
                  <li className="text-sm leading-relaxed">
                     Sales, Hire, Repairs and Spare parts for Excavators, Backhoe, Dozers, Heavy Trucks.
                  </li>
                  <li className="text-sm leading-relaxed">
                     Repairs and spare parts for All light Vehicles (Toyota, Hyundai, Volvo, Benz) etc.
                  </li>
                  <li className="text-sm leading-relaxed">
                     Industrial Installation.
                  </li>
                </ul>
              </div>

              {/* Agricultural Engineering Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  Agricultural Engineering
                </h3>
                <ul className="space-y-3 text-gray-700 pl-6 list-disc">
                  <li className="text-sm leading-relaxed">
                    Heavy machinery for Agriculture (Repair, Hire and Sales & Spare parts) of Tractors.
                  </li>
                  <li className="text-sm leading-relaxed">
                     Irrigation Engineering & systems. Water pumps, sprinklers etc.
                  </li>
                  <li className="text-sm leading-relaxed">
                     Agricultural Civil Work. Fencing, minor construction, etc.
                  </li>
                </ul>
              </div>

              {/* Civil Engineering Section */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  Civil Engineering
                </h3>
                <ul className="space-y-3 text-gray-700 pl-6 list-disc">
                  <li className="text-sm leading-relaxed"> Building Construction.</li>
                  <li className="text-sm leading-relaxed"> Basement Construction.</li>
                  <li className="text-sm leading-relaxed"> Bathroom Remodelling.</li>
                  <li className="text-sm leading-relaxed"> Demolition.</li>
                  <li className="text-sm leading-relaxed"> Painting.</li>
                  <li className="text-sm leading-relaxed"> Concrete Work.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple and Distinct */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Engineer Your Future?</h2>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Contact us to discuss how our engineering services can support your next project.
          </p>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch <ChevronRight className="w-5 h-5 ml-2 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EngineeringServicesPage;