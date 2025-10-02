import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';

const CareerCard = ({ title, positions, description, applyLink }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
        <Briefcase className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-2">Positions Available: {positions}</p>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      <a 
        href={applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center"
      >
        Apply Now <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

export default CareerCard;