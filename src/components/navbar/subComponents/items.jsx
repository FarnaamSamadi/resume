import React from 'react'
import NavItem from './navItem'

const Items = ({ items, lang }) => {
  const navItems = items[lang]

  return (
    <div className={lang === 'fa' ? 'navbar-items dir-rtl' : 'navbar-items'}>
      {Object.keys(navItems).map((item) => (
        <NavItem key={item} to={item} itemName={navItems[item]} />
      ))}
    </div>
  )
}

export default Items
