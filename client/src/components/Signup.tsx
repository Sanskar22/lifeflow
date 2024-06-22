import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const checkPasswordStrength = (password: String) => {
    let strength = "";
    const strengthIndicator = document.getElementById("password-strength");

    if (strengthIndicator) {
      if (password.length < 6) {
        strength = "Weak";
        strengthIndicator.className = "text-red-600";
      } else if (password.length < 10) {
        strength = "Moderate";
        strengthIndicator.className = "text-blue-600";
      } else if (password.length < 15) {
        strength = "Strong";
        strengthIndicator.className = "text-green-600";
      } else {
        strength = "Very Strong";
        strengthIndicator.className = "text-darkgreen-600";
      }
      setPasswordStrength(strength);
    }
  };

  const checkPasswordMatch = (confirmPassword: String) => {
    const matchIndicator = document.getElementById("password-match");
    if (matchIndicator) {
      if (password !== confirmPassword) {
        matchIndicator.textContent = "Passwords do not match";
        matchIndicator.className = "text-red-600 text-sm";
      } else {
        matchIndicator.textContent = "";
      }
      setPasswordMatch(matchIndicator.textContent);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  async function signup(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      await axios.post("http://localhost:5000/sign-up", {
        firstName,
        lastName,
        email,
        dob,
        gender,
        address,
        zipcode,
        password,
        termsAccepted: termsChecked,
      });
      setRedirect(true);
    } catch (error) {
      setRedirect(false);
      alert("registration failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/main"} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-red-500 via-purple-600 to-blue-900 text-gray-900">
      <Header />
      <div className="container mx-auto mt-24 mb-12 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col items-center max-w-lg">
        <img
          src="logo3.png"
          alt="Top Image"
          className="mb-6 max-w-xs h-auto rounded-full"
        />
        <h1 className="text-4xl mb-6 text-center text-black font-bold">
          Welcome to Life<span className="text-red-700">Flow</span>
        </h1>
        <form className="w-full" onSubmit={signup}>
          <label
            htmlFor="first-name"
            className="block text-lg font-semibold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="last-name"
            className="block text-lg font-semibold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label htmlFor="dob" className="block text-lg font-semibold mb-2">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label htmlFor="gender" className="block text-lg font-semibold mb-2">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="address" className="block text-lg font-semibold mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label htmlFor="zipcode" className="block text-lg font-semibold mb-2">
            Zip code:
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="password"
            className="block text-lg font-semibold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordStrength(e.target.value);
            }}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div id="password-strength" className="text-sm">
            {passwordStrength}
          </div>

          <label
            htmlFor="confirm-password"
            className="block text-lg font-semibold mb-2"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              checkPasswordMatch(e.target.value);
            }}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div id="password-match" className="text-red-600 text-sm">
            {passwordMatch}
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={() => setTermsChecked(!termsChecked)}
              className="w-4 h-4 mr-2"
            />
            <label htmlFor="terms" className="text-sm font-normal">
              I agree to the LifeFlow{" "}
              <Link
                to="/privacy-policy"
                className="text-blue-600 hover:text-blue-800"
              >
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link
                to="/terms-and-conditions"
                className="text-blue-600 hover:text-blue-800"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={!termsChecked}
            className={`w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ${
              !termsChecked ? "bg-green-300 cursor-not-allowed" : ""
            }`}
          >
            Create Account
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-blue-600 hover:text-blue-800">
            Sign in
          </Link>
        </p>
      </div>

      <div className="footer bg-gray-800 text-white text-center py-4 w-full mt-auto">
        &copy; 2024 LifeFlow. All rights reserved.
      </div>
    </div>
  );
};

export default CreateAccount;
