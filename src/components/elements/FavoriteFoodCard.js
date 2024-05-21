import React from "react";
import "./FavoritesCard.css"; // Assume you have corresponding CSS for styling

function FavoriteFoodCard({ imageUrl, heading }) {
  return (
    <div className="favorite-food-card">
      <div className="favorite-food-card-image">
        <img src={imageUrl} alt={heading} />
      </div>
      <div className="favorite-food-header">
        <span className="favorite-food-heading">{heading}</span>
      </div>
    </div>
  );
}

export default FavoriteFoodCard;
