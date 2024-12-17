// import React, { useState } from "react";
// import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
// import ProfileAmountSelector from "./ProfileAmountSelector"; // قم باستيراد ProfileAmountSelector

// const TransferAmount = ({ onClose, client }) => {
//     const [showProfileAmountModal, setShowProfileAmountModal] = useState(false);

//     return (
//         <>
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                 <div className="w-[500px] bg-white shadow-lg rounded-3xl p-7 text-center relative">
//                     <button
//                         onClick={() => {
//                             setShowProfileAmountModal(false);
//                             onClose();
//                         }}
//                         className="absolute top-4 left-4"
//                     >
//                         <FaArrowLeft className="text-xl" />
//                     </button>
//                     <img
//                         src="https://via.placeholder.com/100"
//                         alt="profile"
//                         className="w-24 h-24 rounded-full mx-auto"
//                     />
//                     <h2 className="text-xl font-bold mt-4">{client.user}</h2>
//                     <div className="flex justify-center items-center text-red-500 mt-1">
//                         <FaMapMarkerAlt className="mr-1" />
//                         <p className="text-sm">from {client.startLocation}</p>
//                     </div>
//                     <div className="mt-8 flex justify-center items-center">
//                         <button
//                             onClick={() => setShowProfileAmountModal(true)} // عرض المودال الجديد
//                             className="px-16 py-2 bg-slate-50 rounded-full font-bold"
//                         >
//                             Transfer Money to wallet
//                         </button>
//                     </div>
//                 </div>

//                 {/* عرض ProfileAmountSelector كمودال */}
//                 {showProfileAmountModal && (
//                     <ProfileAmountSelector
//                         onClose={() => {
//                             setShowProfileAmountModal(false); // إغلاق ProfileAmountSelector
//                             onClose(); // إعادة تعيين القيم في ClientsTable
//                         }}
//                         client={client} // تمرير بيانات العميل
//                     />
//                 )}
//             </div>
//         </>
//     );
// };

// export default TransferAmount;


import React, { useState } from "react";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import ProfileAmountSelector from "./ProfileAmountSelector"; // استيراد ProfileAmountSelector

const TransferAmount = ({ onClose, client }) => {
    const [activeModal, setActiveModal] = useState("TransferAmount"); // حالة لتحديد المودال النشط

    return (
        <>
            {activeModal === "TransferAmount" && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-[500px] bg-white shadow-lg rounded-3xl p-7 text-center relative">
                        <button
                            onClick={onClose} // إغلاق المودال
                            className="absolute top-4 left-4"
                        >
                            <FaArrowLeft className="text-xl" />
                        </button>
                        <img
                            src="https://via.placeholder.com/100"
                            alt="profile"
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                        <h2 className="text-xl font-bold mt-4">{client.user}</h2>
                        <div className="flex justify-center items-center text-red-500 mt-1">
                            <FaMapMarkerAlt className="mr-1" />
                            <p className="text-sm">from {client.startLocation}</p>
                        </div>
                        <div className="mt-8 flex justify-center items-center">
                            <button
                                onClick={() => setActiveModal("ProfileAmountSelector")} // التبديل إلى مودال ProfileAmountSelector
                                className="px-16 py-2 bg-slate-50 rounded-full font-bold"
                            >
                                Transfer Money to wallet
                            </button>
                        </div>
                    </div>
                </div>
            )}
            

            {activeModal === "ProfileAmountSelector" && (
                <ProfileAmountSelector
                    onClose={() => setActiveModal("TransferAmount")} // العودة إلى مودال TransferAmount
                    client={client} // تمرير بيانات العميل
                />
            )}
        </>
    );
};

export default TransferAmount;
