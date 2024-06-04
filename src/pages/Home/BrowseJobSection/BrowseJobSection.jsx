import React from 'react';
import browseimg from '../../../assets/image/browsejobimg.png'
import { PiBookmarkSimple } from 'react-icons/pi';
import { FaAddressCard } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
const BrowseJobSection = () => {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-2 lg:gap-20 justify-between items-center lg:w-[1424px] mx-auto lg:py-34 py-10 px-5'>
                <div className='col-span-1 mb-12 lg:mb-0 p-4 lg:p-0'>
                    <div>
                        <h1 className='lg:text-[55px] text-[35px] font-bold lg:mb-4 mb-3' >Suits Jobs For You.

                        </h1>
                    </div>
                    <div>
                        <p className=' lg:text-[18px] text-[#919191] text-[18px] lg:mb-6 mb-3 border-s-4 border-s-green-500 ps-6'>There are many variations passages of Lorem Ipsum Fasts
                            by injected humour, or randomised words which...</p>
                    </div>
                    <div className='flex items-center mt-3'>
                        <span className='text-green-500 text-lg'> <PiBookmarkSimple /></span> <p className='text-[#919191] text-[18px] ps-3'>Bookmark Jobs</p>
                    </div>
                    <div className='flex items-center mt-3'>
                        <span className='text-green-500 text-lg'> <FaAddressCard /></span> <p className='text-[#919191] text-[18px] ps-3'>Apply with your Resume</p>
                    </div>
                    <div className='flex items-center mt-3'>
                        <span className='text-green-500 text-lg'> <FiMail /> </span> <p className='text-[#919191] text-[18px] ps-3'>Get notified</p>
                    </div>
                    <div>
                        <button type="submit" className='lg:py-3  lg:px-6 p-2 mt-5 flex justify-center items-center text-white  bg-green-500 hover:bg-white  hover:text-black hover:border-2 hover:border-green-500 border-2 border-green-500'>  <span className='lg:text-lg'>Browse Job</span></button>
                    </div>
                </div>
                <div className='col-span-1 flex justify-center'>
                    <img className='w-5/6' src={browseimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BrowseJobSection;