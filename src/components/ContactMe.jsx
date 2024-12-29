import React from "react";

function ContactMe() {
  return (
    <div className="w-full py-20 bg-[#2d3748] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-playfair tracking-wide text-white">
            Contact Me
          </h2>
          <p className="text-lg sm:text-xl font-roboto opacity-90 leading-relaxed text-white">
            Have a project in mind? Let's collaborate! I'm always open to new opportunities.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="w-full md:w-1/2 bg-[#1a202c] p-6 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 tracking-wide text-white">My Address</h3>
            <p className="text-lg opacity-90 text-white">
              New York, USA <br />
              Bronx, NY 10473
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-[#1a202c] p-6 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 tracking-wide text-white">E-mail</h3>
            <p className="text-lg opacity-90 text-white">shahan24h@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 mx-auto bg-[#4b5563] p-8 rounded-xl shadow-xl border-2 border-gray-700">
          <h3 className="text-3xl font-semibold mb-6 text-white">Send Me a Message</h3>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="flex flex-col md:flex-row gap-6">
              {/* Name Field */}
              <div className="w-full md:w-1/2">
                <label className="text-lg mb-2 block text-white">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#2d3748] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>

              {/* Email Field */}
              <div className="w-full md:w-1/2">
                <label className="text-lg mb-2 block text-white">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#2d3748] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="w-full">
              <label className="text-lg mb-2 block text-white">Your Message</label>
              <textarea
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 bg-[#2d3748] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-full text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-indigo-700 hover:to-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
