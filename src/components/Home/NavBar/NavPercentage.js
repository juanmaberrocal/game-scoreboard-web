import React from "react";

const NavPercentage = (props) => {
  
  return (
    <div className="
      flex flex-col items-center md:items-start
      w-1/5 md:w-4/6
      md:h-auto
      m-2 py-1 px-2 md:m-4 md:p-3
      rounded-full md:rounded
      bg-gray-900
      text-center md:text-left
    ">
      <div className="text-sm hidden md:flex w-full">Win Percentage</div>
      <div className="my-auto text-gray-200">
        57.69%
      </div>
    </div>
  );
};

export default NavPercentage;
