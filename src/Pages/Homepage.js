import React from 'react'
import Aos from 'aos';
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import './Menuicon.css';
import ContactForm from '../Components/ContactForm';
import { Link } from "react-router-dom";
const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); 

  const handleClick = () => {
    setIsOpen(!isOpen);
    setMenuVisible(!menuVisible);
  };

  return (
    <>
    <div className='homepage'>
    <div className='home' id='home'>
      <div className='navbar'>
        <div className='logo'>PORTFOLIO</div>
        <div className='iconbox'>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={handleClick}>
          <div className={`bar ${isOpen ? 'remove' : ''}`}></div>
          <div className={`bar ${isOpen ? 'rotate-up' : ''}`}></div>
          <div className={`bar ${isOpen ? 'rotate-down' : ''}`}></div>
        </div>
        </div>
        <div className='menu' id='hide'>
          <a href='#home'>Home</a>
          <a href='#about'>About Me</a>
          <a href='#contact'>Contact</a>
        </div>

      </div>
      {menuVisible && 
        <div className='menu'>
          <a href='#home'>Home</a>
          <a href='#about'>About Me</a>
          <a href='#contact'>Contact</a>
        </div>
      }
      <div className='line'><hr></hr></div>

      <div className='home'>
        <div data-aos="fade-down" className="sidebar">
      <a href="https://instagram.com/abhi_ram_sree_?igshid=Y2M0YTlkZGNmOQ=="><FaInstagram/></a>
      <a href="https://wa.me/7306049487"><IoLogoWhatsapp/></a>
      <a href="https://github.com/abhiramkrishnansree"><AiFillGithub/></a>
      <a href="https://www.linkedin.com/in/abhiram-krishnan-r-s-240b33205/"><IoLogoLinkedin/></a>
    </div>
        <div data-aos="fade-up" className='title'>
          <h1>Hi there,I am <br></br><span>Abhiram Krishnan</span></h1>
          <h2>Designer and Devoloper</h2>
          <div className='clicks'>
          <a href="https://docs.google.com/document/d/1OHExg8dQ9O3mIYRmwQ6jI12ZvVkKZLHSEBpYr-Yvep4/edit?usp=sharing" className='don' download><button >My CV</button>
</a>
            <Link to="/Projects" className='nona'><button  >Projects<FiArrowUpRight className='icon' size={30} color='white'/></button></Link>
          </div>
        </div>
      </div>
    </div>
      <section id='about'>
        <div data-aos="fade-up" className='photo'><img src='owner.jpg'/></div>
        <div  className='details'>
          <h1 data-aos="fade-up" >Hello!</h1>
          <div  className='back'></div>
          <p data-aos="fade-up">My name is <span className='highlight'>Abhiram Krishnan</span> and I am currently an 
          engineering undergraduate studying at <span className='highlight'><a href='https://tkmce.ac.in/'> TKM College of Engineering</a></span> under 
          <span className='highlight' ><a href="https://www.ktu.edu.in/">Kerala Technical University</a></span>.
           From a young age, I have always been interested in designing and have acquired several skills in this 
           field. Along with designing, I am also passionate about developing apps and websites, and I always make
            sure to prioritize security while doing so.
<br></br><br></br>
Over the years, I have worked on several projects using different programming languages such as Python,
 ReactJS, Java, and JavaScript. Additionally, I run my own freelance graphic 
 design company called <span className='highlight'><a href="https://www.instagram.com/finelyblend/">Finelyblend</a></span>,
  where I offer a range of creative services.
<br></br><br></br>
Apart from technology and design, I am also an artist who finds happiness in social work. 
I have been an <span className='highlight'><a href="http://nsskerala.org/"> NSS </a></span> 
volunteer for the last 5 years and am always looking for opportunities to make a difference in my community.
<br></br><br></br>
Ultimately, my goal is to utilize my knowledge of technology to create a sustainable environment for the future.</p>
            <h3 className='skill-head' data-aos="fade-up">Skills</h3>
            <div data-aos="fade-up" className='skills'>
              <div className='skill-box'>React Js</div>
              <div className='skill-box'>Python</div>
              <div className='skill-box'>C/C++</div>
              <div className='skill-box'>Photoshop</div>
              <div className='skill-box'>Figma</div>
              <div className='skill-box'>Django</div>
              <div className='skill-box'>Illustrator</div>
              <div className='skill-box'>Javascript</div>
              <div className='skill-box'>Flutter</div>
              <div className='skill-box'>Designing</div>
            </div>
        </div>
      </section>
    </div>
    <div id='contact'><ContactForm/></div> 
    </>
  )
}

export default Homepage