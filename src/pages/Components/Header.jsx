import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <Link to={"/"} className="text-gray-600 hover:text-secondary">
              Home
            </Link>
            <Link
              to={"/property-categories"}
              className="text-gray-600 hover:text-secondary"
            >
              Properties
            </Link>
            <Link
              to={"/about-us"}
              className="text-gray-600 hover:text-secondary"
            >
              About
            </Link>
            <Link
              to={"/contact-us"}
              className="text-gray-600 hover:text-secondary"
            >
              Contact
            </Link>
            <Link
              to={"/signup"}
              className="bg-button-primary text-white px-6 py-2 rounded-full hover:bg-button-secondary transition-colors"
            >
              Sign Up
            </Link>
            <Link
              to={"/login"}
              className="border border-primary border-2 text-primary px-6 py-2 rounded-full hover:border-secondary hover:bg-button-secondary-low transition-colors"
            >
              Login
            </Link>
          </div>
        </div>{" "}
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to={"/"} className="block text-gray-600 hover:text-secondary">
              Home
            </Link>
            <Link
              to={"/property-categories"}
              className="block text-gray-600 hover:text-secondary"
            >
              Properties
            </Link>
            <Link
              to={"/about-us"}
              className="block text-gray-600 hover:text-secondary"
            >
              About
            </Link>
            <Link
              to={"/contact-us"}
              className="block text-gray-600 hover:text-secondary"
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link
                to={"/signup"}
                className="bg-button-primary text-white px-6 py-2 rounded-full hover:bg-button-secondary transition-colors text-center"
              >
                Sign Up
              </Link>{" "}
              <Link
                to={"/login"}
                className="border-2 border-primary text-primary px-6 py-2 rounded-full hover:border-secondary hover:bg-button-secondary-low transition-colors text-center"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
