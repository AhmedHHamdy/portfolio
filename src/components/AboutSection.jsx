import { useState, useEffect } from 'react'
import '../App.css'

export default function AboutSection() {
  return (
    <section id="about" className='aboutSectionContainer' data-aos="fade-up">
      <h2>About Me</h2>
      <p>As a former Mechatronics engineer turned coding enthusiast, I have always had a passion for coding and bringing projects to life. I find joy in creating art that was once just a passion but has now evolved into more. My journey into coding started with curiosity, beginning as a graphic designer, but it quickly transformed into a full-blown pursuit when I discovered the power and potential of Web Development. Now, I thrive on learning new skills and building projects that showcase my creativity and technical abilities.</p>


      {/* <div className='aboutSectionData'>
        <div>
          <span>1200+</span>
          <span>Hours of Coding</span>
        </div>

        <div>
          <span>500+</span>
          <span>Mini Assignments</span>
        </div>

        <div>
          <span>10+</span>
          <span>Completed Projects</span>
        </div>
      </div> */}
    </section>

  )
}