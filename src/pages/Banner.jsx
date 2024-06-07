 import React from 'react'
import vetement  from "./images/vetement.jpeg";
import vetement_femme  from "./images/vetement_femme.jpeg";

import { FaShoppingBag } from 'react-icons/fa';
 
 export const Banner = () => {
   
   return (
    <div className='bg-primayBG  py-9 xl:px-28 px-4 '  >
        <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14  ">
            <div className='md:w-1/2'>
                <img src={vetement} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-5xl font-light mb-5">BEST SELLERS</h1>
                <p className="text-xl mb-7">TOP VENTES</p>
                <button className=" transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 
                 duration-300 bg-black  hover:bg-orange-400 py-2 px-6
                 text-white flex items-center gap-2 font-semibold rounded-sm">
                  <FaShoppingBag className="inline-flex"/>  Shop now</button>
            </div>
            <div className='md:w-1/2'>
                <img src={vetement_femme} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
        </div>
    </div>
   )
 }
 