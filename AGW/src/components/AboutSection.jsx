import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

const AnimatedText = ({ text, className = "text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" }) => {
  const [textRef, isTextInView] = useInView(0.2); // Trigger when 20% of text is visible
  const words = text.split(' ');

  return (
    <div ref={textRef} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 translate-y-4 transition-all duration-300 ease-out ${isTextInView ? 'animate-slide-up opacity-100 translate-y-0' : ''}`}
          style={{ transitionDelay: `${index * 0.05}s` }} // Staggered delay for words
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

const AboutSection = () => {
  const [visionRef, isVisionInView] = useInView(0.1);
  const [missionRef, isMissionInView] = useInView(0.1);

  const visionText = "To lead the supply market by provide our customers with a great selection of high quality Products and services";
  const missionText = "To enhance and enlarge our product range continuously, to ensure the highest quality, to offer the best logistics services, together with optimum prices while paying maximum attention to the protection of environment and personnel safety.";

  return (
    <section id="about" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center" ref={visionRef}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ease-out ${isVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Vision
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 transition-all duration-700 ease-out ${isVisionInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 origin-center'}`}></div>
        
        <AnimatedText text={visionText} />
      </div>

      <div className="max-w-4xl mx-auto text-center" ref={missionRef}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ease-out ${isMissionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Mision
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 transition-all duration-700 ease-out ${isMissionInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 origin-center'}`}></div>
        
        <AnimatedText text={missionText} />
      </div>
      
      {/* <Link 
        to="/about-us" 
        className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg group"
      >
        Learn More About Us
        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </Link> */}
    </section>
  );
};

export default AboutSection;