import React, { useRef, useState } from "react";
import "./FavoritesCard.css"; // Assume you have corresponding CSS for styling
import PlayButton from "../../images/play-button.png";
import PauseButton from "../../images/pause-button.png";

function FavoriteSongCard({ imageUrl, heading, subheading, audioUrl }) {
  const audioRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayPause = async () => {
    if (audioUrl && audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
        setMusicPlaying(false);
      } else {
        setIsLoading(true);
        try {
          await audioRef.current.play();
          setMusicPlaying(true);
        } catch (error) {
          console.error("Error playing audio:", error);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <div className="song-card">
      <img src={imageUrl} alt={heading} className="song-card-image" />
      <div className="song-card-info">
        <span className="song-card-title">{heading}</span>
        <span className="song-card-artist">{subheading}</span>
      </div>
      <button className="play-button" onClick={handlePlayPause}>
        <img
          src={musicPlaying ? PauseButton : PlayButton}
          alt="playPauseButton"
          className="play-pause-icon"
        />
      </button>

      <audio ref={audioRef} src={audioUrl}></audio>
    </div>
  );
}

export default FavoriteSongCard;
