import React from "react";
// react-router-dom
import {Link} from 'react-router-dom'
//
import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/solid'
//react-icons
import { IoIosArrowDown } from "react-icons/io";

const NavbarMobile = ({ menu, navbarContent }) => {
  return (
    <div className={menu ? "slidingNavbar" : "slidingNavbar -right-[1000px]"}>
      <ul className="flex w-full flex-col items-center">
      <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-color-main-3 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
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
