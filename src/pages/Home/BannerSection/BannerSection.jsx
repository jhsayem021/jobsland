import React, { useState } from 'react';
import NavbarSection from '../../../components/NavbarSection/NavbarSection';
import './BannerSection.css'
import bannerImg from '../../../assets/image/banner-img.png'
import bannerImgBg from '../../../assets/image/banner-img-bg.png'
import SearchComponent from '../../../components/SearchComponent/SearchComponent';

const BannerSection = () => {
  
    return (
        <div className='banner '  >
            <div className="lg:pt-5">
            <NavbarSection  ></NavbarSection>
            </div>
            <div className='lg:grid lg:grid-cols-12 lg:w-[1424px] mx-auto justify-evenly lg:py-44 py-10 px-5' >
                <div className='col-span-5 hidden lg:flex '>
                    <div className='mx-auto w-full relative'>
                        <div><img src={bannerImgBg} className='absolute top-8 left-24 banner-img-section w-96'  alt="" /></div>
                        <div><img src={bannerImg} alt="" className='absolute z-10 -top-5 w-96 left-24'  /></div>
                    </div>
                </div>
                <div className='lg:col-span-7  '>
                    <div>
                        <h1 className='lg:text-[65px] text-[35px] font-bold lg:mb-4 mb-3' >Our Excellent Find Job <br></br>
                            <span>Best Career</span>
                        </h1>
                    </div>
                    <div>
                        <p className=' lg:text-[20px] text-[#919191] text-[18px] lg:mb-6 mb-3'>There are many variations passages of Lorem Ipsum Fasts
                            by injected humour, or randomised words which...</p>
                    </div>
                    <div className=''>
                       <SearchComponent></SearchComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;