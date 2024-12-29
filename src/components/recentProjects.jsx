import React, { useState } from "react";

function RecentProjects() {
  // State for the image modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to open the modal
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="w-full py-20 bg-[#111827] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-playfair">
            Recent Projects
          </h2>
          <p className="text-lg sm:text-xl font-roboto opacity-90 leading-relaxed">
            Welcome to my professional portfolio! As a passionate data analyst,
            I specialize in transforming complex data into actionable insights
            using Power BI. Browse through my curated collection of dashboards
            that reflect my expertise and dedication to enhancing business
            intelligence through meticulous data visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div
            className="bg-[#1e293b] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() =>
              openModal(
                "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735484324/SFItQW5hbHl0aWNzLURhc2hib2FyZDJjbG91ZF9vNWpqMnQ=/drilldown"
              )
            }
          >
            <img
              src="https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735484324/SFItQW5hbHl0aWNzLURhc2hib2FyZDJjbG91ZF9vNWpqMnQ=/drilldown"
              alt="Sample Research"
              className="w-full h-56 object-cover rounded-lg mb-4 cursor-pointer"
            />
            <h3 className="text-2xl font-semibold mb-4">Sample Research</h3>
            <p className="text-lg opacity-80 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <div className="text-sm text-gray-400">
              <h4 className="font-semibold">Code:</h4>
              <pre className="bg-[#1f2937] p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code>
                  {`// Sample code for research project
const fetchData = async () => {
  try {
    const response = await fetch('https://api.sampledata.com');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
fetchData();`}
                </code>
              </pre>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="bg-[#1e293b] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() =>
              openModal(
                "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735484492/SFItQW5hbHl0aWNzLURhc2hib2FyZGNsb3VkX2VranBtZQ==/drilldown"
              )
            }
          >
            <img
              src="https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735484492/SFItQW5hbHl0aWNzLURhc2hib2FyZGNsb3VkX2VranBtZQ==/drilldown"
              alt="Data Analysis"
              className="w-full h-56 object-cover rounded-lg mb-4 cursor-pointer"
            />
            <h3 className="text-2xl font-semibold mb-4">Data Analysis</h3>
            <p className="text-lg opacity-80 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <div className="text-sm text-gray-400">
              <h4 className="font-semibold">Code:</h4>
              <pre className="bg-[#1f2937] p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code>
                  {`// Sample code for data analysis
const analyzeData = (data) => {
  const filteredData = data.filter(item => item.value > 50);
  return filteredData;
};
const data = [{ value: 60 }, { value: 40 }];
console.log(analyzeData(data));`}
                </code>
              </pre>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="bg-[#1e293b] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() =>
              openModal(
                "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735484526/U2FsZXMtaW5zaWdodC1kYXNoYm9hcmQtUG93ZXItQkljbG91ZF9jYmM0eWQ=/drilldown"
              )
            }
          >
            <img
              src="https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735484526/U2FsZXMtaW5zaWdodC1kYXNoYm9hcmQtUG93ZXItQkljbG91ZF9jYmM0eWQ=/drilldown"
              alt="Market Research"
              className="w-full h-56 object-cover rounded-lg mb-4 cursor-pointer"
            />
            <h3 className="text-2xl font-semibold mb-4">Market Research</h3>
            <p className="text-lg opacity-80 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <div className="text-sm text-gray-400">
              <h4 className="font-semibold">Code:</h4>
              <pre className="bg-[#1f2937] p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code>
                  {`// Sample code for market research
const marketData = [
  { product: 'Product A', price: 120 },
  { product: 'Product B', price: 80 }
];
const findBestProduct = (data) => {
  return data.reduce((best, current) => (current.price < best.price ? current : best), data[0]);
};
console.log(findBestProduct(marketData));`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Image Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Popup"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentProjects;
