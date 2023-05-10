import React from 'react'
import './ContactForm.css';
const ContactForm = () => {
  return (
    <div className='contact'>
    <form>
    <h2>Contact Me</h2>
      <div className='pun'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter your Name'/>
      </div>
      <div className='pun'>
        <label htmlFor="email">Email:</label>
        <input placeholder='Eg. example@gmail.com'/>
      </div>
      <div className='pun'>
        <label htmlFor="message">Message:</label>
        <textarea maxlength="3000" placeholder='Please enter your comments..'/>
      </div>
      <button type="submit">Send Message</button>
    </form>
    </div>
  )
}

export default ContactForm