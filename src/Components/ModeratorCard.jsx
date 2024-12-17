import React from "react";

const ModeratorCard = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center bg-slate-500 shadow-md rounded-lg p-4 w-40">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
        <img
          src={image}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold text-black">{name}</h2>
      <p className="text-sm text-gray-800">{role}</p>
    </div>
  );
};

export default ModeratorCard;

