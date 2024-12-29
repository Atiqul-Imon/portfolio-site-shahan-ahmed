import React from 'react';

function HomePage() {
  return (
    <div className="w-full h-[70vh] bg-gradient-to-r from-[#1a202c] to-[#2d3748] flex items-center justify-center text-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between h-full relative">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 text-left z-10 p-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-mono tracking-wide leading-tight text-[#e2e8f0] sm:text-white">
            Hi, I’m <span className="text-[#d94b1b]">Shahan Ahmed</span>
          </h1>
          <p className="text-lg sm:text-xl font-roboto mb-6 opacity-90 sm:text-white text-[#e2e8f0]">
            Unlocking Data. Enabling Insights. Building Tomorrow.
          </p>

          {/* Buttons: Services and Contact Me */}
          <div className="flex space-x-4">
           
            <a
              href="#contact"
              className="bg-transparent border-2 border-[#a3bffa] text-[#a3bffa] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#a3bffa] hover:text-[#1a202c] transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 absolute md:relative top-0 right-0 h-full">
          <img
            src="https://res.cloudinary.com/db5yniogx/image/upload/v1735480645/shahanahmed-removebg-preview_mdmmwh.png"
            alt="Shahan Ahmed"
            className="w-full h-full object-cover opacity-85 rounded-none"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
