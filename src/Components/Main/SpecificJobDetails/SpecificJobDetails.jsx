import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from '../../../Utilites/LocalStorage';

const SpecificJobDetails = () => {

    const jobs = useLoaderData()
    console.log(jobs)
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)

    const handleApplyJob =()=>{
        saveJobApplication(idInt)
        toast("Toast Applied")
    }

    return (
        <div className='max-w-6xl mx-auto mt-10'>
            <h1 className='text-4xl font-extrabold text-center'>Job Details :{job.id}</h1>

            <div className='grid md:grid-cols-4 gap-6 my-10 md:my-32'>
                <div className='col-span-3'>
                    <p><span className='font-bold'>Job Description :</span> {job.job_description}</p>
                    <p className='my-4'><span className='font-bold'>Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className='font-bold'>Educational requirement:</p>
                    <p>{job.educational_requirements}</p>
                    <p className='font-bold mt-4'>Experiences:</p>
                    <p>{job.experiences}</p>
                </div>
                <div className='border-gray-300 border rounded-xl shadow-xl p-5 leading-[1.8]'>
                    <h6 className='font-bold'>Job Details</h6>
                    <hr className='opacity-30' />
                    <p><span className='font-bold'>Salary:</span> {job.salary}</p>
                    <p><span className='font-bold'>Job Title:</span> {job.job_title}</p>
                    <h6 className='font-bold'>Contact Information</h6>
                    <hr className='opacity-30' />
                    <p><span className='font-bold'>Phone:</span> {job.contact_information.phone}</p>
                    <p><span className='font-bold'>Email:</span> {job.contact_information.email}</p>
                    <p><span className='font-bold'>Address:</span> {job.contact_information.address}</p>

                    <button onClick={handleApplyJob} className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SpecificJobDetails;