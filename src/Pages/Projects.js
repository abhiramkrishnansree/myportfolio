import React from 'react'
import './Projects.css';
import { useState } from 'react';
const Projects = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const handleNext1 = () => {
    setCounter1((counter1+1));
    if (counter1 < 2) {
      setCounter1(counter1 + 1);
    } else {
      setCounter1(0);
    } // Always increment counter by 1, but loop back to 0 after reaching 1
  };

  const handlePrev1 = () => {
    setCounter1((counter1 - 1)); // Always decrement counter by 1, but loop back to 1 after reaching 0
  };

  const handleNext2 = () => {
    setCounter2((counter2+1));
    if (counter2 < 2) {
      setCounter2(counter2 + 1);
    } else {
      setCounter2(0);
    } // Always increment counter by 1, but loop back to 0 after reaching 1
  };

  const handlePrev2 = () => {
    setCounter2((counter2 - 1)); // Always decrement counter by 1, but loop back to 1 after reaching 0
  };
  const handleNext3 = () => {
    setCounter3((counter3+1));
    if (counter3 < 2) {
      setCounter3(counter3 + 1);
    } else {
      setCounter3(0);
    } // Always increment counter by 1, but loop back to 0 after reaching 1
  };

  const handlePrev3 = () => {
    setCounter3((counter3 - 1)); // Always decrement counter by 1, but loop back to 1 after reaching 0
  };
  const handleNext4 = () => {
    setCounter4((counter4+1));
    if (counter4 < 2) {
      setCounter4(counter4 + 1);
    } else {
      setCounter4(0);
    } // Always increment counter by 1, but loop back to 0 after reaching 1
  };

  const handlePrev4 = () => {
    setCounter4((counter4 - 1)); // Always decrement counter by 1, but loop back to 1 after reaching 0
  };

  return (
    <div className='projects'>
        <div className='header'>
            <h2>My Projects</h2>
        </div>
        <div className='view'>


          <div className='card'>
            <div className='top'>BloodLink:Community for Donors (Health Care)</div>
            <div className='sub'>
              <div className=''>
                28 April 2023
              </div>
              <div className=''>
                KraftNight
              </div>
            </div>
            <div className="slider">
              <div className="slider-container" style={{ transform: `translateX(-${counter1 * 33.3}%)` }}>
              <div className="slider-item">
              <img src="one.jpg" alt="Image 1" />
              </div>
              <div className="slider-item">
              <img src="two.jpg" alt="Image 2" />
              </div>
              <div className="slider-item">
               <img src="three.jpg" alt="Image 3" />
                </div>
                </div>
               <div className="slider-controls">
              <button className="prev-btn" onClick={handlePrev1}>&#10094;</button>
              <button className="next-btn" onClick={handleNext1}>&#10095;</button>
               </div>
           </div>
            <div className='descript'>
              <p>Bloodlink is a revolutionary social community platform that addresses the lack
                 of efficient methods for accessing blood donors quickly in emergency situations.
                  The absence of a reliable network and delays in finding suitable donors can prove
                   to be fatal. Bloodlink aims to provide a more effective and efficient blood donor 
                   community to provide faster access to donors, especially in times of emergencies. 
                   <br></br><br></br>
The platform brings together blood donors and provides them with a smart badge system that certifies
 donors based on the number of donations they have made and a background check of their donation history.
  This system provides an additional level of verification for recipients and recognition for donors.
   The blood donor matching system is efficient and accurate, utilizing location and other details to 
   match donors with the nearest recipient in need while enabling quick communication between them.
    Bloodlink is committed to ensuring that access to blood donors is no longer a challenge during emergency 
    situations and aims to create an efficient and live blood donor community that enables quick access
     to donors in emergency situations.
<br></br><br></br>
In summary, Bloodlink is a game-changer in the field of public health by creating a smart and efficient
 blood donor community. The platform brings together donors and recipients and provides them with a 
 system that ensures fast and effective access to blood donors in times of emergency. Bloodlink provides 
 a much-needed solution to the challenge of finding suitable donors and aims to save lives by providing
  quick access to blood donors in times of need.</p>
            </div>
            <div className='stacks'>
              <h3>Stacks Used</h3>
              <ul>
                <li>React Js</li>
                <li>Django</li>
                <li>OpenStreetMap</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className='navigate'>
              <div className='github'>Github</div>
              <div className='promo'>Promo</div>
            </div>
          </div>


          <div className='card'>
            <div className='top'>Encore:Advanced tech Workshop portal and activity manager(Educational)</div>
            <div className='sub'>
              <div className=''>
                12/3/20
              </div>
              <div className=''>
                TKM College
              </div>
            </div>
            <div className="slider">
              <div className="slider-container" style={{ transform: `translateX(-${counter2 * 33.3}%)` }}>
              <div className="slider-item">
              <img src="four.jpg" alt="Image 1" />
              </div>
              <div className="slider-item">
               <img src="five.jpg" alt="Image 2" />
                </div>
                <div className="slider-item">
               <img src="six.jpg" alt="Image 2" />
                </div>
                </div>
               <div className="slider-controls">
              <button className="prev-btn" onClick={handlePrev2}>&#10094;</button>
              <button className="next-btn" onClick={handleNext2}>&#10095;</button>
               </div>
           </div>
            <div className='descript'>
              <p>Encore is the ultimate solution for students who are looking to advance 
                their skills in the technical sector. This revolutionary workshop portal 
                offers an activity point calculator that helps students keep track of their
                 extra-curricular tech skills. With Encore, students can finally stay up-to-date
                  with their performance and get notified of their progress in real-time.
                  <br></br><br></br>
Encore is more than just a workshop portal. It is an innovative platform that encourages 
and inspires students to pursue their passions and push their boundaries. With the activity
 point calculator, students can see their growth over time and get the recognition they deserve 
 for their hard work. Whether you're a beginner or an expert, Encore provides a level playing field 
 for all students to showcase their technical skills and be recognized for their achievements.
<br></br><br></br>
In summary, Encore is a game-changer in the world of technical education. This application
 provides a unique opportunity for students to track their progress and showcase their skills.
  With its innovative activity point calculator and real-time progress notifications, Encore is
   the perfect platform for students who are looking to advance their skills and make a mark in
    the technical sector.</p>
            </div>
            <div className='navigate'>
              <div className='github'>Github</div>
              <div className='promo'>Promo</div>
            </div>
          </div>


          <div className='card'>
            <div className='top'>The Boat App (UI/UX)</div>
            <div className='sub'>
              <div className=''>
                12/3/20
              </div>
              <div className=''>
                TKM College
              </div>
            </div>
            <div className="slider">
              <div className="slider-container" style={{ transform: `translateX(-${counter3 * 33.3}%)` }}>
              <div className="slider-item">
              <img src="twelve.jpg" alt="Image 1" />
              </div>
              <div className="slider-item">
               <img src="ten.jpg" alt="Image 2" />
                </div>
                <div className="slider-item">
               <img src="post.jpg" alt="Image 2" />
                </div>
                </div>
               <div className="slider-controls">
              <button className="prev-btn" onClick={handlePrev3}>&#10094;</button>
              <button className="next-btn" onClick={handleNext3}>&#10095;</button>
               </div>
           </div>
            <div className='descript'>
              <p>"The Boat" is a revolutionary UI/UX design that is set to transform the boat rental 
                industry. This innovative application ensures that renting a boat is affordable and 
                accessible to everyone, regardless of their location. The Boat is designed with the user 
                in mind, offering a seamless experience that is both user-friendly and intuitive.
                <br></br><br></br>
The design of The Boat is sleek and modern, with an emphasis on functionality and ease of use.
 The interface is simple, yet elegant, providing users with the information they need to rent a boat 
 quickly and efficiently. The application also features a real-time search engine that allows users to 
 find available boats in their area at a feasible rate, making boat rental accessible to all.
 <br></br><br></br>
The Boat's design was recognized for its excellence and innovation by the Computer Society of India 
TKMCE, winning first prize in a design competition. This design is set to revolutionize the boat rental
 industry, making it easier and more affordable for people to enjoy the open water. The Boat's innovative 
 UI/UX design is a testament to its commitment to making boat rental accessible to everyone.</p>
            </div>
            <div className='navigate'>
              <div className='github'>Figma</div>
            </div>
          </div>


          <div className='card'>
            <div className='top'>VoteR:Online voting app (Java)</div>
            <div className='sub'>
              <div className=''>
                00/00/00
              </div>
              <div className=''>
                Location
              </div>
            </div>
            <div className="slider">
              <div className="slider-container" style={{ transform: `translateX(-${counter4 * 33.3}%)` }}>
              <div className="slider-item">
              <img src="vote1.jpg" alt="Image 1" />
              </div>
              <div className="slider-item">
               <img src="vote2.jpg" alt="Image 2" />
                </div>
                <div className="slider-item">
               <img src="voter3.jpg" alt="Image 2" />
                </div>
                </div>
               <div className="slider-controls">
              <button className="prev-btn" onClick={handlePrev4}>&#10094;</button>
              <button className="next-btn" onClick={handleNext4}>&#10095;</button>
               </div>
           </div>
            <div className='descript'>
              <p>VoteR is an online voting system developed in the Java programming language 
                for departmental election purposes. It provides a user-friendly interface for
                 voters to cast their votes securely and efficiently. The system ensures the integrity 
                 of the voting process by authenticating voters and allowing them to vote only once. 
                 It also provides a dashboard for administrators to monitor the voting process and 
                 generate reports for election results. The application is designed to be scalable and
                  can handle a large number of voters and candidates. Overall, VoteR offers a reliable
                   and convenient solution for conducting departmental elections online.</p>
            </div>
            <div className='navigate'>
              <div className='github'>Github</div>
              <div className='promo'>Promo</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects