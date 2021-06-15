import classes from "./home.module.css";
import "../index.css";
import React from "react";
import { useState } from "react";
import home1 from "../images/home1.jpg";
import { Link } from "react-router-dom";
import Cards from './cards';

function Home() {
  const [isActive, setActive] = useState(true);
  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="pageContainer">
      <h1>About Me </h1>
      <br />
      <div className={classes.row}>
        <div className={classes.leftDiv}>
          <p>
            10 years of experience in consulting with SME's, in various areas of
            business, integrated with web development knowledge, is my biggest
            competitive advantage, which I will bring to you.
          </p>
          <button
            className={classes.contactbutton}
            onMouseOver={ToggleClass}
            onMouseOut={ToggleClass}
          >
            <Link to="/contact">Contact Me</Link>
          </button>
        </div>
        <div className={isActive ? classes.rightDiv : classes.rightDivAction}>
          <p className={classes.textoverimage}>
            Thank you for considering me !
          </p>
        </div>
      </div>
      <div className={classes.row}>
      <h1>My Learning Timeline</h1>
      </div>
    </div>
  );
}

export default Home;
