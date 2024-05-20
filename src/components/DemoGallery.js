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
        <div className="gallery-image-container">
          <img
            src={left1}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">
              Makeup Classes on Fifth Avenue
            </div>
            <div className="gallery-text">Uploaded by Aunt Patricia · 1940</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={left2}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Sorority Life in College</div>
            <div className="gallery-text">Uploaded by Sarah Lewis · 1952</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={left3}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Television Journalist Career</div>
            <div className="gallery-text">Uploaded by Aunt Patricia · 1960</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={left4}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Sarah Lawrence College</div>
            <div className="gallery-text">Uploaded by Sarah Lewis · 1952</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={left5}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">With Her Sorority Sisters</div>
            <div className="gallery-text">Uploaded by Sarah Lewis · 1940</div>
          </div>
        </div>
      </div>
      <div className="vertical-image-holder">
        <div className="gallery-image-container">
          <img
            src={mid1}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Betty and Ida</div>
            <div className="gallery-text">Uploaded by Aunt Patricia · 1938</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={mid2}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Ice Cream After Classes</div>
            <div className="gallery-text">Uploaded by Aunt Patricia · 1941</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={mid3}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Writing Classes</div>
            <div className="gallery-text">Uploaded by Aunt Patricia · 1946</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={mid4}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Speaking At A Conference</div>
            <div className="gallery-text">
              Uploaded by Harold Edwards · 1965
            </div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={mid5}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Acting in College</div>
            <div className="gallery-text">Uploaded by Sarah Lewis · 1952</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={mid6}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Betty and Ida</div>
            <div className="gallery-text">Uploaded by Aunt Patricia · 1940</div>
          </div>
        </div>
      </div>
      <div className="vertical-image-holder">
        <div className="gallery-image-container">
          <img
            src={right1}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Gardening in Manhattan</div>
            <div className="gallery-text">
              Uploaded by Harold Edwards · 1973
            </div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={right2}
            alt="rightMacbook"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Sorority Life in College</div>
            <div className="gallery-text">Uploaded by Sarah Lewis · 1952</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={right3}
            alt="vogue magazine"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Vogue Issue</div>
            <div className="gallery-text">
              Uploaded by Harold Edwards · 1966
            </div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={right4}
            alt="rightMacbook"
            className="newspaper with betty's face"
            style={{ width: "100%" }}
          />
          <div className="image-overlay">
            <div className="gallery-heading">First, You Cry Newspaper</div>
            <div className="gallery-text">Uploaded by Sarah Lewis · 1952</div>
          </div>
        </div>
        <div className="gallery-image-container">
          <img
            src={right5}
            alt="singing class"
            className="top-image gallery-image"
          />
          <div className="image-overlay">
            <div className="gallery-heading">Singing Classes</div>
            <div className="gallery-text">Uploaded by Aunt Patricia · 1945</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoGallery;
