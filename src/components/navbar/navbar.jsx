import React from 'react'
import Logo from './subComponents/logo'
import Items from './subComponents/items'
import LanButton from './subComponents/lanButton'
import DropdownButton from './subComponents/dropdownButton'
import DropdownItems from './subComponents/dropdownItems'

const Navbar = ({ onLanguageChange, lang, isOpen, toggleDropdown, items }) => {
  return (
    <header className="navbar">
      <div className="navbar-div">
        <Logo />
        <Items lang={lang} items={items} />
        <LanButton onLanguageChange={onLanguageChange} lang={lang} />
        <DropdownButton toggleDropdown={toggleDropdown} isOpen={isOpen} />
      </div>
      <DropdownItems
        items={items}
        onLanguageChange={onLanguageChange}
        toggleDropdown={toggleDropdown}
        isOpen={isOpen}
        lang={lang}
      />
    </header>
  )
}

export default Navbar
