import React, { useState } from 'react';
import {  FaSearch } from 'react-icons/fa';
import Sidebar from '../Components/Sidebar';
import CaptianCard from '../Components/CaptianCard';
import ProfileComponent from '../Components/ProfileComponent';
import PhotoDrivingFront from '../Components/photoDrivingFront';
import PhotoDrivingback from '../Components/PhotoDrivingback';
import ProfilePhotoDriving from '../Components/ProfilePhotoDriving';
import PhotoNationalFront from '../Components/PhotoNationalFront';
import PhotoNationalBack from '../Components/PhotoNationalBack';
import { useAuth } from '../Components/Auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Head from '../Components/Head';

const CaptianRequests = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate("/login", { replace: true }); // إعادة التوجيه إذا لم يكن هناك مستخدم مسجل
    }
  }, [auth.user, navigate]);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProfilePhotoOpen, setIsProfilePhotoOpen] = useState(false);
  const [isPhotoDrivingFrontOpen, setIsPhotoDrivingFrontOpen] = useState(false);
  const [isPhotoDrivingBackOpen, setIsPhotoDrivingBackOpen] = useState(false);
  const [isPhotoNationalFrontOpen, setIsPhotoNationalFrontOpen] = useState(false);
  const [isPhotoNationalBackOpen, setIsPhotoNationalBackOpen] = useState(false);
  const [selectedCaptian, setSelectedCaptian] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(''); // تخزين قيمة البحث

  // بيانات المستخدمين
  const captains = [
    { id: 1, name: 'Mohamed Haggag', location: 'El Basra', carType: 'Economy', image: '/img/img1.png', drivingLicenseFront: '/img/img3.png' },
    { id: 2, name: 'Ahmed Ali', location: 'Cairo', carType: 'Luxury', image: '/img/img2.png', drivingLicenseFront: '/img/img1.png' },
    { id: 3, name: 'Sara Hassan', location: 'Alexandria', carType: 'SUV', image: '/img/img3.png', drivingLicenseFront: '/img/img2.png' },
  ];

  // تصفية الكباتن بناءً على البحث
  const filteredCaptains = captains.filter((captain) =>
    captain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleViewProfile = (captain) => {
    setSelectedCaptian(captain); 
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setSelectedCaptian(null);
    setIsProfileOpen(false);

  };
  ////////////////////////////
  const openProfilePhoto = () => {
    setIsProfileOpen(false);
    setIsProfilePhotoOpen(true);
  };

  const closeProfilePhoto = () => {
    setIsProfilePhotoOpen(false);
    setIsProfileOpen(true);

  };
  // //////////////////////////////
  const openPhotoDrivingFront = () => {
    setIsProfileOpen(false);
    setIsPhotoDrivingFrontOpen(true);
  };

  const closePhotoDrivingFront = () => {
    setIsPhotoDrivingFrontOpen(false);
    setIsProfileOpen(true);
  };
  ////////////////////////////////
  const openPhotoDrivingBack = () => {
    setIsProfileOpen(false);
    setIsPhotoDrivingBackOpen(true);
  };

  const closePhotoDrivingBack = () => {
    setIsPhotoDrivingBackOpen(false);
    setIsProfileOpen(true);
  };
  /////////////////////////////////////
  const OpenPhotoNationalIdFront = () => {
    setIsProfileOpen(false);
    setIsPhotoNationalFrontOpen(true);
  };

  const closePhotoNationalIdFront = () => {
    setIsProfileOpen(true);
    setIsPhotoNationalFrontOpen(false);
  };
  /////////////////////////////////////

  const OpenPhotoNationalIdBack = () => {
    setIsProfileOpen(false);
    setIsPhotoNationalBackOpen(true);
  };

  const closePhotoNationalIdBack = () => {
    setIsProfileOpen(true);
    setIsPhotoNationalBackOpen(false);
  };





  return (
    <>
      <div className="flex h-screen bg-white">
        <Sidebar />
        <div className="flex-1 p-8 overflow-auto">
        <Head/>
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Captian Requests
              </h1>
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // تحديث قيمة البحث
                  className="w-full border border-gray-300 rounded-full shadow-md py-2 px-4 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <FaSearch className="absolute top-2.5 right-3 text-gray-500" />
              </div>
            </div>
          </header>
          <main>
            <div className="mx-auto py-6 sm:px-6 lg:px-8">
              <div className="grid gap-x-3 gap-y-7 sm:grid-cols-1 lg:grid-cols-3">
                {filteredCaptains.map((captain) => (
                  <CaptianCard
                    key={captain.id}
                    captain={captain}
                    onViewProfile={() => handleViewProfile(captain)}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Profile Modal */}
      {isProfileOpen && selectedCaptian && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ProfileComponent
            captain={selectedCaptian} // تمرير بيانات المستخدم
            onClose={closeProfile}
            onPhotoDrivingFront={openPhotoDrivingFront}
            onPhotoDrivingBack={openPhotoDrivingBack}
            onProfilePhoto={openProfilePhoto}
            onNationalPhotofront={OpenPhotoNationalIdFront}
            onNationalPhotoBack={OpenPhotoNationalIdBack}
          />

        </div>
      )}
      {isProfilePhotoOpen && selectedCaptian && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ProfilePhotoDriving
            onClose={closeProfilePhoto}
            // ProfilePhotoDriver={selectedCaptian.image} // تمرير الصورة 
            captain={selectedCaptian}
          />
        </div>
      )}

      {isPhotoDrivingFrontOpen && selectedCaptian && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <PhotoDrivingFront
            onClose={closePhotoDrivingFront}
            // drivingLicenseFront={selectedCaptian.drivingLicenseFront} // تمرير الصورة
            captain={selectedCaptian}
          />
        </div>
      )}

      {isPhotoDrivingBackOpen && selectedCaptian && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <PhotoDrivingback
            onClose={closePhotoDrivingBack}
            // drivingLicenseback={selectedCaptian.drivingLicenseFront} // تمرير الصورة
            captain={selectedCaptian}
          />
        </div>
      )}

      {isPhotoNationalFrontOpen && selectedCaptian && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <PhotoNationalFront
            onClose={closePhotoNationalIdFront}
            // NationalPhotofront={selectedCaptian.drivingLicenseFront} // تمرير الصورة
            captain={selectedCaptian}
          />
        </div>
      )}

      {isPhotoNationalBackOpen && selectedCaptian && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <PhotoNationalBack
            onClose={closePhotoNationalIdBack}
            // NationalPhotoBack={selectedCaptian.drivingLicenseFront} // تمرير الصورة
            captain={selectedCaptian}
          />
        </div>
      )}

    </>
  );
};

export default CaptianRequests;

