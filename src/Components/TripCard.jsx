import React from 'react';
import { FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import { CgEditBlackPoint } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";

const TripCard = () => {
  return (
    <>
    <div className="w-full max-w-sm bg-gray-100 shadow-md rounded-lg p-4 space-y-2">
      {/* Trip Details */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CgEditBlackPoint className="text-blue-600 size-5" />
          <div>
            <p className="text-xl">any city</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">6.30 AM</p>
      </div>

      <div className="border-l-2 border-dashed border-gray-400 h-6 ml-2"></div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-red-600" />
          <div>
            <p className="text-xl">another any city</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">6.47 AM</p>
      </div>

      <hr className="border-gray-200" />

      {/* User Details */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center space-x-2 mr-2">
          <img src="user_image.jpg" alt="User" className="w-8 h-8 rounded-full" />
          <p className="text-gray-800">lol (user)</p>
        </div>

        <div className="flex-grow border-t-2 border-dashed border-gray-400 mx-1 "></div>

        <div className="flex flex-col items-center space-x-2 ">
          <img src="driver_image.jpg" alt="Driver" className="w-8 h-8 rounded-full" />
          <p className="text-blue-600 font-bold">Mohamed Haggag(C)</p>
        </div>
      </div>

      {/* Trip Info */}
      <div className="flex justify-center items-center space-x-4">
        <p className="text-gray-800 font-semibold">$20</p>
            <div className="flex items-center text-gray-600">
               <CiClock2 className="text-blue-600"/>
               <p >15 Min</p>
            </div>
            <p className="text-gray-600">2.4km</p>
          <div className="flex flex-col items-center border border-blue-600 rounded-md p-2 bg-purple-50">
            <FaCar className="text-black"/>
            <p className="text-xs">Economy</p>
          </div>
      </div>
    </div>
    </>
  );
};

export default TripCard;




