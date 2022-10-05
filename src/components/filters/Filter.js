
import React from "react";
//components
import FilterItems from "./FilterItems";
import Listbox from "./Listbox";


const Filter = () => {
  return (
    <div className="px-5 md:px-8 lg:px-20">
      <div className="grid grid-cols-12 gap-x-9 mt-10">
        <Listbox/>
        <FilterItems/>
      </div>
    </div>
  );
};

export default Filter;
