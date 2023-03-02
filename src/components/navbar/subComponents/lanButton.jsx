const LanButton = ({ lang, onLanguageChange }) => {
  function generateClasses(isActive) {
    return isActive ? 'font-semibold text-lg' : 'text-gray-400'
  }

  return (
    <div className="hidden lg:block">
      <button
        onClick={onLanguageChange}
        className="p-1 text-white border-none cursor-pointer"
      >
        <span className={generateClasses(lang === 'en')}>Eng </span>/
        <span className={'fa-font ' + generateClasses(lang === 'fa')}> فا</span>
      </button>
    </div>
  )
}

export default LanButton
