import NavItem from './navItem'

const DropdownItems = ({
  items,
  onLanguageChange,
  lang,
  isOpen,
  toggleDropdown,
}) => {
  const navItems = items[lang]

  function fixClass(classes) {
    classes += isOpen ? ' block' : ' hidden'
    classes += lang === 'fa' ? ' dir-rtl' : ''
    return classes
  }

  return (
    <>
      <div className={fixClass('dropdown-items')}>
        {Object.keys(navItems).map((item) => (
          <NavItem key={item} to={item} itemName={navItems[item]} />
        ))}
        <i className="block mt-2 mx-auto rounded-full bg-gray-900 w-95% h-2px" />
        <div className="dropdown-nav-items mt-2">
          <button
            onClick={onLanguageChange}
            className="font-semibold cursor-pointer focus:outline-none sm:text-lg text-white"
          >
            {lang === 'en' ? 'Change Language' : 'عوض کردن زبان'}
          </button>
        </div>
      </div>
      {isOpen && (
        <button
          onClick={toggleDropdown}
          tabIndex="-1"
          className="fixed inset-0 p-0 w-full h-full cursor-default"
        ></button>
      )}
    </>
  )
}

export default DropdownItems
