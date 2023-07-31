import React from "react";
import "./Videos.css";
import stockAnimation from "../materials/v1.mp4";
import Bull from "../materials/bull.png";
import AboutIt from "../components/AboutIt"
export default function Videos() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={stockAnimation} type="video/mp4"></source>
      </video>
      <div className="content">
        <h1>
          <img src={Bull} className="img" alt="" />
          Stock Tracker
        </h1>
        <p>
          Welcome to the Stock tracking website.
          <br />
          It is built by Claire (Weipong) for IFN666 assignment2.
        </p>
        <h6>
          <AboutIt/>
        </h6>
      </div>
    </div>
  );
}
