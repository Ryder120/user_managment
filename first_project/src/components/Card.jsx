import React from 'react'
import Single from '../assets/Single.png'
import Double from '../assets/Double.png'
import Triple from '../assets/Triple.png'

const Card = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Single}
                        alt='/' className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>Card 1</h2>
                    <p className='text-center text-4xl font-bold'>100%</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
                        <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>  
                        <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Double}
                        alt='/' className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>Card 2</h2>
                    <p className='text-center text-4xl font-bold'>100%</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
                        <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>  
                        <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Triple}
                        alt='/' className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='text-2xl font-bold text-center py-8'>Card 3</h2>
                    <p className='text-center text-4xl font-bold'>100%</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
                        <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>  
                        <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

                </div>

            </div>

        </div>


    )
}

export default Card
