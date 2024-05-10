import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LifeChapters from "./LifeChapters";
import Places from "./Places";
import Favorites from "./Favorites";
import { MaterialSymbol } from "react-material-symbols";

import c1 from "../images/carousel_images/c1.png";
import c2 from "../images/carousel_images/c2.png";
import c3 from "../images/carousel_images/c3.png";
import c4 from "../images/carousel_images/c4.png";
import c5 from "../images/carousel_images/c5.png";
import c6 from "../images/carousel_images/c6.png";
import c7 from "../images/carousel_images/c7.png";
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

  const goToEarlyLife = () => {
    navigate("/early-life");
  };

  const styling = {
    color: "black",
  };

  const settings = {
    initialSlide: 1,
    centerMode: true,
    infinite: false,
    centerPadding: "25px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow2 />,
    beforeChange: (current, next) => setActiveIndex(next), // Update active index on slide change
  };

  const items = [
    {
      id: 0,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
    {
      id: 1,
      imageUrl: c1,
      years: "1938-1948",
      title: "Early Life in Ithaca",
      features: [
        "Family Background",
        "Mother's Influence",
        "Extracurricular Beginnings",
      ],
      buttonText: "Learn More",
      goto: goToEarlyLife,
    },
    {
      id: 2,
      imageUrl: c2,
      years: "1949-1954",
      title: "Education & | Teenage Years",
      features: [
        "Advanced Studies",
        "Cultural and Social Development",
        "Develeping Independence",
      ],
      buttonText: "Coming Soon!",
    },
    {
      id: 3,
      imageUrl: c3,
      years: "1955-1960",
      title: "Early Career & Acting",
      features: [
        "Beginning as an Actress",
        "Realization and Shifts",
        "Transition to Writing",
      ],
      buttonText: "Coming Soon!",
    },
    {
      id: 4,
      imageUrl: c4,
      years: "1961-1970",
      title: "Professional | Writing Career",
      features: [
        "Entry into journalism",
        "Skills Development",
        "Recognition and Setbacks",
      ],
      buttonText: "Coming Soon!",
    },
    {
      id: 5,
      imageUrl: c5,
      years: "1971-1980",
      title: "TV Journalism & | Greatest Challenges",
      features: [
        "Shift to Television",
        "Battle with Breast Cancer",
        "Authorship",
      ],
      buttonText: "Coming Soon!",
    },
    {
      id: 6,
      imageUrl: c6,
      years: "1981-2000",
      title: "Later Career & Advocacy",
      features: [
        "Continued Writing and TV Career",
        "Family and Personal Life",
        "New Advocacy Efforts",
      ],
      buttonText: "Coming Soon!",
    },
    {
      id: 7,
      imageUrl: c7,
      years: "2001-Present",
      title: "Reflection & Legacy",
      features: [
        "Reflecting on Life Lessons",
        "Loss and Coping",
        "Ongoing Advocacy",
      ],
      buttonText: "Coming Soon!",
    },
    {
      id: 8,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
    {
      id: 9,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const [deviceType, setDeviceType] = useState("desktop");

  const [currentTab, setCurrentTab] = useState("LifeChapters");

  function showContent(tabName) {
    if (currentTab !== tabName) {
      setCurrentTab(tabName);
    }
  }

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
      <div className ="demo-header"
        style={{
          display:'flex',
          direction:'row',
          justifyContent:'space-between',
          width:'100%',
          height: '100px'
        }}
      >
        <div style={{
          fontFamily: 'Palatino Linotype, serif',
          fontSize: '30pt', 
          paddingTop: '20px', 
          paddingLeft: '40px'
          }}>
          Virgil Vault
        </div>
        <div className = 'photo-and-name' 
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1
          }}
        >
          <img style={{paddingTop: '60px', scale: '60%'}} src={BettyHeadshot} alt="Betty" />
          <div style={{fontSize: '30pt', 
          paddingTop: '30px', 
          paddingLeft: '5px',
          fontWeight: 'bold'}}>
            Betty Rollin
          </div>
        </div>

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
          {currentTab === "Places" && <Places/>}
          {currentTab === "Favorites" && <Favorites/>}
          {currentTab === "Gallery" && <DemoGallery />}
        </div>
      </main>
    </div>
  );
};

export default Demo;
