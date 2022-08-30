import React, { useState } from 'react'
//react roter-dom
import { Link } from 'react-router-dom';
//react icons
import { AiFillHeart } from 'react-icons/ai'
import { FaFolderPlus } from 'react-icons/fa'

const ProfileSubMenu = () => {
    const [darkMode, setDarkMode] = useState(false)
    const darkModeHandler = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="h-auto hidden w-[270px] bg-color-main-3 absolute left-1 rounded-lg top-[90%] shadow-subMenu py-8 lg:block">
            <div className="h-[18px] w-[18px] bg-white absolute left-1/2 top-[-2px] translate-x-[-50%] rotate-45"></div>

            <Link className='w-full text-color-Text2 hover:text-color-Text3 flex hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/profile/shots'>
                <span className='w-full'>
                    مشخصات
                </span>
            </Link>
            <hr className='mx-8 m-2'></hr>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='w-full'>
                    ویرایش نمایه
                </span>
            </Link>
            <hr className='mx-8 m-2'></hr>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/profile/likes'>
                <span className='flex items-center ml-2 text-base'><AiFillHeart /></span>
                <span className='w-full'>
                    علاقه مندی های من
                </span>
            </Link>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/profile/collections'>
                <span className='flex items-center ml-2 text-base'><FaFolderPlus /></span>
                <span className='w-full'>
                    مجموعه های من
                </span>
            </Link>
            <hr className='mx-8 m-2'></hr>
            <div onClick={darkModeHandler} className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm cursor-pointer'>
                <span className='w-full'>
                    حالت شب
                </span>
                <div className="flex justify-center">
                    <div className="form-check form-switch">
                        <input onChange={darkModeHandler} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={darkMode} />
                    </div>
                </div>
            </div>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='w-full'>
                    تنظیمات حساب
                </span>
            </Link>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='w-full'>
                    خروج از سیستم
                </span>
            </Link>
        </div>
    )
}

export default ProfileSubMenu;