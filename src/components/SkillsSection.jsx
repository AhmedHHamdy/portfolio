import { useState, useEffect, useContext } from 'react'
import '../App.css'
import { DarkModeContext } from '../Pages/HomePage'

export default function SkillsSection() {
  const [frontendTab, setFrontendTab] = useState(true)
  const [backendTab, setBackendTab] = useState(false)
  const [otherTechTab, setOtherTechTab] = useState(false)
  const [softSkillsTab, setSoftSkillsTab] = useState(false)

  const {darkMode, setDarkMode} = useContext(DarkModeContext)

  function clickHandleFrontendTab() {
    setFrontendTab(previousValue => !previousValue)
  }

  function clickHandleBackendTab() {
    setBackendTab(previousValue => !previousValue)
  }

  function clickHandleOtherTechTab() {
    setOtherTechTab(previousValue => !previousValue)
  }

  function clickHandleSoftSkillsTab() {
    setSoftSkillsTab(previousValue => !previousValue)
  }

  return (
    <section id="skills" className='skillsSectionContainer' data-aos="fade-up">
      <h2>Skills & Tools</h2>
      <section className='skillsContainer'>

        <div className='skillsContainerPartOne' >
                  {/* Skill One */}
          <div className='skillsContent' onClick={clickHandleFrontendTab}>
            <div className='skillsHeader'>
              <i className="fa-solid fa-code"></i>
              <h3>Frontend Development</h3>
              {!frontendTab ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}
            </div>

            {frontendTab && <div className='skillsList'>
              <div className='skillsData'>
                <h3>HTML</h3>
                <span></span>

                <h3>CSS</h3>
                <span></span>

                <h3>JavaScript</h3>
                <span></span>

                <h3>React</h3>
                <span></span>
              </div>
            </div>}

          </div>

          {/* Skill Two */}
          <div className='skillsContent' onClick={clickHandleBackendTab}>
            <div className='skillsHeader'>
                <i className="fa-solid fa-server"></i>
                <h3>Backend Development</h3>
                {!backendTab ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}
            </div>

            {backendTab &&  <div className='skillsList'>
              <div className='skillsData'>
                <h3>Node Js</h3>
                <span></span>

                <h3>Express</h3>
                <span></span>

                <h3>Mongo DB</h3>
                <span></span>
              </div>
            </div>}
          </div>
          
        </div>

        <div className='skillsContainerPartTwo'>
          {/* Skill Three */}
          <div className='skillsContent' onClick={clickHandleOtherTechTab}>
          <div className='skillsHeader'>
              <i className="fa-solid fa-pen-nib"></i>
              <h3>Other Tech Skills</h3>
              {!otherTechTab ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}
            </div>

            {otherTechTab && <div className='skillsList'>
              <div className='skillsData'>
                <h3>Tailwind CSS</h3>
                <span></span>

                <h3>Mongoose</h3>
                <span></span>

                <h3>Postman</h3>
                <span></span>

                <h3>Git</h3>
                <span></span>


              </div>
            </div>}
          </div>

          {/* Skill Four */}
          <div className='skillsContent' onClick={clickHandleSoftSkillsTab}>
          <div className='skillsHeader'>
              <i className="fa-solid fa-gears"></i>
              <h3>Soft Skills</h3>
              {!softSkillsTab ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}
            </div>

            {softSkillsTab && <div className='skillsList'>
              <div className='skillsData'>
                <h3>Project Management</h3>
                <span></span>

                <h3>Problem Solving</h3>
                <span></span>

                <h3>Adaptability</h3>
                <span></span>
              </div>
            </div>}
          </div>
        </div>


      </section>
    </section>
  )
}