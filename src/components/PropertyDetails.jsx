import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import {
  FaArrowLeft,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaRegHeart,
  FaShare,
  FaPrint,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
  FaExclamationTriangle,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaShieldAlt,
  FaWifi,
  FaSnowflake,
} from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Fetch property details
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get(`/properties/${id}`);

        if (response.data.success) {
          setProperty(response.data.data);
          // Check if property is in user's favorites (you can implement this)
          // setIsSaved(checkIfInFavorites(response.data.data.id));
        }
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPropertyDetails();
    }
  }, [id]);

  // Handle save/unsave
  const toggleSave = async () => {
    try {
      if (isSaved) {
        await api.delete(`/buyers/favorites/${id}`);
      } else {
        await api.post("/buyers/favorites", { propertyId: id });
      }
      setIsSaved(!isSaved);
    } catch (err) {
      console.error("Error toggling save:", err);
    }
  };

  // Navigate through images
  const nextImage = () => {
    if (property?.photos && property.photos.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === property.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (property?.photos && property.photos.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? property.photos.length - 1 : prev - 1
      );
    }
  };

  // Get amenity icon
  const getAmenityIcon = (amenity) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes("parking") || amenityLower.includes("garage"))
      return <FaCar />;
    if (amenityLower.includes("pool") || amenityLower.includes("swimming"))
      return <FaSwimmingPool />;
    if (amenityLower.includes("gym") || amenityLower.includes("fitness"))
      return <FaDumbbell />;
    if (amenityLower.includes("security") || amenityLower.includes("guard"))
      return <FaShieldAlt />;
    if (amenityLower.includes("wifi") || amenityLower.includes("internet"))
      return <FaWifi />;
    if (
      amenityLower.includes("ac") ||
      amenityLower.includes("air conditioning")
    )
      return <FaSnowflake />;
    return <FaShieldAlt />; // Default icon
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="text-4xl text-[#0284c7] animate-spin mx-auto mb-4" />
          <p className="text-[#64748b]">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <FaExclamationTriangle className="text-6xl text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-[#091a2b] mb-2">
            Error Loading Property
          </h2>
          <p className="text-[#64748b] mb-6">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#0284c7] text-white px-6 py-3 rounded-lg hover:bg-[#0369a1] transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#091a2b] mb-2">
            Property Not Found
          </h2>
          <p className="text-[#64748b] mb-6">
            The property you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#0284c7] text-white px-6 py-3 rounded-lg hover:bg-[#0369a1] transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#0284c7] hover:text-[#0369a1] font-medium transition-colors"
            >
              <FaArrowLeft />
              Back to Search
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleSave}
                className="flex items-center gap-2 px-4 py-2 border border-[#e2e8f0] rounded-lg text-[#64748b] hover:text-[#0284c7] hover:border-[#0284c7] transition-colors"
              >
                {isSaved ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
                {isSaved ? "Saved" : "Save"}
              </button>

              <button className="flex items-center gap-2 px-4 py-2 border border-[#e2e8f0] rounded-lg text-[#64748b] hover:text-[#0284c7] hover:border-[#0284c7] transition-colors">
                <FaShare />
                Share
              </button>

              <button className="flex items-center gap-2 px-4 py-2 border border-[#e2e8f0] rounded-lg text-[#64748b] hover:text-[#0284c7] hover:border-[#0284c7] transition-colors">
                <FaPrint />
                Print
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="relative h-96">
                {property.photos && property.photos.length > 0 ? (
                  <>
                    <img
                      src={`${property.photos[currentImageIndex]}`}
                      alt={property.title}
                      className="w-full h-full object-contain"
                    />

                    {property.photos.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                        >
                          <FaChevronLeft />
                        </button>

                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                        >
                          <FaChevronRight />
                        </button>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {property.photos.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {property.photos && property.photos.length > 1 && (
                <div className="p-4">
                  <div className="grid grid-cols-6 gap-2">
                    {property.photos.slice(0, 6).map((photo, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                          currentImageIndex === index
                            ? "border-[#0284c7]"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={`${photo}`}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-[#091a2b] mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-[#64748b] mb-2">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>
                      {property.address}, {property.city}, {property.state}{" "}
                      {property.zip_code}
                    </span>
                  </div>
                  <div className="flex items-center text-[#64748b]">
                    <FaCalendarAlt className="mr-2" />
                    <span>
                      Listed on{" "}
                      {new Date(property.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-bold text-[#0284c7] mb-1">
                    Rs {property.price?.toLocaleString()}
                  </div>
                  <div className="text-[#64748b] text-sm">
                    {property.property_type}
                  </div>
                </div>
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#e2e8f0]">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <FaBed className="text-2xl text-[#0284c7]" />
                  </div>
                  <div className="text-2xl font-bold text-[#091a2b]">
                    {property.bedrooms}
                  </div>
                  <div className="text-[#64748b] text-sm">Bedrooms</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <FaBath className="text-2xl text-[#0284c7]" />
                  </div>
                  <div className="text-2xl font-bold text-[#091a2b]">
                    {property.bathrooms}
                  </div>
                  <div className="text-[#64748b] text-sm">Bathrooms</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <FaRulerCombined className="text-2xl text-[#0284c7]" />
                  </div>
                  <div className="text-2xl font-bold text-[#091a2b]">
                    {property.size}
                  </div>
                  <div className="text-[#64748b] text-sm">sq ft</div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#091a2b] mb-3">
                  Description
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-[#091a2b] mb-3">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-[#64748b]"
                      >
                        <span className="text-[#0284c7]">
                          {getAmenityIcon(amenity)}
                        </span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold text-[#091a2b] mb-4">
                Contact Agent
              </h3>

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0284c7] rounded-full flex items-center justify-center text-white mr-3">
                  <FaUser />
                </div>
                <div>
                  <div className="font-semibold text-[#091a2b]">
                    Property Agent
                  </div>
                  <div className="text-[#64748b] text-sm">
                    Real Estate Agent
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center gap-3 p-3 border border-[#e2e8f0] rounded-lg text-[#64748b] hover:text-[#0284c7] hover:border-[#0284c7] transition-colors">
                  <FaPhone />
                  <span>Call Agent</span>
                </button>

                <button className="w-full flex items-center gap-3 p-3 border border-[#e2e8f0] rounded-lg text-[#64748b] hover:text-[#0284c7] hover:border-[#0284c7] transition-colors">
                  <FaEnvelope />
                  <span>Send Message</span>
                </button>
              </div>

              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="w-full bg-[#0284c7] text-white py-3 px-4 rounded-lg hover:bg-[#0369a1] transition-colors font-medium"
              >
                Schedule Tour
              </button>

              {/* Contact Form */}
              {showContactForm && (
                <div className="mt-6 pt-6 border-t border-[#e2e8f0]">
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                    />
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-[#0284c7] text-white py-2 px-4 rounded-lg hover:bg-[#0369a1] transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Property Summary Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-[#091a2b] mb-4">
                Property Summary
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Property Type:</span>
                  <span className="font-medium text-[#091a2b]">
                    {property.property_type}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#64748b]">Price:</span>
                  <span className="font-medium text-[#091a2b]">
                    Rs {property.price?.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#64748b]">Size:</span>
                  <span className="font-medium text-[#091a2b]">
                    {property.size} sq ft
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#64748b]">Bedrooms:</span>
                  <span className="font-medium text-[#091a2b]">
                    {property.bedrooms}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#64748b]">Bathrooms:</span>
                  <span className="font-medium text-[#091a2b]">
                    {property.bathrooms}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#64748b]">Status:</span>
                  <span className="font-medium text-green-600 capitalize">
                    {property.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
