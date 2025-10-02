import { Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Briefcase size={56} className="mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Organization Structure</h1>
          <p className="text-lg md:text-2xl opacity-90 mb-6">
            Overview of Admirals Group Company's hierarchical structure.
          </p>
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
            Our organization is structured to ensure efficient operations in telecom infrastructure, fiber optics, energy solutions, and HSE compliance.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Organizational Chart */}
          <div className="container max-w-5xl mx-auto p-4">
            {/* Level 1: Board of Directors */}
            <h1 className="level-1 rectangle bg-green-400 text-center font-bold text-lg p-4 relative shadow-lg mx-auto w-1/2 mb-10 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
              Board of Directors
            </h1>

            {/* Level 2: General Manager and Chief Financial Officer */}
            <ol className="level-2-wrapper grid grid-cols-2 gap-8 relative before:content-[''] before:absolute before:-top-5 before:left-[25%] before:w-[50%] before:h-[2px] before:bg-black">
              <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                <h2 className="level-2 rectangle bg-green-400 text-center font-bold text-lg p-4 relative shadow-lg mx-auto w-3/4 mb-10 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                  General Manager
                </h2>

                {/* Level 3: Engineering Manager, Operations Manager, HSE Manager */}
                <ol className="level-3-wrapper grid grid-cols-3 gap-4 relative before:content-[''] before:absolute before:-top-5 before:left-[16.67%] before:w-[66.66%] before:h-[2px] before:bg-black">
                  <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                    <h3 className="level-3 rectangle bg-blue-400 text-center font-bold text-lg p-4 relative shadow-lg mx-auto w-full mb-10 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                      Engineering Manager
                    </h3>

                    {/* Level 4: Electrical Engineer, Mechanical Engineer, Civil Engineer */}
                    <ol className="level-4-wrapper grid grid-cols-3 gap-4 relative before:content-[''] before:absolute before:-top-5 before:left-[16.67%] before:w-[66.66%] before:h-[2px] before:bg-black">
                      <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                        <h4 className="level-4 rectangle bg-indigo-600 text-white text-center font-bold text-lg p-4 relative shadow-lg before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                          Electrical Engineer
                        </h4>
                        <ol className="level-5-wrapper grid grid-cols-1 relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:w-[2px] before:h-5 before:bg-black">
                          <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                            <h5 className="level-5 rectangle bg-red-400 text-white text-center font-bold text-lg p-4 relative shadow-lg">
                              Electrical Technicians
                            </h5>
                          </li>
                        </ol>
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                        <h4 className="level-4 rectangle bg-indigo-600 text-white text-center font-bold text-lg p-4 relative shadow-lg before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                          Mechanical Engineer
                        </h4>
                        <ol className="level-5-wrapper grid grid-cols-1 relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:w-[2px] before:h-5 before:bg-black">
                          <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                            <h5 className="level-5 rectangle bg-blue-400 text-white text-center font-bold text-lg p-4 relative shadow-lg">
                              Mechanical Technicians
                            </h5>
                          </li>
                        </ol>
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                        <h4 className="level-4 rectangle bg-indigo-600 text-white text-center font-bold text-lg p-4 relative shadow-lg before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                          Civil Engineer
                        </h4>
                        <ol className="level-5-wrapper grid grid-cols-1 relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:w-[2px] before:h-5 before:bg-black">
                          <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                            <h5 className="level-5 rectangle bg-indigo-600 text-white text-center font-bold text-lg p-4 relative shadow-lg">
                              Civil Technicians
                            </h5>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                    <h3 className="level-3 rectangle bg-orange-400 text-white text-center font-bold text-lg p-4 relative shadow-lg mx-auto w-full mb-10 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                      Operations Manager
                    </h3>

                    {/* Level 4: Projects’ Coordinator, Store Keeper, Sales Executives */}
                    <ol className="level-4-wrapper grid grid-cols-3 gap-4 relative before:content-[''] before:absolute before:-top-5 before:left-[16.67%] before:w-[66.66%] before:h-[2px] before:bg-black">
                      <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                        <h4 className="level-4 rectangle bg-green-400 text-center font-bold text-lg p-4 relative shadow-lg">
                          Projects’ Coordinator
                        </h4>
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                        <h4 className="level-4 rectangle bg-green-400 text-center font-bold text-lg p-4 relative shadow-lg before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                          Store Keeper
                        </h4>
                        <ol className="level-5-wrapper grid grid-cols-1 relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:w-[2px] before:h-5 before:bg-black">
                          <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                            <h5 className="level-5 rectangle bg-gray-400 text-center font-bold text-lg p-4 relative shadow-lg">
                              Office Attendant
                            </h5>
                          </li>
                        </ol>
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                        <h4 className="level-4 rectangle bg-green-400 text-center font-bold text-lg p-4 relative shadow-lg">
                          Sales Executives
                        </h4>
                      </li>
                    </ol>
                  </li>
                  <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                    <h3 className="level-3 rectangle bg-red-400 text-white text-center font-bold text-lg p-4 relative shadow-lg mx-auto w-full mb-10 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                      HSE Manager
                    </h3>

                    {/* Level 4: Safety Coordinator, First Aider */}
                    <ol className="level-4-wrapper grid grid-cols-2 gap-4 relative before:content-[''] before:absolute before:-top-5 before:left-1/4 before:w-1/2 before:h-[2px] before:bg-black">
                      <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                        <h4 className="level-4 rectangle bg-red-400 text-white text-center font-bold text-lg p-4 relative shadow-lg">
                          Safety Coordinator
                        </h4>
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                        <h4 className="level-4 rectangle bg-red-400 text-white text-center font-bold text-lg p-4 relative shadow-lg">
                          First Aider
                        </h4>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li className="relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:h-5 before:bg-black">
                <h2 className="level-2 rectangle bg-green-400 text-center font-bold text-lg p-4 relative shadow-lg mx-auto w-3/4 mb-10">
                  Chief Financial Officer
                </h2>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More About Us</h2>
          <p className="text-lg opacity-80 mb-8">
            Explore how Admirals Group's structure supports our mission and services.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Meet the team <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Custom CSS for rectangles (simulating boxes in the chart)
const styles = `
  .rectangle {
    position: relative;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }
  .rectangle:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 640px) {
    .level-2-wrapper, .level-3-wrapper, .level-4-wrapper, .level-5-wrapper {
      grid-template-columns: 1fr;
    }
    .level-2-wrapper:before, .level-3-wrapper:before, .level-4-wrapper:before, .level-5-wrapper:before {
      left: 50%;
      width: [2px];
      height: 5px;
    }
  }
`;

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);
document.adoptedStyleSheets = [styleSheet];

export default TeamPage;