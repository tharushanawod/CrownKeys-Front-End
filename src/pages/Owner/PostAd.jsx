import React, { useState } from "react";
import SidebarOwner from "../../components/SidebarOwner";
import api from "../../api/api";
import {
  FaMoneyBill,
  FaHome,
  FaWarehouse,
  FaBuilding,
  FaMapMarkedAlt,
  FaCity,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaLayerGroup,
  FaClock,
  FaCouch,
  FaCar,
  FaCheck,
  FaChevronRight,
  FaChevronLeft,
  FaMapMarkerAlt,
  FaStreetView,
} from "react-icons/fa";

const propertyTypes = [
  {
    key: "industrial",
    label: "Industrial Properties",
    icon: <FaWarehouse className="text-3xl" />,
  },
  {
    key: "commercial",
    label: "Commercial Spaces",
    icon: <FaBuilding className="text-3xl" />,
  },
  {
    key: "lands",
    label: "Lands",
    icon: <FaMapMarkedAlt className="text-3xl" />,
  },
  {
    key: "apartments",
    label: "Apartments",
    icon: <FaCity className="text-3xl" />,
  },
  {
    key: "homes",
    label: "Residential Homes",
    icon: <FaHome className="text-3xl" />,
  },
];
const landSubcategories = [
  "Residential Land",
  "Agricultural Land",
  "Tea Estate Land",
  "Rubber Estate Land",
  "Coconut Estate Land",
  "Paddy (Rice) Land",
  "Cinnamon Estate Land",
  "Waterfront Land",
];
const statusOptions = [
  "Available Now",
  "Available Soon",
  "Price Reduced",
  "Other",
];
const furnishingOptions = ["Fully Furnished", "Semi-Furnished", "Unfurnished"];

// Add property-specific features
const landFeatures = [
  { key: "beachfront", label: "Beachfront/sea view 🌊" },
  { key: "waterfront", label: "Waterfront/riverside" },
  { key: "gated", label: "Gated Community 🏡🔒" },
  { key: "mainLineWater", label: "Main Line Water 💧" },
  { key: "threePhase", label: "3-Phase Electricity ⚡" },
  { key: "security24", label: "24 Hours Security 🕵️‍♂️" },
];

const houseFeatures = [
  { key: "luxury", label: "Luxury Specification 👑" },
  { key: "colonial", label: "Colonial Architecture 🏛️" },
  { key: "security", label: "Home security system 🔒" },
  { key: "overhead", label: "Overhead Water Tank 💧" },
  { key: "indoorGarden", label: "Indoor Garden 🪴" },
  { key: "gated", label: "Gated Community 🏡🔒" },
  { key: "brandNew", label: "Brand New 🆕" },
  { key: "maidsRoom", label: "Maid's room" },
  { key: "maidsToilet", label: "Maid's Toilet" },
  { key: "attachedToilets", label: "Attached Toilets" },
  { key: "acRooms", label: "24 AC rooms ❄️" },
  { key: "pool", label: "Swimming Pool 🏊" },
  { key: "lawnGarden", label: "Lawn Garden 🌿" },
  { key: "security24", label: "24 Hours Security 🕵️‍♂️" },
  { key: "mainLineWater", label: "Main Line Water 💧" },
  { key: "hotWater", label: "Hot Water 🔥" },
  { key: "garage", label: "Garage 🚗" },
  { key: "roofTop", label: "Roof Top Garden 🪴" },
  { key: "threePhase", label: "3-Phase Electricity ⚡" },
  { key: "infinityPool", label: "Infinity Pool 🌌" },
];

const commercialFeatures = [
  { key: "security24", label: "24 Hours Security 🕵️‍♂️" },
  { key: "mainLineWater", label: "Main Line Water 💧" },
  { key: "threePhase", label: "3-Phase Electricity ⚡" },
  { key: "parking", label: "Parking Facility 🚗" },
  { key: "loadingDock", label: "Loading Dock 🚛" },
  { key: "warehouse", label: "Warehouse Space 📦" },
  { key: "officeSpace", label: "Office Space 🏢" },
  { key: "retailSpace", label: "Retail Space 🏪" },
];

const initialForm = {
  offerType: "",
  propertyType: "",
  landSubcategory: "",
  lat: "",
  lng: "",
  city: "",
  street: "",
  heading: "",
  description: "",
  bedrooms: 0,
  bathrooms: 0,
  landArea: "",
  landAreaUnit: "acres",
  floorArea: "",
  price: "",
  age: "",
  status: "",
  usp: "",
  approachRoad: "",
  furnishing: "",
  parking: "",
  features: [],
};

const PostAd = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Simulate map click
  const handleMapClick = () => {
    // For demo, randomize lat/lng
    const lat = (6.9 + Math.random() * 0.2).toFixed(6);
    const lng = (79.8 + Math.random() * 0.2).toFixed(6);
    setForm({ ...form, lat, lng });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((f) => f !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleContinue = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare the data for API submission
      const propertyData = {
        ...form,
        // Convert string numbers to actual numbers
        price: parseFloat(form.price),
        bedrooms: parseInt(form.bedrooms),
        bathrooms: parseInt(form.bathrooms),
        landArea: parseFloat(form.landArea),
        floorArea: parseFloat(form.floorArea),
        age: parseInt(form.age),
        parking: parseInt(form.parking),
        approachRoad: parseFloat(form.approachRoad),
        lat: parseFloat(form.lat),
        lng: parseFloat(form.lng),
      };

      const response = await api.post("/owner/properties", propertyData);

      if (response.data.success) {
        setSuccess(true);
        setForm(initialForm);
        setStep(1);
        alert("Property posted successfully!");
      } else {
        setError(response.data.message || "Failed to post property");
      }
    } catch (error) {
      console.error("Error posting property:", error);
      setError(
        error.response?.data?.message ||
          "Failed to post property. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f3f4] flex">
      <SidebarOwner />
      <div className="flex-1 flex flex-col min-w-0 sm:ml-64">
        <div className="max-w-2xl mx-auto w-full p-4 md:p-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mt-8 mb-8 ">
            <h1 className="text-2xl md:text-3xl font-bold text-[#091a2b] mb-6 text-center">
              Post Your Ad
            </h1>
            <form onSubmit={handleSubmit}>
              {/* Display error message */}
              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              {/* Display success message */}
              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Property posted successfully!
                </div>
              )}
              {/* Stepper */}
              <div className="flex justify-center mb-8 gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`w-8 h-2 rounded-full transition-all duration-300 ${
                      step === s ? "bg-[#0284c7] w-16" : "bg-[#64748b] w-8"
                    }`}
                  ></div>
                ))}
              </div>
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-8">
                  {/* Offer Type */}
                  <div>
                    <label className="block text-[#091a2b] font-semibold mb-3">
                      Offer Type
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        className={`flex-1 flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-colors text-lg font-semibold gap-2 focus:outline-none ${
                          form.offerType === "sale"
                            ? "bg-[#0284c7] text-white border-[#0284c7]"
                            : "bg-white text-[#3b4876] border-[#a8aeaf] hover:bg-[#f1f3f4]"
                        }`}
                        onClick={() => setForm({ ...form, offerType: "sale" })}
                      >
                        <FaMoneyBill className="text-3xl mb-1" /> For Sale
                      </button>
                      <button
                        type="button"
                        className={`flex-1 flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-colors text-lg font-semibold gap-2 focus:outline-none ${
                          form.offerType === "rent"
                            ? "bg-[#0284c7] text-white border-[#0284c7]"
                            : "bg-white text-[#3b4876] border-[#a8aeaf] hover:bg-[#f1f3f4]"
                        }`}
                        onClick={() => setForm({ ...form, offerType: "rent" })}
                      >
                        <FaHome className="text-3xl mb-1" /> For Rent
                      </button>
                    </div>
                  </div>
                  {/* Property Type */}
                  <div>
                    <label className="block text-[#091a2b] font-semibold mb-3">
                      Property Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {propertyTypes.map((type) => (
                        <button
                          key={type.key}
                          type="button"
                          className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-colors text-base font-semibold gap-2 focus:outline-none ${
                            form.propertyType === type.key
                              ? "bg-[#0284c7] text-white border-[#0284c7]"
                              : "bg-white text-[#3b4876] border-[#a8aeaf] hover:bg-[#f1f3f4]"
                          }`}
                          onClick={() =>
                            setForm({
                              ...form,
                              propertyType: type.key,
                              landSubcategory: "",
                            })
                          }
                        >
                          {type.icon}
                          {type.label}
                        </button>
                      ))}
                    </div>
                    {/* Land Subcategories as Cards */}
                    {form.propertyType === "lands" && (
                      <div className="mt-4">
                        <label className="block text-[#091a2b] font-medium mb-2">
                          Select Land Type
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {landSubcategories.map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              className={`flex items-center justify-center p-3 rounded-lg border-2 transition-colors text-sm font-semibold focus:outline-none ${
                                form.landSubcategory === sub
                                  ? "bg-[#0284c7] text-white border-[#0284c7]"
                                  : "bg-white text-[#3b4876] border-[#a8aeaf] hover:bg-[#f1f3f4]"
                              }`}
                              onClick={() =>
                                setForm({ ...form, landSubcategory: sub })
                              }
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Map Picker */}
                  <div>
                    <label className="block text-[#091a2b] font-semibold mb-3">
                      Location
                    </label>
                    <div className="mb-2 text-[#3b4876] text-sm">
                      Click on the map to select location
                    </div>
                    <div
                      className="w-full h-56 bg-[#e0e4e6] rounded-lg flex items-center justify-center cursor-pointer mb-2 border-2 border-dashed border-[#a8aeaf] relative"
                      onClick={handleMapClick}
                    >
                      <FaMapMarkerAlt className="text-5xl text-[#005163]" />
                      <span className="absolute bottom-2 right-4 text-xs text-[#3b4876]">
                        Google Map Placeholder
                      </span>
                    </div>
                    {form.lat && form.lng && (
                      <div className="flex gap-4 text-[#3b4876] text-sm">
                        <span>Latitude: {form.lat}</span>
                        <span>Longitude: {form.lng}</span>
                      </div>
                    )}
                  </div>
                  {/* City & Street */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#091a2b] font-medium mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                        placeholder="Enter city"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#091a2b] font-medium mb-1">
                        Street
                      </label>
                      <input
                        type="text"
                        name="street"
                        value={form.street}
                        onChange={handleChange}
                        className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                        placeholder="Enter street"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-8">
                    <button
                      type="button"
                      className="bg-[#0284c7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0369a1] transition-colors flex items-center gap-2"
                      onClick={handleContinue}
                      disabled={
                        !form.offerType ||
                        !form.propertyType ||
                        (form.propertyType === "lands" &&
                          !form.landSubcategory) ||
                        !form.lat ||
                        !form.lng ||
                        !form.city ||
                        !form.street
                      }
                    >
                      Continue <FaChevronRight />
                    </button>
                  </div>
                </div>
              )}
              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-[#091a2b] font-semibold mb-2">
                      Heading
                    </label>
                    <input
                      type="text"
                      name="heading"
                      value={form.heading}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                      placeholder={`e.g. ${
                        form.propertyType === "lands"
                          ? "Beautiful Land in Colombo"
                          : form.propertyType === "homes"
                          ? "Luxury Home in Colombo"
                          : form.propertyType === "apartments"
                          ? "Modern Apartment in Colombo"
                          : form.propertyType === "commercial"
                          ? "Prime Commercial Space in Colombo"
                          : "Industrial Property in Colombo"
                      }`}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#091a2b] font-semibold mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                      placeholder="Describe your property..."
                      required
                    ></textarea>
                  </div>

                  {/* Conditional Fields based on Property Type */}
                  {form.propertyType === "lands" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Size of Land Area
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="number"
                              name="landArea"
                              min="0"
                              value={form.landArea}
                              onChange={handleChange}
                              className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                              required
                            />
                            <select
                              name="landAreaUnit"
                              value={form.landAreaUnit}
                              onChange={handleChange}
                              className="rounded border border-[#a8aeaf] p-2 text-[#3b4876]"
                            >
                              <option value="acres">acres</option>
                              <option value="sqft">feet²</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Width of Approach Road (in feet)
                          </label>
                          <input
                            type="number"
                            name="approachRoad"
                            min="0"
                            value={form.approachRoad}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {(form.propertyType === "homes" ||
                    form.propertyType === "apartments") && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Bedrooms
                          </label>
                          <input
                            type="number"
                            name="bedrooms"
                            min="0"
                            value={form.bedrooms}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Bathrooms
                          </label>
                          <input
                            type="number"
                            name="bathrooms"
                            min="0"
                            value={form.bathrooms}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Floor Area (sqft)
                          </label>
                          <input
                            type="number"
                            name="floorArea"
                            min="0"
                            value={form.floorArea}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Age of the Building (Years)
                          </label>
                          <input
                            type="number"
                            name="age"
                            min="0"
                            value={form.age}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Status
                          </label>
                          <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg text-[#3b4876]"
                            required
                          >
                            <option value="">Select status</option>
                            {statusOptions.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Furnishing Status
                          </label>
                          <select
                            name="furnishing"
                            value={form.furnishing}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg text-[#3b4876]"
                            required
                          >
                            <option value="">Select furnishing</option>
                            {furnishingOptions.map((f) => (
                              <option key={f} value={f}>
                                {f}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[#091a2b] font-medium mb-1">
                          Parking
                        </label>
                        <input
                          type="number"
                          name="parking"
                          min="0"
                          value={form.parking}
                          onChange={handleChange}
                          className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                          placeholder="Number of parking spots"
                          required
                        />
                      </div>
                    </>
                  )}

                  {(form.propertyType === "commercial" ||
                    form.propertyType === "industrial") && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Floor Area (sqft)
                          </label>
                          <input
                            type="number"
                            name="floorArea"
                            min="0"
                            value={form.floorArea}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#091a2b] font-medium mb-1">
                            Status
                          </label>
                          <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#a8aeaf] rounded-lg text-[#3b4876]"
                            required
                          >
                            <option value="">Select status</option>
                            {statusOptions.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[#091a2b] font-medium mb-1">
                          Parking
                        </label>
                        <input
                          type="number"
                          name="parking"
                          min="0"
                          value={form.parking}
                          onChange={handleChange}
                          className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                          placeholder="Number of parking spots"
                          required
                        />
                      </div>
                    </>
                  )}

                  {/* Features Section - Show different features based on property type */}
                  <div>
                    <label className="block text-[#091a2b] font-semibold mb-2">
                      Property Features
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto">
                      {(form.propertyType === "lands"
                        ? landFeatures
                        : form.propertyType === "homes" ||
                          form.propertyType === "apartments"
                        ? houseFeatures
                        : commercialFeatures
                      ).map((feature) => (
                        <label
                          key={feature.key}
                          className="flex items-center gap-2 p-2 rounded hover:bg-[#f1f3f4] cursor-pointer text-[#3b4876]"
                        >
                          <input
                            type="checkbox"
                            name="features"
                            value={feature.key}
                            checked={form.features.includes(feature.key)}
                            onChange={handleChange}
                            className="accent-[#005163]"
                          />
                          {feature.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      className="bg-[#64748b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#475569] transition-colors flex items-center gap-2"
                      onClick={handleBack}
                    >
                      <FaChevronLeft /> Back
                    </button>
                    <button
                      type="button"
                      className="bg-[#0284c7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0369a1] transition-colors flex items-center gap-2"
                      onClick={handleContinue}
                      disabled={
                        !form.heading ||
                        !form.description ||
                        (form.propertyType === "lands" &&
                          (!form.landArea || !form.approachRoad)) ||
                        ((form.propertyType === "homes" ||
                          form.propertyType === "apartments") &&
                          (form.bedrooms < 0 ||
                            form.bathrooms < 0 ||
                            !form.floorArea ||
                            !form.age ||
                            !form.status ||
                            !form.furnishing ||
                            !form.parking)) ||
                        ((form.propertyType === "commercial" ||
                          form.propertyType === "industrial") &&
                          (!form.floorArea || !form.status || !form.parking))
                      }
                    >
                      Continue <FaChevronRight />
                    </button>
                  </div>
                </div>
              )}
              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-[#091a2b] font-semibold mb-2">
                      Expected Price in Rs.
                    </label>
                    <input
                      type="number"
                      name="price"
                      min="0"
                      value={form.price}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                      placeholder="Enter price in Rs."
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#091a2b] font-medium mb-1">
                        No. of Floors
                      </label>
                      <input
                        type="number"
                        name="floors"
                        min="1"
                        value={form.floors}
                        onChange={handleChange}
                        className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#091a2b] font-medium mb-1">
                        Primary USP
                      </label>
                      <input
                        type="text"
                        name="usp"
                        maxLength={20}
                        value={form.usp}
                        onChange={handleChange}
                        className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                        placeholder="e.g. Sea View, Brand New"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      className="bg-[#64748b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#475569] transition-colors flex items-center gap-2"
                      onClick={handleBack}
                    >
                      <FaChevronLeft /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#0284c7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0369a1] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Posting..." : "Submit"} <FaCheck />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAd;
