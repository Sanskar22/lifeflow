import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios"

function ResetPassword() {

    const { id, token } = useParams()

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [passwordMatch, setPasswordMatch] = useState("");

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

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await axios.post(`http://localhost:5000/reset-password/${id}/${token}`, { password })
            .then(res => {
                alert("password changed successfully")
            }).catch(err => console.log(err))

    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-600 to-red-600">
            <div className="flex-grow container mx-auto px-4 py-24 flex flex-col items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 w-full max-w-lg">
                    <h1 className="text-center text-3xl font-bold mb-8 text-black">
                        Reset <span className="text-red-600">Password</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
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
    )
}

export default ResetPassword
