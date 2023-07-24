import React from "react";
import fullStarIconSrc from "../../assets/fullStar.svg"
import emptyStarIconSrc from "../../assets/emptyStar.svg"

function StarRating({ rating }) {
  const maxRating = 5;
  const fullStars = rating;
  const emptyStars = maxRating - fullStars;


  return (
    <span  className="logement__section__star">
      {[...Array(fullStars)].map((_, index) => (
        <img
          key={index}
          src={fullStarIconSrc}
          alt="Full Star"
        />
      ))}
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
