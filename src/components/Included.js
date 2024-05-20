import React from "react";

import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Included = () => {
  return (
    <div className="whats-included-holder">
      <div className="whats-included-horizontal">
        {" "}
        <div className="whats-included-individual-box">
          <div className="whats-included-individual-inner-box">
            <span class="material-symbols-outlined whats-included-icon gradient-text">
              face_6
            </span>
            <p>Personal Historian to guide you through the process</p>
          </div>
        </div>
        <div className="whats-included-individual-box">
          <div className="whats-included-individual-inner-box">
            <span class="material-symbols-outlined whats-included-icon gradient-text">
              draw
            </span>
            <p>Planning session with you and interviewee</p>
          </div>{" "}
        </div>
        <div className="whats-included-individual-box">
          {" "}
          <div className="whats-included-individual-inner-box">
            <span class="material-symbols-outlined whats-included-icon gradient-text">
              communication
            </span>
            <p>Four weekly one-on-one interview sessions</p>
          </div>{" "}
        </div>
        <div className="whats-included-individual-box">
          {" "}
          <div className="whats-included-individual-inner-box">
            <span class="material-symbols-outlined whats-included-icon gradient-text">
              graphic_eq
            </span>
            <p>High-fidelity audio and video recordings</p>
          </div>{" "}
        </div>
      </div>
      <div className="whats-included-horizontal">
        <div className="whats-included-individual-box">
          {" "}
          <div className="whats-included-individual-inner-box">
            <span class="material-symbols-outlined whats-included-icon gradient-text">
              chrome_reader_mode
            </span>
            <p>Their story edited into life chapters</p>
          </div>{" "}
        </div>
        <div className="whats-included-individual-box">
          {" "}
          <div className="whats-included-individual-inner-box">
            <span class="material-symbols-outlined whats-included-icon gradient-text">
              history_edu
            </span>{" "}
            <p>An immersive, searchable Virgil Vault</p>
          </div>{" "}
        </div>
        <div className="whats-included-individual-box">
          {" "}
          <div className="whats-included-individual-inner-box">
            <span class="material-symbols-outlined whats-included-icon gradient-text">
              groups
            </span>{" "}
            <p>Shareable with your entire family</p>
          </div>{" "}
        </div>
        <div className="whats-included-individual-box">
          {" "}
          <div className="whats-included-individual-inner-box">
            <span class="material-symbols-outlined whats-included-icon gradient-text">
              security
            </span>{" "}
            <p>Safe, secure, and private to you</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Included;
