import { useNavigate } from 'react-router-dom';
import Head from '../Components/Head';
import Sidebar from '../Components/Sidebar';

const LiveMap = () => {
    
    const navigate = useNavigate();


    return (
        <>
            <div className="flex h-screen bg-white">
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 p-8 overflow-auto">
                    <Head />

                    <h2 className="text-xl font-semibold mb-6">Live Map</h2>

                </div>
            </div>
        </>
    )
}

export default LiveMap