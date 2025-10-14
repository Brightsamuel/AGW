import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, TrendingUp, Heart, Award, MapPin, Clock, DollarSign, ChevronRight, X } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf6EE_iyaJmw3bqbG9_mtMeFTj-x-UwXWDO6AmMJx6sWQIA_w/viewform?usp=dialog';

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

const jobOpenings = [
  {
    title: "Diploma Vehicle Mechanic",
    positions: 2,
    category: "Engineering",
    location: "Kampala, Uganda",
    type: "Full-time",
    description: "Seeking experienced Diploma Vehicle Mechanics with 2+ years in heavy machinery maintenance. Responsibilities include diagnostics, repairs, preventive maintenance of tractors and agricultural equipment, welding, and fabrication support. Must have strong problem-solving skills and ability to work independently on-site.",
    requirements: [
      "Diploma in Mechanical Engineering or related field",
      "2+ years experience in heavy machinery maintenance",
      "Proficiency in diagnostics and repairs",
      "Welding and fabrication skills",
      "Valid driving license preferred"
    ],
    applyLink: GOOGLE_FORM_URL,
  },
  {
    title: "CPA Certified Accountant",
    positions: 1,
    category: "Finance",
    location: "Kampala, Uganda",
    type: "Full-time",
    description: "Looking for a CPA-certified accountant with 3+ years experience in financial reporting, tax compliance, and budgeting. Responsibilities include managing accounts payable/receivable, preparing financial statements, conducting audits, and ensuring regulatory compliance. Proficiency in accounting software and strong analytical skills required.",
    requirements: [
      "CPA certification required",
      "3+ years in financial reporting and tax compliance",
      "Experience with accounting software (QuickBooks, Sage)",
      "Strong analytical and problem-solving skills",
      "Excellent attention to detail"
    ],
    applyLink: GOOGLE_FORM_URL,
  },
  {
    title: "Construction Engineer",
    positions: 1,
    category: "Engineering",
    location: "Kampala, Uganda",
    type: "Full-time",
    description: "Seeking a qualified Construction Engineer with a Bachelor's degree and 2+ years experience in building construction and civil works. Responsibilities include supervising construction sites, coordinating with contractors, ensuring quality standards, managing concrete works, basement construction, and overseeing painting and demolition projects. Knowledge of AutoCAD and construction management software essential.",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "2+ years in construction project management",
      "Proficiency in AutoCAD and project management tools",
      "Strong leadership and coordination skills",
      "Knowledge of local building codes and regulations"
    ],
    applyLink: GOOGLE_FORM_URL,
  },
  {
    title: "Drilling Engineer",
    positions: 1,
    category: "Engineering",
    location: "Various Sites",
    type: "Full-time",
    description: "Hiring experienced Drilling Engineers with technical certification and 2+ years in borehole drilling and water well installation. Responsibilities include operating drilling equipment, conducting site assessments, installing irrigation systems, maintaining drilling machinery, reading geological surveys, and ensuring safety compliance. Experience with water pumps and irrigation engineering preferred.",
    requirements: [
      "Technical certification in drilling operations",
      "2+ years in borehole drilling and well installation",
      "Experience with irrigation systems and water pumps",
      "Ability to read geological surveys",
      "Strong safety awareness and compliance"
    ],
    applyLink: GOOGLE_FORM_URL,
  },
  {
    title: "Excavator Operator",
    positions: 1,
    category: "Operations",
    location: "Various Sites",
    type: "Full-time",
    description: "Looking for skilled Excavator Operators with valid operator's license and 1+ year operating heavy excavation machinery. Responsibilities include earth moving, site preparation, trenching for foundations, operating bulldozers and excavators, performing routine equipment inspections, and supporting construction and agricultural projects. Strong safety awareness and ability to read site plans required.",
    requirements: [
      "Valid heavy equipment operator's license",
      "1+ year operating excavators and bulldozers",
      "Ability to read site plans and blueprints",
      "Strong safety record and awareness",
      "Physical fitness and stamina"
    ],
    applyLink: GOOGLE_FORM_URL,
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Market-leading compensation packages with performance bonuses"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career progression paths with training and development programs"
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health insurance coverage for you and your family"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment where innovation and ideas are valued"
  }
];

const BenefitCard = ({ benefit, index }) => {
  const [cardRef, cardInView] = useInView(0.1);
  const Icon = benefit.icon;
  
  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
      </div>
    </div>
  );
};

const JobCard = ({ job, index, onApply }) => {
  const [cardRef, cardInView] = useInView(0.1);
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              {job.positions} {job.positions > 1 ? 'Positions' : 'Position'}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="flex items-center bg-white/10 px-3 py-1 rounded-full">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </span>
            <span className="flex items-center bg-white/10 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 mr-1" />
              {job.type}
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              {job.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex-grow">
          <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>
          
          {isExpanded && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
              <ul className="space-y-2">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm mb-4 flex items-center"
          >
            {isExpanded ? 'Show Less' : 'View Requirements'}
            <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>

        <div className="p-6 pt-0">
          <button
            onClick={onApply}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

const CareerPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalLink, setModalLink] = useState('');
  const [modalJob, setModalJob] = useState('');
  const [heroRef, heroInView] = useInView(0.1);
  const [benefitsRef, benefitsInView] = useInView(0.1);

  const openApplyModal = (jobTitle, link) => {
    setModalJob(jobTitle);
    setModalLink(link);
    setShowModal(true);
  };

  const confirmRedirect = () => {
    setShowModal(false);
    if (modalLink) window.open(modalLink, '_blank', 'noopener');
  };

  const cancelModal = () => {
    setShowModal(false);
    setModalJob('');
    setModalLink('');
  };

  const handleContactClick = () => {
    window.location.href = '/contactus';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <section className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div ref={heroRef} className="max-w-5xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Briefcase size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Build Your Career with Admirals Group
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl opacity-95 mb-4 max-w-3xl mx-auto leading-relaxed">
              Join a team where innovation meets excellence, and your skills drive real-world impact
            </p>
            <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed">
              We're seeking talented professionals passionate about engineering, technology, and making a difference
            </p>
          </div>
        </div>
      </section>

      <section ref={benefitsRef} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Join Admirals Group?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a job – it's a career journey with purpose and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Current Openings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities across engineering, finance, and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <JobCard
                key={index}
                job={job}
                index={index}
                onApply={() => openApplyModal(job.title, job.applyLink)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Application Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Submit Application", desc: "Complete our online form with your CV and cover letter" },
              { step: "02", title: "Review & Interview", desc: "Our team will review applications and contact shortlisted candidates" },
              { step: "03", title: "Welcome Aboard", desc: "Successful candidates receive offers and join our team" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-100 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              Application Requirements
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Updated CV highlighting relevant experience and qualifications</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Cover letter explaining your interest and fit for the role</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Contact information including email and phone number</span>
              </li>
              <li className="flex items-start text-xs text-gray-600 mt-3">
                <span className="font-medium">Note: Google account may be required for file uploads</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't See the Right Fit?</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            We're always interested in connecting with talented professionals. Reach out to discuss future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <button
                onClick={cancelModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3">You're Leaving This Site</h3>
            <p className="text-gray-600 mb-2">
              You will be redirected to Google Forms to complete your application for:
            </p>
            <p className="font-semibold text-blue-600 mb-4">{modalJob}</p>
            <p className="text-sm text-gray-500 mb-6">
              Google may require you to sign in to upload your CV and cover letter.
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={cancelModal}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmRedirect}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;