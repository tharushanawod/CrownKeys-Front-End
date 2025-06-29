import { useState, useEffect } from "react";

import {
  FaSearch,
  FaHome,
  FaBuilding,
  FaMapMarkedAlt,
  FaFire,
  FaClock,
  FaTag,
  FaPercent,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";
import Header from "../Components/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";

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
  const [currentListingIndex, setCurrentListingIndex] = useState(0);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

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

  // Advertisement data
  const advertisements = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      title: "Luxury Real Estate Financing",
      subtitle: "Get the best rates for your dream home",
      cta: "Learn More",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      title: "Premium Property Insurance",
      subtitle: "Protect your investment with comprehensive coverage",
      cta: "Get Quote",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      title: "Interior Design Services",
      subtitle: "Transform your space with expert design",
      cta: "Explore",
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

  // Auto-scroll advertisements
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdIndex((prev) =>
        prev === advertisements.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Navigation functions for latest listings carousel
  const nextListing = () => {
    setCurrentListingIndex((prev) => {
      const maxIndex = latestListings.length - 3;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevListing = () => {
    setCurrentListingIndex((prev) => {
      const maxIndex = latestListings.length - 3;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Navigation functions for advertisement carousel
  const nextAd = () => {
    setCurrentAdIndex((prev) =>
      prev === advertisements.length - 1 ? 0 : prev + 1
    );
  };

  const prevAd = () => {
    setCurrentAdIndex((prev) =>
      prev === 0 ? advertisements.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Videos/estate.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Better Text Readability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black z-10"
        />

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
              className="max-w-4xl mx-auto text-center text-white"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl text-shadow-lg"
              >
                Find Your Dream Property
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl mb-8 drop-shadow-lg text-shadow-md text-gray-100"
              >
                Discover Luxury Living with CrownKeys - Sri Lanka's Premier Real
                Estate Platform
              </motion.p>

              {/* Compact Search Bar */}
              <motion.div
                variants={searchBarVariants}
                className="bg-white/85 backdrop-blur-md rounded-lg p-3 shadow-2xl text-black border border-white/20 max-w-3xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                  <motion.div variants={slideIn} className="relative">
                    <input
                      type="text"
                      placeholder="Location..."
                      className="w-full px-2.5 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-xs"
                    />
                    <MdLocationOn className="absolute right-2 top-2.5 text-gray-400 text-xs" />
                  </motion.div>

                  <motion.div variants={slideIn}>
                    <select className="w-full px-2.5 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-xs">
                      <option value="">Property Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="land">Land</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </motion.div>

                  <motion.div variants={slideIn}>
                    <input
                      type="text"
                      placeholder="Min Price..."
                      className="w-full px-2.5 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-xs"
                    />
                  </motion.div>

                  <motion.div variants={slideIn}>
                    <input
                      type="text"
                      placeholder="Max Price..."
                      className="w-full px-2.5 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-xs"
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-md font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg text-xs"
                  >
                    <FaSearch className="mr-1" />
                    Search
                  </motion.button>
                </div>

                {/* Quick Filters - More Compact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-1.5 mt-2 justify-center"
                >
                  {[
                    "Under 50M",
                    "Luxury",
                    "Apartments",
                    "Villas",
                    "Commercial",
                  ].map((filter, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-2.5 py-0.5 text-[10px] bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-colors duration-200 border border-gray-200"
                    >
                      {filter}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
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
                  className="text-button-primary mb-4 flex justify-center"
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
                  className="sm:w-1/3 px-4 w-1/2 flex-shrink-0 "
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
                        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                          {listing.type}
                        </span>
                      </div>
                      <p className="text-button-primary font-bold mb-2">
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
                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full flex items-center"
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

      {/* Advertisements Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-0 bg-white"
      >
        <div className="relative w-full overflow-hidden">
          <motion.div variants={fadeInUp} className="text-center mb-8 px-4">
            <h2 className="text-3xl font-bold mb-4">Featured Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover exclusive offers from our trusted partners
            </p>
          </motion.div>

          {/* Advertisement Carousel */}
          <motion.div
            variants={fadeInUp}
            className="relative h-64 md:h-80 lg:h-96 w-full"
          >
            <AnimatePresence mode="wait">
              {advertisements.map(
                (ad, index) =>
                  index === currentAdIndex && (
                    <motion.div
                      key={ad.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                        style={{ backgroundImage: `url(${ad.image})` }}
                      >
                        {/* Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          className="absolute inset-0 bg-black"
                        />

                        {/* Content */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="relative z-10 h-full flex items-center justify-center"
                        >
                          <div className="text-center text-white px-4 max-w-4xl">
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="text-3xl md:text-5xl font-bold mb-4"
                            >
                              {ad.title}
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="text-lg md:text-xl mb-8 text-gray-200"
                            >
                              {ad.subtitle}
                            </motion.p>
                            <motion.button
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-button-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-button-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              {ad.cta}
                            </motion.button>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Carousel Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20"
            >
              {advertisements.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentAdIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentAdIndex
                      ? "bg-button-primary scale-110"
                      : "bg-white/60"
                  }`}
                  aria-label={`Go to advertisement ${index + 1}`}
                />
              ))}
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevAd}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              aria-label="Previous advertisement"
            >
              <MdArrowBackIos className="text-xl" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextAd}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              aria-label="Next advertisement"
            >
              <MdArrowForwardIos className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

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
                icon: <FaBuilding className="text-2xl text-button-primary" />,
                title: "Expert Guidance",
                description:
                  "Our experienced agents provide expert guidance throughout your real estate journey.",
              },
              {
                icon: (
                  <FaMapMarkedAlt className="text-2xl text-button-primary" />
                ),
                title: "Prime Locations",
                description:
                  "Access to exclusive properties in the most sought-after locations.",
              },
              {
                icon: <FaHome className="text-2xl text-button-primary" />,
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
        className="py-16 bg-button-secondary"
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
                className="flex-1 px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-button-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-button-primary px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
