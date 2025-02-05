import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { UserTokenContext } from '../Context/UserTokenContext';
import { useContext } from 'react';
const Head = () => {
    const userToken = useContext(UserTokenContext);
    const navigate = useNavigate();
    
    
    return (
        <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 mb-2">
                <h1 className="text-4xl font-semibold text-center flex-grow">
                    <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-700">
                        GO
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">
                        TAXI
                    </span>
                </h1>
                <button 
                onClick={() => {
                    localStorage.removeItem("token");  // حذف التوكن
                    userToken.setToken(null);  // إعادة تعيين الحالة
                    navigate("/login");  // توجيه المستخدم إلى صفحة تسجيل الدخول
                }}
                >
                    <FaSignOutAlt size={20} />
                </button>
            </div>
        </>
    )
}

export default Head