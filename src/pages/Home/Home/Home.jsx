import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import BrowseJobSection from '../BrowseJobSection/BrowseJobSection';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
    
            <BannerSection></BannerSection>
            <BrowseJobSection></BrowseJobSection>
            <Categories></Categories>
        </div>
    );
};

export default Home;