import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <div className='navbar-item' >
          <p>Home</p>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <div className='navbar-item' >
          <p>About Me</p>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <div className='navbar-item' >
          <p>Projects</p>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <div className='navbar-item' >
          <p>Contact</p>
        </div>
      </Link>
    </div>
    </>
  )
}

export default Navbar
