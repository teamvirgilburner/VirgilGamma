import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarouselCard from "./CarouselCard";
// import MargaretThompson from "../images/margaret-thompson.png";
import c1 from "../images/carousel_images/c1.png";
import c2 from "../images/carousel_images/c2.png";
import c3 from "../images/carousel_images/c3.png";
import c4 from "../images/carousel_images/c4.png";
import c5 from "../images/carousel_images/c5.png";
import c6 from "../images/carousel_images/c6.png";
import c7 from "../images/carousel_images/c7.png";
import c8 from "../images/carousel_images/c8.png";

// import MargaretThompsonLarge from "../images/m-thompson-large.png"
// import bettyHeadshot from "../images/betty_headshot.png";

import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Demo.css";

const LifeChapters = () => {
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
    initialSlide: 1,
    centerMode: true,
    infinite: false,
    swipe: false, // Disable swipe
    touchMove: false, // Disable touch move
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
        "Cultural Development",
        "Developing Independence",
      ],
      buttonText: "Coming Soon!",
      // goto: goToCollegeYears,
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
      // goto: goToCareerCommunity,
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
        "Writing and TV Career",
        "Family and Personal Life",
        "New Advocacy Efforts",
      ],
      buttonText: "Coming Soon!",
    },
    {
      id: 7,
      imageUrl: c7,
      years: "2001-2022",
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
      imageUrl: c8,
      years: "2023",
      title: "Betty's Passing",
      features: [
        "Hear loved ones share their memories and reflections on Betty's incredible life",
      ],
      buttonText: "Coming Soon!",
    },
    {
      id: 9,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
    {
      id: 10,
      imageUrl: "",
      years: "",
      title: "",
      features: [],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

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
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceType]);

  return (
    <div className="life-chapters-container">
      <div className="carousel-container">
        <div
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Slider {...settings}>
            {items.map((item, index) => {
              const isCenter = index === activeIndex; // Determine if this slide is the center slide
              return (
                <div
                  className={`item ${isCenter ? "center" : ""}`}
                  key={item.id}
                >
                  <CarouselCard
                    years={item.years}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    items={item.features}
                    isCenter={isCenter}
                    buttonText={item.buttonText}
                    goto={item.goto}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LifeChapters;
