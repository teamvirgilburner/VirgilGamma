import React from "react";
import "./FavoritesCard.css"; // Assume you have corresponding CSS for styling

function FavoritesCard({ imageUrl, heading, subheading }) {
  return (
    <div className="favorites-card">
      <div className="favorites-card-header">
        <span className="favorites-heading">{heading}</span>
      </div>
      <div className="favorites-card-header">
        <span className="favorites-subheading">{subheading}</span>
      </div>
      {imageUrl && (
        <div className="favorites-card-image">
          <img src={imageUrl} alt={heading} />
        </div>
      )}
    </div>
  );
}

export default FavoritesCard;
