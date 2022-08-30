import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='max-w-[1536px] w-full px-[75px]'>
      <div className='w-full flex justify-center py-10'>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-full w-20 h-20"
          alt="Avatar"
        />
        <div className='flex flex-col mr-5 justify-center'>
          <span className='mb-2 font-extrabold text-2xl'>سید میثاق حمزه زاده موسوی</span>
          <div>
            <button className='h-10 border-[1px] border-color-dark-main-2 text-sm rounded-lg w-28 ml-2'>ویرایش نمایه</button>
            <button className='h-10 border-[1px] border-color-dark-main-2 text-sm rounded-lg w-24'>تنظیمات</button>
          </div>
        </div>
      </div>
      <div>
        <ul className='flex text-color-Text2'>
          <li className='p-6 pr-0'>
            <NavLink to='/profile/shots' className={({isActive}) =>
              isActive ? "text-black" : ""
            }>
              آثار
            </NavLink>
          </li>
          <li className='p-6 pr-0'>
            <NavLink to='/profile/likes' className={({isActive}) =>
              isActive ? "text-black" : ""
            }>
              علاقه مندی ها
            </NavLink>
          </li>
          <li className='p-6 pr-0'>
            <NavLink to='/profile/collections' className={({isActive}) =>
              isActive ? "text-black" : ""
            }>
              مجموعه ها
            </NavLink>
          </li>
          <li className='p-6 pr-0'>
            <NavLink to='/profile/about' className={({isActive}) =>
              isActive ? "text-black" : ""
            }>
              درباره من
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div >
  )
}

export default Profile;