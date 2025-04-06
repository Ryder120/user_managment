import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full text-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p className='py-4'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='lg:col-span-1'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full h-full'>
                        <input type="email" placeholder='Enter your email' className='p-3 flex w-full rounded-md text-black' />
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 py-3 text-black'>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
                </div>

            </div>

        </div>
    )
}

export default Newsletter
