import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const CheckCode = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 px-4">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-4">
                        Verification Code
                    </h2>
                    <p className="text-center text-xs sm:text-sm text-gray-500 mb-6">
                        Please enter your username and code to recover your password
                    </p>

                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-blue-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-blue-700 mb-1">
                                Code
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Code"
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 rounded-md hover:bg-indigo-700 text-white font-medium py-2 text-sm sm:text-base transition duration-300"
                            onClick={() => navigate('/forgetPassword')}
                        >
                            Check
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <Link to="/forgetPassword" className="text-blue-600 hover:underline text-sm sm:text-base">
                            Resend Code
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckCode

