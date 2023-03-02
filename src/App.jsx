import { useState } from 'react'
import SnowStorm from 'react-snowstorm'

import Navbar from './components/navbar/navbar.jsx'
import Introduction from './components/introduction/introduction.jsx'
import About from './components/about/about.jsx'
import Skill from './components/skills/skill.jsx'
import Footer from './components/footer/footer'

function App() {
  const navItems = {
    en: {
      intro: 'Intro',
      about: 'About',
      skills: 'Skills',
    },
    fa: { intro: 'مقدمه', about: 'درباره‌ من', skills: 'مهارت‌ها' },
  }

  const [lang, setLang] = useState('en')
  const [isOpen, setIsOpen] = useState(false)

  function handleLanguage() {
    setLang(lang === 'en' ? 'fa' : 'en')
  }

  function handleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar
        onLanguageChange={handleLanguage}
        lang={lang}
        isOpen={isOpen}
        toggleDropdown={handleDropdown}
        items={navItems}
      />
      <SnowStorm followMouse={true} />
      <Introduction lang={lang} />
      <About lang={lang} />
      <Skill lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default App
