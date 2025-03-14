import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutSection />} />
        <Route path='/skills' element={<SkillsSection />} />
        <Route path='/projects' element={<ProjectsSection />} />
        <Route path='/contact' element={<ContactSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
