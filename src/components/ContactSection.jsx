import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'

export default function ContactSection() {
  const notify = () => toast("Message Sent");

  const form = useRef();

  async function sendEmail(e) {
    e.preventDefault()
    try {
      await emailjs.sendForm('service_ypxcyww', 'template_q6xzxce', form.current, 'qZrVeT9nInjm361MU')
      e.target.reset()
      // notify()
      // alert("message successfully sent");
    } catch (error) {
      console.log(error);
      e.target.reset()
    }
  }

  return (
    <section  className='ContactSectionContainer' data-aos="fade-up">
      <h2 id="contact">Contact Me</h2>

      <section  className='contactInfo'>
        <div>
          <p>My goal is to provide responsive and accessible websites to small businesses and individuals around me. Whether you are looking for a new website, or updating an existing website for the mobile age, I can help. Providing a location where interested parties can learn about you is what I offer. How can I help you today?</p>
          <div className='emailContainer'>
              <i className="fa-regular fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <span>Thisisahmedhamdy@gmail.com</span>
              </div>
          </div>
        </div>

        <div className='contactForm'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Name' />
            <input type="email" name='email' placeholder='Email' />
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button onClick={notify}>Send Message <i className="fa-regular fa-message"></i></button>
          </form>
        </div>
      </section>

      <footer>
        <h3>Ahmed Hamdy</h3>
        <span>Software Engineer</span>

        <ul>
          <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href=""><i className="fa-brands fa-github"></i></a></li>
          <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
        </ul>

        <small>© Ahmed Hamdy | All rights reserved | {new Date(Date.now()).getFullYear()}</small>
      </footer>
    </section>
  ) 
}