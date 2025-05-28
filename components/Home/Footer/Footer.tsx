import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaCode, FaGithub } from 'react-icons/fa';
import { BaseInfo } from "@/Data/data";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0715] py-10 text-center text-white">
      <h2 className="text-3xl font-bold mb-2">Jenes</h2>
      <div className="mt-4">
        <div className="flex justify-center space-x-4 mt-2">
          <a href={BaseInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href={BaseInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href={BaseInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href={BaseInfo.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaCode size={24} />
          </a>
          <a href={BaseInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        © {currentYear} All Rights Reserved by Jenesh Devganiya
      </p>
    </footer>
  );
};

export default Footer;
