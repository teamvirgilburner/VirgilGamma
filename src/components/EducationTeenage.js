import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import ChapterVideo from "../images/chapter2.mp4";
import ETY1 from "../images/chapter-pages/education-teenage-years/ETY1.png";
import ETY2 from "../images/chapter-pages/education-teenage-years/ETY2.png";
import ETY3 from "../images/chapter-pages/education-teenage-years/ETY3.png";

import "./IndividualDemoPage.css";

const EducationTeenage = () => {
  const headingRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleVideoStart = () => {
    setPlaying(true);
    setOverlayVisible(false);
  };

  const [deviceType, setDeviceType] = useState("desktop");

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
    <div className="no-overflow-body-container">
      <div className="banner" ref={headingRef}>
        You're viewing a demo of our digital biography feature.{" "}
        <a href="/" className="link">
          Return to main site
        </a>{" "}
        to start your own journey.
      </div>
      <main className="demo-main-content">
        <div>
          <div>
            <div className="header-container">
              <div className="name-heading-container">
                {" "}
                <div className="name-heading">Betty Rollin</div>
              </div>

              <div className="location-date-heading">
                <h1>Education & Teenage Years</h1>
                <h1>1949-1954</h1>
              </div>
            </div>
            <div className="horizontal-media-container">
              <div className="video-background-container">
                <div class="video-container">
                  <ReactPlayer
                    className="react-player fixed-bottom"
                    playing={playing}
                    url={ChapterVideo}
                    width="100%"
                    height="20%"
                    controls={true}
                    config={{
                      file: {
                        attributes: {
                          autoPlay: false,
                          muted: false,
                        },
                      },
                    }}
                  />
                  {overlayVisible && (
                    <div className="overlay" onClick={handleVideoStart}>
                      <div>
                        <span>
                          This is another example of a Life Chapter, click anywhere to start the video, and scroll through the photos. {" "}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="individual-demo-page-content">
                  Grandma Betty had a happy, yet odd, childhood. She attended
                  the prestigious institution Sarah Lawrence College where she
                  gained experience in acting and writing.
                </div>
              </div>
              <div className="vertical-photo-holder">
                <img
                  className="individual-chapter-page-image"
                  src={ETY1}
                  alt="first pic"
                />
                <img
                  className="individual-chapter-page-image"
                  src={ETY2}
                  alt="second pic"
                />
                <img
                  src={ETY3}
                  className="individual-chapter-page-image"
                  alt="third pic"
                />
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EducationTeenage;
