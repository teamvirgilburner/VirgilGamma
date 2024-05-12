import React from "react";
import vv1 from "../images/virgil-voyage/vv1.png";
import vv2 from "../images/virgil-voyage/vv2.png";
import vv3 from "../images/virgil-voyage/vv3.png";
import vv4 from "../images/virgil-voyage/vv4.png";
import vv5 from "../images/virgil-voyage/vv5.png";
import { Link, Element } from "react-scroll";

import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const VirgilVoyage = () => {
  return (
    <div className="virgil-voyage-overall-holder">
      <div className="virgil-voyage-card">
        <div className="virgil-voyage-card-inner-holder">
          <div className="number-holder">
            {" "}
            <h1 className="virgil-voyage-card-number"> 01</h1>
          </div>
          <h2 className="virgil-voyage-card-header">
            {" "}
            We pair you with your personal historian
          </h2>
          <p className="virgil-voyage-card-content">
            {" "}
            Our professional historians are trained to patiently guide your
            loved one through a series of conversational interviews via video
            chat.{" "}
          </p>
          <img
            src={vv1}
            alt="Guy talking on the computer"
            className="voyage-card-img"
          />
        </div>
      </div>
      <div className="virgil-voyage-card">
        <div className="virgil-voyage-card-inner-holder">
          <div className="number-holder">
            {" "}
            <h1 className="virgil-voyage-card-number"> 02</h1>
          </div>
          <h2 className="virgil-voyage-card-header">
            {" "}
            Your loved one tells their story
          </h2>
          <p className="virgil-voyage-card-content">
            {" "}
            In just four weekly interview sessions, our historian will work with
            your loved one to capture the complete narrative of their life.
          </p>
          <img
            src={vv2}
            alt="Guy talking on the computer"
            className="voyage-card-img"
          />
        </div>
      </div>
      <div className="virgil-voyage-card">
        <div className="virgil-voyage-card-inner-holder">
          <div className="number-holder">
            {" "}
            <h1 className="virgil-voyage-card-number"> 03</h1>
          </div>
          <h2 className="virgil-voyage-card-header">
            {" "}
            Your contribute your memories
          </h2>
          <p className="virgil-voyage-card-content">
            {" "}
            You and your family members upload photos and home videos to add
            context and richness to your loved one's story.{" "}
          </p>
          <img
            src={vv3}
            alt="Guy talking on the computer"
            className="voyage-card-img"
          />
        </div>
      </div>
      <div className="virgil-voyage-card">
        <div className="virgil-voyage-card-inner-holder">
          <div className="number-holder">
            {" "}
            <h1 className="virgil-voyage-card-number"> 04</h1>
          </div>
          <h2 className="virgil-voyage-card-header">
            {" "}
            We build your custom memoir
          </h2>
          <p className="virgil-voyage-card-content">
            {" "}
            Virgil creates a beautiful, interactive video memoir and stores it
            in the Virgil Vault — so your family can cherish them forever.{" "}
          </p>
          <img
            src={vv4}
            alt="Guy talking on the computer"
            className="voyage-card-img"
          />
        </div>
      </div>
      <div className="virgil-voyage-card">
        <div className="virgil-voyage-card-inner-holder">
          <div className="number-holder">
            {" "}
            <h1 className="virgil-voyage-card-number"> 05</h1>
          </div>
          <h2 className="virgil-voyage-card-header">
            {" "}
            You engage with their story like never before
          </h2>
          <p className="virgil-voyage-card-content">
            {" "}
            With the Virgil Vault, you can navigate their life chronologically,
            search for specific events, or subscribe to weekly emails
            highlighting a new memory.{" "}
          </p>
          <img
            src={vv5}
            alt="Guy talking on the computer"
            className="voyage-card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default VirgilVoyage;
