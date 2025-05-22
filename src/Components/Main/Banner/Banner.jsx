import React from 'react';
import User from "../../../assets/images/user.png"

const Banner = () => {
    return (
        <div className='bg-[#FFF]'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex-row-reverse md:flex-row md:flex  md:mt-28'>
                    <div className=' md:w-[50%] border-gray-600'>
                        <h1 className='font-extrabold text-4xl md:text-7xl'>One Step <br />Closer To Your <br />Dream Job</h1>
                        <p className='md:text-lg mt-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn mt-8 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>Get Started</button>
                    </div>
                    <div className='md:w-[50%]'>
                        <img src={User} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;