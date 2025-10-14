import { useState, useEffect, useRef } from 'react';
import { Users, Award, MapPin, Shield, HandCoins, Target, Gem } from 'lucide-react';

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

const AnimatedText = ({ text = '', className = "text-gray-600 leading-relaxed", style = {} }) => {
  const [textRef, isTextInView] = useInView(0.2);
  const words = (text || '').split(' ').filter(Boolean);

  return (
    <div ref={textRef} className={className} style={style}>
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
      <div className="h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  const [heroRef, isHeroInView] = useInView(0.0); // Trigger immediately for hero
  const [mainRef, isMainInView] = useInView(0.1);
  const [valuesRef, isValuesInView] = useInView(0.1);
  const [regRef, isRegInView] = useInView(0.1);

  const introTexts = [
    "Admirals Group is a trusted, award-winning leader in Engineering Services and Technology in East Africa .",
    "For several years, we've established a reputation for innovative and efficient engineering capabilities across our core fields: Automotive, Mechanical, Civil, Mining, Manufacturing, and Agriculture. We are your comprehensive partner for technical excellence.",
    "URSB No. 80034478937723.",
    "Address: P.O.Box 152099, Kampala Uganda",
    "Original Shauriyako Plaza, Nakivubo Lane. Kampala Business District."
  ];

  const coreValues = [
    { icon: HandCoins, title: "Value for Money", desc: "We sell quality products at competitive prices.", color: "text-blue-400" },
    { icon: Target, title: "Commitment", desc: "We ensure that our products are delivered on time and in good condition.", color: "text-green-400" },
    { icon: Shield, title: "Safety", desc: "Your Safelty is our concern.", color: "text-purple-400" },
    { icon: Gem, title: "Quality", desc: "Maintaining high quality is our commitment.", color: "text-orange-400" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section
        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white py-16 md:py-24 overflow-hidden"
        style={{ backgroundImage: "url('/images/img1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div ref={heroRef} className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 opacity-80 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 ease-out ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            About Us
          </h1>
          <p className={`text-lg md:text-2xl font-light transition-all duration-700 ease-out ${isHeroInView ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'}`}>
            Engineering Tomorrow, Building Today.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16" ref={mainRef}>
            <div className={`bg-white rounded-2xl shadow-lg p-6 md:p-12 transition-all duration-700 ease-out ${isMainInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Admirals Group
              </h2>
              <div className="space-y-5">
                {introTexts.map((text, index) => (
                  <AnimatedText 
                    key={index} 
                    text={text} 
                    className="text-gray-600 leading-relaxed"
                    style={{ transitionDelay: `${index * 0.3}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 mb-12 md:mb-16 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedCard delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Users className="w-7 h-7 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Key Technical Personnel</h3>
                </div>
                <p className="text-gray-600 flex-1">
                  Our administrative team is composed of Administrators, associate telecom/civil engineers, and a network of support staff, available on call and therefore easy to mobilize in the event of an urgent assignment. Through this diverse network, Admirals Group has a big reservoir of human capital giving it a cutting edge.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Award className="w-7 h-7 text-green-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Client Service Team</h3>
                </div>
                <p className="text-gray-600 flex-1">
                  In order to ensure timely service of required quality, the firm has assembled a service team of highly qualified and experienced professionals. The company has a training programme to ensure continuous professional growth of our staff and that new recruits get appropriate induction training to promote individual capacity in Excellence.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.6}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <MapPin className="w-7 h-7 text-purple-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Location</h3>
                </div>
                <p className="text-gray-600 flex-1">
                  Admirals Group's main office and extensive operational base is situated in Shauriyako Plaza Nakivubo Lane, Kampala Central (U). The office premises are well situated to enable assurance of storage of materials and are equipped with adequate security. The office is well equipped with all resources for ensuring adequate administrative works, processing and data management.
                </p>
              </div>
            </AnimatedCard>
          </div>

          <div ref={valuesRef} className={`bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 md:p-12 text-white mb-12 transition-all duration-700 ease-out ${isValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-all duration-700 ease-out">Our Core Values</h3>
              <p className="text-lg text-gray-300 transition-all duration-700 ease-out delay-200">
                Committed to offering the best in professional services
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                const visibleClass = isValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';
                return (
                  <div
                    key={index}
                    className={`text-center p-4 transition-all duration-500 ease-out ${visibleClass}`}
                    style={{ transitionDelay: `${isValuesInView ? index * 0.1 + 0.3 : 0}s` }}
                  >
                    {Icon ? <Icon className={`w-10 h-10 ${value.color} mx-auto mb-2`} /> : null}
                    <h4 className="font-semibold">{value.title}</h4>
                    <p className="text-lg text-gray-300">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={regRef} className={`mt-12 text-center transition-all duration-700 ease-out ${isRegInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-xl shadow-md p-6 inline-block">
              <p className="text-gray-600 font-medium">
                Company Registration Number: <span className="text-blue-600 font-bold">80034478937723</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">Incorporated in Uganda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;