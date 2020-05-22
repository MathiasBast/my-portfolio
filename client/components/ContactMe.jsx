import React from 'react'

const ContactMe = () => {
  return (
    <>
      <div className='home-div' >
        <h1>Mathias Sebastian Bast</h1>
        <h2>Contact Me</h2>
      </div>
      <div className='home-me' >
        <img className='contact-logos' src='/images/GitHub.png' />
        <a href='https://github.com/MathiasBast' ><p>GitHub</p></a>
        <img className='contact-logos' src='/images/Linkedin.png' />
        <a href='https://www.linkedin.com/in/mathias-bast-5682341aa/' ><p>LinkedIn</p></a>
        <img className='contact-logos' src='/images/Email.png' />
        <a href='mailto: mathiasbast123@gmail.com' ><p>Email Me</p></a><p> or mathiasbast123@gmail.com</p>
        <p>Phone Number: 021 138 0545</p>
      </div>
    </>
  )
}

export default ContactMe
