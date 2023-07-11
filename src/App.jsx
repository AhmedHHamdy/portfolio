import { useState } from 'react'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
    </>
  )
}

export default App
