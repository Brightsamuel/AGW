import React from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import CareerCard from '../components/CareerCard';

const jobOpenings = [
  {
    title: "Diploma Vehicle Mechanic",
    positions: 2,
    description: "We are hiring 2 Diploma Vehicle Mechanics to join our team. Responsibilities include vehicle repairs, maintenance, and supporting engineering projects.",
    applyLink: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform", // Replace with actual Google Form link
  },
  {
    title: "CPA Certified Accountant",
    positions: 1,
    description: "We are hiring a CPA Certified Accountant to manage financial operations, ensuring compliance and efficiency in our growing organization.",
    applyLink: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform", // Replace with actual Google Form link
  },
];

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Briefcase size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
            Careers at Admirals Group
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Join our team and contribute to innovative projects.
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            We are looking for talented individuals who are passionate about technology and partnership.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Current Openings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <CareerCard
                key={index}
                title={job.title}
                positions={job.positions}
                description={job.description}
                applyLink={job.applyLink}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl opacity-80 mb-8">
            Submit your application through our online form.
          </p>
          <Link to="/contactus" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us for any inquiries.
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;