import { useState } from "react";
import aboutpic from "./assets/about-pic.png";
import "./About.css";
import "./Fonts/futura/futura-medium-bt.ttf";

function About() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      <div className="col-span-1 sm:col-span-1 lg:col-span-2">
        <a href="#" target="_blank">
          <img src={aboutpic} className="logo" alt="Image About" />
        </a>
      </div>
      <div className="card col-span-1 sm:col-span-1 lg:col-span-2 flex justify-center items-center">
        <h1 className="font-face-gm">About Image</h1>
        <p className="font-face-gm">
          Established in 1993, Image is a leading high-street fashion brand.
          Popularly known as Image in the fashion & retail landscape,
          specialises in Schiffli embroidery in Pakistan, and embodies a
          distinctive aesthetic that blends heritage and innovation for the
          minimalist woman. It is celebrated for being the first retail brand to
          give Chikankari ensembles as a Ready-to-Wear offering.
        </p>
      </div>
    </div>
  );
}

export default About;
