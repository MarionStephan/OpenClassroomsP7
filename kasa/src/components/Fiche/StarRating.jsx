import React from "react";
import fullStarIconSrc from "../../assets/fullStar.svg";
import emptyStarIconSrc from "../../assets/emptyStar.svg";

function StarRating({ rating }) {
  const maxRating = 5; // Nombre maximal d'étoiles dans la notation
  const fullStars = rating; // Nombre d'étoiles pleines en fonction de la note
  const emptyStars = maxRating - fullStars; // Nombre d'étoiles vides en complément

  return (
    <span className="logement__section__star">
      {/* Afficher les étoiles pleines en fonction de la note */}
      {[...Array(fullStars)].map((_, index) => (
        <img
          key={index}
          src={fullStarIconSrc}
          alt="Full Star"
        />
      ))}
      {/* Afficher les étoiles vides pour compléter jusqu'au maximum */}
      {[...Array(emptyStars)].map((_, index) => (
        <img
          key={index + fullStars}
          src={emptyStarIconSrc}
          alt="Empty Star"
        />
      ))}
    </span>
  );
}

export default StarRating;
