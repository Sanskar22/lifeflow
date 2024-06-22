import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Footer from "./Footer";
import axios from "axios";
import MandatoryLabel from "./MandatoryLabel";
import Header_Terms_Donate from "./Header_Terms_Donate";

function DonateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [totalDonate, setTotalDonate] = useState("");
  const [dob, setDob] = useState("");
  const [lastDonate, setLastDonate] = useState("");
  const [redirect, setRedirect] = useState(false);


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Handle form submission here
    try {
      await axios.post("http://localhost:5000/donate", {
        name, email, phone, state, city, address,
        bloodGroup, gender, totalDonate, dob, lastDonate
      })
      setRedirect(true);
      alert("donor registration successful")
    } catch (error) {
      alert("registration failed");
    }
  };

  if (redirect) {
    return <Navigate to={'/main'} />
  }

  return (
    <div>

      <Header_Terms_Donate />

      {/* Image Section */}
      <div className="flex justify-center my-4">
        <img
          id="image-blood"
          className="img-fluid w-10/12"
          src="blood-poster.png"
          alt="image"
        />
      </div>

      {/* Quote Section */}
      <div id="each-drop" className="h-19 w-full bg-primary">
        <h2
          id="each-drop-text"
          className="text-white text-center py-3 text-xl md:text-2xl lg:text-3xl"
        >
          "Each Drop Given, A Whisper Of Life Shared."
        </h2>
      </div>

      <div className="h-2.5 w-full bg-blue-50"></div>

      {/* Form Section */}
      <div className="container-fluid p-6 border-red-500 bg-gray-200 shadow-inner-red-500 pb-8">

        <form onSubmit={handleSubmit} className="bg-gray-100 p-10 shadow-lg">
          <h5 className="font-bold pl-3 pt-2 text-lg md:text-xl lg:text-2xl mb-2">
            Personal Information
          </h5>
          <div className="pt-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="custom-input">
                <MandatoryLabel label="Name" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="custom-input">
                <MandatoryLabel label="Email" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="custom-input">
                <MandatoryLabel label="Phone" />
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="custom-input">
                <MandatoryLabel label="State" />
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="custom-input">
                <MandatoryLabel label="City" />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="custom-input">
                <MandatoryLabel label="Address" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <h5 className="font-bold pl-3 pt-3 text-lg md:text-xl lg:text-2xl mt-4 mb-2">
            Other Information
          </h5>
          <div className="pt-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="custom-input">
                <MandatoryLabel label="Blood Group" />
                <select
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="custom-input">
                <MandatoryLabel label="Gender" />
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="custom-input">
                <MandatoryLabel label="Total Donate" />
                <input
                  type="text"
                  value={totalDonate}
                  onChange={(e) => setTotalDonate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="custom-input">
                <MandatoryLabel label="Date Of Birth" />
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="custom-input">
                <MandatoryLabel label="Last Donate" />
                <input
                  type="date"
                  value={lastDonate}
                  onChange={(e) => setLastDonate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-center mt-4 p-10">
              <button
                type="submit"
                className="btn font-bold w-45 bg-primary text-white py-2 px-4 rounded-xl"
              >
                Apply Now
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default DonateForm;
