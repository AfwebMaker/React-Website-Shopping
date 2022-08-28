import React, { useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// react icons
import { FiSearch, FiMenu } from "react-icons/fi";
import { IoMdClose} from "react-icons/io";
import { BsFillBagDashFill } from "react-icons/bs";
//component
import NavbarMobile from "./NavbarMobile";
import ProfileSubMenu from "./ProfileSubMenu";

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
  const [hambergerMenu, setHambergerMenu] = useState(false)
  const [valeu, setValeu] = useState("");

  const changeHandler = (event) => {
    setValeu(event.target.valeu);
  };

 const clickHandler = () => {
  setHambergerMenu(!hambergerMenu)
    window.scrollTo(0, 0);
 }

  return (
    <div className="w-full relative">
      <NavbarMobile menu={hambergerMenu} navbarContent={navbarContent} />
      <div className="max-w-[1536px] mx-auto h-20 bg-color-main-3 flex items-center justify-between px-6 fixed w-full lg:static">
        <div className="lg:hidden px-2 py-2 ml-4 cursor-pointer" onClick={clickHandler}>
          {
            hambergerMenu ? <IoMdClose className="w-5 h-5 text-color-Text2 transition-all duration-300" /> : <FiMenu className="w-5 h-5 text-color-Text2 transition-all duration-300" />
          }
          
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
            <li className="ml-1 hidden lg:flex items-center justify-center">
              <div className=" form-group relative px-2">
                <input
                  type="text"
                  value={valeu}
                  onChange={changeHandler}
                  className="flex w-32 h-10 pr-8 pl-4 py-3 text-sm font-normal placeholder:text-gray-400 rounded-lg bg-color-bg-search-navbar bg-clip-padding transition-all duration-300 caret-color-green outline-none emailHelp123ase-in-out m-0 focus:ring-4 focus:ring-color-light-main-1 focus:border focus:text-gray-600 focus:bg-color-main-3 focus:border-color-green"
                  aria-describedby="emailHelp123"
                  placeholder="جستجو"
                />
                <FiSearch className="absolute top-[10px] right-4 w-5 h-5 text-gray-400" />
              </div>
            </li>
            <li className="ml-1 flex">
              <Link
                className="flex w-fit h-fit py-2 px-2 rounded-lg"
                to=""
              >
                <BsFillBagDashFill className="w-5 h-5 text-[#6e6d7a]" />
              </Link>
            </li>
            <li className="ml-1 lg:flex h-full flex items-center">
              <Link
                className="flex w-fit h-fit py-2 px-2 rounded-lg"
                to=""
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-full w-8"
                  alt="Avatar"
                />
              </Link>
              <ProfileSubMenu />
            </li>
            <li className="ml-1 pr-2 w-[78] h-10 hidden lg:flex">
              <Link
                className="flex w-full h-full items-center justify-center py-2 px-3 rounded-lg text-color-main-3 text-sm font-medium bg-color-green transition-all duration-300 hover:bg-opacity-[0.7]"
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
                className="hidden lg:flex w-fit h-fit py-2 px-3 rounded-lg"
                to=""
              >
                <FiSearch className="w-5 h-5 text-color-Text2" />
              </Link>
            </li>
            <li className="ml-1">
              <Link
                className="flex w-fit h-fit py-2 px-3 rounded-lg text-color-Text2 font-normal"
                to=""
              >
                ورود
              </Link>
            </li>
            <li className="ml-1">
              <Link
                className="hidden lg:flex w-fit h-fit py-2 px-3 rounded-lg text-color-main-3 text-sm font-medium bg-color-green transition-all duration-300 hover:bg-opacity-[0.7]"
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
