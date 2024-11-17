import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const login = true; // Simulated login state
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); // To determine the current path

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sticky top-0 z-50 shadow-lg bg-white">
      {/* Main Navbar */}
      <nav className="border-b border-gray-200">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-5">
          {/* Logo and Title */}
          <div className="flex items-center space-x-6">
            <img src={logo} className="h-14" alt="CropShield Logo" />
            <span className="text-3xl font-semibold text-green-600">
              Crop Insurance
            </span>
          </div>

          {/* Contact Info and User Profile */}
          <div className="flex items-center space-x-8">
            <Link
              to="tel:5541251234"
              className="text-lg text-blue-600 hover:underline"
            >
              (555) 412-1234
            </Link>

            {login ? (
              <div className="relative flex items-center">
                {/* User Info */}
                <div className="flex items-center">
                  <p className="text-lg text-gray-700 font-medium mr-4">
                    Neil Sims
                  </p>
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="w-12 h-12 rounded-full focus:ring-4 focus:ring-gray-300"
                  >
                    <img
                      className="w-full h-full rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user"
                    />
                  </button>
                </div>

                {/* Dropdown Menu */}
                <div
                  ref={dropdownRef}
                  className={`absolute right-0 top-4 mt-4 w-52 bg-white rounded-lg shadow-lg border border-gray-200 transform transition-all ${
                    isOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="px-4 py-4">
                    <p className="text-lg text-gray-700">Neil Sims</p>
                    <p className="text-sm text-gray-500">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/settings"
                        className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/earnings"
                        className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => alert("Logged out")}
                        className="w-full text-left block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-6">
                <Link
                  to="/signin"
                  className="text-lg text-blue-600 font-medium hover:underline"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-lg text-blue-600 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="bg-green-100">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <ul className="flex items-center space-x-10 text-lg font-medium">
            <li>
              <Link
                to="/"
                className={`hover:underline ${
                  isActive("/") ? "text-green-600 underline" : "text-gray-700"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/insurance"
                className={`hover:underline ${
                  isActive("/insurance")
                    ? "text-green-600 underline"
                    : "text-gray-700"
                }`}
              >
                Insurance
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className={`hover:underline ${
                  isActive("/features")
                    ? "text-green-600 underline"
                    : "text-gray-700"
                }`}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`hover:underline ${
                  isActive("/about-us")
                    ? "text-green-600 underline"
                    : "text-gray-700"
                }`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;