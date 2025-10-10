import React, { useEffect, useState, useRef } from "react";
import { ChevronRight, Play, Settings, Package, Shield, Flame, Hammer, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
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
  "/images/img2.jpg",
  "/images/supplies1.jpg",
  "/images/supplies2.jpg",
  "/images/supplies3.jpg",
  "/images/supplies4.jpg",
  "/images/supplies5.jpg",
  "/images/supplies6.jpg",
  "/images/supplies7.jpg",
  "/images/supplies8.jpg",
];

const GeneralSuppliesPage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const [heroRef, isHeroInView] = useInView(0.0);
  const [mainRef, isMainInView] = useInView(0.1);
  const [brandsRef, isBrandsInView] = useInView(0.1);
  const [videoRefScroll, isVideoInView] = useInView(0.1);
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

  const handleVideoPlay = () => {
    if (videoRef.current && !isVideoPlaying) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const suppliesData = [
    { icon: Settings, title: "SKF Products", desc: "Bearings, lubricants, and power transmission spares for reliable machinery performance." },
    { icon: Hammer, title: "Construction & Plant Equipment", desc: "Heavy-duty tools and machinery for construction sites and plants." },
    { icon: Shield, title: "PPE & Apparatus", desc: "Personnel protective equipment to ensure safety on the job." },
    { icon: Flame, title: "Fuel Briquettes", desc: "Eco-friendly fuel solutions for industrial heating needs." },
    { icon: Truck, title: "Automotive Spares & Tools", desc: "Quality parts and tools for vehicle maintenance and repairs." },
    { icon: Package, title: "Industrial Tools & Equipment", desc: "Essential tools for efficient industrial operations." },
    { icon: Settings, title: "Mechanical & Electrical Equipment", desc: "Durable mechanical and electrical components for projects." },
    { icon: Users, title: "Staff Support (HSE Personnel)", desc: "Expert HSE support to maintain safety standards." }
  ];

  const truckBrands = [
    { name: "LIEBHERR", logo: "/images/brands/liebherr.png" }, // Assume logos in public/images/brands/
    { name: "JCB", logo: "/images/brands/jcb.png" },
    { name: "HITACHI", logo: "/images/brands/hitachi.png" },
    { name: "DOOSAN", logo: "/images/brands/doosan.png" },
    { name: "DEUTZ", logo: "/images/brands/deutz.png" },
    { name: "KOMATSU", logo: "/images/brands/komatsu.png" },
    { name: "HIDROMEK", logo: "/images/brands/hidromek.png" },
    { name: "HYUNDAI", logo: "/images/brands/hyundai.png" },
    { name: "CUMMINS", logo: "/images/brands/cummins.png" },
    { name: "NEW HOLLAND", logo: "/images/brands/newholland.png" },
    { name: "CAT", logo: "/images/brands/cat.png" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div> {/* Subtle overlay for text readability */}
              </div>
            );
          })}
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg transition-all duration-700 ease-out ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            General Supplies
          </h1>
          <p className={`text-lg md:text-xl opacity-90 mb-6 leading-relaxed drop-shadow-md transition-all duration-700 ease-out ${isHeroInView ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'}`}>
            Reliable sourcing and delivery of essential industrial and construction supplies.
          </p>
          <p className={`text-base opacity-80 max-w-2xl mx-auto drop-shadow-sm transition-all duration-700 ease-out delay-400 ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From high-quality SKF products to comprehensive HSE support, we equip your operations for success.
          </p>
        </div>
      </section>

      {/* Supplies Overview Section */}
      <section className="py-20 px-4" ref={mainRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto transition-all duration-700 ease-out ${isMainInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Our General Supplies</h2>
            <AnimatedText text="Admirals Group provides a wide range of general supplies to support industrial, construction, and operational needs across Uganda. Our curated selection ensures quality, reliability, and value for every project." className="mb-12 text-gray-700 text-center leading-relaxed text-lg" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {suppliesData.map((supply, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
                    <supply.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{supply.title}</h3>
                    <p className="text-gray-600 flex-1">{supply.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heavy Equipment Brands Section */}
      <section className="py-20 px-4 bg-white" ref={brandsRef}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${isBrandsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Heavy Equipment & Truck Brands We Supply</h2>
            <AnimatedText text="Partnering with world-leading manufacturers to provide top-tier construction machinery, trucks, and heavy equipment for your projects." className="text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto text-lg" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {truckBrands.map((brand, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-200 h-full flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-16 h-16 mb-4 object-contain" 
                    onError={(e) => { e.target.src = '/images/placeholder-logo.png'; }} // Fallback if logo missing
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">Premium Parts & Services</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50" ref={videoRefScroll}>
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${isVideoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Explore Our Warehouse</h2>
          <AnimatedText text="See how we store and manage our high-quality supplies to ensure fast and reliable delivery." className="text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto text-lg" />
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto max-w-4xl">
            <video
              ref={videoRef}
              src="/images/supplies6.mp4"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loop
              muted
              autoPlay
              playsInline
              preload="metadata"
              poster="/images/supplies-poster.jpg" 
              onEnded={() => setIsVideoPlaying(true)}
              onPlay={() => setIsVideoPlaying(true)}
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-4 text-center" ref={ctaRef}>
        <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stock Up?</h2>
          <AnimatedText text="Contact us today to source the supplies you need for your next project and experience seamless delivery." className="text-lg opacity-90 mb-8 leading-relaxed" />
          <Link 
            to="/contactus" 
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Supplies Now <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GeneralSuppliesPage;