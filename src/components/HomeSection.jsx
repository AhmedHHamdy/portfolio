import { useState, useEffect } from 'react'
import React from 'react';
import Typed from 'typed.js'
import ahmedhamdy from "../assets/ahmedhamdy.jpg"
import ahmedhamdyWithoutBg from "../assets/ahmedhamdyWithoutBg.png"
import '../App.css'


export default function HomeSection() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Fullstack Software Engineer'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,

        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy()
        }
    }, [])


  
  return (
    <main>
      <section className='homeContainer'>
        <h1>Hi 👋, I'm <br></br>  Ahmed Hamdy</h1>
        <h3><span className='homeContainer-job' ref={el} /></h3>
        <p>"I have a passion for designing and love to create for web, committed to a lifetime of finding solutions, and learning new things. I strive to bring joy to those around me and live with passion."</p>
        <a className='contactMeButton' href="#">Connect With Me <i class="fa-solid fa-paper-plane"></i></a>
      </section>

      <section className='homeImgContainer'>
        <img src={ahmedhamdyWithoutBg} alt="personal-image" />
      </section>

      <a href="#" className='scrollDownButton'><div className="scroll-down"></div></a>
    </main>
  )
}