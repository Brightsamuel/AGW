import { Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Award size={56} className="mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Admirals Group Certification</h1>
          <p className="text-lg md:text-2xl opacity-90 mb-6">
            Highlighting our commitment to excellence and quality.
          </p>
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
            This certification reflects Admirals Group's dedication to delivering high-quality services.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center max-w-2xl">
              <div className="mb-5">
                <img src="/images/img8.png" alt="Admirals Group Certification" className="w-full h-auto max-h-96 object-contain" />
              </div>
              {/* <h3 className="text-xl font-bold text-gray-800 mb-2">Admirals Group Certification</h3>
              <p className="text-gray-600 text-sm">View our official certification document.</p> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More About Us</h2>
          <p className="text-lg opacity-80 mb-8">
            Explore how our certifications support our mission and services.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            About Us <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CertificationPage;