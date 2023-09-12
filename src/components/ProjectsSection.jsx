import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useContext } from 'react';
import { DarkModeContext } from '../Pages/HomePage';

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
              <img src="" alt="" />
            </div>

            <h3>Hair & Co BKLYN</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="#">Git Repo. <i className="fa-brands fa-github"></i></a>
            <a href="#">Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>

          <div>
            <div className='img-container'>
              <img src="" alt="" />
            </div>

            <h3>Hair & Co BKLYN</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="#">Git Repo. <i className="fa-brands fa-github"></i></a>
            <a href="#">Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>

          <div>
            <div className='img-container'>
              <img src="" alt="" />
            </div>

            <h3>Hair & Co BKLYN</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type. </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="#">Git Repo. <i className="fa-brands fa-github"></i></a>
            <a href="#">Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>

          <div>
            <div className='img-container'>
              <img src="" alt="" />
            </div>
            <h3>Hair & Co BKLYN</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="#">Git Repo. <i className="fa-brands fa-github"></i></a>
            <a href="#">Deployed <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
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