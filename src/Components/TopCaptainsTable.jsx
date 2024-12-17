import React from 'react';
import Avatar from './Avatar';
import { FaStar, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TopCaptainsTable = ({ limited }) => {
  const navigate = useNavigate();

  // بيانات الكباتن
  const captains = [
    { id: 1, user: 'User 1', car: 'VIP', state: 'Available', location: 'Street of Street 45', rate: 4, trips: 10, completed: 35 },
    { id: 2, user: 'User 2', car: 'Economy', state: 'Available', location: 'Street of Street 45', rate: 5, trips: 15, completed: 40 },
    { id: 3, user: 'User 3', car: 'VIP', state: 'Not Available', location: 'Street of Street 45', rate: 3, trips: 8, completed: 25 },
    { id: 4, user: 'User 4', car: 'Economy', state: 'Available', location: 'Street of Street 45', rate: 4, trips: 12, completed: 30 },
    { id: 5, user: 'User 5', car: 'VIP', state: 'Available', location: 'Street of Street 45', rate: 5, trips: 20, completed: 50 },
  ];

  // عرض فقط أول 3 صفوف إذا كان `limited` true
  const visibleCaptains = limited ? captains.slice(0, 3) : captains;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Top Captains</h2>
        {limited && (
          <button
            onClick={() => navigate('/topcaptianspage')}
            className="text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
          >
            <FaChevronRight />
          </button>
        )}
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['User', 'Kind of Car', 'Last Trip', 'State', 'Current Location', 'Rate', 'Total trips', 'Total completed'].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {visibleCaptains.map((captain) => (
            <tr key={captain.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Avatar src="/placeholder.svg" fallback={`U${captain.id}`} />
                  <div className="text-sm">
                    <div>{captain.user}</div>
                    <div className="text-gray-500">+99 (99) 429-45-15</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{captain.car}</td>
              <td className="px-6 py-4 whitespace-nowrap">week ago</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    captain.state === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {captain.state}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{captain.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className={star <= captain.rate ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{captain.trips}</td>
              <td className="px-6 py-4 whitespace-nowrap">{captain.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCaptainsTable;

