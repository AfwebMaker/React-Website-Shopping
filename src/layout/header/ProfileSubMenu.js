import React from 'react'
import { Link } from 'react-router-dom';

const ProfileSubMenu = () => {
    return (
        <div className="h-[484px] w-[270px] bg-white absolute left-1 rounded-lg top-20 shadow-subMenu py-8">
            <div className="h-[18px] w-[18px] bg-white absolute left-1/2 top-[-2px] translate-x-[-50%] rotate-45"></div>

            <Link className='w-full flex hover:bg-slate-900 px-8 py-2' to='/'>
                <span className='w-full'>
                    پروفایل
                </span>
            </Link>

            <hr className='mx-8 m-2'></hr>
            <span className='w-full flex px-8 py-2'>تغییر پروفایل</span>
            <hr className='mx-8 m-2'></hr>
            <span className='w-full flex px-8 py-2'>مجموعه ها</span>
            <span className='w-full flex px-8 py-2'>پسند شده ها</span>
            <hr className='mx-8 m-2'></hr>
            <span className='w-full flex px-8 py-2'>تنظیمات اکانت</span>
            <span className='w-full flex px-8 py-2'>خروج</span>
        </div>
    )
}

export default ProfileSubMenu;