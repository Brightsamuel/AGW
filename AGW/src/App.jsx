import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import AGWLogo from './AGW.png';
// import AboutSection from './components/AboutSection'; 
import AboutUsPage from './pages/AboutUsPage'; 
import ServicesSection from './components/ServicesSection';
import ContactPage from './pages/ContactPage';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MorePage from './pages/MorePage';
import CivilWorksPage from './pages/CivilWorksPage';
// import EngineeringServicesPage from './pages/EngineeringServicesPage';
import CivilEngPage from './pages/CivilEngPage';
import AgriculturalEngPage from './pages/AgriculturalEngPage';
import MechanicalEngPage from './pages/MechanicalEngPage';
import IndustrialInstallationsPage from './pages/IndustrialInstallationsPage';
import OilAndGasPage from './pages/OilAndGasPage';
import GeneralSuppliesPage from './pages/GeneralSuppliesPage';
import TeamPage from './pages/TeamPage';
import CertificationPage from './pages/CertificationPage';
import HSEPage from './pages/HSEPage';
import CareerPage from './pages/CareerPage';
// import ClientsPage from './pages/ClientsPage';
import ClientsSection from './components/ClientsSection';


import { heroSlides, servicesData, contactInfo, aboutContent, clientsData } from './data/websiteContent';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true); 
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setShowNavbar(false); 
    setTimeout(() => setShowNavbar(true), 800); 
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center space-x-2 py-2">
                <img src={AGWLogo} alt="Admirals Group Logo" className="h-20 w-auto object-contain" />
              </Link>

              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
                <Link to="/about-us" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</Link>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</button>
                <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Structure</Link>
                <Link to="/contactus" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle navigation menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">Home</Link>
                <Link to="/about-us" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">About Us</Link>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">Services</button>
                <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">Structure</Link>
                <Link to="/contactus" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes Defined */}
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection slides={heroSlides} />
              <ClientsSection clients={clientsData} />
              {/* <AboutSection content={aboutContent} /> */}
              <ServicesSection services={servicesData} />
              <ContactSection contactInfo={contactInfo} />
            </>
          } />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/more-info" element={<MorePage />} />
          <Route path="/civil-works" element={<CivilWorksPage />} />
          <Route path="/industrial-installations" element={<IndustrialInstallationsPage />} />
          <Route path="/agriculture" element={<AgriculturalEngPage />} />
          <Route path="/civil" element={<CivilEngPage />} />
          <Route path="/mechanical" element={<MechanicalEngPage />} />
          <Route path="/oil-and-gas" element={<OilAndGasPage />} />
          <Route path="/general-supplies" element={<GeneralSuppliesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/hse" element={<HSEPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} />
          {/* <Route path="/client" element={<ClientsPage />} /> */}
        </Routes>

  <Footer companyName="Admirals Group" />
      </div>
    </Router>
  );
};

export default App;