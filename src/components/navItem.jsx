import React from "react";
import { Link } from "react-scroll";

const NavItem = ({ to, itemName }) => {
  const navItemClasses = [
    "cursor-pointer",
    "mt-1",
    "block",
    "font-semibold",
    "px-2",
    "rounded",
    "hover:bg-gray-700"
  ];

  return (
    <div className={navItemClasses.join(" ")}>
      <Link to={to} spy={true} smooth={true} offset={-30} duration={400}>
        {itemName}
      </Link>
    </div>
  );
};

export default NavItem;
