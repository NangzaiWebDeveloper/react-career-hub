import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const JobsDetails = ({props}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = props

    return (
        <div className='border border-gray-300 p-6 rounded-xl shadow-lg'>
            <img src={logo} alt="" />
            <h3 className='text-3xl font-bold'>{job_title}</h3>
            <p>{company_name}</p>
            <div className='flex gap-3'>
                <button className='btn border border-[#9873FF]'>{remote_or_onsite}</button>
                <button className='btn border border-[#9873FF]'>{job_type}</button>
            </div>
            <div className='flex gap-4'>
                <p className='flex justify-center items-center gap-1'> <span><IoLocationOutline/> </span> {location}</p>
                <p className='flex justify-center items-center gap-1'> <span><AiOutlineDollarCircle/> </span> {salary}</p>
            </div>
            <NavLink to={`/jobsDetails/${id}`} className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</NavLink>
        </div>
    );
};

export default JobsDetails;