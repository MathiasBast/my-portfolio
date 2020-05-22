import React from 'react'

const Projects = () => {
  return (
    <>
      <div className='home-div' >
        <h1>Mathias Sebastian Bast</h1>
        <h2>My Projects</h2>
      </div>
      <div className='project-container' >
        <a href='https://take-me-nz.herokuapp.com/' style={{ textDecoration: 'none' }} ><div className='project-item' >
          <h2>Take Me</h2>
          <img className='take-me' src='/images/TakeMe.png' />
          <p>Take Me is a group project I did work on. I did do it while I was at EDA and was my final project</p>
        </div></a>
        <div className='project-item' ></div>
        <div className='project-item' ></div>
      </div>
    </>
  )
}

export default Projects
