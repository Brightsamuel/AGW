const Footer = ({ companyName }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">          
            <span className="font-bold text-lg">{companyName}</span>
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