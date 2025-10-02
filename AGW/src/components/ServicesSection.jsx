import ServiceCard from './ServiceCard'; // Import the new ServiceCard component

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer quality services to our customers and have a team of experts in various fields. Our commitment to excellence ensures that we deliver the best solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link} // Pass the link prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;