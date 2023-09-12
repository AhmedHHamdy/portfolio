import Header from '../components/Header'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { createContext, useState } from 'react'
import '../App.css'

const DarkModeContext = createContext()

function HomePage() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
      setDarkMode(previousValues => !previousValues)
      console.log(darkMode)
  }

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      <>
        <Header />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </>
    </DarkModeContext.Provider>
  )
}

export default HomePage
export { DarkModeContext }