import React from "react";
import Sidebar from "../Components/Sidebar";
import Head from "../Components/Head";

const AddPromoCode = () => {
   
    return (
        <>
            <div className="flex h-screen bg-white">
                <Sidebar />


                {/* Main Content */}
                <main className="flex-1 p-8 overflow-auto">

                  <Head/>
                    <header className="bg-white shadow-sm">
                        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-900">Moderators</h1>
                            <button
                                // onClick={openModal}
                                className="flex justify-center items-center w-52 py-3 text-blue-700 rounded-sm border border-blue-700"
                            >
                                Add New PromoCode
                            </button>
                        </div>
                    </header>

                    {/* Form */}
                    <form className="bg-white p-6 rounded-lg shadow-md space-y-4 ">
                        <div className="flex items-center justify-between space-x-4 mb-11">
                            <div className="flex-1 relative">
                                <label className="block mb-1 text-sm font-medium ">
                                    Create code
                                </label>
                                <input
                                    type="text"
                                    placeholder="write the code"
                                    className="w-72 px-3 py-2 border border-black rounded-md focus:outline-none bg-[#3366FF33] "
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-1 text-sm font-medium  ">
                                    Discount Rate
                                </label>
                                <input
                                    type="text"
                                    placeholder=" write the discount"
                                    className="w-72 px-3 py-2 border border-black rounded-md focus:outline-none bg-[#3366FF33]"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex-1 relative">
                                <label className="block mb-1 text-sm font-medium ">
                                    Usage Times
                                </label>
                                <input
                                    type="text"
                                    placeholder=" write the times"
                                    className="w-72 px-3 py-2 border border-black rounded-md focus:outline-none bg-[#3366FF33]"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-1 text-sm font-medium ">
                                    Number of people used
                                </label>
                                <input
                                    type="text"
                                    placeholder="write the number"
                                    className="w-72 px-3 py-2 border border-black rounded-md focus:outline-none bg-[#3366FF33]"
                                />
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
};

export default AddPromoCode;
