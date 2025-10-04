import React, { useEffect, useState } from "react";

const images = [
  "/images/civil1.jpg",
  "/images/civil2.jpg",
  "/images/civil3.jpg",
  "/images/civil4.jpg",
  "/images/civil5.jpg",
  "/images/civil6.jpg",
  "/images/civil7.jpg",
  "/images/civil8.jpg",
  "/images/civil9.jpg",
  "/images/civil10.jpg",
  // Add more image paths as needed
];

const CivilWorksPage = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Civil Works Excellence</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed drop-shadow-md">
            Comprehensive solutions for heavy machinery, vehicle maintenance, and industrial installations.
          </p>
          <p className="text-base opacity-80 max-w-2xl mx-auto drop-shadow-sm">
            From sales and repairs to specialized installations, we keep your operations running smoothly.
          </p>
        </div>
      </section>

      {/* Main Content Section - Building on Original Design */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Civil Works Services</h2>
            <p className="mb-8 text-gray-700 text-center leading-relaxed">
              Admirals Group delivers expert civil works solutions tailored for construction, transportation, and industrial needs. With a focus on quality and reliability, we support Uganda's infrastructure development through skilled maintenance and innovative installations.
            </p>
            
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start space-x-4 border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <strong className="font-semibold text-gray-800 block mb-1">Heavy Machinery Services</strong>
                  <p className="text-sm leading-relaxed">Sales, hire, repairs, and spare parts for excavators, backhoes, dozers, and heavy trucks. We ensure your equipment is always operational for demanding projects.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <strong className="font-semibold text-gray-800 block mb-1">Light Vehicle Maintenance</strong>
                  <p className="text-sm leading-relaxed">Repairs and spare parts for all light vehicles (Toyota, Hyundai, Volvo, Benz, etc.). Comprehensive support to keep your fleet road-ready and efficient.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <strong className="font-semibold text-gray-800 block mb-1">Industrial Installations</strong>
                  <p className="text-sm leading-relaxed">Professional installation services for industrial systems, ensuring seamless integration and optimal performance for your operations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple and Distinct */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Partner with Us for Your Civil Works Needs</h2>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Get in touch to discuss how we can support your projects with reliable civil works solutions.
          </p>
          <a 
            href="/contactus" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default CivilWorksPage;