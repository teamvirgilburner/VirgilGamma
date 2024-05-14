import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";
import VirgilVoyage from "./VirgilVoyage";
import Included from "./Included";
import UnifiedButton from "./UnifiedButton";
import VirgilVault from "./VirgilVault";
import ExplorVaultBG from "../images/explore-vault-bg.png";

import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

import whatsIncludedBigBg from "../images/whats-included-big-bg.png";
import downArrow from "../images/down-arrow.png";
import newLandingImage from "../images/new-landing-image.png";
import leftMacbook from "../images/left.png";
import rightMacbook from "../images/right.png";

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

  const [currentWord, setCurrentWord] = useState("story");
  const words = ["story", "voice", "legacy", "jokes", "wisdom", "laugh"];
  const [fade, setFade] = useState(false);

  // Function to handle the change in dropdown
  const handleChangeDiscovery = (event) => {
    setSelectedValue(event.target.value); // Update the state with new value
    console.log(event.target.value);
  };

  function isElementCentered(elem) {
    const rect = elem.getBoundingClientRect();
    const elemCenter = (rect.top + rect.bottom) / 2;
    const viewportCenter = window.innerHeight / 2;
    const isCentered = Math.abs(elemCenter - viewportCenter) <= 50; // Consider centered if within 50px of viewport center
    console.log(
      `Element center: ${elemCenter}, Viewport center: ${viewportCenter}, Is centered: ${isCentered}`
    );
    return isCentered;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true); // Trigger fade out
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setFade(false); // Reset fade for next cycle
      }, 1000); // Half the interval to fade out, then change the word
    }, 2500);

    return () => clearInterval(intervalId);
  });

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
            <button onClick={goToHome} className="header-logo">
              Virgil
            </button>
            <UnifiedButton to="#whats-included" label="What's included" />
            <UnifiedButton to="#the-virgil-voyage" label="How It Works" />
            <UnifiedButton
              to="/demo"
              label="Explore Demo"
              external={true}
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            />
          </ul>
          <ul className="nav-waitlist">
            <UnifiedButton
              to="#join-our-waitlist"
              label="Join Our Waitlist"
              className="yellow-rectangular-button"
            />
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Element name="about-us" className="centered-flexbox" id="about-us">
          <div className="about-us-flex-container">
            <section className="about-us-text-container">
              <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
                Your parents can't live forever.
                <br />
                But their{" "}
                <span className={fade ? "fade" : "fade-in"}>
                  {currentWord}
                </span>{" "}
                can.
              </h1>
              <p className="feature-description">
                The Virgil Vault is a digital memoir that preserves your loved
                one's life story - in their own voice.
              </p>
              <div className="about-us-buttons-container">
                <UnifiedButton
                  to="#join-our-waitlist"
                  label="Join Our Waitlist"
                  className="yellow-round-button"
                />
                <UnifiedButton
                  to="/demo"
                  label="Explore Demo"
                  className="transparent-round-button"
                  external={true}
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
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
              alt="Grouped landing"
              style={{ width: "40%", height: "auto" }}
            />
          </div>
        </Element>
        <Element
          name="the-virgil-voyage"
          className="centered-flexbox"
          id="the-virgil-voyage"
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
            <div className="virgil-voyage-holder" id="myCarousel">
              <VirgilVoyage />
            </div>
          </div>
        </Element>
        <Element
          name="the-virgil-vault"
          className="centered-flexbox"
          id="the-virgil-vault"
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

            <VirgilVault />
            <UnifiedButton
              to="/demo"
              label="Explore Demo"
              className="yellow-round-button-test"
              external={true}
              style={{
                marginTop: "30px",
              }}
            />
          </div>
        </Element>
        <Element
          name="whats-included"
          className="centered-flexbox"
          id="whats-included"
        >
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
          id="join-our-waitlist"
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
                        Up to 8 hours of conversational interviews - enough to
                        capture their entire life story!
                      </li>
                      <br></br>
                      <li>High-fidelity audio and video recordings</li>
                      <br></br>
                      <li>
                        An interactive memoir that merges their voice with
                        phots, videos, and more
                      </li>
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

                      <li>
                        1 year of access to the Virgil Vault - then $79/yr
                      </li>
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
        <Element
          name="explore-demo"
          className="centered-flexbox"
          id="explore-demo"
        >
          <div
            style={{
              position: "relative",
              width: "100%", // Adjust width as needed
              height: "auto",
            }}
          >
            <img
              src={ExplorVaultBG}
              style={{
                width: "100%", // Ensure image takes up full width of the container
                height: "auto",
                borderRadius: "20px", // Apply border radius to image
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontSize: "40px", margin: "0", color: "#000" }}>
                {" "}
                {/* Adjust color as needed */}
                Explore a Virgil Vault
              </h1>
              <button
                className="cta-button"
                onClick={goToDemo}
                style={{
                  marginTop: "10px",
                  backgroundColor: "#FFDE62",
                  border: "1px solid black",
                  borderRadius: "5px",
                  fontSize: "16px",
                  padding: "10px 20px",
                }}
              >
                Try it out
              </button>
            </div>
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
