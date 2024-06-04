import React from 'react';

const Sectiontitle = ({title,subTitle}) => {
    return (
        <div>
            <div>
                <h1 className='lg:text-[45px] text-[35px] font-bold lg:mb-4 mb-3 text-center' >{title}</h1>
            </div>
            <div>
                <p className=' lg:text-[18px] text-[#919191] text-[18px] text-center lg:mb-6 mb-3 border-s-4 border-s-green-500 ps-6'>{subTitle}</p>
            </div>
        </div>
    );
};

export default Sectiontitle;