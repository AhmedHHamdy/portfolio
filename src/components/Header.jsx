import { useState, useEffect } from 'react'
import React from 'react';
import '../App.css'
import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuDropdown from './MenuDropdown';
import MenuItem from './MenuItem';
import { useContext } from 'react';
import { DarkModeContext } from '../Pages/HomePage';

export default function Header() {
    const [activeSection, setActiveSection] = useState('home')

    const { darkMode, toggleDarkMode} = useContext(DarkModeContext)

    useEffect(() => {
        if (!darkMode) {
            document.body.classList.add('darkMode-body')
            document.body.classList.remove('lightMode-body')
        } else {
            document.body.classList.remove('darkMode-body')
            document.body.classList.add('lightMode-body')
        }
    }, [darkMode])


    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const sections = ["Home", "About", "Skills", "Projects", "Contact"]

    const handleScroll = () => {
        const sections = ["home", "about", "skills", "projects", "contact"]

        for (const sectionId of sections) {
            const section = document.getElementById(sectionId)

            if (section) {
                const  rect = section.getBoundingClientRect()
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <header  className={darkMode ? 'header-dark' : 'header'}>
            <a className='headerLogoName' href='#'>AH.</a>
            <nav className="headerNav">
                <ul>
                    <li className={activeSection === 'home' ? darkMode ? 'darkModeActive' : 'active' : ''} onClick={() => scrollToSection('home')}><a >Home</a></li>
                    <li className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}><a >About</a></li>
                    <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}><a >Skills</a></li>
                    <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}><a >Projects</a></li>
                    <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}><a >Contact Me</a></li>
                    {/* <li onClick={toggleDarkMode}><i className={darkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i></li> */}
                </ul>
            </nav>

            <Menu>
                <MenuButton>&#9776;</MenuButton>
                <MenuDropdown>
                    {sections.map(section => (
                        <MenuItem key={section} linkTo={section.toLocaleLowerCase()}>{section}</MenuItem>
                    ))}
                </MenuDropdown>
            </Menu>

        </header>
    )
}