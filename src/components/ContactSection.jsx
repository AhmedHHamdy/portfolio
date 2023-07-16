import { useState, useEffect } from 'react'
import '../App.css'

export default function ContactSection() {
  return (
    <section className='ContactSectionContainer'>
      <h2>Contact Me</h2>

      <section className='contactInfo'>
        <div>
          <p>My name is Ahmed Hamdy. I am a Full-Stack Software Engineer specializing in the MERN stack. I have a passion for designing and love to create for web, committed to a lifetime of finding solutions, and learning new things. I strive to bring joy to those around me and live with passion. I know how to create your website to run across devices using the latest technologies available. My goals are to focus on typography, content and conveying the message that you want to send.</p>
          <div className='emailContainer'>
              <i class="fa-regular fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <span>Thisisahmedhamdy@gmail.com</span>
              </div>
          </div>
        </div>

        <div className='contactForm'>
          <form action="">
            <input type="text" name='name' placeholder='Name' />
            <input type="email" name='name' placeholder='Email' />
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button>Send Message <i class="fa-regular fa-message"></i></button>
          </form>
        </div>
      </section>

      <footer>
        <h3>Ahmed Hamdy</h3>
        <span>Software Engineer</span>

        <ul>
          <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a href=""><i class="fa-brands fa-github"></i></a></li>
          <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
        </ul>

        <small>© Ahmed Hamdy | All rights reserved | {new Date(Date.now()).getFullYear()}</small>
      </footer>
    </section>
  ) 
}