// import React, { useState } from "react";
// import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

// import MoneyToWallet from "./MoneyToWallet";

// const TransferCaptians = ({ onClose, captian }) => {
//     const [showMoneyToWalletModal, setshowMoneyToWalletModal] = useState(false);
//   return (
//    <>
//      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="w-[550px] h-[350px] bg-white shadow-lg rounded-3xl p-7 text-center relative">
//                 <button onClick={onClose} className="absolute top-4 left-4">
//                     <FaArrowLeft className="text-xl" />
//                 </button>
//                 <img
//                     src="https://via.placeholder.com/100"
//                     alt="profile"
//                     className="w-24 h-24 rounded-full mx-auto"
//                 />
//                 <h2 className="text-xl font-bold mt-4">{captian.user}</h2>
//                 <div className="flex justify-center items-center text-red-500 mt-1">
//                     <FaMapMarkerAlt className="mr-1" />
//                     <p className="text-sm">from {captian.startLocation}</p>
//                 </div>
//                 <div className="mt-14 flex justify-between items-center">
//                     <button
//                         onClick={() => setshowMoneyToWalletModal(true)}   // عرض المودال الجديد
//                         className="px-6 py-2 bg-slate-50 rounded-full font-bold"
//                     >
//                         Transfer Money to wallet
//                     </button>
//                     <button
//                         // onClick={() => setShowProfileAmountModal(true)}   // عرض المودال الجديد
//                         className="px-6 py-2 bg-slate-50 rounded-full font-bold"
//                     >
//                         Cash Withdrawal
//                     </button>
//                 </div>
//             </div>

//             {/* عرض moneyto wallet كمودال */}
//             {showMoneyToWalletModal && (
//                 <MoneyToWallet
//                     onClose={() => {
//                         setshowMoneyToWalletModal(false); 
//                         onClose(); // إعادة تعيين القيم في ClientsTable
//                     }}
//                     captian={captian} 
//                 />
//             )}
//         </div>
//    </>
//   )
// }

// export default TransferCaptians

import React, { useState } from "react";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import MoneyToWallet from "./MoneyToWallet";
import CashWithdrawal from "./CashWithdrawal";

const TransferCaptians = ({ onClose, captian }) => {
    const [showMoneyToWalletModal, setShowMoneyToWalletModal] = useState(false);
    const [showCashWithdrawalModal, setShowCashWithdrawalModal] = useState(false);

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="w-[550px] h-[350px] bg-white shadow-lg rounded-3xl p-7 text-center relative">
                    <button onClick={onClose} className="absolute top-4 left-4">
                        <FaArrowLeft className="text-xl" />
                    </button>
                    <img
                        src="https://via.placeholder.com/100"
                        alt="profile"
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                    <h2 className="text-xl font-bold mt-4">{captian.user}</h2>
                    <div className="flex justify-center items-center text-red-500 mt-1">
                        <FaMapMarkerAlt className="mr-1" />
                        <p className="text-sm">from {captian.startLocation}</p>
                    </div>
                    <div className="mt-14 flex justify-between items-center">
                        <button
                            onClick={() => setShowMoneyToWalletModal(true)} // عرض MoneyToWallet
                            className="px-6 py-2 bg-slate-50 rounded-full font-bold"
                        >
                            Transfer Money to wallet
                        </button>
                        <button
                            onClick={() => setShowCashWithdrawalModal(true)} // عرض CashWithdrawal
                            className="px-6 py-2 bg-slate-50 rounded-full font-bold"
                        >
                            Cash Withdrawal
                        </button>
                    </div>
                </div>

                {/* عرض MoneyToWallet كمودال */}
                {showMoneyToWalletModal && (
                    <MoneyToWallet
                        onClose={() => {
                            setShowMoneyToWalletModal(false);
                        }}
                        captian={captian}
                    />
                )}

                {/* عرض CashWithdrawal كمودال */}
                {showCashWithdrawalModal && (
                    <CashWithdrawal
                        onClose={() => {
                            setShowCashWithdrawalModal(false);
                        }}
                        captian={captian}
                    />
                )}
            </div>
        </>
    );
};

export default TransferCaptians;

