import React from "react";
import NavItem from "./navItem";

const DropdownItems = ({
  items,
  onLanguageChange,
  lan,
  isOpen,
  toggleDropdown
}) => {
  const navItems = items[lan];
  function fixClass(classes) {
    classes += isOpen ? " block" : " hidden";
    classes += lan === "fa" ? " direction-rtl" : "";
    return classes;
  }

  return (
    <React.Fragment>
      <div className={fixClass("dropdown-items")}>
        {Object.keys(navItems).map(item => (
          <NavItem key={item} to={item} itemName={navItems[item]} />
        ))}
        <hr className="dropdown-hr" />
        <div className="dropdown-nav-items mt-2">
          <button onClick={onLanguageChange} className="dropdown-lan-btn">
            {lan === "en" ? "Change Language" : "عوض کردن زبان"}
          </button>
        </div>
      </div>
      {isOpen && (
        <button
          onClick={toggleDropdown}
          tabIndex="-1"
          className="dropdown-close"
        ></button>
      )}
    </React.Fragment>
  );
};

export default DropdownItems;
