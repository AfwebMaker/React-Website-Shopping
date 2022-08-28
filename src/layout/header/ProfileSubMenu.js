import React from 'react'
//react roter-dom
import { Link } from 'react-router-dom';
//react icons
import { AiFillHeart } from 'react-icons/ai'
import { FaFolderPlus } from 'react-icons/fa'

const ProfileSubMenu = () => {
    return (
        <div className="h-auto hidden w-[270px] bg-color-main-3 absolute left-1 rounded-lg top-[90%] shadow-subMenu py-8 lg:block">
            <div className="h-[18px] w-[18px] bg-white absolute left-1/2 top-[-2px] translate-x-[-50%] rotate-45"></div>

            <Link className='w-full text-color-Text2 hover:text-color-Text3 flex hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='w-full'>
                    پروفایل
                </span>
            </Link>
            <hr className='mx-8 m-2'></hr>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='w-full'>
                    ادیت پروفایل
                </span>
            </Link>
            <hr className='mx-8 m-2'></hr>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='flex items-center ml-2 text-base'><AiFillHeart /></span>
                <span className='w-full'>
                    پسند شدها
                </span>
            </Link>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='flex items-center ml-2 text-base'><FaFolderPlus /></span>
                <span className='w-full'>
                    مجموعه ها
                </span>
            </Link>
            <hr className='mx-8 m-2'></hr>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='w-full'>
                    حالت شب
                </span>
            </Link>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='w-full'>
                    تنظیمات اکانت
                </span>
            </Link>
            <Link className='w-full flex text-color-Text2 hover:text-color-Text3 hover:bg-color-light-main-2 px-8 py-2 text-sm' to='/'>
                <span className='w-full'>
                    خروج
                </span>
            </Link>
        </div>
    )
}

export default ProfileSubMenu;