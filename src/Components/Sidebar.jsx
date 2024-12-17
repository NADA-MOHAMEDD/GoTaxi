import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaCar, FaFileAlt, FaMapMarkerAlt} from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { GoGitPullRequest } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import Avatar from './Avatar'; 
import { useAuth } from './Auth';
const Sidebar = () => {
  const auth = useAuth();
  return (
    <>
      <div className="w-64 bg-gradient-to-b from-blue-700 to-blue-800 text-white">
        <div className="flex items-center gap-3 mb-8 px-6 pt-5">
          <Avatar src="/placeholder.svg" alt="Profile" fallback="MH" />
          <div>
            <h2 className="font-semibold">{auth.user?.username}</h2>
            <p className="text-xs opacity-70">+99 (99) 429-45-15</p>
          </div>
        </div>
        <div className="flex items-center justify-start text-gray-300 px-6 mb-1">
          Main menu
        </div>

        <nav className="space-y-2">
          {[
            { name: 'Dashboard', path: '/', icon: MdDashboard },
            { name: 'Control Trip', path: '/controltrip', icon: IoIosTimer },
            { name: 'Current Orders', path: '/currentOrders', icon: FaFileAlt },
            { name: 'Captian Request', path: '/captiansrequest', icon: GoGitPullRequest },
            { name: 'Clients', path: '/clientTable', icon: FaUsers },
            { name: 'Captian', path: '/captians', icon: FaCar },
            { name: 'Live map', path: '/liveMap', icon: FaMapMarkerAlt },
            { name: 'Payment Method', path: '/paymentMethod', icon: MdOutlinePayment },
            { name: 'Add PromoCode', path: '/addPromo', icon: CiDiscount1 },
            { name: 'Moderators', path: '/moderators', icon: FaUsers },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center px-11 py-2 transition duration-200 ${
                  isActive
                    ? 'bg-white text-[#4263EB] rounded-l-3xl pl-7'
                    : 'text-white'
                }`
              }
            >
              <item.icon className="mr-2" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

