import React, { useEffect, useState } from 'react';

const JobCategory = () => {
     
    const [icon, setIcon] = useState([])

    useEffect(()=>{
        fetch("categories.json")
         .then(res => res.json())
         .then(data => setIcon(data))
    },[icon])

    return (
        <div className='mt-32 max-w-6xl mx-auto'>
            <div>
                <h3 className='text-5xl font-extrabold text-center'>Job Category List</h3>
                <p className='text-center mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='flex justify-between mt-16'>
                    {
                        icon.map((item)=>(
                            <div key={item.id} className='border border-gray-300 rounded-lg p-5 w-3xs shadow-lg'>
                                <img className='w-24' src={item.logo} alt="" />
                                <h5 className='font-bold text-xl mt-5'>{item.category_name}</h5>
                                <p className=''>{item.availability}</p>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    );
};

export default JobCategory;