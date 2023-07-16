import { useState, useEffect } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css'

export default function ProjectsSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className='projectsSectionContainer'>
      <h2>Projects</h2>
      {/* <section className='projectsContainer'> */}
        <Carousel className='projectsContainerCarousel' responsive={responsive}>
        <div>
            <h3>Hair & Co BKLYN</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="#">Git Repo. <i class="fa-brands fa-github"></i></a>
            <a href="#">Deployed <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>

          <div>
            <h3>Hair & Co BKLYN</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="#">Git Repo. <i class="fa-brands fa-github"></i></a>
            <a href="#">Deployed <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>

          <div>
            <h3>Hair & Co BKLYN</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type. </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="#">Git Repo. <i class="fa-brands fa-github"></i></a>
            <a href="#">Deployed <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>

          <div>
            <h3>Hair & Co BKLYN</h3>
            <p>Hair salons in Brooklyn specializes in unique hair color, cuts and designs for every hair type.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a href="#">Git Repo. <i class="fa-brands fa-github"></i></a>
            <a href="#">Deployed <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          

        </Carousel>
        
      {/* </section> */}
    </section>


  )
}