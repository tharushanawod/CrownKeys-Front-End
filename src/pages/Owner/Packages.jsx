import React from "react";
import SidebarOwner from "../../components/SidebarOwner";
import { FaCheck, FaTimes, FaStar, FaCrown } from "react-icons/fa";

const packages = [
  {
    name: "Free",
    price: "LKR 0",
    listings: 1,
    duration: "30 days",
    visibility: { icon: <FaTimes className="text-red-500" />, text: "No" },
    contact: "✅ (Safe)",
    leadReports: <FaTimes className="text-red-500" />,
    support: "Community only",
    highlight: false,
  },
  {
    name: "Plus",
    price: "LKR 1000",
    listings: 2,
    duration: "60 days",
    visibility: {
      icon: <FaStar className="text-yellow-500" />,
      text: "Featured",
    },
    contact: "✅ (Safe)",
    leadReports: <FaTimes className="text-red-500" />,
    support: "Email",
    highlight: false,
  },
  {
    name: "PRO",
    price: "LKR 1500",
    listings: 3,
    duration: "90 days",
    visibility: {
      icon: <FaCrown className="text-[#005163]" />,
      text: "Top + Alerts",
    },
    contact: "❌ (Direct contact)",
    leadReports: <FaCheck className="text-green-600" />,
    support: "Priority email + chat",
    highlight: true,
  },
];

const features = [
  { label: "Monthly Price", key: "price" },
  { label: "Listings/Month", key: "listings" },
  { label: "Listing Duration", key: "duration" },
  { label: "Boost Visibility", key: "visibility" },
  { label: "Contact Info Hidden", key: "contact" },
  { label: "Lead Reports", key: "leadReports" },
  { label: "Support", key: "support" },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-[#f1f3f4] flex">
      <SidebarOwner />
      <div className="flex-1 p-8 ml-64">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-[#091a2b] mb-8 text-center">
            Choose Your Listing Package
          </h1>

          {/* Desktop View - Cards */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:scale-105 ${
                  pkg.highlight
                    ? "border-[#005163] bg-gradient-to-b from-[#e6f3f7] to-white shadow-xl"
                    : "border-[#a8aeaf] bg-white"
                }`}
              >
                {/* Package Header */}
                <div className="flex items-center gap-3 mb-6">
                  {pkg.highlight && (
                    <FaCrown
                      className="text-[#005163] text-2xl"
                      title="Best Value"
                    />
                  )}
                  <h2 className="text-2xl font-bold text-[#091a2b]">
                    {pkg.name}
                  </h2>
                </div>

                {/* Price */}
                <div className="text-3xl font-extrabold text-[#005163] mb-8">
                  {pkg.price}
                </div>

                {/* Features List */}
                <div className="space-y-6 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#3b4876] font-medium">
                      Listings/Month
                    </span>
                    <span className="font-semibold">{pkg.listings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3b4876] font-medium">
                      Listing Duration
                    </span>
                    <span className="font-semibold">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3b4876] font-medium">
                      Boost Visibility
                    </span>
                    <div className="flex items-center gap-2">
                      {pkg.visibility.icon}
                      <span className="font-semibold">
                        {pkg.visibility.text}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3b4876] font-medium">
                      Contact Info Hidden
                    </span>
                    <span className="font-semibold">{pkg.contact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3b4876] font-medium">
                      Lead Reports
                    </span>
                    <span className="font-semibold">{pkg.leadReports}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3b4876] font-medium">Support</span>
                    <span className="font-semibold">{pkg.support}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg mt-8 transition-colors ${
                    pkg.highlight
                      ? "bg-[#005163] text-white hover:bg-[#091a2b]"
                      : pkg.name === "Free"
                      ? "bg-[#a8aeaf] text-white cursor-not-allowed"
                      : "bg-[#a8aeaf] text-white hover:bg-[#3b4876]"
                  }`}
                  disabled={pkg.name === "Free"}
                >
                  {pkg.name === "Free" ? "Current Plan" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile View - Table */}
          <div className="md:hidden">
            <div className="space-y-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-xl border-2 p-6 ${
                    pkg.highlight
                      ? "border-[#005163] bg-gradient-to-b from-[#e6f3f7] to-white"
                      : "border-[#a8aeaf] bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {pkg.highlight && (
                      <FaCrown className="text-[#005163] text-xl" />
                    )}
                    <h2 className="text-xl font-bold text-[#091a2b]">
                      {pkg.name}
                    </h2>
                  </div>
                  <div className="text-2xl font-bold text-[#005163] mb-4">
                    {pkg.price}
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-[#3b4876]">Listings/Month:</span>
                      <span>{pkg.listings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#3b4876]">Duration:</span>
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#3b4876]">Visibility:</span>
                      <div className="flex items-center gap-1">
                        {pkg.visibility.icon}
                        <span>{pkg.visibility.text}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#3b4876]">Contact Hidden:</span>
                      <span>{pkg.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#3b4876]">Lead Reports:</span>
                      <span>{pkg.leadReports}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#3b4876]">Support:</span>
                      <span>{pkg.support}</span>
                    </div>
                  </div>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold ${
                      pkg.highlight
                        ? "bg-[#005163] text-white hover:bg-[#091a2b]"
                        : pkg.name === "Free"
                        ? "bg-[#a8aeaf] text-white cursor-not-allowed"
                        : "bg-[#a8aeaf] text-white hover:bg-[#3b4876]"
                    }`}
                    disabled={pkg.name === "Free"}
                  >
                    {pkg.name === "Free" ? "Current Plan" : "Choose Plan"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
