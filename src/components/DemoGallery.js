import React from "react";
import left1 from "../images/demo-gallery/left-1.png";
import left2 from "../images/demo-gallery/left-2.png";
import left3 from "../images/demo-gallery/left-3.png";
import left4 from "../images/demo-gallery/left-4.png";
import left5 from "../images/demo-gallery/left-5.png";

import mid1 from "../images/demo-gallery/mid-1.png";
import mid2 from "../images/demo-gallery/mid-2.png";
import mid3 from "../images/demo-gallery/mid-3.png";
import mid4 from "../images/demo-gallery/mid-4.png";
import mid5 from "../images/demo-gallery/mid-5.png";
import mid6 from "../images/demo-gallery/mid-6.png";

import right1 from "../images/demo-gallery/right-1.png";
import right2 from "../images/demo-gallery/right-2.png";
import right3 from "../images/demo-gallery/right-3.png";
import right4 from "../images/demo-gallery/right-4.png";
import right5 from "../images/demo-gallery/right-5.png";

import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Demo.css";

const DemoGallery = () => {
  return (
    <div className="overall-image-holder">
      <div className="vertical-image-holder">
        <img src={left1} alt="rightMacbook" className="top-image" />
        <img src={left2} alt="rightMacbook" />
        <img src={left3} alt="rightMacbook" />
        <img src={left4} alt="rightMacbook" />
        <img src={left5} alt="rightMacbook" />
      </div>
      <div className="vertical-image-holder">
        <img src={mid1} alt="rightMacbook" className="top-image" />
        <img src={mid2} alt="rightMacbook" />
        <img src={mid3} alt="rightMacbook" />
        <img src={mid4} alt="rightMacbook" />
        <img src={mid5} alt="rightMacbook" />
        <img src={mid6} alt="rightMacbook" />
      </div>
      <div className="vertical-image-holder">
        <img src={right1} alt="rightMacbook" className="top-image" />
        <img src={right2} alt="rightMacbook" />
        <img src={right3} alt="rightMacbook" />
        <img src={right4} alt="rightMacbook" />
        <img src={right5} alt="rightMacbook" />
      </div>
    </div>
  );
};

export default DemoGallery;
