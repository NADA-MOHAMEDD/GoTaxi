
// ClientsTable.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import TransferAmount from "../Components/TransferAmount";
import Head from "../Components/Head";

const ClientsTable = () => {
    const navigate = useNavigate();

    const data1 = [
        { user: "Ahmed", phone: "+20 123 456 789", kindOfTrip: "economy", orderedTime: "10.11.2024 18:30", startLocation: "Cairo Downtown", finishLocation: "Giza Pyramids", cost: "150$", totalTrips: "45", totalCompleted: "40" },
        { user: "Sara", phone: "+20 987 654 321", kindOfTrip: "vip", orderedTime: "12.11.2024 19:45", startLocation: "Nasr City", finishLocation: "Maadi", cost: "250$", totalTrips: "30", totalCompleted: "28" },
    ];

    const data2 = [
        { user: "Mohamed", phone: "+20 159 753 486", kindOfTrip: "economy", orderedTime: "14.11.2024 20:15", startLocation: "Heliopolis", finishLocation: "Zamalek", cost: "200$", totalTrips: "60", totalCompleted: "55" },
        { user: "Amira", phone: "+20 789 456 123", kindOfTrip: "vip", orderedTime: "15.11.2024 17:00", startLocation: "Obour City", finishLocation: "October City", cost: "300$", totalTrips: "25", totalCompleted: "22" },
    ];

    const data3 = [
        { user: "Youssef", phone: "+20 369 852 147", kindOfTrip: "economy", orderedTime: "16.11.2024 22:10", startLocation: "6th of October", finishLocation: "Dokki", cost: "180$", totalTrips: "35", totalCompleted: "33" },
        { user: "Nour", phone: "+20 951 753 852", kindOfTrip: "vip", orderedTime: "17.11.2024 15:20", startLocation: "Sheikh Zayed", finishLocation: "Mohandessin", cost: "280$", totalTrips: "40", totalCompleted: "37" },
    ];

    const [clients, setClients] = useState(
        [...data1, ...data2, ...data3].map((client) => ({
            ...client,
            isChecked: false, // حالة لتتبع حالة checkbox
        }))
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [selectedClientIndex, setSelectedClientIndex] = useState(null);

    const handleRowClick = (index) => {
        setClients((prevClients) => {
            const updatedClients = prevClients.map((client, i) =>
                i === index ? { ...client, isChecked: !client.isChecked } : client
            );
            setSelectedClient(updatedClients[index]); // تحديث العميل المحدد
            return updatedClients; // إعادة القائمة الجديدة لتصبح هي الحالة الجديدة
        });
        setSelectedClientIndex(index); // تخزين الفهرس
        setShowModal(true); // عرض المودال
    };

    const filteredClients = clients.filter((client) =>
        client.user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex h-screen bg-white">
                <Sidebar />
                <div className="flex-1 p-8 overflow-auto">
                <Head/>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Clients List</h2>
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
                                        <th className="p-2 border">Ordered Time</th>
                                        <th className="p-2 border">Start Location</th>
                                        <th className="p-2 border">Finish Location</th>
                                        <th className="p-2 border">Cost</th>
                                        <th className="p-2 border">Total Trips</th>
                                        <th className="p-2 border">Total Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredClients.map((client, index) => (
                                        <tr
                                            key={index}
                                            className={`hover:bg-[#3366FF33] cursor-pointer ${client.isChecked ? "bg-[#3366FF33]" : ""}`}
                                            onClick={() => handleRowClick(index)}
                                        >
                                            <td className="p-2 border text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={client.isChecked}
                                                    readOnly
                                                />
                                            </td>
                                            <td className="p-2 border">{client.user}</td>
                                            <td className="p-2 border">{client.kindOfTrip}</td>
                                            <td className="p-2 border">{client.orderedTime}</td>
                                            <td className="p-2 border">{client.startLocation}</td>
                                            <td className="p-2 border">{client.finishLocation}</td>
                                            <td className="p-2 border">{client.cost}</td>
                                            <td className="p-2 border">{client.totalTrips}</td>
                                            <td className="p-2 border">{client.totalCompleted}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
            {showModal && (
                <TransferAmount
                    onClose={() => {
                        setShowModal(false);
                        setClients((prevClients) =>
                            prevClients.map((client, i) =>
                                i === selectedClientIndex ? { ...client, isChecked: false } : client
                            )
                        );
                        setSelectedClient(null);
                        setSelectedClientIndex(null);
                    }}
                    client={selectedClient}
                />
            )}
        </>
    );
};

export default ClientsTable;



