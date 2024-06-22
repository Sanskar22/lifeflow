import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { UserContext } from "../UserContext";
import BloodGroupCounts from "./BloodGroupCounts";
import Contact_Main from "./Contact_Main";
import RequestBloodDonation from "./RequestBloodDonation";

function Main() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState<string>('');;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    console.log('Dropdown state:', !dropdownOpen);
  };


  const respawn = async () => {
    try {
      await axios.post("http://localhost:5000/logout");
    } catch (error) {
      alert("Error in logging out");
    }
  };

  const [bloodType, setBloodType] = useState("");

  const navigate = useNavigate();

  async function handleSearch() {
    try {
      const response = await axios.get('http://localhost:5000/user-by-blood-group', {
        params: { bloodGroup: bloodType }
      });
      navigate('/donor-results', { state: { donors: response.data } });
    }
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 404) {
            setError('No donors found for this blood group');
          } else if (error.response.status === 400) {
            setError('Blood group is required');
          } else {
            setError('Server error');
          }
        } else {
          setError('Network error');
        }
      } else {
        setError('An unexpected error occurred');
      }
    }

  };

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('useContext must be used within a UserContextProvider');
  }

  const { user } = userContext;


  return (
    <div
      className="flex flex-col min-h-screen bg-gray-200"

    >

      <header className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="logo3.png"
            alt="Blood Donation Logo"
            className="h-12 mr-2"
          />
          <h1 className="text-2xl">
            Life<span className="text-red-500">Flow</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/main" className="hover:bg-red-700 p-2 rounded">
            Home
          </Link>
          <Link to="/about" className="hover:bg-red-700 p-2 rounded">
            About
          </Link>
          <Link to="/donate" className="hover:bg-red-700 p-2 rounded">
            Donate
          </Link>
          <Link to="#contact" className="hover:bg-red-700 p-2 rounded">
            Contact
          </Link>
        </nav>
        <div className="relative mr-10">
          <div
            className="flex flex-col gap-2 overflow-hidden cursor-pointer items-center"
            onClick={toggleDropdown}
          >
            <img src="profile-icon.png" alt="Profile Icon" className="w-8 rounded-full border-2 border-white" />
            {user && (
              <p className="text-white text-lg">
                {user.firstName}
              </p>
            )}
          </div>
          {dropdownOpen && (
            <div className={`dropdown-content absolute bg-gray-900 min-w-40 left-1/2 transform -translate-x-1/2 ${dropdownOpen ? "block" : "hidden"
              }`}>
              <div className="block md:hidden">
                <Link
                  to="/main"
                  className="block px-4 py-2 text-white hover:bg-primary"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-white hover:bg-primary"
                >
                  About
                </Link>
                <Link
                  to="/donate"
                  className="block px-4 py-2 text-white hover:bg-primary"
                >
                  Donate
                </Link>
                <Link
                  to="#contact"
                  className="block px-4 py-2 text-white hover:bg-primary"
                >
                  Contact
                </Link>
                <hr className="my-2" />
              </div>
              <Link
                to="/edit-profile"
                className="block px-4 py-2 text-white hover:bg-primary"
              >
                Edit Profile
              </Link>
              <Link to="/terms" className="block px-4 py-2 text-white hover:bg-primary">
                Terms
              </Link>
              <Link
                to="/privacy-policy"
                className="block px-4 py-2 text-white hover:bg-primary"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                onClick={respawn}
                className="block px-4 py-2 text-white hover:bg-primary"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 p-4 text-center">
        <div className="mb-4">
          <img
            src="Designer-4.png"
            alt="Placeholder Image"
            className="max-w-full h-auto mx-auto"
          />
        </div>
        <div className="text-xl font-bold mb-8 mt-8">Available Blood Donors</div>
        <BloodGroupCounts />
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8 w-5/6 mx-auto">
          <h2 className="text-gray-900 text-lg mb-4">Search for Donors</h2>
          <input
            type="text"
            placeholder="Enter blood type (e.g., A+, O-)"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleSearch}
            className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-900"
          >
            Search
          </button>
        </div>
        <RequestBloodDonation />
      </main>

      <div
        className="container my-16 p-8 bg-gray-100 w-5/6 mx-auto"
        id="contact"
      >
        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
        <Contact_Main />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
