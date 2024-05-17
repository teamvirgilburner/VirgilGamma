import React from "react";
import "./Places.css";
import placesComingSoon from "../images/placesComingSoon.png";
function PlacesPage() {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        marginTop: "20px",
        marginBottom: "40px",
      }}
    >
      <div className="category-container">
        <div className="category-header">Foods</div>
        <div className="item-container"></div>
      </div>
      <div className="category-container">
        <div className="category-header">Places</div>
        <div className="item-container"></div>
      </div>
      <div className="category-container">
        <div className="category-header">Books</div>
        <div className="item-container"></div>
      </div>
      <div className="category-container">
        <div className="category-header">Movies</div>
        <div className="item-container"></div>
      </div>
      <div className="category-container">
        <div className="category-header">Family Quotes</div>
        <div className="item-container"></div>
      </div>
    </div>
  );
}

export default PlacesPage;
