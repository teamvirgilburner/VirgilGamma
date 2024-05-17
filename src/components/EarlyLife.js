import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

// import MargaretThompsonLarge from "../images/m-thompson-large.png";
// import IthacaImage from "../images/ithaca.jpg";
// import ChildrenPlaying from "../images/playing.jpg";
// import theaterAndDramaticsBig from "../images/theater-and-dramatics-big.png";
import Chapter1Video from "../images/chapter1.mp4";
import grammarAndWriting from "../images/grammar-and-writing.png";
import ballet1 from "../images/ballet1.png";
import ballet2 from "../images/ballet2.png";
import theaterAndDramatics from "../images/theater-and-dramatics.png";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myAmbitiousMother from "../images/my-ambitious-mother.png";
import makeupClasses from "../images/makeup-classes-on-fifth-avenue.png";
import iceCream from "../images/ice-cream-at-addie-valens.png";
import myContentedFather from "../images/my-contented-father.png";
import grewUpInLincolnPark from "../images/grew-up-in-lincoln-park.png";
import footerVideo from "../images/chapter1_bottom.mov";

import "./IndividualDemoPage.css";

const EarlyLife = () => {
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
    <div className="homepage">
      <div className="banner" ref={headingRef}>
        You're viewing a demo of our digital biography feature.{" "}
        <a href="/" className="link">
          Return to main site
        </a>{" "}
        to start your own journey.
      </div>
      <main className="main-content">
        <div>
          <div>
            <div className="header-container">
              <div className="name-heading-container">
                {" "}
                <div className="name-heading">Betty Rollin</div>
              </div>

              <div className="location-date-heading" style={{marginBottom: '-100px'}}> 
                <h1>Early Life in New York</h1>
                <h1>1938-1956</h1>
              </div>
            </div>
            <div className="media-container" style={{paddingTop: '0px'}}>
              <div class="video-container">
                <ReactPlayer
                  className="react-player fixed-bottom"
                  playing={playing}
                  url={Chapter1Video}
                  width="100%"
                  height="80%"
                  controls={true}
                  style={{transform: 'scale(0.75)'}}
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
                  <div className = "overlay"
                    onClick={handleVideoStart}
                  >
                    <div>
                      <span>
                        This is a sample of a Life Chapter in a Vault.{" "}
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        In each Chapter, you will find a video interview of your
                        loved one, as well as additional content about their
                        life and experiences during this period.
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
              <div className="family-container">
                <div className="family-heading">Family Background</div>
                <div className="family-content">
                  Betty grew up in Lincoln Park, a suburb of Yonkers. She was an
                  only child with a Ukrainian father who adored America and an
                  ambitious mother who was always striving for more.
                </div>
              </div>
              <div className="carousel-container">
                <div
                  style={{
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Slider {...settings}>
                    <div>
                      <img
                        src={myAmbitiousMother}
                        alt="my ambitious mother"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={grewUpInLincolnPark}
                        alt="children"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={myContentedFather}
                        alt="children"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={makeupClasses}
                        alt="my ambitious mother"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={iceCream}
                        alt="my ambitious mother"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </Slider>
                </div>
              </div>
              {/* Flex container for images */}
              <div
                className="images-container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              ></div>
              <div className="family-container">
                <div className="family-heading">Mother's Influence</div>
                <div className="family-content">
                  Her mother was a significant influence, pushing her towards
                  numerous educational and extracurricular activities to ensure
                  she had every possible advantage.
                </div>
              </div>
              <div>
                <div className="dropdown">
                  {!isOpen && (
                    <button
                      onClick={toggleDropdown}
                      className="dropdown-toggle"
                    >
                      Ballet Class
                      <span className="arrow">{isOpen ? "▲" : "▼"}</span>
                    </button>
                  )}
                  {isOpen && (
                    <div>
                      <div className="gray-box-chapter">
                        <div className="inner-gray-box-chapter">
                          <div className="gray-box-text-container">
                            <div className="gray-box-header">
                              {" "}
                              Ballet Classes
                            </div>
                            <div className="gray-box-content">
                              {" "}
                              Every Saturday, Betty attended ballet class with a
                              teacher who, as a Christian Scientist, ignored
                              pain. There, she learned not just to dance but to
                              embody discipline and grace under pressure.{" "}
                            </div>
                          </div>
                          <div className="gray-box-image-container">
                            <img src={ballet1} alt="Down arrow" />
                            <img src={ballet2} alt="Down arrow" />
                          </div>
                        </div>
                        <button
                          onClick={toggleDropdown}
                          className="dropdown-toggle-up"
                        >
                          {" "}
                          ▲
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="dropdown">
                  {!isTheaterOpen && (
                    <button
                      onClick={toggleDropdownTheater}
                      className="dropdown-toggle"
                    >
                      Theater and Dramatics{" "}
                      <span className="arrow">{isTheaterOpen ? "▲" : "▼"}</span>
                    </button>
                  )}
                  {isTheaterOpen && (
                    <div>
                      <div className="gray-box-chapter">
                        <div className="inner-gray-box-chapter">
                          <div className="gray-box-text-container">
                            <div className="gray-box-header">
                              {" "}
                              Theater and Dramatics
                            </div>
                            <div className="gray-box-content">
                              {" "}
                              In her dramatics class, Betty learned to express
                              herself through speaking and acting. Her journey
                              toward becoming a professional was gently steered
                              away by her mother, who wanted these experiences
                              to enrich her life rather than transform her into
                              a stage child.{" "}
                            </div>
                          </div>
                          <div className="gray-box-image-container">
                            <img src={theaterAndDramatics} alt="Down arrow" />
                          </div>
                        </div>
                        <button
                          onClick={toggleDropdownTheater}
                          className="dropdown-toggle-up"
                        >
                          {" "}
                          ▲
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="dropdown">
                  {!isWritingAndGrammarOpen && (
                    <button
                      onClick={toggleDropdownWritingAndGrammar}
                      className="dropdown-toggle"
                    >
                      Writing and Grammar{" "}
                      <span className="arrow">
                        {isWritingAndGrammarOpen ? "▲" : "▼"}
                      </span>
                    </button>
                  )}
                  {isWritingAndGrammarOpen && (
                    <div>
                      <div className="gray-box-chapter">
                        <div className="inner-gray-box-chapter">
                          <div className="gray-box-text-container">
                            <div className="gray-box-header">
                              {" "}
                              Writing and Grammar
                            </div>
                            <div className="gray-box-content">
                              {" "}
                              Under the strict but nurturing guidance of
                              seasoned editors, she learned to refine her voice
                              and embrace the vulnerability in her storytelling.{" "}
                            </div>
                          </div>
                          <div className="gray-box-image-container">
                            <img src={grammarAndWriting} alt="Down arrow" />
                          </div>
                        </div>
                        <button
                          onClick={toggleDropdownWritingAndGrammar}
                          className="dropdown-toggle-up"
                        >
                          {" "}
                          ▲
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="remarkable-mother-container">
                <div className="left-quotation-mark">“</div>
                <div className="remarkable-mother-content">
                  The remarkable thing about my mother was that, on top of all
                  that push, she was a kind, loving person. She cared about
                  others, so I learned to be someone who is interested in and
                  cares about other people. I got that from her.
                </div>
                <div className="left-quotation-mark">”</div>
              </div>

              <div class="video-container">
                <ReactPlayer
                  className="react-player fixed-bottom"
                  url={footerVideo}
                  width="100%"
                  height="80%"
                  controls={true}
                />
                <div className="video-description">
                  Video uploaded by Aunt Deborah Edwards.
                </div>
              </div>
              <button
                onClick={goToWaitList}
                className="nav-link-waitlist"
                style={{ margin: "50px 30px" }}
              >
                Back to Life Chapters
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EarlyLife;
