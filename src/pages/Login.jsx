import React, { useContext, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UserTokenContext } from "../Context/UserTokenContext";

const Login = () => {
    const [apiError, setApiError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const userToken = useContext(UserTokenContext);
    // const [showPassword, setShowPassword] = useState(false);
    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

    const initialValues = {
        username: "",
        password: "",
    };

    const onSubmit = (value) => {
        setApiError(null);
        setIsLoading(true);
        console.log("Login Data Sent:", value);

        axios.post("https://go-taxi.codecraft1.com/api/admin/login", value, {
            headers: {
                "X-Locale": "ar"
            }
        })
            .then((res) => {
                console.log("Response Data:", res.data);
                console.log(" Received Token:", res.data.data.token);

                if (!res.data.data || !res.data.data.token) {
                    console.log("Invalid Response:", res.data);
                    setApiError("Invalid response from server");
                    return;
                }
                localStorage.setItem("token", res.data.data.token);
                userToken.setToken(res.data.data.token);
                navigate("/");
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Full Error:", err);
                console.log("Error Response:", err.response);
                setApiError(err.response?.data?.message || "Something went wrong");
                setTimeout(() => setApiError(null), 5000);
                setIsLoading(false);
            });
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: yup.object().shape({
            username: yup
                .string()
                .required("Name required")
                .min(3, "Minimum name length is 3 characters")
                .max(15, "Maxmum name length is 15 characters"),
            // password: yup
            //     .string()
            //     .required("Password required")
            //     .matches(/^[A-Z][a-z0-9]{5,}$/),
        }),
    });



    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 px-4">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center flex-grow">
                        <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-700">GO</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">TAXI</span>
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-indigo-700">Login!</h2>
                    {apiError && (
                        <div className=" bg-red-500 text-white p-3 rounded-lg mb-4">
                            <h2>{apiError}</h2>
                        </div>
                    )}
                    <p className="text-xs sm:text-sm text-center text-indigo-700">
                        Please enter your credentials below to continue
                    </p>

                    <form className="space-y-4" onSubmit={formik.handleSubmit}>
                        <div>
                            <label className="block mb-1 text-xs sm:text-sm font-medium text-indigo-600">Username</label>
                            {formik.errors.username && formik.touched.username && (
                                <div className="bg-red-700 font-medium text-white p-3 rounded-lg mb-4">
                                    <h2>{formik.errors.username}</h2>
                                </div>
                            )}

                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm border rounded-md bg-indigo-50 border-indigo-200 focus:outline-none focus:border-indigo-400"
                                id="username"
                                value={formik.values.username}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}

                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-xs sm:text-sm font-medium text-indigo-600">Password</label>
                            {formik.errors.password && formik.touched.password && (
                                <div className=" bg-red-700 font-medium text-white p-3 rounded-lg mb-4">
                                    <h2>{formik.errors.password}</h2>{" "}
                                </div>
                            )}
                            <div className="relative">
                                <input
                                    name="password"
                                    // type={showPassword ? "text" : "password"}
                                    type={"password"}
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm border rounded-md bg-indigo-50 border-indigo-200 focus:outline-none focus:border-indigo-400"
                                    id="password"
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}


                                />
                                {/* <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <FaEye className="w-4 h-4 sm:w-5 sm:h-5" />
                                    ) : (
                                        <FaEyeSlash className="w-4 h-4 sm:w-5 sm:h-5" />
                                    )}
                                </button> */}
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
