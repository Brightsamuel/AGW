import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
};

const AnimatedText = ({ text, className = "text-gray-700 leading-relaxed" }) => {
  const [textRef, isTextInView] = useInView(0.2);
  const words = text.split(' ');

  return (
    <div ref={textRef} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 translate-y-4 transition-all duration-300 ease-out ${isTextInView ? 'opacity-100 translate-y-0' : ''}`}
          style={{ transitionDelay: `${index * 0.05}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

const AnimatedCard = ({ children, delay = 0 }) => {
  const [cardRef, isCardInView] = useInView(0.1);

  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${isCardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="h-full">
        {children}
      </div>
    </div>
  );
};

const images = [
  "/images/civilw1.jpg",
  "/images/civilw2.jpg",
  "/images/civilw3.jpg",
  "/images/civilw4.jpg",
  "/images/civilw5.jpg",
  "/images/civilw6.jpg",
  "/images/civilw7.jpg",
  // Note: civil10.jpg is used as poster for the video
  // Add more image paths as needed
];

const CivilWorksPage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [heroRef, isHeroInView] = useInView(0.0); // Trigger immediately for hero
  const [mainRef, isMainInView] = useInView(0.1);
  const [ctaRef, isCtaInView] = useInView(0.1);

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
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

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg transition-all duration-700 ease-out ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Civil Works Excellence
          </h1>
          <p className={`text-lg md:text-xl opacity-90 mb-6 leading-relaxed drop-shadow-md transition-all duration-700 ease-out ${isHeroInView ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'}`}>
            Comprehensive solutions for heavy machinery, vehicle maintenance, and industrial installations.
          </p>
          <p className={`text-base opacity-80 max-w-2xl mx-auto drop-shadow-sm transition-all duration-700 ease-out delay-400 ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From sales and repairs to specialized installations, we keep your operations running smoothly.
          </p>
        </div>
      </section>

      <section className="py-20 px-4" ref={mainRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto transition-all duration-700 ease-out ${isMainInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Civil Works Services</h2>
            <AnimatedText text="Admirals Group delivers expert civil works solutions tailored for construction, transportation, and industrial needs. With a focus on quality and reliability, we support Uganda's infrastructure development through skilled maintenance and innovative installations." className="mb-8 text-gray-700 text-center leading-relaxed" />
            
            <ul className="space-y-6 text-gray-700">
              <AnimatedCard delay={0.2}>
                <li className="flex items-start space-x-4 border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-800 block mb-1">Heavy Machinery Services</strong>
                    <AnimatedText text="Sales, hire, repairs, and spare parts for excavators, backhoes, dozers, and heavy trucks. We ensure your equipment is always operational for demanding projects." className="text-sm leading-relaxed" />
                  </div>
                </li>
              </AnimatedCard>
              <AnimatedCard delay={0.4}>
                <li className="flex items-start space-x-4 border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-800 block mb-1">Light Vehicle Maintenance</strong>
                    <AnimatedText text="Repairs and spare parts for all light vehicles (Toyota, Hyundai, Volvo, Benz, etc.). Comprehensive support to keep your fleet road-ready and efficient." className="text-sm leading-relaxed" />
                  </div>
                </li>
              </AnimatedCard>
              <AnimatedCard delay={0.6}>
                <li className="flex items-start space-x-4 border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-800 block mb-1">Industrial Installations</strong>
                    <AnimatedText text="Professional installation services for industrial systems, ensuring seamless integration and optimal performance for your operations." className="text-sm leading-relaxed" />
                  </div>
                </li>
              </AnimatedCard>
            </ul>
          </div>
        </div>
      </section>

      {/* Video section removed per request */}

      <section className="bg-gray-800 text-white py-16 px-4 text-center" ref={ctaRef}>
        <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-4">Partner with Us for Your Civil Works Needs</h2>
          <AnimatedText text="Get in touch to discuss how we can support your projects with reliable civil works solutions." className="text-lg opacity-80 mb-8 leading-relaxed" />
          <Link 
            to="/contactus" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today <ChevronRight className="w-5 h-5 ml-2 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CivilWorksPage;