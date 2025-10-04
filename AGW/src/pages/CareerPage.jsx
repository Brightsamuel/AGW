import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import CareerCard from '../components/CareerCard';

// Shared Google Form URL provided by the user
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf6EE_iyaJmw3bqbG9_mtMeFTj-x-UwXWDO6AmMJx6sWQIA_w/viewform?usp=dialog';
const jobOpenings = [
  {
    title: "Diploma Vehicle Mechanic",
    positions: 2,
    description: "We are hiring 2 Diploma Vehicle Mechanics to join our team. Responsibilities include vehicle repairs, maintenance, and supporting engineering projects.",
    applyLink: GOOGLE_FORM_URL,
  },
  {
    title: "CPA Certified Accountant",
    positions: 1,
    description: "We are hiring a CPA Certified Accountant to manage financial operations, ensuring compliance and efficiency in our growing organization.",
    applyLink: GOOGLE_FORM_URL,
  },
];

const CareerPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalLink, setModalLink] = useState('');
  const [modalJob, setModalJob] = useState('');

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
                onApply={() => openApplyModal(job.title, job.applyLink)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">You are leaving this site</h3>
            <p className="mb-4">You will be redirected to Google Forms to complete your application for <strong>{modalJob}</strong>. Google may require sign-in to upload files (CV, cover letter).</p>
            <div className="flex justify-end space-x-3">
              <button onClick={cancelModal} className="px-4 py-2 rounded border">Cancel</button>
              <button onClick={confirmRedirect} className="px-4 py-2 rounded bg-blue-600 text-white">Continue to Form</button>
            </div>
          </div>
        </div>
      )}

      <section className="bg-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl opacity-80 mb-8">
            Submit your application now.
          </p>
            <p className="text-sm text-gray-300 mb-6 max-w-xl mx-auto">
              The Apply button will take you to a Google Form where applicants should provide: full name, contact email, phone, how you heard about us, a short cover letter (file upload allowed), and your CV (file upload allowed). Note: Google may require sign-in to upload files.
            </p>
          <Link to="/contactus" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us for any further inquiries.
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;