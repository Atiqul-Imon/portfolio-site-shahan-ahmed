import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    // Clear Error
    setError("");

    // Submit to Netlify
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch(() => setError("Submission failed. Please try again later!"));
  };

  return (
    <div className="w-full py-20 bg-[#2d3748] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg sm:text-xl opacity-90">
            Have a project in mind? Let's collaborate!
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto bg-[#4b5563] p-8 rounded-xl shadow-xl">
          {isSubmitted ? (
            <p className="text-green-400 text-lg mb-6">
              Message sent successfully!
            </p>
          ) : (
            <>
              {error && <p className="text-red-400 mb-6">{error}</p>}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <label className="text-lg mb-2 block">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2d3748] border rounded-lg text-white"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="text-lg mb-2 block">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2d3748] border rounded-lg text-white"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="text-lg mb-2 block">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-[#2d3748] border rounded-lg text-white"
                    required
                  ></textarea>
                </div>
                <div className="w-full text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
