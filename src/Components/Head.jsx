import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Auth';

const Head = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    
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
                <button onClick={() => {
                    auth.logout();
                    navigate("/login", { replace: true }); // تسجيل الخروج وإعادة التوجيه
                }}>
                    <FaSignOutAlt size={20} />
                </button>
            </div>
        </>
    )
}

export default Head