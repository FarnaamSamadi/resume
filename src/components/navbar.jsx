import React from "react";
import { Link } from "react-scroll";

const Navbar = props => {
  return (
    <div className="sticky text-white bg-gray-800 flex flex-row justify-between w-full top-0">
      <div className="flex flex-row justify-start">
        <div className="p-1 cursor-pointer">
          <Link to="intro" spy={true} smooth={true} offset={-30} duration={400}>
            Intro
          </Link>
        </div>
        <div className="p-1 cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={-30} duration={400}>
            About
          </Link>
        </div>
        <div className="p-1 cursor-pointer">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-30}
            duration={400}
          >
            Skills
          </Link>
        </div>
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
