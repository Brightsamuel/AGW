import { Phone, Mail, Upload, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-gray-50 pt-20"
      style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #c8e6c9 100%)' }}>
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
            <span className="text-2xl font-bold text-blue-600">AD</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Admirals Group
          </h1>
          <p className="text-lg md:text-2xl opacity-90 mb-6">
            Don’t hesitate to contact our experts with this form or by phone for any inquiries. 
          </p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="First Name"
                  autoComplete="given-name"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Last Name"
                  autoComplete="family-name"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="email">
                <Mail className="w-4 h-4 mr-2" /> Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Email"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="phone">
                <Phone className="w-4 h-4 mr-2" /> Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full p-2 border rounded"
                placeholder="+x xxx xxx xxx"
                autoComplete="tel"
              />
            </div>
            <div>
              <label
                htmlFor="file-upload"
                className="text-gray-700 text-sm font-bold mb-2 flex items-center cursor-pointer"
              >
                <Upload className="w-4 h-4 mr-2" /> Attach File
              </label>
              <input id="file-upload" type="file" className="w-full p-2 border rounded" />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors font-semibold"
            >
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
            {/* <ChevronRight className="w-5 h-5 ml-2" /> */}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;