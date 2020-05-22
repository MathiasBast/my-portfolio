import React from 'react'

const ContactMe = () => {
  return (
    <>
      <div className='home-div' >
        <h1>Mathias Sebastian Bast</h1>
        <h2>Contact Me</h2>
      </div>
      <div className='home-me' >
        <div className='contact-container' >
          <a href='https://github.com/MathiasBast' >
            <div className='contact-item' >
              <img className='contact-logos' src='/images/GitHub.png' />
              <p>GitHub</p>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/mathias-bast-5682341aa/' >
            <div className='contact-item' >
              <img className='contact-logos' src='/images/Linkedin.png' />
              <p>LinkedIn</p>
            </div>
          </a>
          <div className='contact-item' >
            <img className='contact-logos' src='/images/Email.png' />
            <a href='mailto: mathiasbast123@gmail.com' ><p>Email Me</p></a><p className='contact-info' >mathiasbast123@gmail.com</p>
          </div>
          <div className='contact-item' >
            <img className='contact-logos' src='/images/Phone.png' />
            <p style={{ fontWeight: 'bold' }} >Phone Number:</p>
            <p> 021 138 0545</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe
