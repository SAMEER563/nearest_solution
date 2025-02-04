import React from 'react';
import { FaFacebookSquare, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <>
      <div className="bg-[#B7EFF8B2] py-6 px-6 flex flex-col md:flex-row justify-between items-center text-center space-y-6 md:space-y-0">
        {/* Left - Logo */}
        <div>
          <img src="./assets/logo.png" alt="Nearest Solutions Logo" width="60px" />
        </div>

        {/* Center - Links */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-24 text-md font-semibold">
          <p className="cursor-pointer hover:underline">Terms of Service</p>
          <p className="cursor-pointer hover:underline">FAQ</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-6 text-2xl md:space-x-12">
          <FaFacebookSquare className="cursor-pointer hover:scale-110 transition-transform" />
          <FaLinkedinIn className="cursor-pointer hover:scale-110 transition-transform" />
          <FaInstagram className="cursor-pointer hover:scale-110 transition-transform" />
          <IoLogoWhatsapp className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="bg-[#B7EFF8B2] py-3 px-6">
        <p className="text-sm text-center">© 2024 Nearest Solutions. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
