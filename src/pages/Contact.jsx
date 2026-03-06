import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import NewsLetter from "../components/NewsLetter";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <div className="linear min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] w-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="red-text text-[22px] sm:text-[26px] lg:text-[30px] text-[#be4544]">
          Get In Touch
        </h1>

        <h1 className="text-white text-[30px] sm:text-[38px] lg:text-[52px] font-light mt-2">
          CONTACT US
        </h1>

        <p className="text-white font-light text-[14px] sm:text-[16px] lg:text-[18px] mt-4 max-w-[700px]">
          We’d love to hear from you. Whether you have a question about our
          products, need assistance with your order, or just want to say hello,
          our team at Glowera is here to help. Feel free to reach out and we’ll
          get back to you as soon as possible.
        </p>
      </div>

      {/* Get in touch section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="red-text text-[26px] lg:text-[30px] text-[#be4544]">
              Contact Us
            </h2>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mt-2">
              GET IN TOUCH
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-2">
                Email Us
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Send us an email anytime
              </p>
              <a href="mailto:info@glowera.com">
                <p className="text-sm cursor-pointer hover:underline text-[#be4544] font-bold">
                  info@glowera.com
                </p>
              </a>
            </div>

            <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-2">
                Call Us
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Mon-Fri from 8am to 5pm
              </p>
              <a href="tel:+1234567890">
                <p className="text-sm cursor-pointer hover:underline text-[#be4544] font-bold">
                  +1 (234) 567-890
                </p>
              </a>
            </div>

            <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-2">
                Visit Us
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Come say hello at our office
              </p>
              <p className="text-sm text-[#be4544] font-bold">
                Lahore, Pakistan
              </p>
            </div>

            <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-2">
                Working Hours
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Our standard business hours
              </p>
              <p className="text-sm text-[#be4544] font-bold">
                Mon-Fri: 8am - 5pm EST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="bg-[#faf8f7] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h1 className="text-3xl lg:text-4xl uppercase font-light text-gray-800">
              Send Us a Message
            </h1>
            <p className="font-light text-[15px] mt-3 leading-relaxed text-gray-600">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#be4544] text-white py-3 rounded-lg cursor-pointer font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Location */}
          <div className="rounded-lg overflow-hidden shadow-sm h-full min-h-[500px]">
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
      <div className="mt-12">
        <div className="text-center mb-12">
          <h2 className="red-text text-[26px] lg:text-[30px] text-[#be4544]">
            Follow Us
          </h2>
          <h1 className="text-3xl lg:text-4xl uppercase font-light text-gray-800 mt-2">
            Follow Us on Social Media
          </h1>
          <p className="font-light text-[15px] mt-3 leading-relaxed text-gray-600">
            Stay updated with the latest beauty trends, product launches, and
            exclusive offers:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Instagram */}
          <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer max-h-max">
            <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
              <FiInstagram className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800">
              Instagram
            </h3>
          </div>

          {/* Facebook */}
          <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer max-h-max">
            <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
              <FiFacebook className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800">
              Facebook
            </h3>
          </div>

          {/* Tiktok */}
          <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer max-h-max">
            <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
              <IoLogoTiktok className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800">
              tik tok
            </h3>
          </div>

          {/* Twitter */}
          <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer max-h-max">
            <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTwitter className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800">
              Twitter
            </h3>
          </div>
        </div>
      </div>

      {/* News Letter */}
      <div className="mt-12">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Contact;
