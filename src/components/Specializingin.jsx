import React from "react";
import { FaSearch, FaDatabase, FaChartBar, FaGlobeAsia } from "react-icons/fa";

function SpecializingIn() {
  return (
    <div className="w-full py-20 bg-[#1a202c] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-playfair">
            Specializing in
          </h2>
          <p className="text-lg sm:text-xl font-roboto opacity-90 leading-relaxed">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Research Analyst Card */}
          <div className="bg-[#2d3748] p-8 rounded-lg shadow-lg backdrop-blur-md bg-opacity-40 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaSearch className="text-4xl text-blue-500 mr-4" />
              <h3 className="text-2xl font-semibold">Research Analyst</h3>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Data Analyst Card */}
          <div className="bg-[#2d3748] p-8 rounded-lg shadow-lg backdrop-blur-md bg-opacity-40 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaDatabase className="text-4xl text-green-500 mr-4" />
              <h3 className="text-2xl font-semibold">Data Analyst</h3>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Business Intelligence Analyst Card */}
          <div className="bg-[#2d3748] p-8 rounded-lg shadow-lg backdrop-blur-md bg-opacity-40 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaChartBar className="text-4xl text-yellow-500 mr-4" />
              <h3 className="text-2xl font-semibold">Business Intelligence Analyst</h3>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Market Research Analyst Card */}
          <div className="bg-[#2d3748] p-8 rounded-lg shadow-lg backdrop-blur-md bg-opacity-40 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaGlobeAsia className="text-4xl text-purple-500 mr-4" />
              <h3 className="text-2xl font-semibold">Market Research Analyst</h3>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecializingIn;
