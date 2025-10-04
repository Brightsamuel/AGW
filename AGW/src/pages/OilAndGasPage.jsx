import React, { useEffect, useState } from "react";
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  "/images/img7.jpeg",
  "/images/O&G1.jpg",
  "/images/img5.jpg",
  // Add more image paths as needed
];

const OilAndGasPage = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Oil and Gas</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed drop-shadow-md">
            Precision pressure testing for safety and reliability in oil and gas operations.
          </p>
          <p className="text-base opacity-80 max-w-2xl mx-auto drop-shadow-sm">
            Expert hydraulic and pneumatic system testing to ensure optimal performance and compliance.
          </p>
        </div>
      </section>

      {/* Main Content Section - Building on Original Design */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Oil and Gas Services</h2>
            <p className="mb-8 text-gray-700 text-center leading-relaxed">
              Admirals Group specializes in critical oil and gas support services, focusing on system integrity and operational safety. Our pressure testing solutions help maintain high standards in upstream and downstream activities across Uganda and beyond.
            </p>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  System Pressure Testing
                </h3>
                <ul className="space-y-4 text-gray-700 pl-6 list-disc">
                  <li className="text-sm leading-relaxed">
                    <strong>Hydraulic Testing:</strong> Comprehensive hydraulic pressure testing to verify system integrity under high-pressure conditions, ensuring safety and leak-free performance.
                  </li>
                  <li className="text-sm leading-relaxed">
                    <strong>Pneumatic Testing:</strong> Precise pneumatic pressure testing for gas systems, detecting weaknesses and confirming compliance with industry standards.
                  </li>
                  <li className="text-sm leading-relaxed">
                    <strong>Custom Solutions:</strong> Tailored testing protocols for pipelines, vessels, and equipment, minimizing downtime and maximizing reliability.
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2">Why Choose Our Testing?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Certified equipment and technicians</li>
                    <li>• Fast turnaround times</li>
                    <li>• Full compliance reporting</li>
                    <li>• On-site or facility-based services</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2">Applications</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Pipeline integrity</li>
                    <li>• Wellhead testing</li>
                    <li>• Storage tank certification</li>
                    <li>• Refinery systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple and Distinct */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ensure Your Systems' Integrity</h2>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Contact us for professional pressure testing services tailored to your oil and gas needs.
          </p>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule Testing <ChevronRight className="w-5 h-5 ml-2 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OilAndGasPage;