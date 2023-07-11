import { useState, useEffect } from 'react'
import '../App.css'

export default function AboutSection() {
  return (
    <section className='aboutSectionContainer'>
      <h2>About Me</h2>
      <p>My name is Ahmed Hamdy. I am a Full-Stack Software Engineer specializing in the MERN stack. I have a passion for designing and love to create for web, committed to a lifetime of finding solutions, and learning new things. I strive to bring joy to those around me and live with passion. I know how to create your website to run across devices using the latest technologies available. My goals are to focus on typography, content and conveying the message that you want to send.</p>
      <div className='aboutSectionData'>
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
      </div>
    </section>

  )
}