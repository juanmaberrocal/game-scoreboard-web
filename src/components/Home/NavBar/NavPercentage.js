import React from "react";

const NavPercentage = (props) => {
  
  return (
    <div className="
      flex flex-col items-center
      w-1/5 md:w-4/6
      h-12 md:h-auto
      m-2 p-1 md:m-4 md:p-3
      rounded-full md:rounded
      bg-gray-900
      text-center md:text-left
    ">
      <div className="text-sm hidden md:flex w-full">Win Percentage</div>
      <div className="flew-grow my-auto text-white">
        57.69%
      </div>
    </div>
  );
};

export default NavPercentage;
