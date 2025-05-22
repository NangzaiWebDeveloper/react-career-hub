import React, { useEffect, useState } from 'react';
import JobsDetails from '../JobsDetails/JobsDetails';

const FeaturedJobs = () => {

    const [items, setItem] = useState([])
    //This is not best way to load show all data
    const [dataLength, setDataLength] = useState(4)


    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setItem(data))
    }, [items])

    return (
        <div className='my-32'>
            <h3 className='text-3xl md:text-5xl font-extrabold text-center'>Featured Jobs</h3>
            <p className='text-lg text-center mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-14'>
                {
                    items.slice(0, dataLength).map(item => <JobsDetails key={item.id} props={item} />)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <div className={dataLength === items.length && 'hidden'}>
                    <button onClick={() => setDataLength(items.length)} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;