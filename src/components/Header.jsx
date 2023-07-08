import { useState, useEffect } from 'react'
import React from 'react';
import Typed from 'typed.js'
import '../App.css'

export default function Header() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Ahmed Hamdy', 'Ahmed Hamdy'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,

        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy()
        }
    }, [])

    
    return (
        <header className="header">
            <span className='headerLogoName' ref={el} />
            <nav className="headerNav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact Me</a></li>
                    <li><i className="fa-solid fa-moon"></i></li>
                </ul>
            </nav>

        </header>
    )
}