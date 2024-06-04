import React, { useState } from 'react';
import { Radio, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
const SearchComponent = () => {

    const [isTrue, setIsTrue] = useState(false)
    const togglebutton = (e) =>{

        setIsTrue(!isTrue)
         console.log('click')
    }

    return (
        <div>
            <Tabs variant='soft'  >
                            <TabList>
                                <Tab onClick={()=>togglebutton()} className=' hover:text-green-500 focus:text-green-500 ' >
                                <div> {(isTrue ===false) ? <IoMdRadioButtonOn className='text-[25px]' /> : <IoMdRadioButtonOff className='text-[25px]' />}
                                </div> <span className=" ms-2 text-[16px]"> Full Time</span>
                                </Tab>
                                <Tab onClick={()=>togglebutton()} className=' hover:text-green-500 focus:text-green-500 ' >
                                <div> {(isTrue !==false) ? <IoMdRadioButtonOn className='text-[25px]' /> : <IoMdRadioButtonOff className='text-[25px]' />}
                                </div> <span className=" ms-2 text-[16px]"> Part Time</span>
                                </Tab>
                           
                            </TabList>
                            <TabPanels >
                                <TabPanel >
                                <div class="lg:grid lg:grid-cols-8 items-center bg-white">
                                    <div class=" lg:col-span-3">
                                        <select name="banner-select" className='py-4  px-8 text-lg w-full border-e-2'><option value="1">Job Title</option><option value="1">Web Designer</option><option value="1">UX/UI Designer</option><option value="1">Digital Marketer</option></select></div>
                                    <div class=" lg:col-span-3">
                                            <select name="banner-select" className='py-4  px-8 text-lg w-full'><option value="1">All category</option><option value="1">Health Care</option><option value="1">Management</option><option value="1">Marketing</option></select>
                                    </div>
                                    <div class="lg:col-span-2 ">
                                        <button type="submit" className='lg:py-3  lg:px-6 py-4 w-full lg:w-11/12 mx-auto flex justify-center items-center bg-green-500 hover:bg-white text-white hover:text-black hover:border-2 hover:border-green-500'> <IoSearch className='lg:text-[25px]  lg:me-5 ' /> <span className='text-lg'>Search</span></button>
                                    </div>
                                </div>
                                </TabPanel>
                                <TabPanel>
                                <div class="grid grid-cols-8 items-center bg-white">
                                    <div class=" col-span-3">
                                        <select name="banner-select" className='py-4  px-8 text-lg w-full border-e-2'><option value="1">Job Title</option><option value="1">Web Designer</option><option value="1">UX/UI Designer</option><option value="1">Digital Marketer</option></select></div>
                                    <div class=" col-span-3">
                                            <select name="banner-select" className='py-4  px-8 text-lg w-full'><option value="1">All category</option><option value="1">Health Care</option><option value="1">Management</option><option value="1">Marketing</option></select>
                                    </div>
                                    <div class="col-span-2 ">
                                        <button type="submit" className='lg:py-3  lg:px-6 w-11/12 mx-auto flex justify-center items-center text-white  bg-green-500 hover:bg-white  hover:text-black hover:border-2 hover:border-green-500 border-2 border-green-500'> <IoSearch className='lg:text-[25px]  lg:me-5 ' /> <span className='text-lg'>Search</span></button>
                                    </div>
                                </div>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
        </div>
    );
};

export default SearchComponent;