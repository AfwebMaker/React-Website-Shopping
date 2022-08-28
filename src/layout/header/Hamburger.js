import React from 'react'

const Hamburger = ({isOpen}) => {

    return (
        <div className='relative flex flex-col justify-center items-center h-[15px] w-[20px] cursor-pointer z-10'>
            <span className={`transition-all duration-[100ms] absolute rounded-sm flex w-full h-[2px] bg-black ${isOpen ? 'rotate-[-45deg] ' : 'top-0'}`}></span>
            <span className={`flex rounded-sm w-full h-[2px] bg-black ${isOpen ? 'hidden' : ''}`}></span>
            <span className={`transition-all duration-[100ms] absolute rounded-sm flex w-full h-[2px] bg-black ${isOpen ? 'rotate-45 ' : 'bottom-0'}`}></span>
        </div>
    )
}

export default Hamburger