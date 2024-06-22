import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    try {
      await axios.post(
        "http://localhost:5000/sign-in",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      setRedirect(true);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.error || "Login failed");
      } else {
        setError("Login failed");
      }
      console.error("Login failed", error);
    }
  }



  if (redirect) {
    return <Navigate to={"/main"} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-300 to-blue-500 text-gray-900">
      <Header />
      <div className="container max-w-md mx-auto mt-24 mb-12 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl mb-6 text-center text-black">
          Life<span className="text-red-700">Flow</span>
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            id="sign_in"
            className="w-full py-2 bg-red-700 text-white rounded hover:bg-red-800 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="Lpage mt-6">
          <p>
            <Link
              to="/forgot_password"
              className="text-blue-500 hover:text-blue-700"
            >
              Forgot your Password?
            </Link>
          </p>
        </div>
        <span className="zx mt-2">
          <p>
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </span>
      </div>

      <div className="footer bg-gray-800 text-white text-center py-4 w-full mt-auto">
        &copy; 2024 LifeFlow. All rights reserved.
      </div>
    </div>
  );
}

export default Signin;
