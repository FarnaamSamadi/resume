import React from "react";
import NavItem from "./navItem";

const Navbar = ({ onLanguageChange, lan }) => {
  const items = {
    en: {
      intro: "Intro",
      about: "About",
      skills: "Skills"
    },
    fa: { intro: "مقدمه", about: "درباره‌ من", skills: "مهارت‌ها" }
  };

  function lanActiveClass(language) {
    return lan === language ? "font-semibold text-lg" : "text-gray-400";
  }

  const navItems = items[lan];

  return (
    <div className="sticky text-white bg-gray-800 flex flex-row justify-between w-full top-0">
      <div className="flex flex-row justify-start">
        {Object.keys(navItems).map(item => (
          <NavItem key={item} to={item} itemName={navItems[item]} />
        ))}
      </div>
      <div className="flex flex-row justify-end">
        <button onClick={onLanguageChange} className="p-1 focus:outline-none">
          <span className={lanActiveClass("en")}>Eng </span>/
          <span className={lanActiveClass("fa")}> فا</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
