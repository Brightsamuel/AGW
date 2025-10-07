import React, { useRef } from 'react';
import { Phone, Mail, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import AGWLogo from '../AGW.png';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-gray-50 pt-20"
      style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #c8e6c9 100%)' }}>
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
              <Link to="/" className="flex justify-center w-full mb-6">
            <img src={AGWLogo} alt="Admirals Group Logo" className="h-20 w-auto mx-auto" />
              </Link>
          {/* <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Admirals Group
          </h1> */}
          <p className="text-lg md:text-2xl opacity-90 mb-6">
            Don’t hesitate to contact us for any special inquiries with this form. You can also contact us by phone for any inquiries. 
          </p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
          {
            /*
              Notes:
              - Browsers cannot include local file attachments when opening a mailto: link.
              - To include attachments you need a server or an email service (e.g., EmailJS) that accepts file uploads from the browser and sends the email.
              - Below: when a file is attached we attempt to send via EmailJS (client-side). You must install `@emailjs/browser` and provide SERVICE_ID, TEMPLATE_ID, USER_ID.
              - If no file is attached we keep the mailto fallback so user's email client opens with the message prefilled.
            */
          }
          <form
            ref={useRef(null)}
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const firstName = form.firstName.value.trim();
              const lastName = form.lastName.value.trim();
              const email = form.email.value.trim();
              const phone = form.phone.value.trim();
              const description = form.description.value.trim();
              const fileInput = form.file;

              const phonePattern = /^\+\d{1,3}\s?\d{4,14}(?:\s\d+)*$/;
              if (!phonePattern.test(phone)) {
                alert('Please enter a valid phone number including the country code (e.g. +256 780 225 155).');
                return;
              }

              const confirmSubmit = window.confirm('Are you sure you want to submit this form?');
              if (!confirmSubmit) return;

              const hasFile = fileInput && fileInput.files && fileInput.files.length > 0;
              if (hasFile) {
                const SERVICE_ID = 'service_nvzgkxh';
                const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
                const USER_ID = 'YOUR_USER_ID';

                if (SERVICE_ID === 'YOUR_SERVICE_ID') {
                  alert('To send attachments you must configure EmailJS (replace SERVICE_ID/TEMPLATE_ID/USER_ID in the code). Falling back to opening your email client without the attachment.');
                } else {
                  try {
                    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
                    alert('Message sent successfully (with attachment). Thank you!');
                    form.reset();
                    return;
                  } catch (err) {
                    console.error('EmailJS send error:', err);
                    alert('Sending with attachment failed. Opening your email client as a fallback.');
                  }
                }
              }

              const subject = encodeURIComponent(`Contact from ${firstName} ${lastName}`);
              const bodyLines = [];
              if (firstName || lastName) bodyLines.push(`Name: ${firstName} ${lastName}`);
              if (email) bodyLines.push(`Email: ${email}`);
              if (phone) bodyLines.push(`Phone: ${phone}`);
              if (description) bodyLines.push(`\nDescription:\n${description}`);
              const body = encodeURIComponent(bodyLines.join('\n'));
              const mailto = `mailto:admiralsgroupcoltd@gmail.com?subject=${subject}&body=${body}`;
              window.location.href = mailto;
            }}
          >
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="First Name"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="email">
                <Mail className="w-4 h-4 mr-2" /> Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Email"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="phone">
                <Phone className="w-4 h-4 mr-2" /> Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full p-2 border rounded"
                placeholder="+xxx xxx xxx xxx"
                autoComplete="tel"
                required
                pattern="^\+\d{1,3}\s?\d{4,14}(?:\s\d+)*$"
                title="Include country code, e.g. +256 780 225 155"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full p-2 border rounded h-32"
                placeholder="Enter a brief description of your inquiry"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors font-semibold">
              Send
            </button>
          </form>
          <div className="mt-6 text-center text-gray-600 text-sm">
            <p>
              Contact Us: <a href="tel:+256 780 225 155" className="text-blue-700 hover:underline">+256 780 225 155</a>
              <span className="mx-2">|</span>
              Email: <a href="mailto:admiralsgroupcoltd@gmail.com" className="text-blue-700 hover:underline">admiralsgroupcoltd@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering tomorrow, Building today.</h2>
          <p className="text-lg opacity-80 mb-8">
            For any inquiries, please fill in this form!
          </p>
          <Link
            to="#"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Good Luck! 
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;