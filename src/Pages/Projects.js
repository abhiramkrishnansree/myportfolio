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
    if (counter1 < 2) {
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
            <h2>Projects</h2>
        </div>
        <div className='view'>


          <div className='card'>
            <div className='top'>BloodLink:Community for Donors</div>
            <div className='sub'>
              <div className=''>
                12/3/20
              </div>
              <div className=''>
                KraftNight Hackthon
              </div>
            </div>
            <div className="slider">
              <div className="slider-container" style={{ transform: `translateX(-${counter1 * 33.3}%)` }}>
              <div className="slider-item">
              <img src="three.jpg" alt="Image 1" />
              </div>
              <div className="slider-item">
              <img src="four.jpg" alt="Image 2" />
              </div>
              <div className="slider-item">
               <img src="two.jpg" alt="Image 3" />
                </div>
                </div>
               <div className="slider-controls">
              <button className="prev-btn" onClick={handlePrev1}>&#10094;</button>
              <button className="next-btn" onClick={handleNext1}>&#10095;</button>
               </div>
           </div>
            <div className='descript'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchangedLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            </div>
            <div className='navigate'>
              <div className='github'>Github</div>
              <div className='promo'>Promo</div>
            </div>
          </div>


          <div className='card'>
            <div className='top'>BloodLink:Community for Donors</div>
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
              <img src="three.jpg" alt="Image 1" />
              </div>
              <div className="slider-item">
               <img src="two.jpg" alt="Image 2" />
                </div>
                <div className="slider-item">
               <img src="two.jpg" alt="Image 2" />
                </div>
                </div>
               <div className="slider-controls">
              <button className="prev-btn" onClick={handlePrev2}>&#10094;</button>
              <button className="next-btn" onClick={handleNext2}>&#10095;</button>
               </div>
           </div>
            <div className='descript'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchangedLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            </div>
            <div className='navigate'>
              <div className='github'>Github</div>
              <div className='promo'>Promo</div>
            </div>
          </div>


          <div className='card'>
            <div className='top'>BloodLink:Community for Donors</div>
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
              <img src="three.jpg" alt="Image 1" />
              </div>
              <div className="slider-item">
               <img src="two.jpg" alt="Image 2" />
                </div>
                <div className="slider-item">
               <img src="two.jpg" alt="Image 2" />
                </div>
                </div>
               <div className="slider-controls">
              <button className="prev-btn" onClick={handlePrev3}>&#10094;</button>
              <button className="next-btn" onClick={handleNext3}>&#10095;</button>
               </div>
           </div>
            <div className='descript'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchangedLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            </div>
            <div className='navigate'>
              <div className='github'>Github</div>
              <div className='promo'>Promo</div>
            </div>
          </div>


          <div className='card'>
            <div className='top'>BloodLink:Community for Donors</div>
            <div className='sub'>
              <div className=''>
                12/3/20
              </div>
              <div className=''>
                TKM College
              </div>
            </div>
            <div className="slider">
              <div className="slider-container" style={{ transform: `translateX(-${counter4 * 33.3}%)` }}>
              <div className="slider-item">
              <img src="three.jpg" alt="Image 1" />
              </div>
              <div className="slider-item">
               <img src="two.jpg" alt="Image 2" />
                </div>
                <div className="slider-item">
               <img src="two.jpg" alt="Image 2" />
                </div>
                </div>
               <div className="slider-controls">
              <button className="prev-btn" onClick={handlePrev4}>&#10094;</button>
              <button className="next-btn" onClick={handleNext4}>&#10095;</button>
               </div>
           </div>
            <div className='descript'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchangedLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
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