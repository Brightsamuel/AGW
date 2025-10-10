import React, { useEffect, useState, useRef } from "react";
import { Hammer, Building2, Paintbrush, HardHat, CheckCircle, ArrowRight, Users, Trophy, Target, Zap } from 'lucide-react';

const images = [
  "/images/civilengineering/civil1.jpg",
  "/images/civilengineering/civil2.jpg",
  "/images/civilengineering/civil3.jpg",
  "/images/civilengineering/civil4.jpg",
  "/images/civilengineering/civil5.jpg",
  "/images/civilengineering/civil6.jpg",
  "/images/civilengineering/civil7.jpg",
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

const ServiceCard = ({ item, index }) => {
  const [cardRef, cardInView] = useInView(0.1);
  const Icon = item.icon;
  
  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
        <ul className="space-y-3">
          {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ValueCard = ({ value, index }) => {
  const [valueRef, valueInView] = useInView(0.1);
  const Icon = value.icon;
  
  return (
    <div
      ref={valueRef}
      className={`transition-all duration-700 ${valueInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
        <Icon className="w-12 h-12 text-orange-400 mb-4" />
        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
        <p className="text-gray-300 leading-relaxed">{value.description}</p>
      </div>
    </div>
  );
};

const ProcessStep = ({ step, index }) => {
  const [stepRef, stepInView] = useInView(0.1);
  
  return (
    <div
      ref={stepRef}
      className={`transition-all duration-700 ${stepInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative">
        <div className="text-6xl font-bold text-orange-100 mb-4">{step.number}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
        {index < 3 && (
          <ArrowRight className="hidden lg:block absolute -right-8 top-8 text-orange-300 w-6 h-6" />
        )}
      </div>
    </div>
  );
};

const CivilEngPage = () => {
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

  const services = [
    {
      icon: Building2,
      title: "Building Construction",
      description: "Complete structural construction services from foundation to finishing, delivering durable and aesthetically pleasing buildings.",
      details: [
        "Residential and commercial building construction",
        "Multi-story structures and high-rise buildings",
        "Structural reinforcement and retrofitting",
        "Quality materials and modern construction techniques"
      ]
    },
    {
      icon: Hammer,
      title: "Specialized Construction",
      description: "Expert services in basement construction, demolition, and concrete work with precision and safety standards.",
      details: [
        "Basement excavation and waterproofing systems",
        "Safe and efficient demolition services",
        "Advanced concrete pouring and finishing",
        "Foundation work and structural concrete"
      ]
    },
    {
      icon: Paintbrush,
      title: "Finishing & Remodeling",
      description: "Transform spaces with professional remodeling and painting services that enhance both function and beauty.",
      details: [
        "Complete bathroom remodeling and renovation",
        "Interior and exterior painting services",
        "Custom finishes and decorative work",
        "Kitchen and living space transformations"
      ]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision Planning",
      description: "Detailed project planning and scheduling to ensure timely completion within budget."
    },
    {
      icon: HardHat,
      title: "Safety First",
      description: "Strict adherence to safety protocols protecting workers, clients, and the public."
    },
    {
      icon: Trophy,
      title: "Quality Standards",
      description: "Building code compliance and quality assurance at every construction phase."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled contractors, engineers, and craftsmen dedicated to excellence."
    }
  ];

  const process = [
    { number: "01", title: "Site Assessment", description: "Comprehensive evaluation of site conditions, regulations, and project requirements" },
    { number: "02", title: "Design & Planning", description: "Architectural design, structural engineering, and detailed construction planning" },
    { number: "03", title: "Construction", description: "Professional execution with quality materials and skilled workmanship" },
    { number: "04", title: "Completion", description: "Final inspections, handover, and ongoing maintenance support" }
  ];

  const [heroRef, heroInView] = useInView(0.1);
  const [servicesRef, servicesInView] = useInView(0.1);
  const [valuesRef, valuesInView] = useInView(0.1);

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
              Civil Engineering
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl opacity-95 mb-4 leading-relaxed drop-shadow-lg">
              Building Tomorrow's Infrastructure Today
            </p>
            <p className="text-lg opacity-85 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              From groundbreaking to grand opening, we construct with integrity, innovation, and an unwavering commitment to structural excellence.
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

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Construction Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive civil engineering solutions for residential, commercial, and industrial projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 px-4 bg-gradient-to-br from-orange-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Construction Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Built on a foundation of excellence, safety, and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Construction Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring quality at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose Our Civil Engineering Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <Zap className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Techniques</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We employ the latest construction methodologies and technologies to ensure efficient project delivery without compromising quality or safety.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Modern equipment and construction tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Sustainable building practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Energy-efficient design integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Client-Centered Approach</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your vision is our blueprint. We work closely with clients from initial consultation through project completion, ensuring transparency and satisfaction.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Regular progress updates and communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flexible solutions tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Post-completion support and warranty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Your Dream Project?
        </h2>
        <p className="text-xl opacity-90 mb-10 leading-relaxed">
          Let's turn your construction vision into reality with our expert civil engineering services.
        </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Request a Quote → goes to /contactus */}
      <a
        href="/contactus"
        className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
        Get Yourself a Quote
      </a>
      {/* Projects placeholder — disabled until portfolio is ready */}
        <button
          disabled
          className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg opacity-70 cursor-not-allowed"
          title="Our project showcase is currently being updated.">
          Projects Coming Soon
        </button>
        </div>
      </div>
    </section>

    </div>
  );
};

export default CivilEngPage;