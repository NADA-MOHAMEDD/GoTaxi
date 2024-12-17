// src/components/Avatar.js
import React from 'react';

const Avatar = ({ src, alt, fallback }) => (
  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
    {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : <span>{fallback}</span>}
  </div>
);

export default Avatar;
