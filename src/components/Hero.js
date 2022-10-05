import React from 'react'
//react-icons
import { BiSearch } from 'react-icons/bi'
//react-router-dom
import { Link } from 'react-router-dom'

const productsData = [
    {
        id:1,
        product:"فونت ها"
    },
    {
        id:2,
        product:"وردپرس ها"
        
    },
    {
        id:3,
        product:"کامپوننت ها"
    },
    {
        id:4,
        product:"پالت رنگی"
    },
    {
        id:5,
        product:"شخصی سازی"
    },
    {
        id:6,
        product:"قالب ها"
    },
    
]

const Hero = () => {
    return (
        <div className='relative w-full h-[560px] bg-slate-900 flex justify-center items-center overflow-hidden'>
            <video className='absolute w-full h-full object-cover z-[0] opacity-30' src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985" autoPlay loop muted></video>
            <div className='flex justify-center items-center flex-col z-10'>
                <div className='w-full flex justify-center items-center'>
                    <ul className='flex flex-wrap justify-center items-center mb-5 lg:mb-10 text-white'>
                        {productsData.map(item => 
                            <li key={item.id}><Link className='lg:px-6 px-5 lg:py-3 py-2 lg:mx-2 mx-1 text-xs md:text-sm lg:text-base my-1 flex rounded-full bg-[rgba(0,0,0,0.5)] hover:bg-color-main-3 hover:text-color-Text3 transition-all duration-200 ' to='#'>{item.product}</Link></li>
                            )}
                    </ul>
                </div>
                <div className='flex justify-center items-center flex-col mb-16 md:m-8'>
                    <span className='text-white lg:text-4xl md:text-3xl text-2xl font-extrabold m-2 text-center px-5 transition-all duration-200'>
                        انواع قالب ضایعات شیر آلات خریداریم
                    </span>
                    <span className='text-white m-2 text-center text-sm md:text-base font-light w-full max-w-[642px] px-5'>
                        در این مکان بسیار زیبا ما ضایعات شیر آلات و وسایلی در اختیار شما قرار میدهیم تا به هم سن و سالان خود پز بدهید. بشتابید بشتاب و به حراج اخر هفته برسید.
                    </span>
                </div>
                <div className='max-w-[600px] w-full flex items-center justify-center relative z-10 px-5'>
                    <BiSearch className='absolute text-color-Text2 text-2xl right-10' />
                    <input className='w-full h-[56px] rounded-full pr-14 outline-none caret-color-main-1' type="text" placeholder='جستجو...' />
                </div>

            </div>
        </div>
    )
}

export default Hero;