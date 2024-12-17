import React, { useState } from 'react';
import Button from './Button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const chartData = [
    { month: "JAN", revenue: 3000, users: 2000 },
    { month: "FEB", revenue: 2500, users: 2200 },
    { month: "MAR", revenue: 3500, users: 2400 },
    { month: "APR", revenue: 4000, users: 2800 },
    { month: "MAY", revenue: 3800, users: 2600 },
    { month: "JUN", revenue: 4200, users: 3000 },
    { month: "JUL", revenue: 4800, users: 3200 },
    { month: "AUG", revenue: 4400, users: 3400 },
    { month: "SEP", revenue: 4600, users: 3600 },
    { month: "OCT", revenue: 4200, users: 3200 },
    { month: "NOV", revenue: 4800, users: 3800 },
    { month: "DEC", revenue: 5000, users: 4000 },
  ];
  

const Statistics = () => {
  const [activeButton, setActiveButton] = useState(null); // تتبع الزر النشط

  return (
    <>
    <div className="bg-[#3366FF33] rounded-lg shadow-md">
      <div className="flex justify-between items-center mt-2 mb-6 p-9">
        <h2 className="text-lg font-semibold">Statistics</h2>
        <div className="flex items-center gap-2">
          <Button id="1" activeButton={activeButton} setActiveButton={setActiveButton} size="sm">
            Monthly
          </Button>
          <Button id="2" activeButton={activeButton} setActiveButton={setActiveButton} size="sm">
            Daily
          </Button>
          <Button id="3" activeButton={activeButton} setActiveButton={setActiveButton} size="sm">
            Weekly
          </Button>
          <Button id="4" activeButton={activeButton} setActiveButton={setActiveButton} size="sm">
            Export
          </Button>
        </div>
      </div>

      <div className="h-[300px]">
        <LineChart width={800} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#4263EB" strokeWidth={2} />
          <Line type="monotone" dataKey="users" stroke="#94A3B8" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
    </>
  );
};

export default Statistics;

