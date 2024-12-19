import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form
      setTimeout(() => setIsSubmitted(false), 3000); // Hide message after 3 seconds
    }, 500);
  };

  return (
    <section
      id="contact"
      className=" bg-gradient-to-r from-blue-300 via-violet-900 to-black text-white py-12 px-6 lg:px-24"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className=" bg-gradient-to-r from-blue-800 via-violet-500 to-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 bg-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 bg-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 mt-2 bg-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 via-violet-800 to-black  text-white py-2 rounded-lg transition-all"
            >
              Send
            </button>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-green-400 text-center font-semibold">
              Your message has been sent successfully!
            </p>
          )}
        </div>
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-300">+1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-300">contact@sportsclub.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-gray-300">123 Fitness Avenue, Sportstown</p>
          </div>
        </div>
      </div>
    </section>
  );
}
