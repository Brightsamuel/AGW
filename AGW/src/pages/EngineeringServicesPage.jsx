import React, { useEffect, useState } from "react";

const images = [
  "/images/img10.jpg",
  "/images/img9.png",
  "/images/img2.jpg",
  // Add more image paths as needed
];

const EngineeringServicesPage = () => {
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
          Engineering Services
        </h1>
        <div className="mb-6 text-gray-700 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Mechanical Engineering</h2>
            <p>
              - Sales, Hire, Repairs and Spare parts for Excavators, Backhoe, Dozers, Heavy Trucks.
            </p>
            <p>
              - Repairs and spare parts for All lighgt Vehicles (Toyota, Hyundai, Volvo, Benz) etc.
            </p>
            <p>
              - Industrial Installation.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Agricultural Engineering</h2>
            <p>
              - Heavy machinery for Agriculture (Repair, Hire and Sales & Spare parts) of Tractors.
            </p>
            <p>
              - Irrigation Engineering & systems. Water pumps, sprinklers etc.
            </p>
            <p>
              - Agricultural Civil Work. Fencing, minor construction, etc.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Civil Engineering</h2>
            <p>
              - Building Construction.
            </p>
            <p>
              - Basement Construction.
            </p>
            <p>
              - Bathroom Remodelling.
            </p>
            <p>
              - Demolition.
            </p>
            <p>
              - Painting.
            </p>
            <p>
              - Concrete Work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringServicesPage;