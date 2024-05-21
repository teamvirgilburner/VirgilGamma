import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./FavoritesCard.css"; // Assume you have corresponding CSS for styling

function RecipeCard({ imageUrl, heading, subheading, buttonText, videoUrl }) {
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const openVideoModal = (event) => {
    setVideoModalVisible(true);
  };

  const closeVideoModal = () => {
    setVideoModalVisible(false);
  };

  return (
    <div className="favorites-card">
      <div className="favorites-card-image">
        <img src={imageUrl} alt={heading} />
      </div>
      <div className="favorites-card-header">
        <span className="favorites-heading">{heading}</span>
      </div>
      <div className="favorites-card-header">
        <span className="favorites-subheading">{subheading}</span>
      </div>

      <button
        className={videoUrl ? "yellow-round-button" : "gray-round-button"}
        onClick={videoUrl ? openVideoModal : () => {}}
      >
        {buttonText}
      </button>
      {videoModalVisible && videoUrl && (
        <div className="modal-overlay" onClick={closeVideoModal}>
          <div className="modal-content">
            <span className="close" onClick={closeVideoModal}>
              &times;
            </span>
            <ReactPlayer
              className="react-player fixed-bottom"
              playing={true}
              url={videoUrl}
              width="100%"
              height="80%"
              controls={true}
              config={{
                file: {
                  attributes: {
                    autoPlay: false,
                    muted: false,
                  },
                },
              }}
            />{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
