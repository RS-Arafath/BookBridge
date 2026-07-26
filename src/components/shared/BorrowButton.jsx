'use client';

import { Button } from '@heroui/react';
import toast from 'react-hot-toast';

const BorrowButton = ({ isAvailable }) => {
  const handleClick = () => {
    toast.error('Service will be available soon');
  };

  return (
    <Button
      isDisabled={!isAvailable}
      onClick={handleClick}
      className={`px-8 py-3 text-sm md:text-base lg:text-lg font-bold transition-colors duration-150 ${
        isAvailable
          ? 'bg-[#F7971D] text-white hover:bg-[#e08812]'
          : 'bg-gray-300 text-gray-500'
      }`}
    >
      {isAvailable ? 'Borrow This Book' : 'Not Available'}
    </Button>
  );
};

export default BorrowButton;
