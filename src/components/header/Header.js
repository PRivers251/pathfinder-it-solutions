'use client'
import './Header.css'
import {useState} from 'react';

export default function Header() {
    
    const [isClicked, setIsClicked] = useState(false);
    
    return (
        <header className='header-container'>
            <logo className='logo-container'>
                <img src='images/pathfinder-logo-1.png' />
            </logo>

            <div className='mobile-nav-menu-button-container'>
                <div className='mobile-nav-menu-button'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>    
            </div>

            <menu className='main-site-nav-menu'>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>

                    <li>
                        <a href='#'>Services</a>
                    </li>
                </ul>
            </menu>

        </header>
    )
}