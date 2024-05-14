import React, { useState, useEffect } from "react";
import "./Demo.css";
import ReactPlayer from "react-player";

import EarlyLife from "../images/search-bar/early-life-in-ithaca.png";
import PianoLessons from "../images/search-bar/piano-lessons-in-the-bronx.png";
import { useNavigate } from "react-router-dom";
import Chapter1Video from "../images/chapter1.mp4";

function SearchBar({ onSearch }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoModalVisible, setVideoModalVisible] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const openVideoModal = (event) => {
    setVideoModalVisible(true);
  };

  const closeVideoModal = () => {
    setVideoModalVisible(false);
  };

  const goToEarlyLife = () => {
    navigate("/early-life");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    onSearch(searchTerm);
    if (searchTerm.toLowerCase() === "piano lessons") {
      setResults([
        {
          type: "chapter",
          typeTitle: "Related Chapters",
          title: "Early Life in Ithaca",
          date: "1938-1948",
          imageUrl: EarlyLife,
          onClick: goToEarlyLife,
        },
        {
          type: "video",
          typeTitle: "Video clips",
          title: "Piano Lessons in the Bronx",
          time: "4:19-4:30",
          imageUrl: PianoLessons,
          onClick: openVideoModal,
        },
      ]);
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    // Show the modal 3 seconds after the component mounts
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 1000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          placeholder="Search Feature Coming Soon!"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        {modalVisible && (
          <div className="modal-overlays">
            <div className="search-results search-suggestion-modal">
              <p className="search-suggestion-modal-text" onClick={closeModal}>
                Try searching for "piano lessons"
              </p>
              <p
                className="search-suggestion-modal-text"
                style={{ fontWeight: "bold" }}
                onClick={closeModal}
              >
                X
              </p>
            </div>
          </div>
        )}
      </form>
      {videoModalVisible && (
        <div className="modal-overlay" onClick={closeVideoModal}>
          <div className="modal-content">
            <span className="close" onClick={closeVideoModal}>
              &times;
            </span>
            <ReactPlayer
              className="react-player fixed-bottom"
              playing={true}
              url={Chapter1Video}
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
      {results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <button
              key={index}
              className="search-result-item"
              onClick={result.onClick}
            >
              {result.type === "chapter" && (
                <>
                  <img
                    src={result.imageUrl}
                    alt={result.title}
                    className="result-image"
                  />
                  <div className="result-info">
                    <h4>{result.title}</h4>
                    <p>{result.date}</p>
                  </div>
                </>
              )}
              {result.type === "video" && (
                <>
                  <img
                    src={result.imageUrl}
                    alt={result.title}
                    className="result-image"
                  />
                  <div className="result-info">
                    <h4>{result.title}</h4>
                    <p>{result.time}</p>
                  </div>
                </>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
