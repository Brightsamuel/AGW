import { Users, Award, MapPin, Shield, HandCoins, Target, Gem } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section
        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white py-16 md:py-24 overflow-hidden"
        style={{ backgroundImage: "url('/images/img1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay for gradient and darkening effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 opacity-80 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-2xl font-light">
            Engineering Tomorrow, Building Today.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Admirals Group
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-5">
                <p>
                  ADMIRALS GROUP is a dully registered with the registrar of companies under Section 18(3) of the Companies Act 2012 as a Limited Company. 
                </p>
                <p>
                  Supplying top-quality products to our customers requires excellent engineering and design process, together with outstanding manufacturing 
                  manufacturing quality SIO, use latest revisions of high-end 3D production development environment and the latest manufacturing technologies 
                  for highest precision and lowest tolerance.
                </p>
                <p>
                  URSB No. <span className="font-semibold text-blue-700">80034478937723</span>.
                </p>
                <p>
                  Located at Original Shauriyako Plaza, Kampala (U)
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 mb-12 md:mb-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Users className="w-7 h-7 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Key Technical Personnel</h3>
              </div>
              <p className="text-gray-600 flex-1">
                Our administrative team is composed of Administrators, associate telecom/civil engineers, and a network of support staff, available on call and therefore easy to mobilize in the event of an urgent assignment. Through this diverse network, Admirals Group has a big reservoir of human capital giving it a cutting edge.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Award className="w-7 h-7 text-green-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Client Service Team</h3>
              </div>
              <p className="text-gray-600 flex-1">
                In order to ensure timely service of required quality, the firm has assembled a service team of highly qualified and experienced professionals. The company has a training programme to ensure continuous professional growth of our staff and that new recruits get appropriate induction training to promote individual capacity in Excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <MapPin className="w-7 h-7 text-purple-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">Location</h3>
              </div>
              <p className="text-gray-600 flex-1">
                Admirals Group's main office and extensive operational base is situated in Lungujja Rubaga Division Kampala District. The office premises are well fenced to enable assurance of storage of materials and are equipped with adequate security. The office is well equipped with all resources for ensuring adequate administrative works, processing and data management.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 md:p-12 text-white mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Core Values</h3>
              <p className="text-lg text-gray-300">
                Committed to offering the best in professional services
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-4">
                <HandCoins className="w-10 h-10 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold">Value for Money</h4>
                <p className="text-lg text-gray-300">
                  We sell quality products at competitive prices.
                </p>
              </div>
              <div className="text-center p-4">
                <Target className="w-10 h-10 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold">Commitment</h4>
                <p className="text-lg text-gray-300">
                  We ensure that our products are delivered on time and in good condition.
                </p>
              </div>
              <div className="text-center p-4">
                <Shield className="w-10 h-10 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold">Safety</h4>
                <p className="text-lg text-gray-300">
                  Your Safelty is our concern.
                </p>
              </div>
              <div className="text-center p-4">
                <Gem className="w-10 h-10 text-orange-400 mx-auto mb-2" />
                <h4 className="font-semibold">Quality</h4>
                <p className="text-lg text-gray-300">
                  Maintaining high quality is our commitment.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl shadow-md p-6 inline-block">
              <p className="text-gray-600 font-medium">
                Company Registration Number: <span className="text-blue-600 font-bold">80034478937723</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">Incorporated in Uganda</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;