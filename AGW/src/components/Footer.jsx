const Footer = ({ companyName }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <span className="font-bold text-lg">{companyName}</span>
            <span className="text-blue-400 text-sm mt-1 italic">Engineering Tomorrow, Building Today</span>
          </div>
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;