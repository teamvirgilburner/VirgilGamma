import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import ChapterVideo from "../../images/chapter3.mp4";
import ECA1 from "../../images/chapter-pages/early-career-and-acting/ECA1.png";
import ECA2 from "../../images/chapter-pages/early-career-and-acting/ECA2.png";
import "../IndividualDemoPage.css";

const EarlyCareerAndActing = () => {
  const headingRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleVideoStart = () => {
    // setPlaying(true);
    setPlaying(false);
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
                <h1>Early Career & Acting</h1>
                <h1>1955-1960</h1>
              </div>
            </div>
            <div className="horizontal-media-container">
              <div className="video-background-container">
                <div class="video-container">
                  <ReactPlayer
                    className="react-player fixed-bottom"
                    playing={playing}
                    url={ChapterVideo}
                    width="85%" /* Had to adjust width, subtitle was getting cut off based on the resolution */
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
                    <div className="chapter-overlay" onClick={handleVideoStart}>
                      <div>
                        <span>
                          You've seen a few chapters now: feel free to explore on your own and start the video at your leisure!{" "}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="individual-demo-page-content">
                  Grandma Betty aspired to be an actress, but realized how awful
                  the profession was due to its instability and challenges.
                </div>
              </div>
              <div className="vertical-photo-holder">
                <img
                  className="individual-chapter-page-image"
                  src={ECA1}
                  alt="first pic"
                />
                <img
                  className="individual-chapter-page-image"
                  src={ECA2}
                  alt="second pic"
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

export default EarlyCareerAndActing;
