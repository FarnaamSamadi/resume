import styles from './dropdownButton.module.scss'

const DropdownButton = ({ toggleDropdown, isOpen }) => {
  return (
    <div className="px-3 py-2 lg:hidden" onClick={toggleDropdown}>
      <svg
        className={`${styles.svg} ${isOpen && styles.open}`}
        viewBox="0 0 100 100"
        fill="black"
      >
        <rect width="80" height="10" x="10" y="25" rx="5"></rect>
        <rect width="80" height="10" x="10" y="45" rx="5"></rect>
        <rect width="80" height="10" x="10" y="65" rx="5"></rect>
      </svg>
    </div>
  )
}

export default DropdownButton
