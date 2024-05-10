import React, { useState, useEffect, useRef } from "react";
import leftTop from "../images/demo-gallery/left-top.png";
import leftBottom from "../images/demo-gallery/left-bottom.png";
import middleTop from "../images/demo-gallery/middle-top.png";
import middleBottom from "../images/demo-gallery/middle-bottom.png";
import rightTop from "../images/demo-gallery/right-top.png";
import rightBottom from "../images/demo-gallery/right-bottom.png";

import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Demo.css";

const DemoGallery = () => {
  return (
    <div className="overall-image-holder">
      <div className="vertical-image-holder">
        <img src={leftTop} alt="rightMacbook" />
        <img src={leftBottom} alt="rightMacbook" />
      </div>
      <div className="vertical-image-holder">
        <img src={middleTop} alt="rightMacbook" />
        <img src={middleBottom} alt="rightMacbook" />
      </div>
      <div className="vertical-image-holder">
        <img src={rightTop} alt="rightMacbook" />
        <img src={rightBottom} alt="rightMacbook" />
      </div>
    </div>
  );
};

export default DemoGallery;
