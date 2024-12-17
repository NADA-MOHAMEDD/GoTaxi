import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ProfileComponent = ({ captain, onClose, onPhotoDrivingFront ,onPhotoDrivingBack ,onProfilePhoto , onNationalPhotofront, onNationalPhotoBack }) => {
    return (
        <>
        <div className="flex justify-center items-center p-2">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl w-full relative">
                <button onClick={onClose}>
                    <FaArrowLeft className="absolute top-4 left-4 text-xl" />
                </button>

                {/* صورة البروفايل */}
                <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-200">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 text-xl font-bold">{captain.name}</h2>
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                        <span className="text-red-500">📍</span>  {captain.location}
                    </p>
                </div>

                {/* القائمة الثابتة */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {/* زر 1 */}
                    <div
                        onClick={onProfilePhoto}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-medium">Profile Photo</h3>
                            <p className="text-xs text-gray-400">Upload your profile photo</p>
                        </div>
                        <FaCheckCircle className="text-blue-600" size={24} />
                    </div>

                    {/* زر 2 */}
                    <div
                        onClick={onPhotoDrivingFront}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-medium">Photo of Driving License - Front</h3>
                            <p className="text-xs text-gray-400">Upload the front side of your driving license</p>
                        </div>
                        <FaCheckCircle className="text-blue-600" size={24} />
                    </div>

                    {/* زر 3 */}
                    <div
                        onClick={onPhotoDrivingBack}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-medium">Photo of Driving License - Back</h3>
                            <p className="text-xs text-gray-400">Upload the back side of your driving license</p>
                        </div>
                        <FaCheckCircle className="text-blue-600" size={24} />
                    </div>

                    {/* زر 4 */}
                    <div
                        onClick={onNationalPhotofront}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-medium">Photo of National ID - Front</h3>
                            <p className="text-xs text-gray-400">Upload the front side of your national ID</p>
                        </div>
                        <FaCheckCircle className="text-blue-600" size={24} />
                    </div>

                    {/* زر 5 */}
                    <div
                        onClick={onNationalPhotoBack}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-medium">Photo of National ID - Back</h3>
                            <p className="text-xs text-gray-400">Upload the back side of your national ID</p>
                        </div>
                        <FaCheckCircle className="text-blue-600" size={24} />
                    </div>

                    {/* زر 6 */}
                    <div
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-medium">Number Of Car</h3>
                            <p className="text-xs text-gray-400">{captain.carType}</p>
                        </div>
                        <FaCheckCircle className="text-blue-600" size={24} />
                    </div>

                    {/* زر 7 */}
                    <div
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-medium">Model Of Car</h3>
                            <p className="text-xs text-gray-400">Enter your car's model</p>
                        </div>
                        <FaCheckCircle className="text-blue-600" size={24} />
                    </div>

                    {/* زر 8 */}
                    <div
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-sm font-medium">Color Of The Car</h3>
                            <p className="text-xs text-gray-400">Enter your car's color</p>
                        </div>
                        <FaCheckCircle className="text-blue-600" size={24} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProfileComponent;




