import React from "react";

const FilterItems = () => {
  return (
    <>
    <div className="text-left col-span-6 mb-5">
      <p className="md:space-x-1 space-y-1 md:space-y-0 ">
        <button
          className="px-6 py-2.5 h-full rounded-lg border border-color-light-main-2 text-color-Text3 font-medium text-xs leading- uppercase shadow-md hover:ring-4 hover:ring-color-light-main-1 hover:shadow-lg focus:ring-4 focus:ring-color-light-main-1 focus:shadow-lg focus:outline-none transition duration-150 ease-in-out"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          فیلتر
        </button>
      </p>
      
    </div>
    <div className="collapse col-span-12 border border-color-light-main-2 rounded-lg" id="collapseExample">
        <div className="block p-6 rounded-lg shadow-lg bg-white">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      </>

  );
};

export default FilterItems;
