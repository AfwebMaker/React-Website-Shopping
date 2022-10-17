import React from "react";
//react router dom
import { Link, useLocation, Outlet } from "react-router-dom";
//react-icons
import { BsChevronBarExpand } from 'react-icons/bs';


const dataSidebar = [
  {
    id: 1,
    title: "عمومی",
    url: "/account/general",
  },
  {
    id: 2,
    title: "ویرایش نمایه",
    url: "/account/profile",
  },
  {
    id: 3,
    title: "کلمه عبور",
    url: "/account/password",
  },
  {
    id: 4,
    title: "پروفایل های اجتماعی",
    url: "/account/social_profiles",
  },
  {
    id: 5,
    title: "اعلان های ایمیل",
    url: "/account/notifications",
  },
  {
    id: 6,
    title: "جلسات",
    url: "/account/sessions",
  },
  {
    id: 7,
    title: "برنامه های کاربردی",
    url: "/account/applications",
  },
  {
    id: 8,
    title: "صادرات داده",
    url: "/account/export",
  },
];

const Account = () => {
  const location = useLocation().pathname;
  
  
  return (
    <div className="p-5 sm:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full py-8  grid grid-cols-12">
        <div className="col-span-12 mb-14 flex items-center">
          <div className="flex items-center justify-center">
            <Link to="/profile">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-full w-16 hover:opacity-75 transition-all duration-300 an"
                alt="Avatar"
              />
            </Link>
          </div>
          <div className="mr-2 sm:mr-5">
            <div className="flex">
              <Link
                to="/profile"
                className="mb-1 sm:mb-0 text-base sm:text-xl font-bold flex text-color-Text3 hover:opacity-75 transition-all duration-300"
              >
                سیدمیثاق حمزه زاده موسوی
              </Link>
              <span className="hidden sm:flex sm:text-2xl font-bold text-color-dark-main-2 mx-2">
                /
              </span>
              <span className="hidden text-base sm:text-xl sm:flex font-bold text-color-Text3">
                {location === "/account/general" && "عمومی"}
                {location === "/account/profile" && "ویرایش نمایه"}
                {location === "/account/password" && "کلمه عبور"}
                {location === "/account/social_profiles" &&
                  "پروفایل های اجتماعی"}
                {location === "/account/notifications" && "اعلان های ایمیل"}
                {location === "/account/sessions" && "جلسات"}
                {location === "/account/applications" && "برنامه های کاربردی"}
                {location === "/account/export" && "صادرات داده"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-color-Text2">
              نام کاربری خود را به روز کنید و حساب خود را مدیریت کنید
            </p>
          </div>
        </div>
        {/*  */}
        <div className="col-span-12 flex justify-center mb-10 lg:hidden">
          <div className="w-full">
            <div className="w-full dropdown relative">
              <Link className="flex sm:text-base text-sm items-center justify-center bg-red-100 mb-5 w-full py-2 text-red-500 rounded-lg" to="/account/destroy_confirm">
                حذف حساب کاربردی
              </Link>
              <button
                className="  border border-color-light-main-2 w-full relative flex items-center justify-between cursor-pointer rounded-lg bg-white py-2 px-5 text-right shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus:ring-4 hover:ring-4 hover:ring-color-light-main-1 hover:border hover:border-color-main-1 focus:border focus:border-color-main-1 focus:ring-color-light-main-1 transition-all duration-300 outline-none "
                type="button"
                id="dropdownMenuButton1d"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {location === "/account/general" && "عمومی"}
                {location === "/account/profile" && "ویرایش نمایه"}
                {location === "/account/password" && "کلمه عبور"}
                {location === "/account/social_profiles" &&
                  "پروفایل های اجتماعی"}
                {location === "/account/notifications" && "اعلان های ایمیل"}
                {location === "/account/sessions" && "جلسات"}
                {location === "/account/applications" && "برنامه های کاربردی"}
                {location === "/account/export" && "صادرات داده"}
                <BsChevronBarExpand className="mr-5"/>
              </button>
              <ul
                className=" dropdown-menu absolute bg-white z-50 py-5 px-2 w-full text-sm list-none rounded-lg shadow-lg mt-3 hidden border-none"
                aria-labelledby="dropdownMenuButton1d"
              >
                {dataSidebar.map((item) => (
              <li
                key={item.id}
                className={
                  location === item.url
                    ? "text-color-Text3 font-bold hover:text-color-Text3"
                    : "text-color-Text2 hover:text-color-Text3"
                }
              >
                <Link to={item.url} className="flex w-full py-2">
                  {item.title}
                </Link>
              </li>
            ))}
              </ul>
              
            </div>
          </div>
        </div>
        {/*  */}

        <div className="col-span-3 text-sm hidden lg:flex">
          <ul className="px-2">
            {dataSidebar.map((item) => (
              <li
                key={item.id}
                className={
                  location === item.url
                    ? "text-color-Text3 font-bold hover:text-color-Text3"
                    : "text-color-Text2 hover:text-color-Text3"
                }
              >
                <Link to={item.url} className="flex w-full py-2">
                  {item.title}
                </Link>
              </li>
            ))}
            <hr className="my-3" />
            <li className="text-red-500 rounded-lg">
              <Link className="flex w-full py-2" to="/account/destroy_confirm">
                حذف حساب کاربردی
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Account;
