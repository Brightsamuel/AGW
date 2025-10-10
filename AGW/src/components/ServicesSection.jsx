import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard'; // Import the new ServiceCard component
import { Settings, Hammer, Leaf, ChevronRight, HardHat } from 'lucide-react'; // Added Leaf for Agricultural

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

const AnimatedText = ({ text, className = "text-gray-600 dark:text-gray-400 leading-relaxed" }) => {
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

const EngineeringServiceCard = ({ icon: HeaderIcon, title, description }) => {
  const [expandedSector, setExpandedSector] = useState(null);

  const sectors = [
    {
      name: 'Mechanical Engineering',
      icon: Settings,
      color: 'from-blue-500 to-indigo-500',
      details: [
        "Metal fabrication: stainless and mild steel, aluminium, structural and civil works.",
        "Earth works, prefab structures, concrete works, and buildings.",
        "Maintenance and repair of boilers (water tube and fire tube).",
        "Project management and consultation.",
        "Product design, process improvement, and optimization."
      ]
    },
    {
      name: 'Agricultural Engineering',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      details: [
        "Heavy machinery for Agriculture (Repair, Hire and Sales & Spare parts) of Tractors.",
        "Irrigation Engineering & systems. Water pumps, sprinklers etc.",
        "Agricultural Civil Work. Fencing, minor construction, etc."
      ]
    },
    {
      name: 'Civil Engineering',
      icon: Hammer,
      color: 'from-orange-500 to-amber-500',
      details: [
        "Building Construction.",
        "Basement Construction.",
        "Bathroom Remodelling.",
        "Demolition.",
        "Painting.",
        "Concrete Work."
      ]
    }
  ];

  const handleHover = (i) => setExpandedSector(i);
  const handleLeave = () => setExpandedSector(null);
  const isAnyExpanded = expandedSector !== null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
            <HeaderIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tailored to Mechanical, Agricultural & Civil Engineering</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Sub-cards Container - Expands horizontally */}
      <div className="flex flex-col lg:flex-row p-6 space-y-4 lg:space-y-0 lg:space-x-4 flex-grow relative overflow-hidden">
        {sectors.map((sector, index) => {
          const isExpanded = expandedSector === index;
          const IconComponent = sector.icon;

          return (
            <div
              key={index}
              className={`flex-1 lg:flex-none transition-all duration-500 ease-in-out cursor-pointer group shadow-sm ${
                isAnyExpanded 
                  ? (isExpanded ? 'lg:w-2/3 shadow-md' : 'lg:w-1/6') 
                  : 'lg:w-1/3'
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
              onClick={() => setExpandedSector(prev => prev === index ? null : index)}
            >
              <div className={`h-full flex flex-col rounded-xl p-4 border transition-all duration-500 group-hover:shadow-md ${
                isExpanded 
                  ? 'bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-800 border-blue-200 dark:border-blue-700' 
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}>
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 ${sector.color} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 truncate">{sector.name}</h4>
                </div>
                {!isExpanded ? (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Discover</p>
                ) : (
                  <div className="space-y-2">
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1 list-disc pl-4">
                      {sector.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                    {/* Per-sector Learn More link */}
                    <div className="mt-3">
                      <Link
                        to={
                          index === 0
                            ? '/mechanical'
                            : index === 1
                            ? '/agriculture'
                            : '/civil'
                        }
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm transition-colors">
                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ServicesSection = ({ services }) => {
  const [sectionRef, isSectionInView] = useInView(0.1);

  return (
    // <section id="services" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900" ref={sectionRef}>
    <section id="services" className="py-20 bg-white dark:from-gray-900 dark:to-blue-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-700 ease-out ${isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            What We Offer
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 transition-all duration-700 ease-out origin-left ${isSectionInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          <AnimatedText text="We offer quality services to our customers and have a team of experts in various fields. Our commitment to excellence ensures that we deliver the best solutions tailored to your needs." className="text-xl max-w-3xl mx-auto mb-6" />
          <AnimatedText text="Engineering is our main area of operation availing various services through it's major sectors of Mechanical, Civil and Agricultural engineering." className="text-xl max-w-3xl mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Render Engineering Services with special card */}
          {services.slice(0, 1).map((service, index) => {
            // resolve icon if service.icon is a string name
            const resolvedIcon = typeof service.icon === 'string'
              ? ( { HardHat, Settings, Hammer, Leaf }[service.icon] || Settings )
              : service.icon;

            return (
              <div key={index} className="md:col-span-3 lg:col-span-3">
                <AnimatedCard delay={0}>
                  <EngineeringServiceCard
                    icon={resolvedIcon}
                    title={service.title}
                    description={service.description.join(' ')}
                  />
                </AnimatedCard>
              </div>
            );
          })}

          {/* Plain centered statement between Engineering Services and Civil Works */}
          <div className="md:col-span-3 text-center">
            <AnimatedText text="Through Engineering, we offer;" className="text-lg font-medium text-black mx-auto" />
          </div>

          {/* Render remaining services */}
          {services.slice(1).map((service, index) => (
            <AnimatedCard key={index + 1} delay={(index + 1) * 0.2}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description.join(' ')}
                link={service.link}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;