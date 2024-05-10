import React from "react";
import "./Places.css";
import placesComingSoon from "../images/placesComingSoon.png"
function PlacesPage() {
      return (
      <div style={{ position: 'relative', display: 'inline-block', marginTop: '20px', marginBottom: '40px'}}>
      <img src={placesComingSoon} alt="Coming Soon" style={{ width: '90%', height: 'auto' }} />
            <div style={{
            position: 'absolute',
            top: '50%',  // Centers the text vertically
            left: '50%', // Centers the text horizontally
            transform: 'translate(-50%, -50%)', // Ensures the centering is accurate
            color: 'white', // Text color
            fontSize: '40px', // Text size
            fontWeight: 'bold' // Text weight
            }}>
                  Coming Soon!
            </div>
      </div>
      );
}

export default PlacesPage;