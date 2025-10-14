import { useState, useEffect, useRef } from 'react';
import { Code, GitBranch, Laptop, Users, Award, Eye, Target, ArrowRight, Sparkles } from 'lucide-react';

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

const AnimatedCard = ({ children, delay = 0 }) => {
  const [cardRef, isCardInView] = useInView(0.1);

  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${isCardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const MorePage = () => {
  const [heroRef, isHeroInView] = useInView(0);

  const navigationCards = [
    {
      title: "HSE",
      description: "Comprehensive Health, Safety, and Environment protocols ensuring workplace excellence and regulatory compliance.",
      link: "/hse",
      icon: GitBranch,
      gradient: "from-blue-500 to-cyan-600",
      hoverGradient: "hover:from-blue-600 hover:to-cyan-700"
    },
    {
      title: "Organisation Structure",
      description: "Discover our organizational framework, team hierarchy, and the experts driving innovation forward.",
      link: "/team",
      icon: Users,
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "hover:from-purple-600 hover:to-pink-700"
    },
    {
      title: "Certification",
      description: "View our professional certifications, accreditations, and industry recognitions validating our expertise.",
      link: "#",
      icon: Award,
      gradient: "from-orange-500 to-red-600",
      hoverGradient: "hover:from-orange-600 hover:to-red-700"
    },
    {
      title: "Career",
      description: "Join our dynamic team and explore exciting career opportunities to grow and make an impact.",
      link: "/career",
      icon: Laptop,
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "hover:from-green-600 hover:to-emerald-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-32 pb-20 px-4 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Explore More About Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
              Beyond Engineering
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-4 max-w-3xl mx-auto font-light">
              Igniting passion, fostering innovation, and building landmarks for a prosperous future.
            </p>
            
            <p className="text-lg opacity-75 max-w-2xl mx-auto leading-relaxed">
              Discover our vision, meet our expert team, and explore the values that drive us to deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Direction</h2>
              <p className="text-xl text-gray-600">Guided by purpose, driven by excellence</p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <AnimatedCard delay={0.3}>
              <div className="group relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white h-full overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-white/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <Eye className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-lg leading-relaxed opacity-95">
                    To lead the supply market by provide our customers with a great selection of high quality Products and services.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 text-white h-full overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-white/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-lg leading-relaxed opacity-95">
                    To enhance and enlarge our product range continuously, to ensure the highest quality, to offer the best logistics services, together with optimum prices while paying maximum attention to the protection of environment and personnel safety.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Navigation Cards */}
          <AnimatedCard delay={0.5}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Explore More</h2>
              <p className="text-xl text-gray-600">Dive deeper into what makes us exceptional</p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {navigationCards.map((card, index) => (
              <AnimatedCard key={index} delay={0.6 + index * 0.1}>
                <a href={card.link} className="block group">
                  <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden border-2 border-transparent hover:border-gray-100`}>
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${card.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        {card.title}
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl md:text-2xl opacity-90 mb-10 leading-relaxed">
            Reach out to our team for inquiries or to learn more about our services, projects, and how we can help bring your vision to life.
          </p>
          <a 
            href="/contactus" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default MorePage;