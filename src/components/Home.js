import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";
import VirgilVoyage from "./VirgilVoyage";
import Included from "./Included";

import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import VirgilVaultImage from "../images/the-virgil-vault.png";

import whatsIncludedBigBg from "../images/whats-included-big-bg.png";
import downArrow from "../images/down-arrow.png";
import newLandingImage from "../images/new-landing-image.png";
import leftMacbook from "../images/left.png";
import rightMacbook from "../images/right.png";
import bigElipse from "../images/big-ellipse.png";
import contributeMemories from "../images/contribute-memories.png";
import completeInterviews from "../images/complete-interviews.png";
import receiveVirgilVault from "../images/receive-virgil-vault.png";

import "./Home.css"; // Assume you have corresponding CSS for styling
import { toast, ToastContainer } from "react-toastify";

function Home() {
  const ref = collection(firestore, "waitlist_data");

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [motivation, setMotivation] = useState("");
  const [heardFrom, setSelectedValue] = useState("");

  const goToDemo = () => {
    navigate("/demo");
  };

  const goToHome = () => {
    navigate("/home");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event) => {
    setFullName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeMotivation = (event) => {
    setMotivation(event.target.value);
  };

  // Function to handle the change in dropdown
  const handleChangeDiscovery = (event) => {
    setSelectedValue(event.target.value); // Update the state with new value
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      email: email,
      name: fullName,
      phone: phoneNumber,
      subject: subject,
      motivation: motivation,
      source: heardFrom,
    };

    console.log(data);

    try {
      addDoc(ref, data);
    } catch (event) {
      console.log(event);
    }
    // toast.success("Thank you for your interest! We'll notify you when capacity becomes available.", {
    //   position: "bottom-center"
    // });
    toast.success(
      <div>
        Thank you for your interest!
        <br />
        <br />
        We'll notify you when capacity becomes available.
      </div>,
      {
        position: "bottom-center",
      }
    );
  };

  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <button
              onClick={goToHome}
              style={{
                fontFamily: "Palatino Linotype, serif",
                fontWeight: "bold",
                fontSize: "32px",
                border: "transparent",
                backgroundColor: "transparent",
              }}
            >
              Virgil
            </button>
            <Link to="how-it-works" className="nav-link">
              How it Works
            </Link>
            <Link to="join-our-waitlist" className="nav-link">
              What's Included
            </Link>
            <button
              className="nav-link"
              onClick={goToDemo}
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              Try it out
            </button>
          </ul>
          <ul className="nav-waitlist">
            <Link to="join-our-waitlist" className="nav-link-waitlist">
              Join Waitlist
            </Link>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Element name="about-us" className="centered-flexbox">
          <div className="about-us-flex-container">
            <section className="about-us-text-container">
              <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
                Your parents can't live forever.
                <br />
                But their <span className="gradient-text">story</span> can.
              </h1>
              <p className="feature-description">
                The Virgil Vault is a digital biography that preserves your
                loved one's life story - in their own voice.
              </p>
              <div className="about-us-buttons-container">
                <Link
                  to="join-our-waitlist"
                  className="cta-button"
                  style={{ backgroundColor: "#FFDE62" }}
                >
                  Join Our Waitlist
                </Link>
                <Link
                  to="explore-demo"
                  className="cta-button"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #FFA500",
                  }}
                >
                  Explore demo
                </Link>
              </div>
              <div className="about-us-scroll">
                <Link to="how-it-works" className="about-us-scroll-link">
                  <img src={downArrow} alt="Down arrow" />
                  Scroll to learn more
                </Link>
              </div>
            </section>

            <img
              src={newLandingImage}
              alt="Grouped landing image"
              style={{ width: "40%", height: "auto" }}
            />
          </div>
        </Element>
        <Element
          name="the-virgil-voyage"
          className="centered-flexbox"
          id="waitlist"
        >
          <div className="content-holder">
            <div className="title-holder">
              <div className="title-background-grdient">
                <h1 className="section-title">The Virgil Voyage</h1>
                <p className="voyage-description">
                  How we capture your loved one's story
                </p>
              </div>
            </div>
            <div className="virgil-voyage-holder">
              <VirgilVoyage />
            </div>
          </div>
        </Element>
        <Element
          name="the-virgil-vault"
          className="centered-flexbox"
          id="waitlist"
        >
          <div className="content-holder">
            <div className="title-holder">
              <div className="title-background-grdient">
                <h1
                  style={{
                    fontSize: "48px",
                  }}
                >
                  The Virgil Vault{" "}
                </h1>
                <p className="voyage-description">
                  How we preserve their story for generations to come{" "}
                </p>
              </div>
            </div>

            <div className="about-us-flex-container">
              <img
                src={VirgilVaultImage}
                alt="Grouped landing image"
                style={{ width: "60%", height: "auto" }}
              />
              <section className="virgil-vault-text-container">
                <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
                  Don't read their story. <br></br>
                  Hear them tell it.
                </h1>
                <p className="vault-description">
                  Your loved one’s voice is the center of the Virgil Vault — so
                  you can preserve their authentic personality forever.
                </p>
              </section>
            </div>
          </div>
        </Element>
        <Element name="how-it-works" className="centered-flexbox">
          <div className="content-holder">
            <div className="title-holder">
              <div className="title-background-grdient">
                <h1 className="section-title">What's Included</h1>
              </div>
            </div>
            <div className="virgil-voyage-holder">
              <Included />
            </div>
          </div>
        </Element>
        <Element
          name="join-our-waitlist"
          className="centered-flexbox"
          id="waitlist"
        >
          <div className="content-holder">
            <div className="title-holder">
              <div className="title-background-grdient">
                <h1 className="section-title">Join Our Waitlist</h1>
              </div>
            </div>
            <div className="waitlist-holder">
              <div
                className="virgil-vault"
                style={{
                  backgroundImage: `url(${whatsIncludedBigBg})`,
                  backgroundSize: "cover cover", // Cover ensures the background covers the whole area
                  backgroundPosition: "center", // Center the image within the element
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="virgil-vault-holder">
                  <div className="virgil-vault-header-holder">
                    <div className="virgil-vault-header">
                      <h1 style={{ fontSize: "24px" }}>Virgil Vault</h1>
                      <p>For your loved one</p>
                      <h1
                        clasName="virgil-vault-price"
                        style={{ fontSize: "36px", marginTop: "30px" }}
                      >
                        $995
                      </h1>
                    </div>
                  </div>
                  <div className="virgil-vault-includes">
                    <h3>Includes:</h3>

                    <ul>
                      <li>
                        Virgil Vault — an interactive archive that merges their
                        voice with photos, videos, and more
                      </li>
                      <br></br>
                      <li>
                        10 hours of conversational interviews — enough to
                        capture their entire life story!
                      </li>
                      <br></br>
                      <li>High-fidelity audio and video recordings</li>
                      <br></br>

                      <li>
                        Searchable video library to easily find specific
                        memories
                      </li>
                      <br></br>

                      <li>
                        A personal historian who will guide your family through
                        the entire process
                      </li>
                      <br></br>

                      <li>Safe, secure, and private to you and your family</li>
                      <br></br>

                      <li>Shareable and downloadable</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
              <div
                className="waitlist-form-container"
                style={{ paddingTop: "20px" }}
              >
                <div className="waitlist-container">
                  <div className="waitlist-form-header">
                    <h1 style={{ marginBottom: "10px" }}>
                      Don't wait. Capture their story today.
                    </h1>
                    <p style={{ marginBottom: "15px" }}>
                      {" "}
                      Virgil is currently at capcity. Join the waitlist and
                      we'll reach out when space becomes available.{" "}
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="waitlist-form">
                    <label>
                      Full Name *
                      <input
                        type="text"
                        value={fullName}
                        onChange={handleChangeName}
                        required
                      />
                    </label>
                    <label>
                      Email Address *
                      <input
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        required
                      />
                    </label>
                    <label>
                      Phone Number *
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={handleChangeNumber}
                        required
                      />
                    </label>
                    <label>
                      Whose story would you like to capture?
                      {/** make default value blank*/}
                      <input
                        type="text"
                        value={subject}
                        onChange={handleChangeSubject}
                      />
                    </label>
                    <label>
                      Why are you interested in capturing their story?
                      <input
                        type="text"
                        value={motivation}
                        onChange={handleChangeMotivation}
                      />
                    </label>
                    <label>
                      How did you hear about us?
                      <select
                        value={heardFrom}
                        onChange={handleChangeDiscovery}
                      >
                        <option selected value=""></option>
                        <option value="reddit">Reddit</option>
                        <option value="facebook">Facebook/Instagram</option>
                        <option value="email">E-mail</option>
                        <option value="friend/family">Friend/Family</option>
                        <option value="seniorliving">
                          Senior Living Facility
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                    <button type="submit" className="waitlist-button">
                      Join Our Waitlist
                    </button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span> Questions? Feel free to send us a message! </span>
                    <p>
                      <a href="mailto: contact@virgil.bio">
                        contact@virgil.bio
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Element name="explore-demo" className="centered-flexbox">
          <div
            style={{
              backgroundColor: "#FFDE62",
              borderRadius: "20px",
              height: "80%",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0",
            }}
          >
            <img src={leftMacbook} alt="leftMacbook" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 style={{ fontSize: "40px" }}>Explore a Virgil Vault</h1>
              <button
                className="cta-button"
                onClick={goToDemo}
                style={{
                  backgroundColor: "transparent",
                  fontSize: "16px",
                }}
              >
                Try it out
              </button>
            </div>
            <img src={rightMacbook} alt="rightMacbook" />
          </div>
        </Element>
      </main>
      <ToastContainer
        toastStyle={{
          fontSize: "24px",
          padding: "20px",
          minHeight: "100px",
          width: "500px",
        }}
      />
    </div>
  );
}

export default Home;
