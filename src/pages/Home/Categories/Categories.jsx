import React from 'react';
import Sectiontitle from '../../../components/Sectiontitle/Sectiontitle';
import CategoryCard from '../../../components/CategoryCard/CategoryCard';

const Categories = () => {
    return (
        <div className='bg-[#F1F7F4] lg:py-16'>
            <Sectiontitle
            title="Categories"
            subTitle="Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula"
            ></Sectiontitle>

            <div className='grid md:grid-cols-4 grid-cols-1 gap-8 lg:w-[1424px] mx-auto md:px-0 px-5' >
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
            </div>
            
        </div>
    );
};

export default Categories;