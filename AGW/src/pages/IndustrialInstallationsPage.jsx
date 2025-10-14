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
  "/images/ii1.jpg",
  "/images/ii2.jpg",
  "/images/ii3.jpg",
  "/images/ii4.jpg",
  "/images/ii5.png",
  "/images/ii6.jpg",
  "/images/ii7.jpg",
  // Add more image paths as needed
];

const IndustrialInstallationsPage = () => {
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
      }, 500); 
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

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
            Industrial Installations
          </h1>
          <p className={`text-lg md:text-xl opacity-90 mb-6 leading-relaxed drop-shadow-md transition-all duration-700 ease-out ${isHeroInView ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'}`}>
            Precision engineering for air conditioning, piping, and power systems.
          </p>
          <p className={`text-base opacity-80 max-w-2xl mx-auto drop-shadow-sm transition-all duration-700 ease-out delay-400 ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Expert installations tailored to enhance efficiency and reliability in industrial environments.
          </p>
        </div>
      </section>

      <section className="py-20 px-4" ref={mainRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto transition-all duration-700 ease-out ${isMainInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Industrial Installation Services</h2>
            <AnimatedText text="Admirals Group specializes in professional industrial installations, delivering seamless solutions for HVAC, piping, and electrical systems to optimize your operations and ensure long-term performance." className="mb-8 text-gray-700 text-center leading-relaxed" />
            
            <div className="space-y-8">
              <AnimatedCard delay={0.2}>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    Air Conditioning Systems
                  </h3>
                  <ul className="space-y-3 text-gray-700 pl-6 list-disc">
                    <AnimatedText text="Comprehensive design, installation, and maintenance of HVAC systems for industrial facilities." className="text-sm leading-relaxed" />
                    <AnimatedText text="Energy-efficient solutions tailored to specific environmental and operational requirements." className="text-sm leading-relaxed" />
                  </ul>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    Piping Installations
                  </h3>
                  <ul className="space-y-3 text-gray-700 pl-6 list-disc">
                    <AnimatedText text="Stainless steel, mild steel, and carbon steel piping for fluid transport and process systems." className="text-sm leading-relaxed" />
                    <AnimatedText text="Precision fabrication and welding to meet industry standards and safety regulations." className="text-sm leading-relaxed" />
                  </ul>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.6}>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    Power Factor Improvement Equipment
                  </h3>
                  <ul className="space-y-3 text-gray-700 pl-6 list-disc">
                    <AnimatedText text="Installation of capacitor banks to optimize electrical efficiency and reduce energy costs." className="text-sm leading-relaxed" />
                    <AnimatedText text="Customized solutions for industrial power systems to enhance performance and compliance." className="text-sm leading-relaxed" />
                  </ul>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple and Distinct */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center" ref={ctaRef}>
        <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-4">Power Up Your Operations</h2>
          <AnimatedText text="Contact us to discuss your industrial installation needs and get a customized proposal." className="text-lg opacity-80 mb-8 leading-relaxed" />
          <Link 
            to="/contactus" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Request Installation <ChevronRight className="w-5 h-5 ml-2 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustrialInstallationsPage;