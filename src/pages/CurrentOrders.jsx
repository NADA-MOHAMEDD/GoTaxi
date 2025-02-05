// import React from 'react'
// import Head from '../Components/Head';
// import Sidebar from '../Components/Sidebar'
// import TripCard from '../Components/TripCard'
// import { useNavigate } from 'react-router-dom';
// // import axios from 'axios'
// // import { useState, useEffect } from 'react'

// const CurrentOrders = () => {

//     const navigate = useNavigate();
//     return (
//         <>
//         <div className="flex h-screen bg-white">
//             <Sidebar />
//             <div className="flex-1 p-8 overflow-auto">
//               <Head/>

//                 <header className="bg-white shadow-sm">
//                     <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//                         <h1 className="text-2xl font-semibold text-gray-900">Current Orders</h1>
//                         <select className="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
//                             <option>بغداد</option>
//                             {/* Add more cities as needed */}
//                         </select>
//                     </div>
//                 </header>
//                 <main>
//                     <div className=" mx-auto py-6 sm:px-6 lg:px-8">
//                         <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
//                             <TripCard />
//                             {/* {orders.map((order, index) => (
//                                 <TripCard key={index} order={order} />
//                             ))} */}

//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </div>
//         </> 
//     )
// }

// export default CurrentOrders


import React, { useState, useEffect } from 'react';
import Head from '../Components/Head';
import Sidebar from '../Components/Sidebar';
import TripCard from '../Components/TripCard';
import axios from 'axios';

const CurrentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);  // To track the current page
  const [totalPages, setTotalPages] = useState(1);    // To track the total pages

  // Fetch orders data
  const fetchOrders = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://go-taxi.codecraft1.com/api/admin/dashboard/current-orders?page=${page}`, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // استخدام التوكن من الـ localStorage
          },
        }
      );
      setOrders(response.data.data.data); // تخزين البيانات في الـ state
      setCurrentPage(response.data.data.current_page); // تحديث الصفحة الحالية
      setTotalPages(response.data.data.last_page); // تحديث إجمالي الصفحات
    } catch (err) {
        console.log(err)
      setError('Error fetching orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(currentPage); // استدعاء البيانات عند تحميل الصفحة
  }, [currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">
        <Head />

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
          <div className="mx-auto py-6 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
              {/* Loop through the orders and display TripCard for each */}
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <TripCard key={index} order={order} />
                ))
              ) : (
                <p>No current orders</p>
              )}
            </div>

            {/* Pagination controls */}
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
              >
                Previous
              </button>

              <span className="self-center text-gray-600">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CurrentOrders;
