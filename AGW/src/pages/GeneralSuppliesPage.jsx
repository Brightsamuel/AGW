import React, { useEffect, useState } from "react";

const images = [
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img2.jpg",
  // Add more image paths as needed
];

const GeneralSuppliesPage = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center pt-20" // <-- Added pt-20
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-3xl mx-auto p-8 rounded-lg shadow-lg bg-white bg-opacity-90">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          General Supplies
        </h1>
        <div className="mb-6 text-gray-700 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Supplis</h2>
            <p>
              Bericot is a Telecom Power Solutions provider for many of Africa’s major operators. Our power management solutions incorporate control, management, and cooling systems. Where power is unreliable or unavailable, our energy power solutions ensure telecom services by combining solar & wind power, diesel generators, and fuel cells.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Industrial Energy Solutions</h2>
            <p>
              We provide energy solutions for industrial companies, large-scale asset owners, and municipalities. Our experts can design an energy-as-a-service solution that matches your needs perfectly, including technology, energy production, and remote operations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Residential Energy Solutions</h2>
            <p>
              We focus on helping homes reduce their electricity costs using solar energy. With Bericot’s expertise in grid-tied solar systems, battery storage, and off-grid solar energy solutions, we can help you get the most out of your home’s potential for solar.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Energy Revolution with Smart Grids</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Building safe, secure, and efficient energy infrastructure in Africa by ensuring energy transition development and implementation of smart grids.
            </li>
            <li>
              Ensuring the transport, transformation, and distribution of energy by creating adapted energy infrastructure (design, construction, commissioning, and maintenance).
            </li>
            <li>
              Overhead and underground electrical transmission lines (EHV and HV).
            </li>
            <li>
              Electrical substations of electrical transformation (EHV and HV).
            </li>
            <li>
              Participation in the transformation of the energy sector towards renewable energies, specifically in wind power, by the construction of evacuation infrastructures.
            </li>
            <li>
              Maintenance and inspection in the field of energy infrastructure.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneralSuppliesPage;