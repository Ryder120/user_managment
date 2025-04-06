import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1440px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div className='container mx-auto p-4'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
                <div>
                    <FaFacebookF size={30} className='inline-block p-2 rounded-full hover:bg-gray-600 cursor-pointer' />
                    <FaTwitter size={30} className='inline-block p-2 rounded-full hover:bg-gray-600 cursor-pointer' />
                    <FaInstagram size={30} className='inline-block p-2 rounded-full hover:bg-gray-600 cursor-pointer' />
                    <FaLinkedinIn size={30} className='inline-block p-2 rounded-full hover:bg-gray-600 cursor-pointer' />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Careers</li>
                        <li className='py-2 text-sm'>Resources</li>
                        <li className='py-2 text-sm'>Contact</li>
                        <li className='py-2 text-sm'>Support</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Careers</li>
                        <li className='py-2 text-sm'>Resources</li>
                        <li className='py-2 text-sm'>Contact</li>
                        <li className='py-2 text-sm'>Support</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Careers</li>
                        <li className='py-2 text-sm'>Resources</li>
                        <li className='py-2 text-sm'>Contact</li>
                        <li className='py-2 text-sm'>Support</li>
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default Footer
