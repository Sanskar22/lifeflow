import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function DropdownMenu() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const user = useContext(UserContext)
  const value = (user?.user)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="relative mr-9">
      <button
        onClick={toggleDropdown}
        className="dropbtn h-15 w-14 font-bold text-4xl text-red-500 bg-gray-900"
      >
        ☰
      </button>
      <div
        id="myDropdown"
        className={`dropdown-content absolute bg-gray-900 min-w-40 left-1/2 transform -translate-x-1/2 ${dropdownVisible ? "block" : "hidden"
          }`}
      >
        {value ? (
          <Link
            to="/main"
            className="block px-4 py-2 text-white hover:bg-primary"
          >
            Home
          </Link>
        ) : (
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:bg-primary"
          >
            Home
          </Link>
        )}

        <Link
          to="/about"
          className="block px-4 py-2 text-white hover:bg-primary"
        >
          About
        </Link>
        <Link
          to="/blog"
          className="block px-4 py-2 text-white hover:bg-primary"
        >
          Blog
        </Link>
        <Link
          to="#"
          onClick={() =>
            document
              .getElementById("contact-us")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="block px-4 py-2 text-white hover:bg-primary"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
