import React, { useEffect, useState, useRef } from "react";
import { Settings, Wrench, Cog, Award, CheckCircle, ArrowRight, Gauge, Shield, Clock } from 'lucide-react';

const images = [
  "/images/mechanicalengineering/mechanical1.jpg",
  "/images/mechanicalengineering/mechanical2.jpg",
  "/images/mechanicalengineering/mechanical3.jpg",
  "/images/mechanicalengineering/mechanical5.jpg",
  "/images/mechanicalengineering/mechanical6.jpg",
  "/images/mechanicalengineering/mechanical7.jpg",
];

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, isInView]);

  return [ref, isInView];
};

const ExpertiseCard = ({ item, index }) => {
  const [cardRef, cardInView] = useInView(0.1);
  const Icon = item.icon;
  
  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
        <ul className="space-y-3">
          {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CapabilityCard = ({ capability, index }) => {
  const [capRef, capInView] = useInView(0.1);
  const Icon = capability.icon;
  
  return (
    <div
      ref={capRef}
      className={`transition-all duration-700 ${capInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
        <Icon className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
        <p className="text-gray-300 leading-relaxed">{capability.description}</p>
      </div>
    </div>
  );
};

const PhaseCard = ({ phase, index }) => {
  const [phaseRef, phaseInView] = useInView(0.1);
  
  return (
    <div
      ref={phaseRef}
      className={`transition-all duration-700 ${phaseInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative">
        <div className="text-6xl font-bold text-blue-100 mb-4">{phase.step}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{phase.title}</h3>
        <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
        {index < 3 && (
          <ArrowRight className="hidden lg:block absolute -right-8 top-8 text-blue-300 w-6 h-6" />
        )}
      </div>
    </div>
  );
};

const MechanicalEngPage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const expertise = [
    {
      icon: Wrench,
      title: "Metal Fabrication Excellence",
      description: "Specialized in precision fabrication using stainless steel, mild steel, and aluminum for industrial and commercial applications.",
      details: [
        "Custom stainless steel fabrication for food processing industries",
        "Structural steel works for buildings and infrastructure",
        "Aluminum fabrication for lightweight yet durable solutions",
        "Quality welding services (TIG, MIG, Arc)"
      ]
    },
    {
      icon: Cog,
      title: "Boiler Systems Expertise",
      description: "Comprehensive maintenance, repair, and optimization services for industrial boiler systems.",
      details: [
        "Water tube boiler servicing and repairs",
        "Fire tube boiler maintenance programs",
        "Boiler efficiency optimization and testing",
        "Emergency repair services available 24/7"
      ]
    },
    {
      icon: Settings,
      title: "Process Engineering",
      description: "Innovative solutions for product design, process improvement, and operational optimization.",
      details: [
        "Manufacturing process analysis and improvement",
        "Equipment efficiency optimization",
        "Custom machinery design and development",
        "Industrial automation integration"
      ]
    }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO-standard processes ensuring every project meets the highest quality benchmarks."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Project management excellence with on-time delivery commitments and milestone tracking."
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Data-driven approach to maximize efficiency and reduce operational costs."
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified engineers and technicians with decades of combined industry experience."
    }
  ];

  const phases = [
    { step: "01", title: "Consultation", desc: "Understanding your unique requirements and challenges" },
    { step: "02", title: "Design", desc: "Creating optimized solutions with precision engineering" },
    { step: "03", title: "Execution", desc: "Professional implementation with quality assurance" },
    { step: "04", title: "Support", desc: "Ongoing maintenance and technical assistance" }
  ];

  const [heroRef, heroInView] = useInView(0.1);
  const [expertiseRef, expertiseInView] = useInView(0.1);
  const [capabilitiesRef, capabilitiesInView] = useInView(0.1);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
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
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            );
          })}
        </div>

        <div ref={heroRef} className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Mechanical Engineering
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl opacity-95 mb-4 leading-relaxed drop-shadow-lg">
              Precision Engineering Solutions for Modern Industry
            </p>
            <p className="text-lg opacity-85 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              From concept to completion, we deliver mechanical engineering excellence through innovation, expertise, and unwavering commitment to quality.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

       {/* Video Showcase Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">An Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 mx-auto max-w-3xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            >
              <source src="/images/mechanicalengineering/mechanical4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section ref={expertiseRef} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${expertiseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Core Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized mechanical engineering services backed by years of industry experience and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <ExpertiseCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="py-24 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${capabilitiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the mechanical engineering industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={index} capability={capability} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Approach Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Project Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <PhaseCard key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready to Transform Your Operations?
    </h2>
    <p className="text-xl opacity-90 mb-10 leading-relaxed">
      Partner with us for mechanical engineering solutions that drive efficiency, quality, and innovation in your business.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Request a Quote → goes to /contactus */}
      <a
        href="/contactus"
        className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Request a Quote
      </a>

      {/* Portfolio button — currently no projects, so use an info message */}
        <button
          disabled
          className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg opacity-70 cursor-not-allowed"
          title="Our portfolio is currently being updated.">
          Portfolio Coming Soon
        </button>
        </div>
      </div>
      </section>

    </div>
  );
};

export default MechanicalEngPage;