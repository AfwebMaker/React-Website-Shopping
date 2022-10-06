import React, { useState } from "react";
//components
import  ListboxTime from './ListboxTime';
import ListboxDownload from "./ListboxDownload";
//react icons
import { HiOutlineFilter } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";


const FilterItems = () => {
  const [valueSearch, setValueSearch] = useState("");
  const [valueColor, setValueColor] = useState("");

  const changeHandler = (e) => {
    setValueSearch(e.target.value);
  };

  return (
    <>
      <div className="text-left col-span-4 mb-5">
        <p className="md:space-x-1 space-y-1 md:space-y-0 ">
          <button
            className=" relative pr-9 pl-5 py-2 h-full rounded-lg border border-color-light-main-2 text-color-Text1 font-medium text-sm leading- uppercase shadow-md hover:ring-4 hover:ring-color-light-main-1 hover:shadow-lg hover:border hover:border-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:border focus:border-color-main-1 outline-none focus:shadow-lg focus:outline-none ease-in-out transition-all duration-300"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <HiOutlineFilter className="absolute right-3 top-2.5 text-base text-color-Text1" />
            فیلتر
          </button>
        </p>
      </div>
      <div
        className="collapse col-span-12 border border-color-light-main-2 rounded-lg"
        id="collapseExample"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-x-5 px-3 py-8 lg:p-6 rounded-lg shadow-lg bg-white ">
          <div className="col-span-1 flex flex-col justify-center relative">
            <h1 className="text-color-Text3 font-semibold">برچسب ها</h1>
            <input
              type="text"
              value={valueSearch}
              onChange={changeHandler}
              className="rounded-lg outline-none border-0 bg-color-Text4 h-10 mt-2 py-2 pr-11 pl-4 caret-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:border focus:border-color-main-1 focus:bg-white hover:ring-4 hover:ring-color-light-main-1 hover:border hover:border-color-main-1 hover:bg-white transition-all duration-300"
            />
            <BiSearch className="absolute top-[42px] right-3 text-xl text-color-Text2" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-color-Text3 font-semibold">رنگ</h1>
            <div className="flex items-center mt-2 relative">
              <input
                type="text"
                value={valueColor}
                onChange={(e) => {setValueColor(e.target.value)}}
                placeholder="######"
                className="w-full rounded-lg outline-none border-0 bg-color-Text4 h-10  py-2 pr-11 pl-4 caret-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:border focus:border-color-main-1 focus:bg-white hover:ring-4 hover:ring-color-light-main-1 hover:border hover:border-color-main-1 hover:bg-white transition-all duration-300"
              />
              <input
                type="color"
                value={valueColor}
                onChange={(e) => {setValueColor(e.target.value)}}
                className="w-8 h-8 border-0 rounded-full p-0 overflow-hidden absolute top-1 right-1 cursor-pointer shadow-[2px 2px 5px rgba(0,0,0,.1)]"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-color-Text3 font-semibold">دوره زمانی</h1>
            <ListboxTime/>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-color-Text3 font-semibold">دانلود ها</h1>
            <ListboxDownload/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterItems;
