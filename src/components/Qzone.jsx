import React from 'react';
import swimming from '../assets/swimming.png';
import classImg from '../assets/class.png';
import playground from '../assets/playground.png';

const Qzone = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow w-64">
      <h2 className="text-lg font-semibold mb-4">Q-Zone</h2>

      <div className="relative mb-5">
        <div className="absolute top-2 left-2 w-full h-full bg-white shadow-md rounded-md rotate-1 z-0"></div>
        <div className="relative z-10 bg-white shadow-md rounded-md overflow-hidden">
          <img src={swimming} alt="Swimming" className="w-full h-40 object-cover" />
          <p className="text-center font-medium py-2">Swimming</p>
        </div>
      </div>

      <div className="relative mb-5">
        <div className="absolute top-2 left-2 w-full h-full bg-white shadow-md rounded-md rotate-1 z-0"></div>
        <div className="relative z-10 bg-white shadow-md rounded-md overflow-hidden">
          <img src={classImg} alt="Class" className="w-full h-40 object-cover" />
          <p className="text-center font-medium py-2">Class</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-2 left-2 w-full h-full bg-white shadow-md rounded-md rotate-1 z-0"></div>
        <div className="relative z-10 bg-white shadow-md rounded-md overflow-hidden">
          <img src={playground} alt="Play Ground" className="w-full h-40 object-cover" />
          <p className="text-center font-medium py-2">Play Ground</p>
        </div>
      </div>
    </div>
  );
};

export default Qzone;
