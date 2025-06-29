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

import FlowingMenu from "../Components/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Sonoma",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const AboutUs = () => {
  const stats = [
    {
      number: "5,000+",
      label: "Properties Sold",
      subtitle: "Successful Transactions",
    },
    {
      number: "3,500+",
      label: "Satisfied Clients",
      subtitle: "Across Sri Lanka",
    },
    {
      number: "17+",
      label: "Years of Excellence",
      subtitle: "Industry Leadership",
    },
    { number: "25+", label: "Expert Agents", subtitle: "Professional Team" },
  ];

  const values = [
    {
      icon: <FaHandshake className="text-4xl text-[var(--color-primary)]" />,
      title: "Trust & Transparency",
      description:
        "We build lasting relationships through honest communication, transparent processes, and ethical business practices that prioritize our clients' best interests.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[var(--color-primary)]" />,
      title: "Market Excellence",
      description:
        "Our deep market knowledge and data-driven insights ensure you make informed decisions backed by comprehensive market analysis and expert guidance.",
    },
    {
      icon: <FaUsers className="text-4xl text-[var(--color-primary)]" />,
      title: "Client-Centric Approach",
      description:
        "Every client receives personalized attention with tailored solutions designed to meet their unique real estate goals and investment objectives.",
    },
    {
      icon: <FaBuilding className="text-4xl text-[var(--color-primary)]" />,
      title: "Innovation & Technology",
      description:
        "We leverage cutting-edge technology and innovative marketing strategies to provide seamless, efficient, and modern real estate experiences.",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumara Rathnayake",
      position: "Founder & Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description:
        "A visionary leader with over two decades of experience in Sri Lankan real estate. Rajesh founded CrownKeys with the mission to revolutionize property transactions through technology and exceptional service.",
      credentials: "MBA Finance, RICS Member",
    },
    {
      name: "Samantha Perera",
      position: "Executive Director of Sales",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      description:
        "A seasoned professional specializing in luxury residential and commercial properties. Samantha leads our sales team with expertise in market analysis and strategic client consultation.",
      credentials: "MSc Real Estate, Certified Property Consultant",
    },
    {
      name: "Dilshan Fernando",
      position: "Head of Operations & Property Management",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "An operations expert focused on streamlining property management processes and enhancing client satisfaction through systematic approaches and innovative solutions.",
      credentials: "BSc Management, Property Management License",
    },
  ];

  const achievements = [
    {
      icon: <FaAward className="text-3xl text-[var(--color-primary)]" />,
      title: "Sri Lanka's Premier Real Estate Agency 2023",
      description:
        "Recognized by the Institute of Valuers of Sri Lanka for outstanding service excellence and market leadership.",
    },
    {
      icon: <FaStar className="text-3xl text-[var(--color-primary)]" />,
      title: "Top Property Development Partner",
      description:
        "Awarded for excellence in luxury property development and innovative real estate solutions across major cities.",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-[var(--color-primary)]" />,
      title: "ISO 9001:2015 Quality Certification",
      description:
        "Internationally certified quality management system ensuring consistent service delivery and customer satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-button-secondary)] text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-button-primary)]/900 to-[var(--color-button-secondary)]/85"></div>

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg drop-shadow-2xl"
            >
              About CrownKeys
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-100 mb-4 leading-relaxed text-shadow-md drop-shadow-lg"
            >
              Sri Lanka's Premier Real Estate Platform
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-200 max-w-2xl mx-auto text-shadow-sm drop-shadow-md"
            >
              Connecting Dreams to Homes Since 2008 Through Innovation,
              Excellence, and Unwavering Commitment to Client Success
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 shadow-lg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Years of dedication and commitment to excellence have resulted in
              measurable success across Sri Lanka's real estate market.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-3">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Established in 2008, CrownKeys emerged from a vision to
                  transform Sri Lanka's real estate landscape. What began as a
                  boutique agency in Colombo has evolved into the country's most
                  trusted property platform, serving clients across major cities
                  and regions.
                </p>
                <p>
                  Our journey has been marked by continuous innovation,
                  unwavering commitment to client satisfaction, and a deep
                  understanding of the Sri Lankan property market. We've
                  successfully facilitated thousands of property transactions,
                  from first-time homebuyers to large-scale commercial
                  investments.
                </p>
                <p>
                  Today, CrownKeys stands as a testament to the power of
                  combining traditional real estate expertise with modern
                  technology, creating seamless experiences that exceed client
                  expectations and set industry standards.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="CrownKeys Office Building"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every interaction, decision,
              and service we provide to our valued clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our mission forward
              and ensure exceptional service delivery.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-2 text-lg">
                    {member.position}
                  </p>
                  <p className="text-sm text-blue-600 font-medium mb-4 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {member.credentials}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry
              leaders and prestigious organizations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-100 rounded-full mb-6">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-button-secondary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Begin Your Real Estate Journey?
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Join thousands of satisfied clients who have trusted CrownKeys to
              find their perfect properties. Experience the difference that
              professional expertise and personalized service can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Properties
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
