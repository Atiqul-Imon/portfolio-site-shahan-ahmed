import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#0f172a] text-white py-12">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Section - Branding & Bio */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Shahan Ahmed
            </h2>
            <p className="text-lg text-gray-400 mt-2">
              I’m open to work as: Research Analyst · Data Analyst · Business Intelligence Analyst · Market Research Analyst · Research Assistant.
            </p>
            <p className="text-sm text-gray-400 mt-2">Currently working at Conduent</p>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left mt-6 md:mt-0">
            <a href="#home" className="text-lg text-gray-400 hover:text-white transition duration-300">
              Home
            </a>
            <a href="#about" className="text-lg text-gray-400 hover:text-white transition duration-300">
              About
            </a>
            <a href="#projects" className="text-lg text-gray-400 hover:text-white transition duration-300">
              Projects
            </a>
            <a href="#contact" className="text-lg text-gray-400 hover:text-white transition duration-300">
              Contact
            </a>
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex gap-6 text-center md:text-left mt-6 md:mt-0">
            <a
              href="https://github.com/AtiqulImon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/AtiqulImon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/AtiqulImon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shahan Ahmed. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
