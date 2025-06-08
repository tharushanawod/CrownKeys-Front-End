import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  const officeLocations = [
    {
      city: "Colombo",
      address: "No. 123, Galle Road, Colombo 03",
      phone: "+94 11 234 5678",
      email: "colombo@crownkeys.lk",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      city: "Kandy",
      address: "No. 45, Peradeniya Road, Kandy",
      phone: "+94 81 234 5678",
      email: "kandy@crownkeys.lk",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      city: "Galle",
      address: "No. 78, Church Street, Galle Fort",
      phone: "+94 91 234 5678",
      email: "galle@crownkeys.lk",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#005163] text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact CrownKeys
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with our expert real estate team. We're here to help
              you find your perfect property in Sri Lanka.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#091a2b] mb-6">
              Send us a Message
            </h2>
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005163]`}
                    placeholder="R.H.K Rathnayake"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005163]`}
                    placeholder="rathnayake@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005163]`}
                    placeholder="+94 71 234 5678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005163]`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005163]`}
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#005163] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#091a2b] transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Office Locations */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#091a2b] mb-6">
                Our Offices
              </h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="text-xl font-semibold text-[#005163] mb-2">
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-[#005163]" />
                        {office.address}
                      </p>
                      <p className="flex items-center">
                        <FaPhone className="mr-2 text-[#005163]" />
                        {office.phone}
                      </p>
                      <p className="flex items-center">
                        <FaEnvelope className="mr-2 text-[#005163]" />
                        {office.email}
                      </p>
                      <p className="flex items-center">
                        <FaClock className="mr-2 text-[#005163]" />
                        {office.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#091a2b] mb-6">
                Connect With Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/crownkeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005163] hover:text-[#091a2b] transition-colors duration-300"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com/crownkeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005163] hover:text-[#091a2b] transition-colors duration-300"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="https://instagram.com/crownkeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005163] hover:text-[#091a2b] transition-colors duration-300"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com/company/crownkeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005163] hover:text-[#091a2b] transition-colors duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#091a2b] mb-6">
                Find Us
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63161824567!2d79.7861643!3d6.9218333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1647881234567!5m2!1sen!2slk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
