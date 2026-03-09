import React from "react";
import { navLinks } from "../data/Data";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-3xl bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">G</span>
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">LOWERA</span>
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Premium beauty and skincare products for your natural glow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-normal mb-4 uppercase tracking-wide text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link} className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-normal mb-4 uppercase tracking-wide text-pink-400">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-normal mb-4 uppercase tracking-wide text-pink-400">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@glowera.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Mon - Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Glowera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
