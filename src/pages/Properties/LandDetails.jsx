import React, { useState, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaRuler,
  FaRupeeSign,
  FaHome,
  FaCalendarAlt,
  FaTag,
  FaExclamationTriangle,
  FaCheck,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Sample data (replace with actual API data)
const propertyData = {
  id: 1,
  title: "Premium Tea Estate with Mountain View",
  district: "Nuwara Eliya",
  area: 50, // in perches
  pricePerPerch: 3500000,
  type: "Tea Estate Land",
  availability: "Available Now",
  offeredFor: "Sale",
  description:
    "A magnificent tea estate located in the heart of Nuwara Eliya, offering breathtaking mountain views and a perfect climate for tea cultivation. This property comes with mature tea bushes, processing facilities, and worker accommodations.",
  images: [
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ],
  features: [
    "3-Phase Electricity",
    "Pipe-borne water",
    "Stream running through land",
    "Permits for gem mining",
    "Ideal for commercial use",
    "Approved Survey Plan",
    "Soil Test Passed",
    "Lake / pond inside land",
    "Gated Community",
    "Hilly landscape",
    "Bungalow / Cottage inside land",
  ],
  location: {
    lat: 6.9708,
    lng: 80.7829,
    address: "Nuwara Eliya, Central Province, Sri Lanka",
  },
  seller: {
    name: "John Smith",
    phone: "+94 77 123 4567",
    email: "john.smith@example.com",
    whatsapp: "+94 77 123 4567",
  },
};

// Sample similar properties data (replace with actual API data)
const similarProperties = [
  {
    id: 2,
    title: "Tea Estate with Mountain View",
    location: "Nuwara Eliya, Central Province",
    price: 3500000,
    type: "Tea Estate Land",
    size: 45,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mountain View", "Water Source", "Electricity"],
  },
  {
    id: 3,
    title: "Agricultural Land for Sale",
    location: "Kurunegala, North Western Province",
    price: 1500000,
    type: "Cultivated / Agriculture",
    size: 30,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Fertile Soil", "Irrigation", "Road Access"],
  },
  {
    id: 4,
    title: "Premium Coconut Estate",
    location: "Matara, Southern Province",
    price: 4200000,
    type: "Coconut Estate Land",
    size: 75,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mature Trees", "Water Source", "Clear Title"],
  },
  {
    id: 5,
    title: "Riverside Paddy Land",
    location: "Polonnaruwa, North Central Province",
    price: 1800000,
    type: "Paddy (Rice) Land",
    size: 40,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["River Access", "Irrigation", "Fertile Soil"],
  },
  {
    id: 6,
    title: "Luxury Waterfront Property",
    location: "Bentota, Western Province",
    price: 5500000,
    type: "Waterfront Land",
    size: 25,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["River Front", "Boat Access", "Clear Title"],
  },
];

const LandDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f3f4]">
      <Header />

      {/* Image Gallery */}
      <div className="relative h-[500px] bg-[#091a2b]">
        <div className="absolute inset-0">
          <img
            src={propertyData.images[selectedImage]}
            alt={propertyData.title}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {propertyData.images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                selectedImage === index
                  ? "border-[#005163]"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-[#091a2b] mb-4">
            {propertyData.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-2 text-[#3b4876]">
              <FaMapMarkerAlt className="text-[#005163]" />
              <span>{propertyData.district}</span>
            </div>
            <div className="flex items-center gap-2 text-[#3b4876]">
              <FaRuler className="text-[#005163]" />
              <span>{propertyData.area} Perches</span>
            </div>
            <div className="flex items-center gap-2 text-[#3b4876]">
              <FaRupeeSign className="text-[#005163]" />
              <span>
                Rs. {propertyData.pricePerPerch.toLocaleString()} / perch
              </span>
            </div>
          </div>
        </div>

        {/* Property Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#091a2b] mb-4">
            Property Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-2">
              <FaHome className="text-[#005163] text-xl" />
              <div>
                <p className="text-[#a8aeaf] text-sm">Property Type</p>
                <p className="text-[#091a2b] font-semibold">
                  {propertyData.type}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaRuler className="text-[#005163] text-xl" />
              <div>
                <p className="text-[#a8aeaf] text-sm">Area</p>
                <p className="text-[#091a2b] font-semibold">
                  {propertyData.area} Perches
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#005163] text-xl" />
              <div>
                <p className="text-[#a8aeaf] text-sm">Availability</p>
                <p className="text-[#091a2b] font-semibold">
                  {propertyData.availability}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaTag className="text-[#005163] text-xl" />
              <div>
                <p className="text-[#a8aeaf] text-sm">Offered For</p>
                <p className="text-[#091a2b] font-semibold">
                  {propertyData.offeredFor}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Property Description */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#091a2b] mb-4">
            Property Description
          </h2>
          <p className="text-[#3b4876] leading-relaxed">
            {propertyData.description}
          </p>
        </div>

        {/* Property Features */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#091a2b] mb-4">
            Property Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {propertyData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-[#f1f3f4] rounded-lg"
              >
                <FaCheck className="text-[#005163]" />
                <span className="text-[#3b4876]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#091a2b] mb-4">
            Location
          </h2>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${propertyData.location.lat},${propertyData.location.lng}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="mt-4 text-[#3b4876] flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#005163]" />
            {propertyData.location.address}
          </p>
        </div>

        {/* Warning Box */}
        <div className="bg-[#f1f3f4] border-l-4 border-[#005163] p-4 mb-8 rounded-lg">
          <div className="flex items-start">
            <FaExclamationTriangle className="text-[#005163] mt-1 mr-3" />
            <div>
              <h3 className="text-[#091a2b] font-semibold mb-1">
                Important Notice
              </h3>
              <p className="text-[#3b4876]">
                Please verify all property details and documentation before
                proceeding with any transaction. We recommend conducting a
                thorough inspection and consulting with legal professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Seller */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#091a2b] mb-4">
            Contact Seller
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#091a2b] mb-4">
                  Seller Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-[#005163]" />
                    <a
                      href={`tel:${propertyData.seller.phone}`}
                      className="text-[#3b4876] hover:text-[#005163]"
                    >
                      {propertyData.seller.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#005163]" />
                    <a
                      href={`mailto:${propertyData.seller.email}`}
                      className="text-[#3b4876] hover:text-[#005163]"
                    >
                      {propertyData.seller.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-[#005163]" />
                    <a
                      href={`https://wa.me/${propertyData.seller.whatsapp}`}
                      className="text-[#3b4876] hover:text-[#005163]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[#091a2b] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#091a2b] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#091a2b] font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#091a2b] font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#005163] text-white py-3 rounded-lg font-semibold hover:bg-[#091a2b] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Similar Properties Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 my-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#091a2b]">
              Similar Properties
            </h2>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-lg bg-[#f1f3f4] text-[#091a2b] hover:bg-[#005163] hover:text-white transition-colors duration-300"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-lg bg-[#f1f3f4] text-[#091a2b] hover:bg-[#005163] hover:text-white transition-colors duration-300"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {similarProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-none w-[350px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 border border-[#a8aeaf]"
              >
                {/* Property Image */}
                <div className="relative h-48">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-[#005163] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </span>
                </div>

                {/* Property Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#091a2b] mb-2 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="flex items-center gap-2 text-[#3b4876] text-sm mb-3">
                    <FaMapMarkerAlt className="text-[#005163]" />
                    <span className="line-clamp-1">{property.location}</span>
                  </p>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-[#005163] font-semibold">
                      Rs. {property.price.toLocaleString()} / perch
                    </div>
                    <div className="text-[#3b4876] text-sm">
                      {property.size} Perches
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-[#f1f3f4] text-[#3b4876] px-2 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href = `/properties/${property.id}`)
                    }
                    className="w-full bg-[#005163] text-white py-2 rounded-lg font-semibold hover:bg-[#091a2b] transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Similar Properties Button */}
          <div className="text-center mt-6">
            <button
              onClick={() =>
                (window.location.href = "/properties?type=" + propertyData.type)
              }
              className="inline-flex items-center gap-2 bg-[#091a2b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#005163] transition-colors duration-300"
            >
              View All Similar Properties
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Add this CSS to your global styles or component
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

export default LandDetails;
