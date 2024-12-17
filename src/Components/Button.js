import React from 'react';

const Button = ({ id, activeButton, setActiveButton, children, size, className, ...props }) => {
  const handleClick = () => {
    setActiveButton(id); // تعيين الزر النشط
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${
        activeButton === id ? 'bg-blue-600 text-white' : 'bg-transparent'
      } ${size === 'sm' ? 'text-sm' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;



