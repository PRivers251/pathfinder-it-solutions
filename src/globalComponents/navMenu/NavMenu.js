"use client"

import {useState, useEffect} from 'react'
import './NavMenu.css'

export default function NavMenu() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (

    <nav className='navMenu'>
        <div className="navMenu">
            <a href="/" className="navMenuItem">Home</a>
            <a href="/about" className="navMenuItem">About</a>
            <a href="/services" className="navMenuItem">Services</a>
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} id="menu-toggle" className={`hamburgerMenu ${isOpen ? "open" : ""}`} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        
        <div className={`${isOpen ? 'visible' : 'hide'} mobileNavMenu`}>
          <a href="/" className="mobileNavItem">Home</a>
          <a href="/about" className="mobileNavItem">About</a>
          <a href="/services" className="mobileNavItem">Services</a>
        </div>
        
    </nav>
    )
}