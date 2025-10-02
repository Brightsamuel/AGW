import { Link } from 'react-router-dom';

const hseSections = [
  {
    title: "The topics include:",
    description: [
      "Performance Improvement",
      "Personal Protection",
      "Regulatory Compliance",
      "HSE Culture Development",
      "Healthier Workspaces",
      "Accident-free Work",
      "Hazard Control",
      "Reduced Environmental Impact",
    ],
  },
];

const HSEPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16 px-4 text-center overflow-hidden"
        style={{ backgroundImage: "url('/images/img16.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay for gradient and darkening effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-indigo-900 opacity-80 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            HSE STRATEGY AND CONSULTANCY
          </h1>
          <p className="text-lg md:text-2xl opacity-90 mb-6">
            Committed to the well-being of our people and the planet.
          </p>
          <p className="text-base opacity-80 max-w-2xl mx-auto">
            Sharing our expertise, we help you clarify your HSE goals and objectives and create a customized roadmap to achieving them.
          </p>
        </div>
      </section>

      {/* HSE Sections */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {hseSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 flex items-center">
                {section.icon} {section.title}
              </h2>
              <ul className="text-gray-600 list-disc list-inside">
                {section.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More About Us</h2>
          <p className="text-lg opacity-80 mb-8">
            Discover how our HSE policies support our mission and services.
          </p>
          <Link
            to="/about-us"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HSEPage;