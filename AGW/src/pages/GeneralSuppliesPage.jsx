import React, { useEffect, useState, useRef } from "react";
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  "/images/img2.jpg",
  "/images/supplies1.jpg",
  "/images/supplies2.jpg",
  "/images/supplies3.jpg",
  "/images/supplies4.jpg",
  "/images/supplies5.jpg",
  // Add more image paths as needed
];

const GeneralSuppliesPage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Half the transition time for smooth overlap
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const suppliesList = [
    "SKF products (bearings, lubricants, power transmission spares).",
    "Construction and plant equipment.",
    "Personnel protective equipment and apparatus.",
    "Fuel briquettes.",
    "Automotive spares and tools.",
    "Industrial tools and equipment.",
    "Mechanical and electrical industrial equipment.",
    "Staff support (HSE personnel)."
  ];

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">General Supplies</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed drop-shadow-md">
            Reliable sourcing and delivery of essential industrial and construction supplies.
          </p>
          <p className="text-base opacity-80 max-w-2xl mx-auto drop-shadow-sm">
            From high-quality SKF products to comprehensive HSE support, we equip your operations for success.
          </p>
        </div>
      </section>

      {/* Main Content Section - Building on Original Design */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our General Supplies</h2>
            <p className="mb-8 text-gray-700 text-center leading-relaxed">
              Admirals Group provides a wide range of general supplies to support industrial, construction, and operational needs across Uganda. Our curated selection ensures quality, reliability, and value for every project.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suppliesList.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
                      {index + 1}
                    </span>
                    {item.split('(')[0].trim()}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.split('(')[1] ? `(${item.split('(')[1]}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Video Showcase Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">One of Our Supplies' Warehouses</h2>
          <p className="text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            
          </p>
          <div className="relative bg-white rounded-lg shadow-xl overflow-hidden mx-auto max-w-4xl">
            <video
              ref={videoRef}
              src="/images/supplies6.mp4"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loop
              muted
              preload="metadata"
              poster="/images/supplies-poster.jpg" 
              onEnded={() => setIsVideoPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
            {!isVideoPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30 transition-all duration-300 cursor-pointer group"
                onClick={handleVideoPlay}
              >
                <div className="bg-white bg-opacity-20 rounded-full p-4 group-hover:bg-opacity-30 transition-all duration-300">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple and Distinct */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stock Up for Success</h2>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Contact us to source the supplies you need for your next project.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GeneralSuppliesPage;