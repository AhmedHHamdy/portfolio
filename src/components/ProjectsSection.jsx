import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useContext } from 'react';
import { DarkModeContext } from '../Pages/HomePage';
import lmarBeautyGif from "../assets/lmarBeautyGif.gif"
import listifyGif from "../assets/listfyGif.gif"
import ayeshaGif from "../assets/ayeshaGif.gif"
import stickyNotesGif from "../assets/stickyNoteGif.gif"
import passwordManagerGIf from "../assets/passwordManagerGIf.gif"
import backeryGif from "../assets/backeryGif.gif"


import '../App.css'

export default function ProjectsSection() {

  const { darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1501 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1500, min: 1325 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1324, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  AOS.init();
  return (
    <section  className='projectsSectionContainer' data-aos="fade-up">
      <h2 id="projects">Projects</h2>
      {/* <section className='projectsContainer'> */}
        <Carousel className={`projectsContainerCarousel ${darkMode ? "darkModeCarousel" : ""} `} responsive={responsive}>
        <div>
            <div className='img-container'>
              <img src={backeryGif} alt="cupcaked e-shop gif" />
            </div>

            <h3>Cupcaked (WIP)</h3>
            <p>E-Commerce business for selling custom homemade cupcakes.</p>
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Passport</li>
            </ul>
            <div className='project-links'>
              <a href="https://github.com/AhmedHHamdy/cupcaked">Git Repo. <i className="fa-brands fa-github"></i></a>
              {/* <a href="#projects" style={{backgroundColor: '#252525'}}>Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a> */}
            </div>
          </div>

          <div>
            <div className='img-container'>
              <img src={lmarBeautyGif} alt="lmarBeauty clinic gif" />
            </div>

            <h3>Lmar Beauty Clinic & Academy</h3>
            <p>Lmar Clinic is a laser, skin care & cosmetic clinic that provides safe laser hair removal, cosmetic injections & skin treatments.</p>
            <ul>
              <li>HTML</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
            <div className='project-links'>
              <a href="https://github.com/AhmedHHamdy/LmarBeauty">Git Repo. <i className="fa-brands fa-github"></i></a>
              <a href="https://lmarbeauty.cyclic.app/">Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

        <div>
            <div className='img-container'>
              <img src={stickyNotesGif} alt="sticky notes gif" />
            </div>

            <h3>Sticky Notes</h3>
            <p>Sticky Notes is an easy-to-use application that allows you to write notes.</p>
            <ul>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Passport</li>
            </ul>
            <div className='project-links'>
              <a href="https://github.com/Hack-Weekly/fire-kangaroo-sticky-notes">Git Repo. <i className="fa-brands fa-github"></i></a>
              {/* <a href="#projects" style={{backgroundColor: '#252525'}}>Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a> */}
            </div>
          </div>

          <div>
            <div className='img-container'>
              <img src={listifyGif} alt="listify gif" />
            </div>

            <h3>Todo List App</h3>
            <p>A full stack app that is designed to be a simple todo list. Minimal and bloat-free.</p>
            <ul>
              <li>HTML</li>
              <li>Node</li>
              <li>EJS</li>
              <li>MongoDB</li>
              <li>Tailwind</li>
              <li>Passport</li>
            </ul>
            <div className='project-links'>
              <a href="https://github.com/AhmedHHamdy/todo-list-app">Git Repo. <i className="fa-brands fa-github"></i></a>
              <a href="https://listify-todolist-app.cyclic.cloud/">Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>



          <div>
            <div className='img-container'>
              <img src={ayeshaGif} alt="ayesha hair saloon gif" />
            </div>
            <h3>Ayesha</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <div className='project-links'>
              <a href="https://github.com/AhmedHHamdy/ayesha-hair-saloon">Git Repo. <i className="fa-brands fa-github"></i></a>
              <a href="https://ayeshasaloon.netlify.app/">Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <div>
            <div className='img-container'>
              <img src={passwordManagerGIf} alt="password manager app gif" />
            </div>
            <h3>Password Manager</h3>
            <p>A full-stack app that enables users to generate passwords with customizable password generation.</p>
            <ul>
              <li>React</li>
              <li>Tailwind</li>
              <li>Node</li>
              <li>MongoDB</li>
            </ul>
            <div className='project-links'>
              <a href="https://github.com/AhmedHHamdy/Authenticator-With-A-Password-Generator">Git Repo. <i className="fa-brands fa-github"></i></a>
              <a href="#projects" style={{backgroundColor: '#252525'}}>Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>


          
          <div>
            <div className='img-container'>
              <img src="https://camo.githubusercontent.com/f79d927732725cfdca5c2270f3736194198c0a95c6ed200fc9ce0fd8d8e074b7/68747470733a2f2f692e6962622e636f2f364e77334452742f657a6769662d636f6d2d766964656f2d746f2d6769662d322e676966" alt="tic tac toe game gif" />
            </div>
            <h3>Tic-Tac-Toe 🎲</h3>
            <p>A web-based Tic-Tac-Toe game with an AI opponent, The game allows the user to play against AI.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className='project-links'>
              <a href="https://github.com/AhmedHHamdy/Tic-Tac-Toe">Git Repo. <i className="fa-brands fa-github"></i></a>
              <a href="https://tictactoeappgame.netlify.app/">Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          

        </Carousel>

      <h3 className='statistics-heading'>My Github Statistics</h3>
      <div className='aboutSectionData'>
        <img src="https://github-readme-stats.vercel.app/api?username=ahmedhhamdy&theme=onedark" alt="Github Stats" />
        <img className='used-lang-img' src="https://github-readme-stats.vercel.app/api/top-langs/?username=ahmedhhamdy&theme=onedark&layout=compact" alt="Github Stats" />
        <img src="https://github-readme-streak-stats.herokuapp.com?user=ahmedhhamdy&theme=onedark" alt="Github Stats" />
      </div>
        
      {/* </section> */}
    </section>


  )
}