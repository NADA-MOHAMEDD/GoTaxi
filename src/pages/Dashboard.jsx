import React from 'react';
import Sidebar from '../Components/Sidebar';
import Card from '../Components/Card';
import TopCaptainsTable from '../Components/TopCaptainsTable';
import Statistics from '../Components/Statistics'; 
import { useAuth } from '../Components/Auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Head from '../Components/Head';
function Dashboard() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate("/login", { replace: true }); 
    }
  }, [auth.user, navigate]);
  return (
    <>
      <div className="flex h-screen bg-white">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">
        <Head/>

          <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8 mx-14">
            {[
              { title: 'Total Revenue (Daily)', value: '4523 $', imgSrc: '/img/img1.png' },
              { title: 'Number of Captains', value: '4523', imgSrc: '/img/img2.png' },
              { title: 'Total Orders (Daily)', value: '4523', imgSrc: '/img/img3.png' },
              { title: 'Total Complete Trip (Daily)', value: '4523 $', imgSrc: '/img/img4.png' },
            ].map((stat, index) => (
            <Card key={index} stat={stat} />
            ))}
          </div>


          {/* Top Captains */}
          {/* <TopCaptainsTable /> */}
          <TopCaptainsTable limited={true} />

          {/* Statistics */}
          <Statistics />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

