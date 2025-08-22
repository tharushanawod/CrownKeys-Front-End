import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token) {
      setIsAuthenticated(true);
      setUserRole(role);
    } else {
      setIsAuthenticated(false);
      setUserRole(null);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserRole(null);
    navigate("/");
  };

  // Get dashboard route based on user role
  const getDashboardRoute = () => {
    switch (userRole) {
      case "agent":
        return "/agent/dashboard";
      case "buyer":
        return "/buyer/dashboard";
      case "owner":
        return "/owner/dashboard";
      default:
        return "/";
    }
  };
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="./Images/Common/ewe.png"
              alt="RealEstate Logo"
              className="h-12 w-full"
            />
            <img
              src="./Images/Common/TEXT3.png"
              alt="RealEstate Logo"
              className="h-12 w-full"
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={"/"} className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link
              to={"/property-categories"}
              className="text-gray-600 hover:text-blue-600"
            >
              Properties
            </Link>
            <Link
              to={"/about-us"}
              className="text-gray-600 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to={"/contact-us"}
              className="text-gray-600 hover:text-blue-600"
            >
              Contact
            </Link>

            {/* Conditional rendering based on authentication */}
            {isAuthenticated ? (
              <>
                <Link
                  to={getDashboardRoute()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>{" "}
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to={"/"} className="block text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link
              to={"/property-categories"}
              className="block text-gray-600 hover:text-blue-600"
            >
              Properties
            </Link>
            <Link
              to={"/about-us"}
              className="block text-gray-600 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to={"/contact-us"}
              className="block text-gray-600 hover:text-blue-600"
            >
              Contact
            </Link>

            {/* Conditional rendering for mobile */}
            <div className="flex flex-col space-y-2 pt-2">
              {isAuthenticated ? (
                <>
                  <Link
                    to={getDashboardRoute()}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors text-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={"/signup"}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to={"/login"}
                    className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-center"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
