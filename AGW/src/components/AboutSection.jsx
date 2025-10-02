import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Vision
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        
        {/* <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          ...
        </p> */}
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          To lead the supply market by provide our customers with a great selection of high quality Products and services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Mision
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          To enhance and enlarge our product range continuously, to ensure the highest quality, to offer the best
          logistics services, together with optimum prices while paying maximum attention to the protection of
          environment and personnel safety.
        </p>
        
        <Link 
          to="/about-us" 
          className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg group"
        >
          Learn More About Us
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;