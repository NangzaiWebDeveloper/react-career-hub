import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../../Utilites/LocalStorage';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';


const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = (filter) => {
        if (filter === "all") {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === "remote") {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote")
            setDisplayJobs(remoteJobs)
        }
        else if (filter === "onsite") {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayJobs(onsiteJobs)
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied =  jobs.filter(job => storedJobIds.includes(job.id))

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div className='mb-20'>
            <h1 className='text-center text-3xl font-bold'>Applied Jobs</h1>

            <details className="dropdown mt-10">
                <summary className="btn m-1">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleJobsFilter("all")}><a>All</a></li>
                    <li onClick={() => handleJobsFilter("remote")}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter("onsite")}><a>Onsite</a></li>
                </ul>
            </details>

            {
                displayJobs.map(job => (
                    // <li key={job.id}> <span>{job.job_title} {job.company_name} : {job.remote_or_onsite} </span> </li>
                    <div className='border border-gray-300 rounded-2xl shadow-lg my-7 p-5'>
                        <div className='md:flex justify-between items-center pr-7'>
                            <div className='md:flex gap-6'>
                                <div className='w-36'>
                                    <img className='w-full' src={job.logo} alt="" />
                                </div>
                                <div className='leading-8'>
                                    <h5>{job.job_title}</h5>
                                    <p>{job.company_name}</p>
                                    <div className='flex gap-3'>
                                        <button className='btn border border-[#9873FF]'>{job.remote_or_onsite}</button>
                                        <button className='btn border border-[#9873FF]'>{job.job_type}</button>
                                    </div>
                                    <div className='flex gap-4'>
                                        <p className='flex justify-center items-center gap-1'> <span><IoLocationOutline /> </span> {job.location}</p>
                                        <p className='flex justify-center items-center gap-1'> <span><AiOutlineDollarCircle /> </span> {job.salary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pr-7'>
                                <NavLink to={`/jobsDetails/${job.id}`} className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</NavLink>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AppliedJobs;