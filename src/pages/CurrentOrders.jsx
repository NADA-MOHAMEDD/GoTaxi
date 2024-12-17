import React from 'react'
import Head from '../Components/Head';
import Sidebar from '../Components/Sidebar'
import TripCard from '../Components/TripCard'
import { useAuth } from '../Components/Auth';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import { useState, useEffect } from 'react'

const CurrentOrders = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    return (
        <>
        <div className="flex h-screen bg-white">
            <Sidebar />
            <div className="flex-1 p-8 overflow-auto">
              <Head/>

                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-gray-900">Current Orders</h1>
                        <select className="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option>بغداد</option>
                            {/* Add more cities as needed */}
                        </select>
                    </div>
                </header>
                <main>
                    <div className=" mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
                            <TripCard />
                            {/* {orders.map((order, index) => (
                                <TripCard key={index} order={order} />
                            ))} */}

                        </div>
                    </div>
                </main>
            </div>
        </div>
        </> 
    )
}

export default CurrentOrders