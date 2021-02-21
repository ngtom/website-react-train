import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import myVideo2 from "../videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src={myVideo2} autoPlay loop muted /> */}
      <h1>Dazzle</h1>
      <p>A life changing experience</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
