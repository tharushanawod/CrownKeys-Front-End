import {
  FaHome,
  FaBuilding,
  FaMapMarkedAlt,
  FaCity,
  FaHotel,
  FaWarehouse,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const PropertyCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Residential Homes",
      description:
        "Find your perfect family home with our extensive collection of houses and villas.",
      icon: <FaHome className="text-4xl" />,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "250+ Properties",
      link: "/properties/homes",
    },
    {
      id: 2,
      title: "Apartments",
      description:
        "Modern apartments in prime locations for urban living and investment.",
      icon: <FaBuilding className="text-4xl" />,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "180+ Properties",
      link: "/properties/apartments",
    },
    {
      id: 3,
      title: "Lands",
      description:
        "Premium land properties for development and investment opportunities.",
      icon: <FaMapMarkedAlt className="text-4xl" />,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "120+ Properties",
      link: "/properties/lands",
    },
    {
      id: 4,
      title: "Commercial Spaces",
      description: "Prime commercial properties for businesses and offices.",
      icon: <FaCity className="text-4xl" />,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "90+ Properties",
      link: "/properties/commercial",
    },
    {
      id: 5,
      title: "Luxury Villas",
      description:
        "Exclusive luxury villas with premium amenities and stunning views.",
      icon: <FaHotel className="text-4xl" />,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "75+ Properties",
      link: "/properties/villas",
    },
    {
      id: 6,
      title: "Industrial Properties",
      description:
        "Industrial spaces and warehouses for manufacturing and storage.",
      icon: <FaWarehouse className="text-4xl" />,
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "60+ Properties",
      link: "/properties/industrial",
    },
  ];

  return (
    <>
      <Header />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={titleVariants} className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Explore Property Categories
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              variants={titleVariants}
            >
              Discover our wide range of properties tailored to meet your
              specific needs and preferences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={category.link} className="group block">
                  <motion.div
                    className="bg-white rounded-xl overflow-hidden shadow-lg"
                    whileHover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image Container */}
                    <motion.div
                      className="relative h-48 overflow-hidden"
                      variants={imageVariants}
                      whileHover="hover"
                    >
                      <motion.img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 text-white"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.span
                          className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {category.count}
                        </motion.span>
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className="p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div
                        className="flex items-center mb-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {category.icon}
                        </motion.div>
                        <motion.h3
                          className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          {category.title}
                        </motion.h3>
                      </motion.div>
                      <motion.p
                        className="text-gray-600 mb-4 line-clamp-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {category.description}
                      </motion.p>
                      <motion.div
                        className="flex items-center text-green-600 font-medium"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        View Properties
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
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/properties"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                View All Categories
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
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default PropertyCategories;
