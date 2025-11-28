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
  "/images/O&G1.png",
  "/images/O&G2.jpg",
  "/images/O&G3.jpg",
  "/images/O&G4.jpg",
  "/images/O&G5.png",
  "/images/O&G6.png",
  // Add more mining/quarrying-themed images as needed
];

const OilAndGasPage = () => {
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
            Mining & Extraction
          </h1>
          <p className={`text-lg md:text-xl opacity-90 mb-6 leading-relaxed drop-shadow-md transition-all duration-700 ease-out ${isHeroInView ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'}`}>
            Practical solutions for oil & gas, quarrying, and iron ore extraction across Uganda.
          </p>
          <p className={`text-base opacity-80 max-w-2xl mx-auto drop-shadow-sm transition-all duration-700 ease-out delay-400 ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From pressure testing to site-ready equipment, we support your extraction operations with reliable supplies and services.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4" ref={mainRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto transition-all duration-700 ease-out ${isMainInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Mining & Extraction Services</h2>
            <AnimatedText text="Admirals Group supports mining and extraction projects with hands-on solutions for oil & gas operations, quarrying sites, and iron ore processing. We focus on practical tools, safety, and efficiency to keep your work moving forward." className="mb-8 text-gray-700 text-center leading-relaxed" />
            
            <div className="space-y-8">
              {/* Oil & Gas Card */}
              <AnimatedCard delay={0.2}>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    Oil & Gas Operations
                  </h3>
                  <ul className="space-y-4 text-gray-700 pl-6 list-disc">
                    <AnimatedText text="System pressure testing (hydraulic & pneumatic) to ensure pipeline and equipment safety in upstream and downstream work." className="text-sm leading-relaxed" />
                    <AnimatedText text="Drilling rig supplies and maintenance kits for reliable field operations." className="text-sm leading-relaxed" />
                    <AnimatedText text="Safety gear and monitoring tools tailored for high-risk extraction environments." className="text-sm leading-relaxed" />
                  </ul>
                </div>
              </AnimatedCard>

              {/* Quarrying Card */}
              <AnimatedCard delay={0.4}>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    Quarrying & Site Extraction
                  </h3>
                  <ul className="space-y-4 text-gray-700 pl-6 list-disc">
                    <AnimatedText text="Blasting and drilling equipment rentals, plus spare parts for crushers and screens to keep quarries running." className="text-sm leading-relaxed" />
                    <AnimatedText text="Aggregate handling tools and conveyor systems for efficient material transport on-site." className="text-sm leading-relaxed" />
                    <AnimatedText text="Dust control and ventilation supplies to maintain safe, productive work areas." className="text-sm leading-relaxed" />
                  </ul>
                </div>
              </AnimatedCard>

              {/* Iron Ore Extraction Card */}
              <AnimatedCard delay={0.6}>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    Iron Ore Extraction
                  </h3>
                  <ul className="space-y-4 text-gray-700 pl-6 list-disc">
                    <AnimatedText text="Ore processing consumables like grinding media and flotation chemicals for high-yield extraction." className="text-sm leading-relaxed" />
                    <AnimatedText text="Heavy-duty excavator and haul truck parts to handle tough terrain and loads." className="text-sm leading-relaxed" />
                    <AnimatedText text="On-site testing kits and environmental monitoring gear for compliant operations." className="text-sm leading-relaxed" />
                  </ul>
                </div>
              </AnimatedCard>
            </div>

            {/* Why Choose & Applications Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <AnimatedCard delay={0.8}>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2">Why Partner With Us?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Proven track record in Uganda's mining sector</li>
                    <li>• Quick delivery of parts and tools to remote sites</li>
                    <li>• Cost-effective solutions without cutting corners</li>
                    <li>• Local expertise for faster response times</li>
                  </ul>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={1.0}>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2">Key Applications</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Offshore and onshore drilling rigs</li>
                    <li>• Quarry blasting and crushing operations</li>
                    <li>• Iron ore beneficiation plants</li>
                    <li>• Pipeline and storage facility maintenance</li>
                  </ul>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center" ref={ctaRef}>
        <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-4">Gear Up for Your Next Extraction Project</h2>
          <AnimatedText text="Get in touch for supplies and services that keep your mining operations safe, efficient, and on track." className="text-lg opacity-80 mb-8 leading-relaxed" />
          <Link 
            to="/contactus" 
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Order <ChevronRight className="w-5 h-5 ml-2 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OilAndGasPage;