


import React from 'react';

const Card = ({ stat }) => (
  <div className="bg-[#3366FF33] rounded-xl shadow-md py-4 px-11 w-52 flex flex-col items-center">
    <h3 className="text-lg font-medium mb-4">{stat.title}</h3>
    <img src={stat.imgSrc} alt="icon" className="w-20 h-10 object-contain mb-2" />
    <div className="text-2xl font-bold">{stat.value}</div>
  </div>
);

export default Card;











