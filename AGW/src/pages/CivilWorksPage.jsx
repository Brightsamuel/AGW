import React, { useEffect, useState } from "react";

const images = [
  "/images/img12.png",
  "/images/img13.png",
  "/images/img7.png",
  // Add more image paths as needed
];

const TelecomInfrastructure = () => {
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
          Civil Works
        </h1>
        <p className="mb-6 text-gray-700">
          Admirals Groupprovides a comprehensive and integrated approach to support the telecom infrastructure. We are experts in site deployments and we could develop during the last years a comprehensive understanding of the requirements and challenges of telecom operators. We offer a new approach to designing, building, and deploying telecom network infrastructure.
        </p>
        <p className="mb-6 text-gray-700">
          We seek long-term and win-win partnerships with telecom and mobile network operators and infrastructure companies by achieving exceptional performance, respecting deadlines and guaranteeing the highest standards in quality and safety.
        </p>
        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Site Inspection &amp; Mapping:</span> Inspection and infrastructure mapping services are very important to guarantee safety, quality, and staying on schedule for our wireless customers.
          </li>
          <li>
            <span className="font-semibold">Structural Analysis &amp; Solutions:</span> We provide the most comprehensive and cost-efficient structural designs for our clients due to our expertise in structural design, construction, and modification reinforcement.
          </li>
          <li>
            <span className="font-semibold">Steelwork &amp; Site Installation:</span> Our fabrication facilities have been specifically designed for manufacturing strong towers, poles, guyed masts, and associated products and providing installation services to any location in Africa.
          </li>
          <li>
            <span className="font-semibold">Maintenance and Monitoring:</span> We work on planned inspections and repairs during the life of the structure considering the local conditions, service requirements and environmental stresses.
          </li>
        </ul>
      </div>
    </div>
  );
};

const CivilWorksPage = () => <TelecomInfrastructure />;

export default CivilWorksPage;