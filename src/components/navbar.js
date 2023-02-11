import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoMdContact } from 'react-icons/io'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='Nav-box'>
        <h1 className='logo'>
            Jatin
        </h1>
        <ul className='Nav-list'>
            <li className='nav-item'>
                Home
            </li>
            <li className='nav-item'>
                Porjects
            </li>
            <li className='nav-item'>
                Contact 
            </li>
            <li className='nav-item'>
                Education
            </li>
            <li className='nav-item'>
                Certifications
            </li>
        </ul>
        <HiMenuAlt2 className='icon'/>
        
        
    </div>
  )
}

export default Navbar