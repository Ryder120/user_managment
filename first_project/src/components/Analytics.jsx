import React from 'react'
import Teacher from '../assets/teacher.png'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='text-3xl sm:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Get access to your data analytics dashboard. Manage your data centrally and get insights into your business.</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
                <div>
                    <img src={Teacher} alt="/" className='w-[500px] mx-auto my-4' />
                </div> 
            </div>

        </div>
    )
}

export default Analytics
