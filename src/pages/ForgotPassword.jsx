import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from "yup";

const ForgotPassword = () => {
    const navigate = useNavigate();
    async function sendLink(values) {
        try {
            const res = await axios.get("https://go-taxi.codecraft1.com/api/admin/forgot-password", { params: values });
            console.log("Response Data:", res.data);
            navigate('/CheckCode'); 
        } catch (err) {
            console.log("Full Error:", err);
        }
    }
    const formik = useFormik({
        initialValues: {
            username: "",
        },
        onSubmit: sendLink,
        validationSchema: yup.object().shape({
            username: yup
                .string()
                .required("Name required")
                .min(3, "Minimum name length is 3 characters")
                .max(15, "Maxmum name length is 15 characters")
        }),
    });
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 px-4">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-4">
                        Forgot your password?
                    </h2>
                    <p className="text-center text-xs sm:text-sm text-gray-500 mb-6">
                        Please enter your username recover your password
                    </p>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-blue-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                id="username"
                                value={formik.values.username}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.username && formik.errors.username && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.username}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 rounded-md hover:bg-indigo-700 text-white font-medium py-2 text-sm sm:text-base transition duration-300"
                        >
                            Submit Now
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <Link to="/login" className="text-blue-600 hover:underline text-sm sm:text-base">
                            Back to Login!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;


