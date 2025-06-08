import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import Header from "../Components/Header";

import FlowingMenu from '../Components/FlowingMenu'

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

const AboutUs = () => {
  const stats = [
    { number: "5000+", label: "Properties Listed" },
    { number: "2000+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "3", label: "Cities Covered" },
  ];

  const values = [
    {
      icon: <FaHandshake className="text-4xl text-[#005163]" />,
      title: "Trust & Integrity",
      description:
        "Building lasting relationships through honest and transparent dealings.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#005163]" />,
      title: "Excellence",
      description:
        "Delivering exceptional service and maintaining the highest standards.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#005163]" />,
      title: "Client Focus",
      description:
        "Putting our clients' needs first and providing personalized solutions.",
    },
    {
      icon: <FaBuilding className="text-4xl text-[#005163]" />,
      title: "Innovation",
      description:
        "Embracing modern technology to enhance the real estate experience.",
    },
  ];

  const team = [
    {
      name: "R.H.K Rathnayake",
      position: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description:
        "With over 20 years of experience in Sri Lankan real estate.",
    },
    {
      name: "Samantha Perera",
      position: "Head of Sales",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      description: "Expert in luxury property sales and market analysis.",
    },
    {
      name: "Dilshan Fernando",
      position: "Property Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Specialized in property management and tenant relations.",
    },
  ];

  const achievements = [
    {
      icon: <FaAward className="text-3xl text-[#005163]" />,
      title: "Best Real Estate Agency 2023",
      description: "Awarded by Sri Lanka Real Estate Association",
    },
    {
      icon: <FaStar className="text-3xl text-[#005163]" />,
      title: "Top Property Developer",
      description: "Recognized for excellence in property development",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-[#005163]" />,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certification",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      {/* Hero Section */}
      <div className="relative bg-[#005163] text-white py-30">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CrownKeys
            </h1>
            <p className="text-xl text-gray-200">
              Sri Lanka's Premier Real Estate Platform, Connecting Dreams to
              Homes Since 2008
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#005163] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-gray-50">
        <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#091a2b] mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2008, CrownKeys has grown from a small Colombo-based
              agency to Sri Lanka's leading real estate platform. Our journey
              began with a simple mission: to make property transactions
              transparent, efficient, and trustworthy. Today, we're proud to
              serve thousands of clients across Colombo, Kandy, and Galle,
              helping them find their perfect homes and make sound real estate
              investments.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#091a2b] text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#091a2b] text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#091a2b] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#005163] font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#091a2b] text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-[#005163] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their perfect
            homes through CrownKeys.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#005163] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Explore Properties
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
