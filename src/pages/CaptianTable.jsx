import React, { useState } from "react";
import { useAuth } from '../Components/Auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import TransferCaptians from "../Components/TransferCaptians";
import Head from "../Components/Head";

const CaptianTable = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.user) {
            navigate("/login", { replace: true }); // إعادة التوجيه إذا لم يكن هناك مستخدم مسجل
        }
    }, [auth.user, navigate]);

    const data1 = [
        { user: "Ahmed", phone: "+20 123 456 789", kindOfTrip: "economy", orderedTime: "10.11.2024 18:30", startLocation: "Cairo Downtown", finishLocation: "Giza Pyramids", cost: "150$", totalTrips: "45", totalCompleted: "40" },
        { user: "Sara", phone: "+20 987 654 321", kindOfTrip: "vip", orderedTime: "12.11.2024 19:45", startLocation: "Nasr City", finishLocation: "Maadi", cost: "250$", totalTrips: "30", totalCompleted: "28" },
    ];


    const [captians, setCaptians] = useState(
        [...data1].map((captian) => ({
            ...captian,
            isChecked: false, 
        }))
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [SelectedCaptian, setSelectedCaptian] = useState(null); // لتتبع العميل المحدد
    const [selectedCaptiantIndex, setSelectedCaptianIndex] = useState(null);// لتتبع الفهرس بدلاً من الكائن


    const handleRowClick = (index) => {
        setCaptians((prevCaptians) => {
            const updatedCaptians = prevCaptians.map((captian, i) =>
                i === index ? { ...captian, isChecked: !captian.isChecked } : captian
            );
            setSelectedCaptian(updatedCaptians[index]); // تحديث العميل المحدد
            return updatedCaptians; // إعادة القائمة الجديدة لتصبح هي الحالة الجديدة
        });
        setSelectedCaptianIndex(index); // تخزين الفهرس
        setShowModal(true); // عرض المودال
    };

    const filteredCaptians = captians.filter((captian) =>
        captian.user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex h-screen bg-white">
                <Sidebar />
                <div className="flex-1 p-8 overflow-auto">
                   <Head/>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Captain List</h2>
                        <input
                            type="text"
                            placeholder="Search by Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring"
                        />
                    </div>
                    <main>
                        <div className="mx-auto py-6 sm:px-6 lg:px-8">
                            <table className="w-full border-collapse bg-white text-left text-sm">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="p-2 border">Select</th>
                                        <th className="p-2 border">User</th>
                                        <th className="p-2 border">Kind of Trip</th>
                                        <th className="p-2 border">Last Trip</th>
                                        <th className="p-2 border">State</th>
                                        <th className="p-2 border">Current Location</th>
                                        <th className="p-2 border">Rate</th>
                                        <th className="p-2 border">Total Trips</th>
                                        <th className="p-2 border">Total Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCaptians.map((captian, index) => (
                                        <tr
                                            key={index}
                                            className={`hover:bg-[#3366FF33] cursor-pointer ${captian.isChecked ? "bg-[#3366FF33]" : ""
                                                }`}
                                            onClick={() => handleRowClick(index)}
                                        >
                                            <td className="p-2 border text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={captian.isChecked}
                                                    readOnly
                                                />
                                            </td>
                                            <td className="p-2 border">{captian.user}</td>
                                            <td className="p-2 border">{captian.kindOfTrip}</td>
                                            <td className="p-2 border">{captian.orderedTime}</td>
                                            <td className="p-2 border">{captian.startLocation}</td>
                                            <td className="p-2 border">{captian.finishLocation}</td>
                                            <td className="p-2 border">{captian.cost}</td>
                                            <td className="p-2 border">{captian.totalTrips}</td>
                                            <td className="p-2 border">{captian.totalCompleted}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
            {showModal && (
                <TransferCaptians
                    onClose={() => {
                        setShowModal(false); // إخفاء المودال
                        setCaptians((prevCaptians) =>
                            prevCaptians.map((captian, i) =>
                                i === selectedCaptiantIndex ? { ...captian, isChecked: !captian.isChecked } : captian
                            )
                        ); // إلغاء التحديد باستخدام الفهرس
                        setSelectedCaptian(null); // إعادة تعيين العميل المحدد
                        setSelectedCaptianIndex(null); // إعادة تعيين الفهرس
                    }}
                    captian={SelectedCaptian} // تمرير العميل المحدد
                />
            )}
        </>
    );

}

export default CaptianTable