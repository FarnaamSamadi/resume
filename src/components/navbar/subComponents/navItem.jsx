import React from "react";
import { Link } from "react-scroll";

const NavItem = ({ to, itemName }) => {
  return (
    <div className="dropdown-nav-items">
      <Link to={to} spy={true} smooth={true} offset={-30} duration={400}>
        {itemName}
      </Link>
    </div>
  );
};

export default NavItem;
