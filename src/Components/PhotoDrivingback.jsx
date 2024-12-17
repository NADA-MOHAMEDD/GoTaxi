import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const PhotoDrivingback = ({ onClose, captain }) => {
    return (
        <>
        <div className="flex justify-center items-center ">
            <div className="bg-slate-400 p-11 rounded-xl shadow-lg max-w-5xl w-full relative ">
                <button onClick={onClose}> 
                    <FaArrowLeft className="absolute top-4 left-4 text-xl" />
                </button>
                <div className="text-center">
                    <h3 className="text-lg font-bold mb-8">Photo of Driving License - BACK</h3>
                    <img
                        src={ captain.drivingLicenseFront} 
                        alt="Driving License Front"
                        className="w-96 h-80 mx-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default PhotoDrivingback;