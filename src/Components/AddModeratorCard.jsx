import React, { useState } from "react";
import { FaUserCircle, FaCamera } from "react-icons/fa";

const AddModeratorCard = ({ addModerator, closeModal }) => {
  const [name, setName] = useState(""); 
  const [role, setRole] = useState(""); 
  const [image, setImage] = useState(null); 

  const handleAdd = () => {
    if (!name.trim() || !role.trim() || !image) {
      alert("Please enter a name, select a role, and upload an image.");
      return;
    }

    addModerator(name, role, image); // تمرير البيانات للمكون الأب
    closeModal(); 
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // تحويل الصورة إلى Base64
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Add New Moderator</h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-gray-400 text-6xl" />
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer">
              <FaCamera className="text-white text-sm" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Checkbox Section */}
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={role === "Admin"}
              onChange={() => setRole(role === "Admin" ? "Moderator" : "Admin")}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Admin</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={role === "Moderator"}
              onChange={() => setRole(role === "Moderator" ? "Admin" : "Moderator")}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Moderator</span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className="bg-blue-700 text-white px-20 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModeratorCard;

