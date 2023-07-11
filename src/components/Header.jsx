import { useState, useEffect } from 'react'
import React from 'react';
import Typed from 'typed.js'
import '../App.css'

export default function Header() {

    
    return (
        <header className="header">
            <a className='headerLogoName' href='#'>Ahmed Hamdy</a>
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