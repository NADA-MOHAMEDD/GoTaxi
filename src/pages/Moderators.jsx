import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Head from "../Components/Head";
import AddModeratorCard from "../Components/AddModeratorCard";
import ModeratorCard from "../Components/ModeratorCard";

const Moderators = () => {


  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moderators, setModerators] = useState([]);

 
  const openModal = () => {
    setIsModalOpen(true);
  };

 
  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  const addModerator = (name, role, image) => {
    setModerators([...moderators, { name, role, image }]); 
    closeModal(); 
  };

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
                onClick={openModal}
                className="flex justify-center items-center w-52 py-3 text-blue-700 rounded-sm border border-blue-700"
              >
                Add New Moderator
              </button>
            </div>
          </header>

          {/* عرض الموديريتورات كـ Cards */}
          <div className="flex gap-4 mt-4 flex-wrap">
            {moderators.map((moderator, index) => (
              <ModeratorCard
                key={index}
                name={moderator.name}
                role={moderator.role}
                image={moderator.image}
              />
            ))}
          </div>

          {/* مودال إضافة موديريتور */}
          {isModalOpen && (
            <AddModeratorCard addModerator={addModerator} closeModal={closeModal} />
          )}
        </main>
      </div>
    </>
  );
};

export default Moderators;

