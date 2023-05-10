import React from 'react'
import { FaInstagram, FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="box">
      <div className="footer-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="mailto:example@example.com"><FaEnvelope /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
      <div className="footer-text">
        <p><span>Designed and Developed by Abhiram Krishnan</span><br></br>Copyright © 2023 All rights reserved</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer