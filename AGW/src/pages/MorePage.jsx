import { Code, GitBranch, Laptop, Users, Award, Zap, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const MorePage = () => {
  const projects = [
    {
      title: "Project 0",
      description: "project 0",
      link: "#",
      icon: Laptop,
    },
    {
      title: "Project 1",
      description: "project 1",
      link: "#",
      icon: BookOpen,
    },
    {
      title: "Project 2",
      description: "project 2",
      link: "#",
      icon: Zap,
    },
    {
      title: "Project 3",
      description: "project 3",
      link: "#",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Code size={64} className="mx-auto mb-6" />
          {/* <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
            
          </h1> */}
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Igniting passion, fostering innovation, and Landmark the future to a prosperity.
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Meet the our expert team, a group of dedicated individuals committed to excellence in coding and technology. Our team is passionate about creating innovative solutions that make a difference in the world.
          </p>
          <Link
            to="/contactus"
            className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Reach out to us!
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12"></h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <GitBranch size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                <Link to="/hse">HSE</Link>
              </h3>
              <p className="text-gray-600">
                Work on real-world projects, from web development to mobile apps, Landmark a strong portfolio.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <Users size={48} className="text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                <Link to="/team">Organisation Structure</Link>
              </h3>
              <p className="text-gray-600">
                Learn from peers and mentors, fostering teamwork and problem-solving skills.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <Award size={48} className="text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                <Link to="/certification">Certification</Link>
              </h3>
              <p className="text-gray-600">
                Stay updated with the latest tech trends and develop skills for future careers in tech.
              </p>
            </div>
            {/* Career Tab */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <Laptop size={48} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                <Link to="/career">Career</Link>
              </h3>
              <p className="text-gray-600">
                Explore exciting career opportunities and join our dynamic team to make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {project.icon && <project.icon size={32} className="text-blue-600" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center mt-auto">
                    View Project <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Have Further Questions</h2>
          <p className="text-xl opacity-80 mb-8">
            Reach out to our team for any inquiries or to learn more about our services and projects.
          </p>
          <Link to="/contactus" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MorePage;