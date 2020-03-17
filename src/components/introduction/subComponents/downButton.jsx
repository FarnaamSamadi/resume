import React from "react";
import { Link } from "react-scroll";
import iconFinder from "../../icons/icons";

const DownButton = ({ to }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Link to={to} spy={true} smooth={true} offset={-30} duration={300}>
        {iconFinder("down-arrow", 40, "#333")}
      </Link>
    </div>
  );
};

export default DownButton;
