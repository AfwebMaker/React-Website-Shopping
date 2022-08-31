import React from 'react'

import { BiSearch } from 'react-icons/bi'

const Hero = () => {
    return (
        <div className='relative w-full h-[560px] bg-slate-900 flex justify-center items-center overflow-hidden'>
            <video className='absolute w-full h-full object-cover z-[0] opacity-30' src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" autoPlay loop muted></video>
            <div className='flex justify-center items-center flex-col z-10'>
                <div className='flex justify-center items-center flex-col mb-16 md:m-8'>
                    <span className='text-white md:text-3xl text-2xl font-extrabold m-2 text-center px-5'>
                        انواع قالب ضایعات شیر آلات خریداریم
                    </span>
                    <span className='text-white m-2 text-center text-sm md:text-base w-full max-w-[642px] px-5'>
                        در این مکان بسیار زیبا ما ضایعات شیر آلات و وسایلی در اختیار شما قرار میدهیم تا به هم سن و سالان خود پز بدهید. بشتابید بشتاب و به حراج اخر هفته برسید.
                    </span>
                </div>
                <div className='max-w-[600px] w-full flex items-center justify-center relative z-10 px-5'>
                    <BiSearch className='absolute text-color-Text2 text-2xl right-10' />
                    <input className='w-full h-[56px] rounded-full pr-14 outline-none' type="text" placeholder='جستجو...' />
                </div>

            </div>
        </div>
    )
}

export default Hero;