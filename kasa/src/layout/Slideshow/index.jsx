import { React, useState } from "react";
import left from "../../assets/vector-left.svg";
import right from "../../assets/vector-right.svg";

function Slideshow(props) {
  // État local pour suivre l'indice de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour afficher l'image précédente dans le slideshow
  function imgPrecedent() {
    if (currentSlide === 0) {
      // Si on est sur la première diapositive, passer à la dernière
      setCurrentSlide(props.slides.length - 1);
    } else {
      // Sinon, afficher la diapositive précédente
      setCurrentSlide(currentSlide - 1);
    }
  }

  // Fonction pour afficher l'image suivante dans le slideshow
  function imgSuivant() {
    if (currentSlide === props.slides.length - 1) {
      // Si on est sur la dernière diapositive, passer à la première
      setCurrentSlide(0);
    } else {
      // Sinon, afficher la diapositive suivante
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className="slideshow">
      {/* Affichage des images du slideshow */}
      <div className="slideshow__pictures">
        {props.slides.map((picture, index) => (
          // Afficher l'image actuelle avec des classes pour l'animation
          index === currentSlide && (
            <img
              className={`slideshow__pictures__img ${
                index === currentSlide ? "slide-in" : "slide-out"
              }`}
              alt="banniere-page-logement"
              src={picture}
              key={index}
            />
          )
        ))}
      </div>
      {/* Affichage des contrôles et de l'indice si plusieurs images */}
      {props.slides.length > 1 && (
        <>
          {/* Contrôles pour passer à l'image précédente ou suivante */}
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
          {/* Affichage de l'indice de la diapositive actuelle */}
          <div className="slideshow__index">
            {currentSlide + 1}/{props.slides.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
