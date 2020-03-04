import React from "react";

const Navbar = props => {
  return (
    <div className="sticky text-white bg-gray-800 flex flex-row justify-between w-full top-0">
      <div className="flex flex-row justify-start">
        <a className="p-1" href="#">
          Intro
        </a>
        <a className="p-1" href="#">
          About
        </a>
        <a className="p-1" href="#">
          Skills
        </a>
      </div>
      <div className="flex flex-row justify-end">
        {" "}
        <a className="p-1" href="#">
          Fa
        </a>{" "}
        <a className="p-1" href="#">
          Eng
        </a>{" "}
      </div>
    </div>
  );
};

export default Navbar;
