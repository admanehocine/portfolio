import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically move to the next slide every 20 milliseconds
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, 2000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides.length]); // Dependency array to ensure interval is created only once

  return (
    <div className='overflow-hidden relative w-full'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${curr * (100 / slides.length)}%)`, width: `${slides.length * 100}%` }}
      >
        {slides}
      </div>
      <div className='absolute inset-4 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <FaChevronLeft size={40} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <FaChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};
