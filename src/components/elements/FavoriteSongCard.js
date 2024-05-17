import React, { useRef, useState } from "react";
import "./FavoritesCard.css"; // Assume you have corresponding CSS for styling
import PlayButton from "../../images/play-button.png";
import PauseButton from "../../images/pause-button.png";

function FavoriteSongCard({ imageUrl, heading, subheading, audioUrl }) {
  const audioRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setMusicPlaying(true);
    }
  };

  return (
    <div className="song-card">
      <img src={imageUrl} alt={heading} className="song-card-image" />
      <div className="song-card-info">
        <span className="song-card-title">{heading}</span>
        <span className="song-card-artist">{subheading}</span>
      </div>
      <button className="play-button" onClick={handlePlay}>
        {musicPlaying === true ? (
          <img src={PlayButton} alt="playButton" className="song-card-image" />
        ) : (
          <img src={PlayButton} alt="playButton" className="song-card-image" />
        )}
      </button>
      <audio ref={audioRef} src={audioUrl}></audio>
    </div>
  );
}

export default FavoriteSongCard;
