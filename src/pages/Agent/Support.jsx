import React, { useState } from "react";
import {
  FaSearch,
  FaQuestionCircle,
  FaHeadset,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaBook,
  FaVideo,
  FaDownload,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronRight,
  FaStar,
  FaClock,
  FaUser,
  FaTags,
  FaFileAlt,
  FaLifeRing,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";

// Mock data for support articles and FAQs
const supportCategories = [
  {
    id: 1,
    title: "Getting Started",
    icon: <FaGraduationCap />,
    description: "Learn the basics of using the platform",
    articleCount: 12,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Property Management",
    icon: <FaTools />,
    description: "Managing listings, photos, and property details",
    articleCount: 18,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Client Communication",
    icon: <FaComments />,
    description: "Best practices for client interaction",
    articleCount: 15,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Analytics & Reports",
    icon: <FaFileAlt />,
    description: "Understanding your performance metrics",
    articleCount: 8,
    color: "bg-orange-100 text-orange-600",
  },
];

const frequentlyAskedQuestions = [
  {
    id: 1,
    question: "How do I add a new property listing?",
    answer:
      "To add a new property listing, navigate to the 'My Listings' section and click the 'Add New Property' button. Fill in all required details including property description, photos, pricing, and location information. Make sure to include high-quality photos and detailed descriptions to attract potential buyers.",
    category: "Property Management",
    tags: ["listings", "properties", "adding"],
  },
  {
    id: 2,
    question: "How can I track my commission earnings?",
    answer:
      "You can track your commission earnings in the 'Analytics' section of your dashboard. The system automatically calculates your commissions based on closed deals and provides detailed breakdowns by month, quarter, and year. You can also export commission reports for your records.",
    category: "Analytics & Reports",
    tags: ["commission", "earnings", "analytics"],
  },
  {
    id: 3,
    question: "What should I do if a client is not responding to messages?",
    answer:
      "If a client is not responding to messages, try different communication channels like phone calls or emails. You can also schedule follow-up reminders in the system. Consider adjusting your communication timing and frequency based on the client's preferences indicated in their profile.",
    category: "Client Communication",
    tags: ["clients", "communication", "messages"],
  },
  {
    id: 4,
    question: "How do I edit property photos and descriptions?",
    answer:
      "To edit property photos and descriptions, go to your property listing and click the 'Edit' button. You can upload new photos, reorder existing ones, update the description, and modify any property details. Changes are saved automatically and will be visible to potential buyers immediately.",
    category: "Property Management",
    tags: ["photos", "editing", "descriptions"],
  },
  {
    id: 5,
    question: "Can I customize my commission rates for different properties?",
    answer:
      "Yes, you can set custom commission rates for individual properties. When creating or editing a listing, you'll find the commission settings in the 'Financial Details' section. You can set different rates for buyer and seller commissions based on your agreements.",
    category: "Analytics & Reports",
    tags: ["commission", "rates", "customization"],
  },
  {
    id: 6,
    question: "How do I schedule property viewings with clients?",
    answer:
      "You can schedule property viewings directly through the messaging system or by using the integrated calendar feature. When a client expresses interest in a viewing, you can send them available time slots and confirm the appointment. The system will send automatic reminders to both parties.",
    category: "Client Communication",
    tags: ["viewings", "scheduling", "appointments"],
  },
];

const supportArticles = [
  {
    id: 1,
    title: "Complete Guide to Property Photography",
    summary: "Learn how to take stunning photos that sell properties faster",
    readTime: "8 min read",
    category: "Property Management",
    rating: 4.8,
    views: 1245,
    lastUpdated: "2025-01-05",
  },
  {
    id: 2,
    title: "Effective Client Follow-up Strategies",
    summary:
      "Best practices for maintaining client relationships and closing deals",
    readTime: "6 min read",
    category: "Client Communication",
    rating: 4.9,
    views: 892,
    lastUpdated: "2025-01-03",
  },
  {
    id: 3,
    title: "Understanding Market Analytics",
    summary: "How to interpret market data and use it to your advantage",
    readTime: "12 min read",
    category: "Analytics & Reports",
    rating: 4.7,
    views: 567,
    lastUpdated: "2025-01-01",
  },
  {
    id: 4,
    title: "Setting Up Your Agent Profile",
    summary: "Complete your profile to build trust with potential clients",
    readTime: "4 min read",
    category: "Getting Started",
    rating: 4.6,
    views: 2103,
    lastUpdated: "2024-12-28",
  },
];

const quickActions = [
  {
    title: "Live Chat Support",
    description: "Get instant help from our support team",
    icon: <FaComments />,
    action: "Start Chat",
    available: true,
    color: "bg-green-500",
  },
  {
    title: "Schedule a Call",
    description: "Book a one-on-one session with an expert",
    icon: <FaPhone />,
    action: "Schedule",
    available: true,
    color: "bg-blue-500",
  },
  {
    title: "Email Support",
    description: "Send us your questions via email",
    icon: <FaEnvelope />,
    action: "Send Email",
    available: true,
    color: "bg-purple-500",
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step video guides",
    icon: <FaVideo />,
    action: "Watch Now",
    available: true,
    color: "bg-orange-500",
  },
];

const AgentSupport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeTab, setActiveTab] = useState("faq");

  const filteredFAQs = frequentlyAskedQuestions.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredArticles = supportArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const handleContactSupport = (method) => {
    console.log(`Contacting support via ${method}`);
    // Here you would implement the actual contact functionality
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0284c7] rounded-full mb-4">
            <FaLifeRing className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-[#091a2b] mb-2">
            Support Center
          </h1>
          <p className="text-[#64748b] text-lg">
            Get help, find answers, and learn how to make the most of your agent
            portal
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748b]" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0284c7] focus:border-transparent text-lg"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg ${action.color} text-white mr-3`}>
                {action.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#091a2b]">{action.title}</h3>
                <p className="text-sm text-[#64748b]">{action.description}</p>
              </div>
            </div>
            <button
              onClick={() => handleContactSupport(action.title)}
              className="w-full bg-[#f1f3f4] text-[#0284c7] py-2 px-4 rounded-lg hover:bg-[#e0f2fe] transition-colors font-medium"
            >
              {action.action}
            </button>
          </div>
        ))}
      </div>

      {/* Support Categories */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-[#091a2b] mb-6">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.title)}
              className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                selectedCategory === category.title
                  ? "border-[#0284c7] bg-[#e0f2fe]"
                  : "border-gray-200 hover:border-[#0284c7]"
              }`}
            >
              <div
                className={`inline-flex p-2 rounded-lg ${category.color} mb-3`}
              >
                {category.icon}
              </div>
              <h3 className="font-semibold text-[#091a2b] mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-[#64748b] mb-2">
                {category.description}
              </p>
              <span className="text-xs text-[#0284c7] font-medium">
                {category.articleCount} articles
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("faq")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "faq"
                  ? "border-[#0284c7] text-[#0284c7]"
                  : "border-transparent text-[#64748b] hover:text-[#091a2b]"
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "articles"
                  ? "border-[#0284c7] text-[#0284c7]"
                  : "border-transparent text-[#64748b] hover:text-[#091a2b]"
              }`}
            >
              Help Articles
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "faq" && (
            <div className="space-y-4">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <FaQuestionCircle className="mx-auto text-4xl text-[#e0f2fe] mb-4" />
                  <h3 className="text-lg font-semibold text-[#091a2b] mb-2">
                    No FAQs found
                  </h3>
                  <p className="text-[#64748b]">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              ) : (
                filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#091a2b] mb-1">
                            {faq.question}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {faq.category}
                            </span>
                            <div className="flex gap-1">
                              {faq.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="text-xs text-[#64748b] bg-gray-100 px-2 py-1 rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          {expandedFAQ === faq.id ? (
                            <FaChevronDown className="text-[#64748b]" />
                          ) : (
                            <FaChevronRight className="text-[#64748b]" />
                          )}
                        </div>
                      </div>
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-[#64748b] leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "articles" && (
            <div className="space-y-4">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <FaBook className="mx-auto text-4xl text-[#e0f2fe] mb-4" />
                  <h3 className="text-lg font-semibold text-[#091a2b] mb-2">
                    No articles found
                  </h3>
                  <p className="text-[#64748b]">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              ) : (
                filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <span className="text-xs text-[#64748b]">
                            {article.readTime}
                          </span>
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-xs" />
                            <span className="text-xs text-[#64748b]">
                              {article.rating}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-[#091a2b] mb-2">
                          {article.title}
                        </h3>
                        <p className="text-[#64748b] mb-3">{article.summary}</p>
                        <div className="flex items-center gap-4 text-xs text-[#64748b]">
                          <div className="flex items-center gap-1">
                            <FaEye />
                            {article.views} views
                          </div>
                          <div className="flex items-center gap-1">
                            <FaClock />
                            Updated{" "}
                            {new Date(article.lastUpdated).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 text-[#0284c7] hover:text-[#0369a1]">
                        <FaExternalLinkAlt />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-[#0284c7] to-[#0369a1] rounded-lg shadow-sm p-8 text-white">
        <div className="text-center">
          <FaHeadset className="mx-auto text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Still Need Help?</h2>
          <p className="text-blue-100 mb-6">
            Our support team is available 24/7 to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContactSupport("Live Chat")}
              className="bg-white text-[#0284c7] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Live Chat
            </button>
            <button
              onClick={() => handleContactSupport("Phone")}
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0284c7] transition-colors"
            >
              Call Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSupport;
