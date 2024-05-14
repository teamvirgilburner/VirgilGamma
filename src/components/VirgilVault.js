import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import VVI1 from "../images/virgil-vault/VVI1.png";
import VVI2 from "../images/virgil-vault/VVI2.png";
import VVI3 from "../images/virgil-vault/VVI3.png";
import VVI4 from "../images/virgil-vault/VVI4.png";
import VVI5 from "../images/virgil-vault/VVI5.png";
// import MargaretThompsonLarge from "../images/m-thompson-large.png"
// import bettyHeadshot from "../images/betty_headshot.png";

import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const VirgilVault = () => {
  const headingRef = useRef(null);

  const navigate = useNavigate();

  const goToEarlyLife = () => {
    navigate("/early-life");
  };

  const styling = {
    color: "black",
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

  const settings = {
    swipeToSlide: true,
    initialSlide: 1,
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow2 />,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
  };

  const items = [
    {
      id: 0,
      imageUrl: VVI1,
      heading: "Don't read their story. Hear them tell it.",
      content:
        "Your loved one's voice is the center of the Virgil Vault - so you can preserve their authentic personality forever. ",
      years: "",
      title: "",
      features: [],
    },
    {
      id: 1,
      imageUrl: VVI2,
      heading: "Easily jump to specific chapters of their life.",
      content:
        "The Virgil Vault organizes your loved one’s story into distinct chapters, each capturing a unique phase of their life.",
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
      imageUrl: VVI3,
      heading: "All of your family photos. All in one place. ",
      content:
        "Every family member can contribute their photos, home videos, and documents - the Virgil Vault will magically place them in the appropriate life chapter. ",
      years: "1949-1954",
      title: "Education & | Teenage Years",
      features: [
        "Advanced Studies",
        "Cultural and Social Development",
        "Develeping Independence",
      ],
      buttonText: "Coming Soon!",
      // goto: goToCollegeYears,
    },
    {
      id: 3,
      imageUrl: VVI4,
      heading: "Search for specific memories, moments, and themes.",
      content:
        "Quickly locate that secret family recipe, the address of their childhood home, or their favorite holiday memories from across the years.",
      years: "1955-1960",
      title: "Early Career & Acting",
      features: [
        "Beginning as an Actress",
        "Realization and Shifts",
        "Transition to Writing",
      ],
      buttonText: "Coming Soon!",
      // goto: goToCareerCommunity,
    },
    {
      id: 4,
      imageUrl: VVI5,
      heading: "Get memory highlights delivered directly to you. ",
      content:
        "Uncover hidden stories and celebrate major milestones through daily, weekly, or monthly memory highlights delivered straight to your smartphone. ",
      years: "1961-1970",
      title: "Professional | Writing Career",
      features: [
        "Entry into journalism",
        "Skills Development",
        "Recognition and Setbacks",
      ],
      buttonText: "Coming Soon!",
    },
  ];

  const [deviceType, setDeviceType] = useState("desktop");

  const [currentTab, setCurrentTab] = useState("");

  function showContent(tabName) {
    if (currentTab !== tabName) {
      setCurrentTab(tabName);
    }
  }

  showContent();

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
      window.removeEventListener("resiz", handleResize);
    };
  }, [deviceType]);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => {
          return (
            <div className="virgil-vault-carousel-container" key={item.id}>
              <img
                src={item.imageUrl}
                alt="Grouped landing"
                style={{ width: "50%", height: "auto", marginRight: "10px" }}
              />
              <section className="virgil-vault-text-container">
                <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
                  {item.heading}
                </h1>
                <p className="vault-description">{item.content}</p>
              </section>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default VirgilVault;
