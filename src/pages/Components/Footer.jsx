import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
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
  

function Footer() {

      
  return (
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <motion.div variants={slideIn} whileHover={{ y: -5 }}>
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold mb-4 text-yellow-400"
              >
                CrownKeys
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400"
              >
                Your trusted partner in finding the perfect property.
              </motion.p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={slideIn} whileHover={{ y: -5 }}>
              <motion.h4
                whileHover={{ scale: 1.05 }}
                className="font-semibold mb-4"
              >
                Quick Links
              </motion.h4>
              <motion.ul variants={staggerContainer} className="space-y-2">
                {["Home", "Properties", "About Us", "Contact"].map(
                  (link, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-green-500"
                      >
                        {link}
                      </a>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={slideIn} whileHover={{ y: -5 }}>
              <motion.h4
                whileHover={{ scale: 1.05 }}
                className="font-semibold mb-4"
              >
                Contact Info
              </motion.h4>
              <motion.ul variants={staggerContainer} className="space-y-2">
                <motion.li
                  variants={fadeInUp}
                  className="flex items-center text-gray-400"
                >
                  <MdLocationOn className="mr-2" />
                  123 Real Estate St, City, State
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  className="flex items-center text-gray-400"
                >
                  <MdPhone className="mr-2" />
                  (555) 123-4567
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  className="flex items-center text-gray-400"
                >
                  <MdEmail className="mr-2" />
                  info@realestate.com
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={slideIn} whileHover={{ y: -5 }}>
              <motion.h4
                whileHover={{ scale: 1.05 }}
                className="font-semibold mb-4"
              >
                Follow Us
              </motion.h4>
              <motion.div
                variants={staggerContainer}
                className="flex space-x-4"
              >
                {[
                  { icon: <FaFacebook className="text-2xl" />, href: "#" },
                  { icon: <FaTwitter className="text-2xl" />, href: "#" },
                  { icon: <FaInstagram className="text-2xl" />, href: "#" },
                  { icon: <FaLinkedin className="text-2xl" />, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href={social.href}
                    className="text-gray-400 hover:text-green-500"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          >
            <motion.p whileHover={{ scale: 1.02 }}>
              &copy; {new Date().getFullYear()} CrownKeys. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
  )
}

export default Footer