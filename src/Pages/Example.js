import React, { useState } from 'react';

function ImageSlider() {
  const [counter, setCounter] = useState(0);

  const handleNext = () => {
    if (counter < 2) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const handlePrev = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(2);
    }
  };

  return (
    <div className="slider">
      <div className="slider-container" style={{ transform: `translateX(-${counter * 100}%)` }}>
        <div className="slider-item">
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div className="slider-item">
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div className="slider-item">
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </div>
      <div className="slider-controls">
        <button className="prev-btn" onClick={handlePrev}>&#10094;</button>
        <button className="next-btn" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
}

export default ImageSlider;
