import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/forget-password', { email })
      alert("mail sent successfully")
    } catch (error) {
      alert('error sending reset link')
    }
  }


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-600 to-red-600">
      <div className="flex-grow container mx-auto px-4 py-24 flex flex-col items-center justify-center">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 w-full max-w-lg">
          <h1 className="text-center text-3xl font-bold mb-8 text-black">
            Forgot <span className="text-red-600">Password</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/sign-in" className="text-blue-500 hover:text-blue-400">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white text-center py-4">
        &copy; 2024 LifeFlow. All rights reserved.
      </footer>
    </div>
  );
};

export default ForgotPassword;
