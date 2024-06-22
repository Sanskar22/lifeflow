import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const user = useContext(UserContext)
  const value = user?.user

  return (
    <header className="bg-gray-900 text-white  p-4 flex justify-between items-center shadow-md w-full">
      <Link to="/" className="flex items-center">
        <img src="logo3.png" alt="Blood Donation Logo" className="h-12 mr-2" />
        <h1 className="text-2xl font-bold">
          Life<span className="text-red-600">Flow</span>
        </h1>
      </Link>
      <div className="block lg:hidden" onClick={toggleMenu}>
        <div className="w-8 h-1 bg-white mb-1"></div>
        <div className="w-8 h-1 bg-white mb-1"></div>
        <div className="w-8 h-1 bg-white"></div>
      </div>
      <nav
        className={`lg:flex space-x-4 ${isMenuOpen ? "flex" : "hidden"
          } flex-col lg:flex-row lg:items-center lg:static absolute top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent z-10`}
      >
        <Link to="/" className="text-white hover:bg-red-700 p-2 rounded">
          Home
        </Link>
        <Link to="/about" className="text-white hover:bg-red-700 p-2 rounded">
          About
        </Link>
        {value !== null && (
          <Link
            to="/donate"
            className="text-white hover:bg-red-700 p-2 rounded"
          >
            Donate
          </Link>
        )}

        {value === null && (
          <Link to="/sign-in" className="text-white hover:bg-red-700 p-2 rounded">
            Login to Donate
          </Link>
        )}
        <button
          onClick={() => scrollToSection("contact-us")}
          className="text-white hover:bg-red-700 p-2 rounded"
        >
          Contact
        </button>
        {location.pathname === "/" && (
          <Link
            to="/sign-in"
            className="text-blue-500 font-semibold hover:text-gray-100 p-2 rounded"
          >
            Sign in
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
