import React, { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AGWLogo from '../AGW.png';
import emailjs from '@emailjs/browser';

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, isInView]);

  return [ref, isInView];
};

const ContactCard = ({ icon: Icon, title, content, link, index }) => {
  const [cardRef, cardInView] = useInView(0.1);
  
  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{title}</h3>
        {link ? (
          <a href={link} className="text-blue-600 hover:text-blue-800 text-center block transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-gray-600 text-center text-sm">{content}</p>
        )}
      </div>
    </div>
  );
};

const ContactPage = () => {
  const formRef = useRef(null);
  const [formRef2, formInView] = useInView(0.1);
  const [contactCardsRef, contactCardsInView] = useInView(0.1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const description = form.description.value.trim();

    const phonePattern = /^\+\d{1,3}\s?\d{4,14}(?:\s\d+)*$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number including the country code (e.g. +256 780 225 155).');
      return;
    }

    const confirmSubmit = window.confirm('Are you sure you want to submit this form?');
    if (!confirmSubmit) return;

    setIsSubmitting(true);

    // EmailJS configuration - Replace with your actual credentials
    const SERVICE_ID = 'service_nvzgkxh';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
    const USER_ID = 'YOUR_USER_ID'; // Replace with your public key

    if (SERVICE_ID !== 'YOUR_SERVICE_ID' && TEMPLATE_ID !== 'YOUR_TEMPLATE_ID') {
      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
        alert('Message sent successfully! We will get back to you soon.');
        form.reset();
        setIsSubmitting(false);
        return;
      } catch (err) {
        console.error('EmailJS send error:', err);
        alert('There was an error sending your message. Opening your email client as fallback.');
      }
    }

    // Fallback to mailto
    const subject = encodeURIComponent(`Contact from ${firstName} ${lastName}`);
    const bodyLines = [];
    if (firstName || lastName) bodyLines.push(`Name: ${firstName} ${lastName}`);
    if (email) bodyLines.push(`Email: ${email}`);
    if (phone) bodyLines.push(`Phone: ${phone}`);
    if (description) bodyLines.push(`\nDescription:\n${description}`);
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:admiralsgroupcoltd@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "0200 969 992",
      link: "tel:0200969992"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "admiralsgroupcoltd@gmail.com",
      link: "mailto:admiralsgroupcoltd@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM",
      link: null
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Kampala Uganda",
      link: "https://www.google.com/maps?q=Admirals+Group,+Excavator,+Heavy+Trucks,+Drilling+Rigs+%26+Spare+Parts,+Uganda"
     }

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-800 to-indigo-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link to="/" className="inline-block mb-8 transform hover:scale-105 transition-transform duration-300">
            <img src={AGWLogo} alt="Admirals Group Logo" className="h-24 w-auto mx-auto drop-shadow-2xl" />
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your next project? We're here to help. Reach out to our team for any inquiries or consultations.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section ref={contactCardsRef} className="py-16 px-4 -mt-12 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Let's Work Together
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Whether you need engineering services, equipment repair, or consultation, our experienced team is ready to assist you. Fill out the form and we'll respond within 24 hours.
                </p>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-3 text-blue-600" />
                  Why Choose Admirals Group?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Expert engineering services across multiple disciplines",
                    "Quality workmanship with proven track record",
                    "Competitive pricing and transparent quotes",
                    "24/7 emergency support for critical issues",
                    "Customer satisfaction guaranteed"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Services Include:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Mechanical Engineering
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Agricultural Engineering
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                    Civil Engineering
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    Equipment Repair
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                    Metal Fabrication
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
                    Project Management
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div
              ref={formRef2}
              className={`transition-all duration-1000 ${formInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="firstName">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John"
                        autoComplete="given-name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Doe"
                        autoComplete="family-name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-gray-700 text-sm font-semibold mb-2 flex items-center" htmlFor="email">
                      <Mail className="w-4 h-4 mr-2 text-blue-600" /> 
                      Email <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="johndoe@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-gray-700 text-sm font-semibold mb-2 flex items-center" htmlFor="phone">
                      <Phone className="w-4 h-4 mr-2 text-blue-600" /> 
                      Phone Number <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+x xxx xxx xxx"
                      autoComplete="tel"
                      required
                      pattern="^\+\d{1,3}\s?\d{4,14}(?:\s\d+)*$"
                      title="Include country code, e.g. +256 780 225 155"
                    />
                    <p className="text-xs text-gray-500 mt-1">Include country code (e.g., +256 for Uganda)</p>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-gray-700 text-sm font-semibold mb-2 block" htmlFor="description">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                      rows="5"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We respect your privacy. Your information will only be used to respond to your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Engineering Tomorrow, Building Today
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who trust Admirals Group for their engineering needs. Quality service, expert solutions, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Thank You For Choosing Us!
            </Link>
            <a
              href="tel:0200969992"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;