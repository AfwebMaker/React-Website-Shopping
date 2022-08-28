import React, { useState } from "react";
// react-router-dom
// import {Link} from 'react-router-dom'

// headlessui
import { Disclosure, Transition } from "@headlessui/react";
//react-icons
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const NavbarMobile = ({ menu, navbarContent }) => {

  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value)
  };

  return (
    <div className={menu ? "slidingNavbar" : "slidingNavbar -right-[1000px]"}>
        <div className=" form-group relative px-2 w-full">
                <input
                  type="text"
                  value={value}
                  onChange={changeHandler}
                  className="flex w-full h-10 pr-10 pl-4 py-3 text-sm font-normal placeholder:text-gray-400 rounded-lg bg-color-bg-search-navbar bg-clip-padding transition-all duration-300 caret-color-main-1 outline-none emailHelp123ase-in-out m-0 focus:ring-4 focus:ring-color-light-main-1 border focus:text-gray-600 focus:bg-color-main-3 focus:border-color-main-1"
                  aria-describedby="emailHelp123"
                  placeholder="جستجو"
                />
                <FiSearch className="absolute top-[10px] right-5 w-5 h-5 text-gray-400" />
        </div>
      <ul className="flex w-full flex-col items-center">
        <div className="w-full px-0 pt-16">
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
        {/* {navbarContent.map((item) => (
          <li
            key={item.id}
            className="text-sm font-medium text-color-Text2 flex items-center ml-1 justify-center rounded-lg overflow-hidden"
          >
            <Link
              to=""
              className="flex items-center justify-center px-4 lg:py-3 text-color-Text1 font-normal w-fit h-fit hover:bg-black hover:bg-opacity-5 transition-all duration-300"
            >
              {item.title}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default NavbarMobile;
