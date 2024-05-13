import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LifeChapters from "./LifeChapters";
import Places from "./Places";
import Favorites from "./Favorites";
import SearchBar from "./SearchBar"; // Adjust the path according to your project structure
import DemoGallery from "./DemoGallery";
import DemoFamilyTreeBigger from "../images/demo-family-tree-bigger.png";
import BettyHeadshot from "../images/betty_round_headshot.png";

import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Demo.css";

const Demo = () => {
  const headingRef = useRef(null);

  const navigate = useNavigate();

  const [deviceType, setDeviceType] = useState("desktop");

  const [currentTab, setCurrentTab] = useState("LifeChapters");

  function showContent(tabName) {
    if (currentTab !== tabName) {
      setCurrentTab(tabName);
    }
  }

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  const goToHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleResize = () => {
      const width = window.innerWidth;
      let newDeviceType = "desktop";
      if (width < 1024 && width >= 464) {
        newDeviceType = "tablet";
      } else if (width < 464) {
        newDeviceType = "mobile";
      }
      setDeviceType(newDeviceType);
    };

    handleResize(); // Call initially to set the initial device type
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceType]);

  return (
    <div className="demo-page">
      <div className="banner" ref={headingRef}>
        You're viewing a demo of our digital memoir.{" "}
        <a href="/" className="link">
          Return to main site
        </a>{" "}
        to start your own journey.
      </div>
      <div className="demo-header">
        <button onClick={goToHome} className="demo-header-logo">
          Virgil Vault
        </button>
        <div className="photo-and-name">
          <img style={{ scale: "60%" }} src={BettyHeadshot} alt="Betty" />
          <div className="demo-name">Betty Rollin</div>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <main className="main-content">
        <div className="white-box-holder">
          <div className="tabs-holder">
            <div className="tabs">
              <button
                onClick={() => showContent("LifeChapters")}
                className="tab-button"
              >
                <span class="material-symbols-outlined">stack_star</span>
                {/* Correct icon name */}
                Life Chapters
              </button>
              <button
                onClick={() => showContent("FamilyTree")}
                className="tab-button"
              >
                <span class="material-symbols-outlined">nature</span>
                Family Tree
              </button>
              <button
                onClick={() => showContent("Places")}
                className="tab-button"
              >
                <span class="material-symbols-outlined">map</span>
                Places
              </button>
              <button
                onClick={() => showContent("Favorites")}
                className="tab-button"
              >
                <span class="material-symbols-outlined">favorite</span>
                Favorites
              </button>
              <button
                onClick={() => showContent("Gallery")}
                className="tab-button"
              >
                <span class="material-symbols-outlined">gallery_thumbnail</span>
                Gallery
              </button>
            </div>
          </div>

          {currentTab === "LifeChapters" && <LifeChapters />}
          {currentTab === "FamilyTree" && (
            <img
              className="family-tree-photo"
              src={DemoFamilyTreeBigger}
              alt="rightMacbook"
            />
          )}
          {currentTab === "Places" && <Places />}
          {currentTab === "Favorites" && <Favorites />}
          {currentTab === "Gallery" && <DemoGallery />}
        </div>
      </main>
    </div>
  );
};

export default Demo;
