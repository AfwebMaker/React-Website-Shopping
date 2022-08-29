import React, { useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";
// headlessui
import { Disclosure, Transition } from "@headlessui/react";
//react-icons
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const profileItem = [
  {
    id: 1,
    title: "مشخصات",
  },
  {
    id: 2, 
    title: "ویرایش نمایه",
  },
  {
    id: 3,
    title: "علاقه مندی ها",
  },
  {
    id: 4,
    title: "مجموعه های من",
  },
  {
    id: 5,
    title: "تنظیمات حساب",
  },
  {
    id: 6,
    title: "خروج",
  },
];

const NavbarMobile = ({ menu,signIn ,navbarContent }) => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={menu ? "slidingNavbar" : "slidingNavbar -right-[1000px]" }>
    <div className="overflow-y-scroll w-full px-6 menuScroll">  
      <div className=" form-group relative w-full max-w-3xl">
        <input
          type="text"
          value={value}
          onChange={changeHandler}
          className="flex w-full h-10 pr-10 pl-4 mt-5 py-3 text-sm font-normal placeholder:text-gray-400 rounded-lg bg-color-bg-search-navbar bg-clip-padding transition-all duration-300 caret-color-main-1 outline-none emailHelp123ase-in-out m-0 focus:ring-4 focus:ring-color-light-main-1 border focus:text-gray-600 focus:bg-color-main-3 focus:border-color-main-1"
          aria-describedby="emailHelp123"
          placeholder="جستجو"
        />
        <FiSearch className="absolute top-[10px] right-4 w-5 h-5 text-gray-400" />
      </div>
      <ul className="flex w-full flex-col items-center">
        <div className="w-full px-0 pt-10">
          <div className="mx-auto w-full max-w-3xl rounded-lg bg-color-main-3 ">
            {navbarContent.map((item) => (
              <Disclosure key={item.id} as="div" className="mb-5 rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between rounded-lg bg-color-main-3 border border-color-main-1 px-4 py-3 text-left text-sm font-medium text-color-Text2 hover:ring-4 hover:ring-color-main-1/[.30] transition-all duration-200">
                      <span>{item.title}</span>
                      <IoIosArrowDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-color-main-1 transition-all duration-300`}
                      />
                    </Disclosure.Button>

                    <Transition
                      show={open}
                      enter="transition duration-250 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                        No.
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </ul>
      {signIn && 
      <>
        <hr className="w-full my-5" />
      <div className="mt-10 w-full">
        <div className="text-center cursor-pointer">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 className="text-xl font-medium leading-tight mb-2">سید میثاق حمزه زاده موسوی</h5>
          <p className="text-gray-500">برنامه نویس وب</p>
        </div>
        <div className="grid grid-cols-12 my-10 border border-color-main-1 hover:ring-4 hover:ring-color-light-main-1 rounded-lg p-5 max-w-3xl m-auto transition-all duration-300">
          {profileItem.map((item) => (
            <span className="w-full col-span-12 sm:col-span-6 px-8 sm:px-16 py-1">
              <Link
                key={item.id}
                to="/"
                className={
                  item.title === "خروج"
                    ? " rounded-lg flex items-center justify-center w-full text-red-500  hover:bg-red-100 py-2 px-4 text-sm transition-all duration-200"
                    : " rounded-lg flex items-center justify-center w-full text-color-Text2 hover:text-color-Text3 hover:bg-color-dark-main-2 px-4 py-2 text-sm transition-all duration-200"
                }
              >
                {item.title}
              </Link>
            </span>
          ))}
        </div>
      </div>
      </>
      }
    </div>  
    </div>
  );
};

// className=" rounded-lg flex items-center justify-center w-full text-color-Text2 hover:text-color-Text3 hover:bg-color-dark-main-2  py-2 text-sm"

export default NavbarMobile;
