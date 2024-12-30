import React from 'react';

function AboutMe() {
  return (
    <div className="w-full py-20 bg-[#0f172a] flex items-center justify-center text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between gap-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 hidden sm:block">
          <img
            src="https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735480645/c2hhaGFuYWhtZWQtcmVtb3ZlYmctcHJldmlld19tZG1td2g=/drilldown"
            alt="Shahan Ahmed"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Text Card */}
        <div className="w-full md:w-1/2">
          <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#374151]">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-playfair">About Me</h2>
            <p className="text-lg sm:text-xl font-roboto mb-6 opacity-90 leading-relaxed">
              Hello, I’m Shahan Ahmed, a passionate and detail-oriented professional eager to leverage my skills as a Research Analyst, Data Analyst, Business Intelligence Analyst, Market Research Analyst, or Research Assistant. With a strong foundation in data interpretation and market analysis, I thrive on extracting actionable insights to drive informed decision-making. I'm committed to uncovering trends, optimizing processes, and supporting teams with data-driven strategies. Let’s connect and explore how I can contribute to your organization’s success!
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6 justify-center md:justify-start mt-6">
              <a
                href="https://github.com/shahan24h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-blue-500 hover:text-blue-700 transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shahan24h/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-blue-400 hover:text-blue-600 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=ROqm-4EAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-green-500 hover:text-green-700 transition duration-300"
              >
                <i className="fas fa-graduation-cap"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
