import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaBuilding,
  FaHome,
  FaUserTie,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    userRole: "buyer", // default role
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const userRoles = [
    { id: "buyer", label: "Buyer", icon: <FaHome className="text-2xl" /> },
    {
      id: "owner",
      label: "Property Owner",
      icon: <FaBuilding className="text-2xl" />,
    },
    {
      id: "agent",
      label: "Real Estate Agent",
      icon: <FaUserTie className="text-2xl" />,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.userRole) newErrors.userRole = "Please select a user role";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
    }
  };

  // Password strength calculation
  const calculatePasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const getPasswordStrengthColor = (strength) => {
    switch (strength) {
      case 0:
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-orange-500";
      case 3:
        return "bg-yellow-500";
      case 4:
        return "bg-blue-500";
      case 5:
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  const getPasswordStrengthText = (strength) => {
    switch (strength) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      case 5:
        return "Very Strong";
      default:
        return "";
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 z-20 flex items-center text-white hover:text-gray-200 transition-colors duration-200"
      >
        <FaArrowLeft className="mr-2" />
        <span>Back to Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">CrownKeys</h1>
          <h2 className="text-3xl font-bold text-white">Create Your Account</h2>
          <p className="mt-2 text-gray-200">Join our real estate community</p>
        </div>
      </motion.div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm py-8 px-4 shadow-xl rounded-lg sm:px-10">
          {/* User Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#091a2b] mb-2">
              Select Your Role
            </label>
            <div className="grid grid-cols-3 gap-3">
              {userRoles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() =>
                    handleChange({
                      target: { name: "userRole", value: role.id },
                    })
                  }
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 ${
                    formData.userRole === role.id
                      ? "border-[#005163] bg-[#005163] text-white"
                      : "border-gray-200 hover:border-[#005163] text-[#3b4876]"
                  }`}
                >
                  {role.icon}
                  <span className="mt-2 text-sm font-medium">{role.label}</span>
                </button>
              ))}
            </div>
            {errors.userRole && (
              <p className="mt-1 text-sm text-red-600">{errors.userRole}</p>
            )}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-[#091a2b]"
              >
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-[#005163]" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="R.H.K Rathnayake"
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005163] focus:border-transparent`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#091a2b]"
              >
                Email Address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-[#005163]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rathnayake@example.com"
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005163] focus:border-transparent`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#091a2b]"
              >
                Phone Number
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-[#005163]" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+(94) 712345678"
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005163] focus:border-transparent`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#091a2b]"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-[#005163]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`block w-full pl-10 pr-10 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005163] focus:border-transparent`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#005163]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${getPasswordStrengthColor(
                        calculatePasswordStrength(formData.password)
                      )}`}
                      style={{
                        width: `${
                          (calculatePasswordStrength(formData.password) / 5) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1 text-gray-600">
                    Password Strength:{" "}
                    <span className="font-medium">
                      {getPasswordStrengthText(
                        calculatePasswordStrength(formData.password)
                      )}
                    </span>
                  </p>
                </div>
              )}
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#091a2b]"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-[#005163]" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`block w-full pl-10 pr-10 py-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005163] focus:border-transparent`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#005163]"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#005163] hover:bg-[#091a2b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005163] transition-colors duration-300"
              >
                Create Account
              </motion.button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#3b4876]">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-[#005163] hover:text-[#091a2b]"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
