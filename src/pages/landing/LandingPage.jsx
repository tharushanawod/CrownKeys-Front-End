import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { CircularGallery } from "../../components/CircularGallery";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa in Colombo",
      price: "LKR 45,000,000",
      location: "Colombo 7",
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3",
      beds: 4,
      baths: 3,
      area: "2500 sq ft",
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "LKR 25,000,000",
      location: "Dehiwala",
      type: "Apartment",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
      beds: 3,
      baths: 2,
      area: "1800 sq ft",
    },
    {
      id: 3,
      title: "Beachfront Property",
      price: "LKR 75,000,000",
      location: "Galle",
      type: "Land",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3",
      beds: 0,
      baths: 0,
      area: "20 perches",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Silva",
      role: "Property Owner",
      comment:
        "CrownKeys made selling my property a breeze. Their professional service and market knowledge are unmatched.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sarah Perera",
      role: "Home Buyer",
      comment:
        "Found my dream home through CrownKeys. The team was incredibly helpful throughout the entire process.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      name: "Rajith Fernando",
      role: "Real Estate Agent",
      comment:
        "Partnering with CrownKeys has been a game-changer for my business. Their platform is excellent.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f1f3f4]">
      {/* Hero Section */}
      <div className="relative h-[90vh] bg-[#091a2b]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Find Your Dream Property in Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Discover the perfect home, land, or investment property with
            CrownKeys
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white rounded-lg p-4 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search by location, property type, or keywords"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163] bg-white"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="house">Houses</option>
                <option value="apartment">Apartments</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
              </select>
              <button className="bg-[#005163] text-white px-8 py-3 rounded-lg hover:bg-[#091a2b] transition-colors flex items-center justify-center gap-2">
                <FaSearch /> Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#091a2b] mb-8 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#005163] text-white px-3 py-1 rounded-full text-sm">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
                  {property.title}
                </h3>
                <p className="text-[#005163] text-xl font-bold mb-4">
                  {property.price}
                </p>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mr-2" />
                  {property.location}
                </div>
                <div className="flex justify-between text-gray-600 border-t pt-4">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/properties"
            className="inline-block bg-[#005163] text-white px-8 py-3 rounded-lg hover:bg-[#091a2b] transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#091a2b] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose CrownKeys?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FaHome className="text-4xl mx-auto mb-4 text-[#005163]" />
              <h3 className="text-xl font-semibold mb-4">
                Wide Range of Properties
              </h3>
              <p className="text-gray-300">
                From luxury villas to affordable apartments, find your perfect
                property.
              </p>
            </div>
            <div className="text-center p-6">
              <FaBuilding className="text-4xl mx-auto mb-4 text-[#005163]" />
              <h3 className="text-xl font-semibold mb-4">Trusted Platform</h3>
              <p className="text-gray-300">
                Verified listings and secure transactions for peace of mind.
              </p>
            </div>
            <div className="text-center p-6">
              <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-[#005163]" />
              <h3 className="text-xl font-semibold mb-4">
                Nationwide Coverage
              </h3>
              <p className="text-gray-300">
                Properties available across all major cities in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#091a2b] mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#f1f3f4] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#091a2b]">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#005163] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisements Section */}
      <section className="py-16 px-4 bg-[#f1f3f4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#091a2b] mb-8 text-center">
            Featured Advertisements
          </h2>
          <CircularGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#091a2b] mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#091a2b] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-[#005163] mr-4" />
                  <span>+94 11 234 5678</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-[#005163] mr-4" />
                  <span>info@crownkeys.lk</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#005163] mr-4" />
                  <span>123 Main Street, Colombo 03, Sri Lanka</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-[#005163] hover:text-[#091a2b]">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-[#005163] hover:text-[#091a2b]">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-[#005163] hover:text-[#091a2b]">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-[#005163] hover:text-[#091a2b]">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163]"
                  ></textarea>
                </div>
                <button className="bg-[#005163] text-white px-8 py-3 rounded-lg hover:bg-[#091a2b] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#091a2b] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 CrownKeys. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
