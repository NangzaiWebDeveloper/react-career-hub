import React from 'react';
import Banner from '../../Main/Banner/Banner';
import JobCategory from '../../Main/JobCategoryList/JobCategory';
import FeaturedJobs from '../../Main/FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <JobCategory/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;