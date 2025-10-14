import React, { useEffect, useState, useRef } from "react";
import { Leaf, Tractor, Droplets, CheckCircle, ArrowRight, Users, Trophy, Target, Zap, Fence, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  "/images/agriculturalengineering/trac1.jpg",
  "/images/agriculturalengineering/trac2.jpg",
  "/images/agriculturalengineering/trac3.jpg",
  "/images/agriculturalengineering/trac4.jpg",
  "/images/agriculturalengineering/irrigate1.jpg",
  "/images/agriculturalengineering/irrigate2.jpg",
  "/images/agriculturalengineering/irrigate3.jpg",
  "/images/agriculturalengineering/irrigate4.jpg",
  "/images/agriculturalengineering/irrigate5.jpg",
  "/images/agriculturalengineering/irrigate6.jpg",
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
      <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
        <ul className="space-y-3">
          {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
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
        <Icon className="w-12 h-12 text-green-400 mb-4" />
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
        <div className="text-6xl font-bold text-green-100 mb-4">{step.number}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
        {index < 3 && (
          <ArrowRight className="hidden lg:block absolute -right-8 top-8 text-green-300 w-6 h-6" />
        )}
      </div>
    </div>
  );
};

const AgriculturalEngPage = () => {
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
      icon: Tractor,
      title: "Heavy Agricultural Machinery",
      description: "Comprehensive services for agricultural equipment including repair, hire, sales, and genuine spare parts supply for tractors and farm machinery.",
      details: [
        "Professional tractor repair and maintenance services",
        "Tractor hire services for short and long-term projects",
        "Sales of new and quality used agricultural machinery",
        "Genuine spare parts supply and installation",
        "Equipment performance diagnostics and optimization"
      ]
    },
    {
      icon: Droplets,
      title: "Irrigation Engineering & Systems",
      description: "Advanced irrigation solutions designed to maximize water efficiency and crop yield through modern engineering techniques.",
      details: [
        "Drip irrigation system design and installation",
        "Sprinkler system setup and maintenance",
        "Water pump selection, installation, and repair",
        "Irrigation automation and control systems",
        "Water resource management consultation"
      ]
    },
    {
      icon: Fence,
      title: "Agricultural Civil Works",
      description: "Specialized construction services tailored to agricultural operations, from fencing to farm infrastructure development.",
      details: [
        "Professional fencing for farms and agricultural land",
        "Farm building construction and renovation",
        "Storage facility construction (barns, silos, sheds)",
        "Access road development for farm operations",
        "Drainage and water management structures"
      ]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Farm-Focused Solutions",
      description: "Understanding agricultural needs and delivering practical solutions that increase productivity."
    },
    {
      icon: Sprout,
      title: "Sustainable Practices",
      description: "Environmentally conscious engineering that promotes long-term agricultural sustainability."
    },
    {
      icon: Trophy,
      title: "Proven Expertise",
      description: "Years of experience serving farmers with reliable equipment and infrastructure solutions."
    },
    {
      icon: Users,
      title: "Farmer Partnership",
      description: "Working closely with farmers to understand and meet their unique operational challenges."
    }
  ];

  const process = [
    { number: "01", title: "Farm Assessment", description: "Comprehensive evaluation of your agricultural operations, land, and specific requirements" },
    { number: "02", title: "Solution Design", description: "Custom engineering solutions tailored to your crop types, scale, and budget" },
    { number: "03", title: "Implementation", description: "Professional installation and construction with minimal disruption to operations" },
    { number: "04", title: "Ongoing Support", description: "Regular maintenance, technical support, and equipment servicing programs" }
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
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  // backgroundRepeat: 'no-repeat',
                  // backgroundColor: '#FFFDFD00',
                  zIndex: isCurrent ? 2 : isNext || isPrevious ? 1 : 0,
                }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            );
          })}
        </div>

        <div ref={heroRef} className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Agricultural Engineering
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl opacity-95 mb-4 leading-relaxed drop-shadow-lg">
              Empowering Modern Agriculture Through Innovation
            </p>
            <p className="text-lg opacity-85 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              From heavy machinery to irrigation systems, we provide comprehensive agricultural engineering solutions that enhance productivity and sustainability.
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Agricultural Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural engineering solutions supporting farmers and agribusinesses across all scales of operation
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
      <section ref={valuesRef} className="py-24 px-4 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Agricultural Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Committed to supporting agriculture through reliable engineering and farmer-centric solutions
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Service Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach ensuring optimal results for your agricultural operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Highlights Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose Our Agricultural Engineering Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <Zap className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Modern Equipment & Technology</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We utilize the latest agricultural machinery and irrigation technologies to ensure your farm operates at peak efficiency with minimal resource waste.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Latest model tractors and farm equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Smart irrigation systems with water conservation features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Precision agriculture technology integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Agricultural Expertise</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team understands the unique challenges of agricultural operations and provides solutions that work in real-world farming conditions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Experienced agricultural engineers and technicians</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 emergency support during critical seasons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Training programs for equipment operation and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Modernize Your Farm?</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Let us help you increase productivity and efficiency with our agricultural engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contactus"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriculturalEngPage;