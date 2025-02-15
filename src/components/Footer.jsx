import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import footerlogo from "/images/Header-logo1.png";
import footerimg1 from "/images/hala-logo.jpg";
import footerimg2 from "/images/iso-logo.jpg";

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-white">
    <div className="container mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <img
            src={footerlogo}
            alt="Brotherhede Logo"
            className="mb-4 w-44  "
          />

          <div className="lg:flex gap-3">
          <img
            src={footerimg1}
            alt="Brotherhede Logo"
            className="mb-4 w-28 rounded-full opacity-80 lg:w-24"
          />
          <img
            src={footerimg2}
            alt="Brotherhede Logo"
            className="mb-4 w-28 rounded-full opacity-80 lg:w-24"
          />
          </div>
          
          <p className="text-gray-400">
            Bringing you the finest tea powder with a perfect blend of tradition
            and quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Products", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-500" />
            Riyadh,Kingdom
              of Saudi Arabia
            </li>

            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-500" /> info@brotherhede.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-500" /> 966 503129395
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-500" /> 0537841966
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-gray-500" /> 0537841966
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12 py-4 text-center">
        <p className="text-gray-400 text-sm">
          Copyright © 2024, Brotherhede. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
