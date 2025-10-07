import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = ({ contactInfo }) => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready for our service? Contact us today to find out more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            {
              // Build Google Maps search URL for the business/address string
            }
            {(() => {
              const businessQuery = encodeURIComponent('Admirals Group: EXCAVATOR , HEAVY TRUCKS, Drilling Rigs and SPAREPARTS, Kampala UGANDA');
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${businessQuery}`;
              return (
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-300">
                    {contactInfo.location.address1}<br />
                    {contactInfo.location.address2}
                  </p>
                </a>
              );
            })()}
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            {contactInfo.phone.map((number, index) => {
              // Normalize phone number for tel: (remove spaces)
              const tel = number.replace(/\s+/g, '');
              return (
                <p key={index} className="text-gray-300">
                  <a href={`tel:${tel}`} className="hover:underline">{number}</a>
                </p>
              );
            })}
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            {contactInfo.email.map((email, index) => (
                <p key={index} className="text-gray-300"><a href={`mailto:${email}`} className="hover:underline">{email}</a></p>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default ContactSection;