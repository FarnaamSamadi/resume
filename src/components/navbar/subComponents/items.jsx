import React from "react";
import NavItem from "./navItem";

const Items = ({ items, lan }) => {
  const navItems = items[lan];

  return (
    <div
      className={lan === "fa" ? "navbar-items direction-rtl" : "navbar-items"}
    >
      {Object.keys(navItems).map(item => (
        <NavItem key={item} to={item} itemName={navItems[item]} />
      ))}
    </div>
  );
};

export default Items;
