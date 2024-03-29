function Line({ text }) {
  return (
    <p className="text-white font-semibold py-1 sm:py-2 sm:text-lg | lg:py-3 lg:text-xl">
      <svg className="mx-2 fill-gray-100 h-30px" viewBox="0 0 600 512">
        <path d="M235.65 320.47l83.28 6.63 189 -189c24.76,-24.77 24.76,-65.29 0,-90.05l0 0c-24.76,-24.76 -65.28,-24.76 -90.05,0l-189 189 6.77 83.42zm32.48 -32.53l37.47 2.99 177.58 -177.58c11.1,-11.1 11.1,-29.45 0,-40.55 -11.1,-11.1 -29.45,-11.1 -40.55,0l-177.55 177.55 3.05 37.59z" />
        <path d="M163.23 37.25l156.78 0c9.67,0 17.5,7.83 17.5,17.5 0,9.66 -7.83,17.5 -17.5,17.5l0 0 -156.78 0c-25.85,0 -47,21.15 -47,47l0 273.5c0,25.85 21.15,47 47,47l273.5 0c25.85,0 47,-21.15 47,-47l0 -154.63 0.04 0c0,-9.67 7.84,-17.5 17.5,-17.5 9.67,0 17.5,7.83 17.5,17.5 0,0.4 -0.01,0.79 -0.04,1.18l0 153.45c0,45.1 -36.9,82 -82,82l-273.5 0c-45.1,0 -82,-36.9 -82,-82l0 -273.5c0,-45.1 36.9,-82 82,-82z" />
      </svg>
      {text}
    </p>
  )
}

export default Line
