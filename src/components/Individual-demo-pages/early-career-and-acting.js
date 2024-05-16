import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import Chapter1Video from "../../images/chapter1.mp4";
import ECA1 from "../../images/chapter-pages/early-career-and-acting/ECA1.png";
import ECA2 from "../../images/chapter-pages/early-career-and-acting/ECA2.png";
import "../IndividualDemoPage.css";

const EarlyCareerAndActing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWritingAndGrammarOpen, setIsWritingAndGrammarOpen] = useState(false);
  const [isTheaterOpen, setIsTheaterOpen] = useState(false);

  // const [selectedValue, setSelectedValue] = useState("Ballet Classes");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleDropdownWritingAndGrammar = () =>
    setIsWritingAndGrammarOpen(!isWritingAndGrammarOpen);
  const toggleDropdownTheater = () => setIsTheaterOpen(!isTheaterOpen);

  // const handleOptionClick = (value) => {
  //   setSelectedValue(value);
  //   setIsOpen(false);
  // };

  const headingRef = useRef(null);
  const navigate = useNavigate();

  const goToWaitList = () => {
    navigate("/home#waitlist");
  };

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ ...styling }} onClick={onClick} />
    );
  }

  const SamplePrevArrow2 = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick} style={{ ...styling }}>
        hello
      </div>
    );
  };

  const [playing, setPlaying] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleVideoStart = () => {
    setPlaying(true);
    setOverlayVisible(false);
  };

  const styling = {
    color: "black",
  };

  const settings = {
    initialSlide: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow2 />,
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
                    url={Chapter1Video}
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
                          This is a sample of a Life Chapter in a Vault.{" "}
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          In each Chapter, you will find a video interview of
                          your loved one, as well as additional content about
                          their life and experiences during this period.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          This content is uploaded by your family, as well as
                          automatically retrieved from historical archives and
                          databases.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Click anywhere on the screen to begin your discovery!
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
