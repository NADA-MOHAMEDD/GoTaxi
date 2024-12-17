import React, { useState } from "react";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

const MoneyToWallet = ({ onClose, captian }) => {
    const [amount, setAmount] = useState(""); 

    const handleAmountClick = (value) => {
        setAmount(value); 
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-[500px] bg-white shadow-lg rounded-3xl p-6 text-center relative">
                <button onClick={onClose} className="absolute top-4 left-4">
                    <FaArrowLeft className="text-xl" />
                </button>
                <h2 className="text-xl font-bold mb-6 text-blue-700">Transfer Money To Wallet</h2>
                <img
                    src="https://via.placeholder.com/100"
                    alt="profile"
                    className="w-24 h-24 rounded-full mx-auto"
                />
                <h2 className="text-xl font-bold mt-4">Transfer Amount for {captian.user}</h2>
                <div className="flex justify-center items-center text-red-500 mt-1">
                    <FaMapMarkerAlt className="mr-1" />
                    <p className="text-sm">Current Location: {captian.startLocation}</p>
                </div>
                <div className="mt-6">
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Select or type amount"
                        className="w-full border border-gray-300 rounded-lg py-2 px-4 text-center focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-center space-x-3 mt-4">
                    {[1000, 5000, 10000, 25000].map((value) => (
                        <button
                            key={value}
                            onClick={() => handleAmountClick(value)}
                            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            {value}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        onClick={onClose}
                        className="px-11 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50 focus:outline-none"
                    >
                        Close
                    </button>
                    <button
                        onClick={() => {
                            alert("Money transferred successfully!");
                            onClose();
                        }}
                        className="px-11 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoneyToWallet;
