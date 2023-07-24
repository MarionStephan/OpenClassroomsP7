import {React, useState} from "react";
import left from "../../assets/vector-left.svg";
import right from "../../assets/vector-right.svg";



function Slideshow(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function imgPrecedent() {
    if (currentSlide === 0) {
      setCurrentSlide(props.slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function imgSuivant() {
    if (currentSlide === props.slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className="slideshow">
      <div className="slideshow__pictures">
        {props.slides.map((picture, index) => (
          index === currentSlide &&(
            <img
            className={`slideshow__pictures__img ${index === currentSlide ? "current-slide" : ""}`}
            alt="banniere-page-logement"
            src={picture}
            key={index}
          />)
        ))}
      </div>
      {props.slides.length > 1 && (
        <>
          <div className="slideshow__control">
            <img
              src={left}
              alt="chevron"
              className="slideshow__control__arrow"
              onClick={imgPrecedent}
            />
            <img
              src={right}
              className="slideshow__control__arrow"
              alt=""
              onClick={imgSuivant}
            />
          </div>
          <div className="slideshow__index">
            {currentSlide + 1}/{props.slides.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;