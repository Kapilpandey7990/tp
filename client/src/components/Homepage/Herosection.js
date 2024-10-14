// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css"; // Make sure to create a CSS file with the same name

// Import your images and video here
import playStoreImg from "../../assets/images/play store.png"; // Adjust the path as necessary
import appStoreImg from "../../assets/images/app store.png"; // Adjust the path as necessary
import videoSrc from "../../assets/WhatsApp Video 2024-07-28 at 2.16.06 PM.mp4"; // Adjust the path as necessary
import logo1 from "../../assets/images/Trustopay Web Design/Ellipse 2.png"; // Adjust the path as necessary
import logo2 from "../../assets/images/Trustopay Web Design/Ellipse 3.png"; // Adjust the path as necessary
import logo3 from "../../assets/images/Trustopay Web Design/Ellipse 4.png"; // Adjust the path as necessary
import circleBackgroundImg from "../../assets/images/imm.png"; // Adjust the path as necessary


export default function HeroSection() {
  return (
    <section className="container main-hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero_heading">
            <h1>
              Secure Your Payments <br />
              Grow Your Business
            </h1>
            <h3 id="changing-text">Freelancer</h3>
            <p>India's Leading Escrow Platform For B2C and B2B Transactions.</p>
            <div className="info">
              <div className="partnered-agencies">
                <div className="logo-stack">
                  <img src={logo1} alt="Logo 1" className="logo" />
                  <img src={logo2} alt="Logo 2" className="logo" />
                  <img src={logo3} alt="Logo 3" className="logo" />
                </div>
                <span>
                  40+ <br />
                  Partnered Agencies
                </span>
              </div>
              <div className="bank-info">
                <p>Your Money is in an RBI Licensed Bank</p>
                <div className="app-buttons">
                  <a href="#">
                    <img src={playStoreImg} alt="Google Play" />
                  </a>
                  <a href="#">
                    <img src={appStoreImg} alt="App Store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="video-wrapper">
            <div
              className="circle-background"
              style={{ backgroundImage: `url(${circleBackgroundImg})` }}
            ></div>
            <video id="hero-video" autoPlay muted loop>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
