import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [presetWind3()],
  shortcuts: {
    navbar: 'sticky bg-gray-800 top-0',
    'navbar-div': 'flex flex-row items-center justify-between px-3 py-2',
    'navbar-items':
      'hidden text-white text-xl px-3 py-2 flex-row items-center justify-between lg:flex',
    'dropdown-icon': 'text-gray-500 hover:text-white',
    'dropdown-items':
      'absolute z-10 pb-3 pt-2 text-white bg-gray-800 w-full font-semibold font-mono lg:hidden',
    'dropdown-nav-items':
      'cursor-pointer mt-1 block font-semibold px-2 rounded hover:bg-gray-700 sm:text-lg',
    'part-set':
      'mx-auto h-full flex flex-col justify-center items-center text-center',
    'part-container': 'flex flex-col justify-center flex-grow-5',
    'part-title':
      'text-xl font-bold mt-3 mb-6 border-4 rounded-lg py-1 px-2 sm:py-2 sm:px-3 sm:text-2xl',
    'table-head': 'px-4 py-2 font-bold border border-gray-500 lg:text-lg',
  },
})
