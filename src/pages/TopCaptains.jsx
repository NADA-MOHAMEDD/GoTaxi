import React from 'react';
import Sidebar from '../Components/Sidebar';
import TopCaptainsTable from '../Components/TopCaptainsTable';
import { useNavigate } from 'react-router-dom';
import Head from '../Components/Head';
const TopCaptains = () => {

    const navigate = useNavigate();


    return (
        <>
            <div className="flex h-screen bg-white">
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 p-8 overflow-auto">
                <Head/>

                    <h2 className="text-xl font-semibold mb-6">TOP Captains</h2>
                    <TopCaptainsTable limited={false} />

                </div>
            </div>
        </>
    )
}

export default TopCaptains