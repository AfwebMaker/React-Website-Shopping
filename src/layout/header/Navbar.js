import React, { useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// react icons
import { BsFillBagFill } from "react-icons/bs";
//component
import NavbarMobile from "./NavbarMobile";
import ProfileSubMenu from "./ProfileSubMenu";
import Hamburger from "./Hamburger";

const navbarContent = [
  {
    id: 1,
    title: "فروشگاه",
  },
  {
    id: 2,
    title: "مــارکت",
  },
  {
    id: 3,
    title: "استخدام طراحان",
  },
  {
    id: 4,
    title: "قوانین",
  },
  {
    id: 5,
    title: "درباره ما",
  },
];

const Navbar = () => {
  const [signIn] = useState(true);
  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  const clickHandler = () => {
    setHamburgerMenu(!hamburgerMenu)
    // window.scrollTo(0, 0);
  }

  return (
    <div className="w-full border-b-[1px] border-gray-100 h-20 fixed z-[9999]">
      <NavbarMobile menu={hamburgerMenu} navbarContent={navbarContent} signIn={signIn} />
      <div className="max-w-[1536px] mx-auto h-20 bg-color-main-3 flex items-center justify-between px-6 fixed w-full lg:fixed">
        <div className="lg:hidden px-2 py-2 ml-4 cursor-pointer" onClick={clickHandler}>
            <Hamburger isOpen={hamburgerMenu} />  {/*hamburger icon*/}
        </div>
        <nav className="flex items-center">
          <div className="h-full">
            <Link className="h-full ml-0 lg:ml-5 flex" to="">
              <h1 className="text-3xl p-5 font-medium text-color-main-1 transition-all duration-300">
                لــــوگــــو
              </h1>
            </Link>
          </div>
          <ul className="hidden lg:flex items-center lg:transition-all lg:duration-300">
            {navbarContent.map((item) => (
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
            ))}
          </ul>
        </nav>
        {signIn === true ? (
          <ul className="flex items-center h-full">
            <li className="ml-1 flex">
              <Link
                className="flex w-fit h-fit py-2 px-2 rounded-lg"
                to=""
              >
                <BsFillBagFill className="w-5 h-5 text-[#6e6d7a]" />
              </Link>
            </li>
            <li className="ml-1 hidden lg:flex h-full items-center group">
              <Link
                className="flex w-fit h-fit py-2 px-2 rounded-lg"
                to="/profile/shots"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-full w-8"
                  alt="Avatar"
                />
              </Link>
              <div className="hidden group-hover:flex">
                <ProfileSubMenu />
              </div>

            </li>
            <li className="ml-1 pr-2 w-[82px] h-10 hidden lg:flex">
              <Link
                className="flex w-full h-full items-center justify-center py-2 px-3 rounded-lg text-color-main-3 text-sm font-medium bg-color-main-1 transition-all duration-300 hover:bg-opacity-[0.7]"
                to=""
              >
                بارگذاری
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center">
            <li className="ml-1">
              <Link
                className="flex w-fit h-fit py-2 px-3 rounded-lg text-color-Text2 font-normal"
                to="/signin"
              >
                ورود
              </Link>
            </li>
            <li className="ml-1">
              <Link
                className="hidden lg:flex w-fit h-fit py-2 px-3 rounded-lg text-color-main-3 text-sm font-medium bg-color-main-1 transition-all duration-300 hover:bg-opacity-[0.7]"
                to=""
              >
                کار را به اشتراک بگذارید
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
