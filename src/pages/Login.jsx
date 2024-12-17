import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../Components/Auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (user && password) {
            auth.login({ username: user, password });
            navigate("/", { replace: true });
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 px-4">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-center flex-grow">
                    <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-700">GO</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">TAXI</span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-indigo-700">Login!</h2>
                <p className="text-xs sm:text-sm text-center text-indigo-700">
                    Please enter your credentials below to continue
                </p>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block mb-1 text-xs sm:text-sm font-medium text-indigo-600">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm border rounded-md bg-indigo-50 border-indigo-200 focus:outline-none focus:border-indigo-400"
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-xs sm:text-sm font-medium text-indigo-600">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm border rounded-md bg-indigo-50 border-indigo-200 focus:outline-none focus:border-indigo-400"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <FaEye className="w-4 h-4 sm:w-5 sm:h-5" />
                                ) : (
                                    <FaEyeSlash className="w-4 h-4 sm:w-5 sm:h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between">
                        <label className="flex items-center text-xs sm:text-sm text-indigo-600">
                            <input type="checkbox" className="mr-2 rounded" />
                            Remember me
                        </label>
                        <Link to="/forgetPassword" className="text-xs sm:text-sm text-indigo-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 sm:py-2.5 text-xs sm:text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    </>
    );
};

export default Login;

