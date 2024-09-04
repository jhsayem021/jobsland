import React from 'react';
import './CategoryCard.css'
import dataEntryImg from '../../assets/image/dataentry.jpg'
import { FaComputer } from 'react-icons/fa6';
const CategoryCard = () => {
    return (
       
            <div className='group '>
                
                    <img src={dataEntryImg} alt="" className=' group-hover:w-72 z-10  group-hover:transition-all group-hover:h-60  duration-300 h-60 w-full group-hover:bg-blend-darken'    />
                
                <div className=' group-hover:ms-10 bg-white z-0 group-hover:ease-in-out duration-300 group-hover:transition-all'>
                    <div className='ps-8 pt-14 pb-8 -mt-10'>
                        <div className='z-20 relative bottom-10'>
                            <FaComputer className='text-[60px] font-light  bg-green-500 p-3 text-white' />
                        </div>
                        <h1 className=' font-bold text-lg'>IT Software</h1>
                        <div>
                            <p>Posted Jobs: <span>3204</span></p>
                        </div>
                    </div>
                </div>
            </div>
     
    );
};

export default CategoryCard;