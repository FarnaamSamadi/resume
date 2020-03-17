import React from "react";
import { Link } from "react-scroll";
import iconFinder from "../icons/icons";

const DownButton = ({ to, color }) => {
  return (
    <div className="flex-grow">
      <Link to={to} spy={true} smooth={true} offset={-30} duration={300}>
        {iconFinder("down-arrow", 40, color)}
      </Link>
    </div>
  );
};

export default DownButton;
