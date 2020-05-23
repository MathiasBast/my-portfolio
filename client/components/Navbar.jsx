import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <button className='nav-button'>Home</button>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/aboutMe'>
        <button className='nav-button'>About Me</button>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/projects'>
        <button className='nav-button'>Projects</button>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/contactMe'>
        <button className='nav-button'>Contact</button>
      </Link>
    </div>
    </>
  )
}

export default Navbar
