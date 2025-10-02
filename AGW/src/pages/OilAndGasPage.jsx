import React, { useEffect, useState } from "react";

const images = [
  "/images/img7.jpeg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  // Add more image paths as needed
];

const FibreOpticSolutions = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center pt-20" 
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
          Oil and Gas
        </h1>
        <p className="mb-6 text-gray-700">
          We work closely with our clients to ensure that fiber optic solutions meet their specific needs, no matter how unusual or complex the environment. Our mission for every fiber optic installation is to provide the most efficient and robust network possible.
        </p>
        <p className="mb-6 text-gray-700">
          We support our customers to expand their fiber network business by optimizing design and planning.
        </p>
        <div className="mb-4">
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Fiber Optic Equipment Supply:</span> We offer high-quality fiber optic materials from test equipment, bulk cable, and fusion splicers to tools, patch cables, and consumables.
            </li>
            <li>
              <span className="font-semibold">Engineering Service:</span> The different engineering services include projects optical budget, support on the best choice and supply of both active and passive resources for fiber projects.
            </li>
            <li>
              <span className="font-semibold">Consulting:</span> We provide services to our subsidiaries to support them in their projects. Services that include engineering of a project, qualified training for their teams, and process development. The Group Fiber Optic Department can fully support Netis on their endeavors.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const OilAndGasPage = () => <FibreOpticSolutions />;

export default OilAndGasPage;

