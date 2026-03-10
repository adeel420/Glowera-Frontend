import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import NewsLetter from "../components/NewsLetter";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 min-h-[450px] w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="red-text text-[26px] sm:text-[30px] lg:text-[36px] bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-slide-in-down">
            💌 Get In Touch
          </h1>

          <h1 className="text-[36px] sm:text-[46px] lg:text-[60px] font-bold mt-3 bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent animate-slide-in-up animation-delay-200">
            CONTACT US
          </h1>

          <p className="text-gray-700 font-medium text-[16px] sm:text-[18px] lg:text-[20px] mt-6 max-w-3xl animate-fade-in animation-delay-400">
            We'd love to hear from you. Whether you have a question about our products or need assistance, our team is here to help.
          </p>
        </div>
      </div>

      {/* Get in touch section */}
      <div className="py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2 animate-slide-in-down">
              📞 Contact Us
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-slide-in-up animation-delay-200">
              GET IN TOUCH
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                Email Us
              </h3>
              <p className="text-sm text-gray-600 font-light mb-2">
                Send us an email anytime
              </p>
              <a href="mailto:info@glowera.com">
                <p className="text-sm cursor-pointer hover:underline text-pink-600 font-bold">
                  info@glowera.com
                </p>
              </a>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-200 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <PhoneIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                Call Us
              </h3>
              <p className="text-sm text-gray-600 font-light mb-2">
                Mon-Fri from 8am to 5pm
              </p>
              <a href="tel:+1234567890">
                <p className="text-sm cursor-pointer hover:underline text-pink-600 font-bold">
                  +1 (234) 567-890
                </p>
              </a>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-400 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <MapPinIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                Visit Us
              </h3>
              <p className="text-sm text-gray-600 font-light mb-2">
                Come say hello at our office
              </p>
              <p className="text-sm text-pink-600 font-bold">
                Lahore, Pakistan
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-600 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <ClockIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                Working Hours
              </h3>
              <p className="text-sm text-gray-600 font-light mb-2">
                Our standard business hours
              </p>
              <p className="text-sm text-pink-600 font-bold">
                Mon-Fri: 8am - 5pm EST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-pink-100 animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Send Us a Message
            </h1>
            <p className="font-light text-[16px] mt-4 leading-relaxed text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Location */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[600px] animate-fade-in-up animation-delay-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.640454729021!2d74.3031504742352!3d31.58890614375524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c9b7f72fd35%3A0xc3c63e88a7289519!2sH8Q4%2BG8W%20Minar%20e%20Pakistan%2C%20Data%20Gunj%20Buksh%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1772794271897!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Follow us icons */}
      <div className="py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
              🌟 Follow Us
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              STAY CONNECTED
            </h1>
            <p className="font-light text-[16px] mt-4 leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest beauty trends, product launches, and exclusive offers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FiInstagram className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Instagram
              </h3>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up animation-delay-200">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FiFacebook className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Facebook
              </h3>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up animation-delay-400">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <IoLogoTiktok className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                TikTok
              </h3>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up animation-delay-600">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FiTwitter className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Twitter
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* News Letter */}
      <NewsLetter />
    </div>
  );
};

export default Contact;
