'use client'
import React, { useState } from 'react';

const Traffictoast = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleYesClick = () => {
    // Hide the component when "Yes" button is clicked
    setIsVisible(false);
  };

  const handleCancelClick = () => {
    // Hide the component when "Cancel" button is clicked
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Render nothing if component is not visible
  }

  return (
    <div className='flex justify-center backdrop-blur-xl'>
      <div className='backdrop-blur-xl border-1 border-black bg-white w-64 rounded-xl'>
        <div className='text-black p-4 font-semibold'>
          Any Traffic Updates?
        </div>
        <div className='text-black px-4 text-sm'>
          Is there traffic on the route you currently are?
        </div>
        <div className='flex p-4 justify-end gap-3 items-center text-sm font-medium'>
          <div>
            <button className='text-black' onClick={handleCancelClick}>Cancel</button>
          </div>
          <div>
            <button className='bg-black text-white w-14 h-10 rounded-xl' onClick={handleYesClick}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traffictoast;
