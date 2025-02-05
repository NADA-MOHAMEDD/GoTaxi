// import React, { useState } from "react";
// import Sidebar from "../Components/Sidebar";
// import { FaArrowRight } from "react-icons/fa";
// import Head from "../Components/Head";

// const ControlTrip = () => {
//     const [activeTab, setActiveTab] = useState("");

//     const tabs = ["eco", "VIP", "Airport", "Between govern", "Multi_Destination"];

//     return (
//         <>
//             <div className="flex h-screen bg-white">
//                 <Sidebar />


//                 {/* Main Content */}
//                 <main className="flex-1 p-8 overflow-auto">
//                     <Head/>
//                     <h2 className="text-xl font-semibold mb-6">Control Trip</h2>


//                     {/* Tabs */}
//                     <div className="mb-6">
//                         <div className="flex space-x-2">
//                             {tabs.map((tab) => (
//                                 <button
//                                     key={tab}
//                                     onClick={() => setActiveTab(tab)}
//                                     className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === tab
//                                         ? "bg-blue-700 text-white"
//                                         : "bg-gray-200 text-gray-600 hover:bg-gray-300"
//                                         }`}
//                                 >
//                                     {tab}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Form */}
//                     <form className="bg-white p-6 rounded-lg shadow-md space-y-4 ">
//                         <div className="flex items-center justify-between space-x-4">
//                             <div className="flex-1 relative">
//                                 <label className="block mb-1 text-sm font-medium text-gray-600">
//                                     Kilo
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="write a number of kilo"
//                                     className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
//                                 />
//                                 {/* السهم المنقط */}
//                                 <div className="absolute right-[10%] top-1/2  flex items-center">
//                                     <div className="w-36 border-t-4 border-dotted border-gray-500"></div>
//                                     <FaArrowRight className="text-gray-400" />
//                                 </div>
//                             </div>
//                             <div className="flex-1">
//                                 <label className="block mb-1 text-sm font-medium text-gray-600">
//                                     Price
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="write a price of kilo"
//                                     className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
//                                 />
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between space-x-4">
//                             <div className="flex-1 relative">
//                                 <label className="block mb-1 text-sm font-medium text-gray-600">
//                                     Time Delay
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="define time"
//                                     className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
//                                 />
//                                 {/* السهم المنقط */}
//                                 <div className="absolute right-[10%] top-1/2  flex items-center">
//                                     <div className="w-36 border-t-4 border-dotted border-gray-500"></div>
//                                     <FaArrowRight className="text-gray-400" />
//                                 </div>
//                             </div>
//                             <div className="flex-1">
//                                 <label className="block mb-1 text-sm font-medium text-gray-600">
//                                     Price
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="write a price of kilo"
//                                     className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
//                                 />
//                             </div>
//                         </div>
//                         <div className="flex justify-center items-center h-[30vh]">
//                             <button
//                                 type="submit"
//                                 className="flex justify-center items-center w-52 py-3 bg-blue-700 text-white rounded-full"
//                             >
//                                 Apply Change
//                             </button>
//                         </div>
//                     </form>
//                 </main>
//             </div>
//         </>
//     );
// };

// export default ControlTrip;


import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Head from "../Components/Head";
import axios from "axios";

const ControlTrip = () => {
    const [tabs, setTabs] = useState([]); // لتخزين أسماء التابس
    const [activeTab, setActiveTab] = useState(""); // التاب المُحدد
    const [tabData, setTabData] = useState({
        per_km: "",
        per_min: "",
        starting_price: "",
        starting_distance: "",
    }); // البيانات الخاصة بالتاب

    const [allData, setAllData] = useState([]); // لتخزين البيانات الكاملة


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://go-taxi.codecraft1.com/api/admin/trip-pricing-types",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );

                setAllData(response.data.data);
                console.log(response.data.data);


                // استخراج أسماء التابس
                const tabNames = response.data.data.map((item) => item.name);
                setTabs(tabNames);

                // تحديد التاب الافتراضي
                if (tabNames.length > 0) {
                    setActiveTab(tabNames[0]);
                    updateTabData(tabNames[0], response.data.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // 2. تحديث البيانات عند تغيير التاب
    const updateTabData = (tabName, data) => {
        const selectedTab = data.find((item) => item.name === tabName);
        if (selectedTab) {
            setTabData({
                per_km: selectedTab.per_km,
                per_min: selectedTab.per_min,
                starting_price: selectedTab.starting_price,
                starting_distance: selectedTab.starting_distance,
            });
        }
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        updateTabData(tabName, allData);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const selectedTab = allData.find((item) => item.name === activeTab);
            console.log("Selected Tab:", selectedTab);


            await axios.patch(
                `https://go-taxi.codecraft1.com/api/admin/trip-pricing-types/${selectedTab.id}`,
                {
                    per_km: tabData.per_km,
                    per_min: tabData.per_min,
                    starting_price: tabData.starting_price,
                    starting_distance: tabData.starting_distance,
                },
                {
                    headers: {
                        Authorization: "Bearer 70|koofYufIdRqIK3hpLhPoi0klMdZraAl6lSKowb7x3c2b9bf1",
                    },
                }
            );

            alert("Data updated successfully!");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div className="flex h-screen bg-white">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">
                <Head />
                <h2 className="text-xl font-semibold mb-6">Control Trip</h2>

                {/* Tabs */}
                <div className="mb-6">
                    <div className="flex space-x-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
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
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex-1">
                            <label className="block mb-1 text-sm font-medium text-gray-600">Per Km</label>
                            <input
                                type="text"
                                value={tabData.per_km}
                                onChange={(e) => setTabData({ ...tabData, per_km: e.target.value })}
                                className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 text-sm font-medium text-gray-600">Per Min</label>
                            <input
                                type="text"
                                value={tabData.per_min}
                                onChange={(e) => setTabData({ ...tabData, per_min: e.target.value })}
                                className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex-1">
                            <label className="block mb-1 text-sm font-medium text-gray-600">Starting Price</label>
                            <input
                                type="text"
                                value={tabData.starting_price}
                                onChange={(e) => setTabData({ ...tabData, starting_price: e.target.value })}
                                className="w-72 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 text-sm font-medium text-gray-600">Starting Distance</label>
                            <input
                                type="text"
                                value={tabData.starting_distance}
                                onChange={(e) =>
                                    setTabData({ ...tabData, starting_distance: e.target.value })
                                }
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
    );
};

export default ControlTrip;




