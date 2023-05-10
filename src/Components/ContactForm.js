import React from 'react'
import { useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3edc8u', 'template_00oxg9s', form.current, 'jDd1i8aP_dNxx_tQ_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className='contact'>
    <form ref={form} onSubmit={sendEmail}>
    <h2>Contact Me</h2>
      <div className='pun'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" placeholder='Enter your FullName' required/>
      </div>
      <div className='pun'>
        <label htmlFor="email">Email:</label>
        <input name="user_email" placeholder='Eg. example@gmail.com' required/>
      </div>
      <div className='pun'>
        <label htmlFor="message">Message:</label>
        <textarea name='message' maxlength="3000" placeholder='Please enter your comments..'/>
      </div>
      <button type="submit">Send Message</button>
    </form>
    </div>
  )
}

export default ContactForm