import React from 'react'
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
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
        <div className='title'>
          <h1>Hi there,I am <br></br><span>Abhiram Krishnan</span></h1>
          <h2>Designer and Devoloper</h2>
          <div className='clicks'>
          <a href="path/to/your/file.pdf" className='don' download><button>My CV</button>
</a>
            <Link to="/Projects" className='nona'><button  >Projects<FiArrowUpRight className='icon' size={30} color='black'/></button></Link>
          </div>
        </div>
      </div>
    </div>
      <section id='about'>
        <div className='photo'><img src='owner.jpg'/></div>
        <div className='details'>
          <h1>About Me</h1>
          <div className='back'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere ex nec lorem pellentesque el
            ementum. Morbi eu lectus blandit, luctus enim quis, interdum elit. Nunc ac erat ac ante gravida malesuada. 
            Sed eu felis enim. Nulla facilisi. Nam vitae lacus auctor, tincidunt felis vel, fermentum nulla. <br></br>Integer euismod o
            dio at bibendum pharetra. Vivamus non odio ex. Duis interdum elit se
            d justo ullamcorper, in hendrerit felis sodales. Integer suscipit est vel dui blandit cursus. Nulla facil</p>
            <h3>Skills</h3>
            <div className='skills'>
              <div className='skill-box'>React Js</div>
              <div className='skill-box'>Python</div>
              <div className='skill-box'>C/C++</div>
              <div className='skill-box'>Photoshop</div>
              <div className='skill-box'>Figma</div>
              <div className='skill-box'>Django</div>
              <div className='skill-box'>React Native</div>
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