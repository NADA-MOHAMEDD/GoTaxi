// import React from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { BiRightArrowAlt } from 'react-icons/bi';
// import { FaCar } from 'react-icons/fa';

// const CaptianCard = ({ onViewProfile }) => {
//   return (
//     <>
//       <div className="w-80 bg-gray-100 shadow-md rounded-xl p-4 space-y-4 relative">
//         {/* View Profile Button */}
//         <button
//           onClick={onViewProfile}
//           className="absolute top-2 right-2 flex items-center bg-blue-200 text-gray-600 px-3 py-1 rounded-lg text-xs font-semibold"
//         >
//           view profile <BiRightArrowAlt className="ml-1" />
//         </button>

//         {/* Profile Image */}
//         <div className="flex justify-center">
//           <img
//             src="/img/img3.png"
//             alt="User"
//             className="w-20 h-20 rounded-full object-cover"
//           />
//         </div>

//         {/* User Name */}
//         <div className="text-center">
//           <h2 className="text-lg font-semibold">Mohamed Haggag</h2>
//         </div>

//         {/* Location */}
//         <div className="flex justify-between">
//           <div className="flex items-center justify-center text-gray-600">
//             <FaMapMarkerAlt className="text-red-600 mr-1" />
//             <p className="text-lg">from el basra</p>
//           </div>

//           {/* Car Info */}
//           <div className="flex flex-col items-center border border-blue-600 rounded-md p-1 bg-purple-50">
//             <FaCar className="text-black" />
//             <p className="text-xs">Economy</p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between items-center space-x-4">
//           <button className="w-1/2 py-2 border border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-white">
//             Decline
//           </button>
//           <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
//             Accept
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CaptianCard;


import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaCar } from 'react-icons/fa';
const CaptianCard = ({ captain, onViewProfile }) => {
  return (
    <>
    <div className="w-80 bg-gray-100 shadow-md rounded-xl p-4 space-y-4 relative">
      {/* View Profile Button */}
      <button
        onClick={onViewProfile}
        className="absolute top-2 right-2 flex items-center bg-[#3366FF33] text-gray-600 px-3 py-1 rounded-lg text-xs font-semibold"
      >
        view profile <BiRightArrowAlt className="ml-1" />
      </button>

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={captain.image}
          alt="User"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      {/* User Name */}
      <div className="text-center">
        <h2 className="text-lg font-semibold">{captain.name}</h2>
      </div>

      {/* Location */}
      <div className="flex justify-between">
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="text-red-600 mr-1" />
          <p className="text-lg">{captain.location}</p>
        </div>

        {/* Car Info */}
        <div className="flex flex-col items-center border border-blue-600 rounded-md p-1 bg-purple-50">
          <FaCar className="text-black" />
          <p className="text-xs">{captain.carType}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center space-x-4">
        <button className="w-1/2 py-2 border border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-white">
          Decline
        </button>
        <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
          Accept
        </button>
      </div>
    </div>
    </>
  );
};

export default CaptianCard;
