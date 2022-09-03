import React, { useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
//icons
// import { AiOutlineLeft } from 'react-icons/ai';
// import { AiOutlineRight } from 'react-icons/ai';

const Profile = () => {
  const nav = useRef(null);
  const contain = useRef(null);
  // const [widthContain, setWidthContain] = useState(0);
  // const [isScrollActive, setIsScrollActive] = useState(0);

  // useEffect(() => {
  //   setWidthContain(contain.current.offsetWidth);
  //   if (widthContain <= nav.current.offsetWidth) {
  //     setIsScrollActive(true)
  //   } else {
  //     setIsScrollActive(false)
  //   }
  // }, [widthContain, isScrollActive])

  // const navScrollHandler = (direction) => {
  //   if (direction === 'right') {
  //     nav.current.scrollTo(0, 0)
  //   } else {
  //     nav.current.scrollTo(-nav.current.offsetWidth, 0)
  //   }
  // }

  return (
    <div className='max-w-[1536px] w-full px-5 md:px-8 lg:px-20'>
      <div className='w-full flex flex-col md:flex-row justify-start md:justify-center py-10'>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-full mb-10 w-20 h-20 md:w-28 md:h-28 md:mb-0"
          alt="Avatar"
        />
        <div className='flex flex-col md:mr-5 justify-center'>
          <span className='mb-2 font-extrabold text-2xl md:text-3xl'>سید میثاق حمزه زاده موسوی</span>
          <div>
            <button className='h-10 border-[1px] border-color-dark-main-2 text-sm rounded-lg w-28 ml-2'>ویرایش نمایه</button>
            <button className='h-10 border-[1px] border-color-dark-main-2 text-sm rounded-lg w-24'>تنظیمات</button>
          </div>
        </div>
      </div>
      <div>
        <div ref={contain} className='w-full flex relative items-center h-full'>

          <span className='flex items-center absolute right-0 bg-white h-full'>
            {/* <AiOutlineRight /> */}
          </span>
          <span className='flex items-center absolute left-0 bg-white h-full'>
            {/* <AiOutlineLeft /> */}
          </span>
          <ul ref={nav} className='flex text-color-Text2 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth'>
            <li className='p-6 pr-0'>
              <NavLink to='/profile/shots' className={({ isActive }) =>
                isActive ? "text-black" : ""
              }>
                آثار
                <span className='align-middle mr-1'>0</span>
              </NavLink>
            </li>
            <li className='p-6 pr-0'>
              <NavLink to='/profile/likes' className={({ isActive }) =>
                isActive ? "text-black" : ""
              }>
                علاقه مندی ها
                <span className='align-middle mr-1'>0</span>
              </NavLink>
            </li>
            <li className='p-6 pr-0'>
              <NavLink to='/profile/collections' className={({ isActive }) =>
                isActive ? "text-black" : ""
              }>
                مجموعه ها
                <span className='align-middle mr-1'>0</span>
              </NavLink>
            </li>
            <li className='p-6 pr-0'>
              <NavLink to='/profile/about' className={({ isActive }) =>
                isActive ? "text-black" : ""
              }>
                درباره من
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className='my-10'>
        <Outlet />
      </div>
    </div >
  )
}

export default Profile;