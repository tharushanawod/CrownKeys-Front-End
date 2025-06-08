import { useState, useEffect } from "react";

import {
  FaSearch,
  FaHome,
  FaBuilding,
  FaMapMarkedAlt,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFire,
  FaClock,
  FaTag,
  FaPercent,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdEmail,
  MdPhone,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";
import Header from "../Components/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";
import CircularGallery from "../Components/CircularGallery";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const heroContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const searchBarVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const urgentCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Landing = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentListingIndex, setCurrentListingIndex] = useState(0);

  // Hero Section Images
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Luxury Living",
      subtitle: "Discover Your Dream Home",
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Modern Apartments",
      subtitle: "Urban Living at its Finest",
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Premium Properties",
      subtitle: "Your Perfect Home Awaits",
    },
  ];

  // Latest Listings Data
  const latestListings = [
    {
      id: 1,
      title: "Luxury Villa",
      price: "$1,200,000",
      location: "Beverly Hills, CA",
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["5 Beds", "4 Baths", "3,500 sqft"],
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "$450,000",
      location: "Manhattan, NY",
      type: "Apartment",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 Beds", "2 Baths", "1,200 sqft"],
    },
    {
      id: 3,
      title: "Family Home",
      price: "$750,000",
      location: "Seattle, WA",
      type: "House",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["4 Beds", "3 Baths", "2,800 sqft"],
    },
    {
      id: 4,
      title: "Commercial Space",
      price: "$2,500,000",
      location: "Downtown, LA",
      type: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Office Space", "Parking", "5,000 sqft"],
    },
  ];

  // Urgent Sales Data
  const urgentSales = [
    {
      id: 1,
      title: "Luxury Villa - Quick Sale",
      originalPrice: "$1,500,000",
      discountedPrice: "$1,200,000",
      discount: "20% OFF",
      location: "Beverly Hills, CA",
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["5 Beds", "4 Baths", "3,500 sqft"],
      timeLeft: "3 days left",
      urgency: "high",
    },
    {
      id: 2,
      title: "Modern Apartment - Flash Sale",
      originalPrice: "$600,000",
      discountedPrice: "$450,000",
      discount: "25% OFF",
      location: "Manhattan, NY",
      type: "Apartment",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 Beds", "2 Baths", "1,200 sqft"],
      timeLeft: "1 day left",
      urgency: "critical",
    },
    {
      id: 3,
      title: "Family Home - Urgent Sale",
      originalPrice: "$900,000",
      discountedPrice: "$750,000",
      discount: "17% OFF",
      location: "Seattle, WA",
      type: "House",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["4 Beds", "3 Baths", "2,800 sqft"],
      timeLeft: "5 days left",
      urgency: "medium",
    },
  ];

  // Property Types
  const propertyTypes = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "Houses",
      description:
        "Find your perfect family home with our extensive collection of houses.",
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Apartments",
      description: "Modern apartments in prime locations for urban living.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl" />,
      title: "Lands",
      description: "Investment opportunities with premium land properties.",
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Commercial",
      description: "Prime commercial spaces for your business needs.",
    },
  ];

  // Auto-scroll hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Navigation functions for latest listings carousel
  const nextListing = () => {
    setCurrentListingIndex((prev) =>
      prev === latestListings.length - 3 ? 0 : prev + 1
    );
  };

  const prevListing = () => {
    setCurrentListingIndex((prev) =>
      prev === 0 ? latestListings.length - 3 : prev - 1
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
     

      {/* Hero Section with Carousel */}
      <section className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: "#000000" }}>
        <AnimatePresence mode="wait">
          {heroImages.map(
            (image, index) =>
              index === currentHeroIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${image.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-black"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 h-full flex items-center justify-center"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={heroContentVariants}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {heroImages[currentHeroIndex].title}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl mb-8"
              >
                {heroImages[currentHeroIndex].subtitle}
              </motion.p>

              {/* Search Bar */}
              <motion.div
                variants={searchBarVariants}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg text-black"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <motion.div variants={slideIn} className="relative">
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <MdLocationOn className="absolute right-3 top-3 text-gray-400" />
                  </motion.div>
                  <motion.select
                    variants={slideIn}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial</option>
                  </motion.select>
                  <motion.input
                    variants={slideIn}
                    type="number"
                    placeholder="Min Price"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <motion.input
                    variants={slideIn}
                    type="number"
                    placeholder="Max Price"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center"
                >
                  <FaSearch className="mr-2" />
                  Search Properties
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Carousel Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20"
        >
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentHeroIndex ? "bg-primary" : "bg-white"
              }`}
              onClick={() => setCurrentHeroIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </section>

      {/* Property Types Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-secondary mb-4 flex justify-center"
                >
                  {type.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-semibold mb-2"
                >
                  {type.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600"
                >
                  {type.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest Listings Carousel Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-3xl font-bold">Latest Listings</h2>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevListing}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
                aria-label="Previous listings"
              >
                <MdArrowBackIos />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextListing}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
                aria-label="Next listings"
              >
                <MdArrowForwardIos />
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative overflow-hidden">
            <motion.div
              animate={{
                x: `${-currentListingIndex * (100 / 3)}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
              style={{ width: `${(latestListings.length * 100) / 3}%` }}
            >
              {latestListings.map((listing) => (
                <motion.div
                  key={listing.id}
                  whileHover={{ y: -10 }}
                  className="w-1/3 px-4 flex-shrink-0"
                >
                  <motion.div
                    whileHover={{
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-48 object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">
                          {listing.title}
                        </h3>
                        <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                          {listing.type}
                        </span>
                      </div>
                      <p className="text-secondary font-bold mb-2">
                        {listing.price}
                      </p>
                      <p className="text-gray-600 mb-4">{listing.location}</p>
                      <div className="flex flex-wrap gap-2">
                        {listing.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Urgent Sales Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <motion.div
              variants={pulseAnimation}
              initial="initial"
              animate="animate"
              className="inline-block mb-4"
            >
              <FaFire className="text-4xl text-red-500 mx-auto" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Urgent Sales
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Limited time offers on premium properties. Don't miss these
              exclusive deals!
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {urgentSales.map((sale) => (
              <motion.div
                key={sale.id}
                variants={urgentCardVariants}
                whileHover="hover"
                className="relative"
              >
                <motion.div
                  className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-red-100"
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {/* Urgency Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-sm font-semibold ${
                      sale.urgency === "critical"
                        ? "bg-red-500 text-white"
                        : sale.urgency === "high"
                        ? "bg-orange-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    <FaClock className="inline-block mr-1" />
                    {sale.timeLeft}
                  </motion.div>

                  {/* Property Image */}
                  <motion.div
                    className="relative h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={sale.image}
                      alt={sale.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.8 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <motion.h3
                        whileHover={{ scale: 1.02 }}
                        className="text-xl font-semibold text-gray-800"
                      >
                        {sale.title}
                      </motion.h3>
                      <motion.span
                        variants={pulseAnimation}
                        initial="initial"
                        animate="animate"
                        className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full flex items-center"
                      >
                        <FaPercent className="mr-1" />
                        {sale.discount}
                      </motion.span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 line-through text-sm">
                          {sale.originalPrice}
                        </span>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="text-2xl font-bold text-red-600"
                        >
                          {sale.discountedPrice}
                        </motion.span>
                      </div>
                      <p className="text-gray-600 mt-1">{sale.location}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {sale.features.map((feature, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                    >
                      <FaTag className="mr-2" />
                      Grab This Deal
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Urgent Sales Button */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              View All Urgent Sales
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <CircularGallery />

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBuilding className="text-2xl text-secondary" />,
                title: "Expert Guidance",
                description:
                  "Our experienced agents provide expert guidance throughout your real estate journey.",
              },
              {
                icon: <FaMapMarkedAlt className="text-2xl text-secondary" />,
                title: "Prime Locations",
                description:
                  "Access to exclusive properties in the most sought-after locations.",
              },
              {
                icon: <FaHome className="text-2xl text-secondary" />,
                title: "Quality Service",
                description:
                  "Dedicated to providing exceptional service and support to our clients.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ y: -10 }}
                className="text-center p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-semibold mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-primary"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Stay Updated
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-green-100 mb-8">
              Subscribe to our newsletter for the latest property listings and
              market updates.
            </motion.p>
            <motion.form
              variants={searchBarVariants}
              className="flex flex-col md:flex-row gap-4"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
 <Footer/>
    </div>
  );
};

export default Landing;
