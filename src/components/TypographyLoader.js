import React from 'react';

import "./TypographyLoader.css";
import Group1 from "../assets/images/Group (1).png";
import Group2 from "../assets/images/Group (2).png";
import Group3 from "../assets/images/Group (3).png";


function TypographyLoader() {
  return (
    <div className="loader flex flex-col justify-center items-center bg-black">
      <div className="lg:text-5xl md:text-2xl sm:text-1xl font-semibold mb-4 text-white"> <h1>Hey!</h1> </div>
      <div className="animatetext animate-bounce text-1xl font-extrabold lg:text-6xl md:text-4xl">
        Typography
      </div>
      <div>
      <img src={Group1} 
          alt='group' 
          className='w-10 h-6 absolute left-20 top-60 animate-ping'
        />

        <img src={Group2} 
          alt='group' 
          className='w-10 h-6 absolute right-10 top-36 animate-bounce'
        />

        <img src={Group3} 
          alt='group' 
          className='w-10 h-6 absolute bottom-20 right-20 animate-spin'
        />    
      </div>
    </div>
  );
};

export default TypographyLoader;
