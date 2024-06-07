import React from 'react'
import North_face  from "./images/North_face.jpg";
import Boss  from "./images/Boss.jpg";
import Tommy  from "./images/Tommy.jpg";
import New_balance  from "./images/New_balance.jpg";
import adidas  from "./images/adidas.jpg";
import Comme_des_loups  from "./images/Comme_des_loups.jpg";

export const Banner2 = () => {
    
  return (
    
    <div className='py-2  px-6 '  >
        <div className="py-10 flex flex-col md:flex-row-reverse justify-between items-center gap-0  ">
            <div className='md:w-1/2'>
                <img src={North_face} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
            <div className='md:w-1/2'>
                <img src={Boss} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
            <div className='md:w-1/2'>
                <img src={Tommy} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
            <div className='md:w-1/2'>
                <img src={New_balance} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
            <div className='md:w-1/2'>
                <img src={adidas} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
            <div className='md:w-1/2'>
                <img src={Comme_des_loups} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
        </div>
    </div>
      )
}
