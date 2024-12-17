import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { FaArrowRight } from "react-icons/fa";
import Head from "../Components/Head";

const ControlTrip = () => {
    const [activeTab, setActiveTab] = useState("");

    const tabs = ["eco", "VIP", "Airport", "Between govern", "Multi_Destination"];

    return (
        <>
            <div className="flex h-screen bg-white">
                <Sidebar />


                {/* Main Content */}
                <main className="flex-1 p-8 overflow-auto">
                    <Head/>
                    <h2 className="text-xl font-semibold mb-6">Control Trip</h2>


                    {/* Tabs */}
                    <div className="mb-6">
                        <div className="flex space-x-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === tab
                                        ? "bg-blue-700 text-white"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <form className="bg-white p-6 rounded-lg shadow-md space-y-4 ">
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex-1 relative">
                                <label className="block mb-1 text-sm font-medium text-gray-600">
                                    Kilo
                                </label>
                                <input
                                    type="text"
                                    placeholder="write a number of kilo"
                                    className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                                />
                                {/* السهم المنقط */}
                                <div className="absolute right-[10%] top-1/2  flex items-center">
                                    <div className="w-36 border-t-4 border-dotted border-gray-500"></div>
                                    <FaArrowRight className="text-gray-400" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block mb-1 text-sm font-medium text-gray-600">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    placeholder="write a price of kilo"
                                    className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex-1 relative">
                                <label className="block mb-1 text-sm font-medium text-gray-600">
                                    Time Delay
                                </label>
                                <input
                                    type="text"
                                    placeholder="define time"
                                    className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                                />
                                {/* السهم المنقط */}
                                <div className="absolute right-[10%] top-1/2  flex items-center">
                                    <div className="w-36 border-t-4 border-dotted border-gray-500"></div>
                                    <FaArrowRight className="text-gray-400" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block mb-1 text-sm font-medium text-gray-600">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    placeholder="write a price of kilo"
                                    className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center h-[30vh]">
                            <button
                                type="submit"
                                className="flex justify-center items-center w-52 py-3 bg-blue-700 text-white rounded-full"
                            >
                                Apply Change
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
};

export default ControlTrip;



