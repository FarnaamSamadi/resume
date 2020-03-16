import React from "react";
import Logo from "./subComponents/logo";
import Items from "./subComponents/items";
import LanButton from "./subComponents/lanButton";
import DropdownButton from "./subComponents/dropdownButton";
import DropdownItems from "./subComponents/dropdownItems";

const Navbar = ({ onLanguageChange, lan, isOpen, toggleDropdown, items }) => {
  return (
    <header className="navbar">
      <div className="navbar-div">
        <Logo />
        <Items lan={lan} items={items} />
        <LanButton onLanguageChange={onLanguageChange} lan={lan} />
        <DropdownButton toggleDropdown={toggleDropdown} isOpen={isOpen} />
      </div>
      <DropdownItems
        items={items}
        onLanguageChange={onLanguageChange}
        toggleDropdown={toggleDropdown}
        isOpen={isOpen}
        lan={lan}
      />
    </header>
  );
};

export default Navbar;
