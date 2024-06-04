import React from 'react';
import './CategoryCard.css'
import dataEntryImg from '../../assets/image/dataentry.jpg'
import { FaComputer } from 'react-icons/fa6';
const CategoryCard = () => {
    return (
        <div className='group '>
            <div>
                <div><img src={dataEntryImg} alt="" className='group-hover:w-5/6  group-hover:h-52 ' /></div>
            </div>
            <div className='bg-white'>
                <div className='ps-8 pb-8'> 
                    <div>     
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