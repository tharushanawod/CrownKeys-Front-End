import { useState, useEffect } from "react";
import {
  FaSearch,
  FaHome,
  FaBuilding,
  FaUserFriends,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const propertyTypes = [
    "All Types",
    "House",
    "Apartment",
    "Villa",
    "Commercial",
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$450,000",
      location: "New York, NY",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Luxury Beach House",
      price: "$1,200,000",
      location: "Miami, FL",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Suburban Family Home",
      price: "$750,000",
      location: "Chicago, IL",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "Homeowner",
      text: "Found my dream home within weeks! The team was incredibly helpful throughout the process.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Investor",
      text: "Professional service and great market knowledge. Made my investment property search a breeze.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-600">RealEstate</div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-green-600">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                Properties
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                Contact
              </a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Schedule a Tour
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#" className="block text-gray-600 hover:text-green-600">
                Home
              </a>
              <a href="#" className="block text-gray-600 hover:text-green-600">
                Properties
              </a>
              <a href="#" className="block text-gray-600 hover:text-green-600">
                About Us
              </a>
              <a href="#" className="block text-gray-600 hover:text-green-600">
                Contact
              </a>
              <button className="w-full bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Schedule a Tour
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          >
            
            {/* <div className="absolute inset-0 bg-black bg-opacity-10" /> */}
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center ">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Find Your Dream Home
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Explore the most exclusive properties in top locations.
              </p>

              {/* Search Bar */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <MdLocationOn className="absolute right-3 top-3 text-gray-400" />
                  </div>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    placeholder="Min Price"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button className="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  <FaSearch className="mr-2" />
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-green-500" : "bg-white"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {property.title}
                  </h3>
                  <p className="text-green-600 font-bold mb-2">
                    {property.price}
                  </p>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserFriends className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our team of experienced agents provides expert guidance
                throughout your real estate journey.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBuilding className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">
                We've built our reputation on trust and transparency in every
                transaction.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Access to exclusive properties worldwide through our extensive
                network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-green-100 mb-8">
              Subscribe to our newsletter for the latest property listings and
              market updates.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-500">
                RealEstate
              </h3>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect property.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <MdLocationOn className="mr-2" />
                  123 Real Estate St, City, State
                </li>
                <li className="flex items-center text-gray-400">
                  <MdPhone className="mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <MdEmail className="mr-2" />
                  info@realestate.com
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-500">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} RealEstate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
