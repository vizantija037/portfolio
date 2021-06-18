import classes from "./home.module.css";
import React from "react";
import { useState } from "react";
import home1 from "../images/home1.jpg";
import { Link } from "react-router-dom";
import html from "../images/handsOn/html.png";
import css from "../images/handsOn/css.png";
import photoshop from "../images/handsOn/ps.png";
import bootstrap from "../images/handsOn/bootstrap.png";
import git from "../images/handsOn/git.png";
import react from "../images/handsOn/react1.png";
import ubuntu from "../images/handsOn/ubuntu.png";
import windows from "../images/handsOn/win.png";
import js from "../images/handsOn/js.png";
import MyTimeline from './timeline';


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
        <h1>Hands On</h1>
        <div className={classes.row}>
          <div className={classes.logosContainer}>
            <img
              src={html}
              className={classes.logoProps}
              data-tip
              data-for="registerTip"
              title="HTML"
            />
            <img
              src={css}
              className={classes.logoProps}
              data-tip
              data-for="registerTip"
              title="CSS"
            />
            <img
              src={js}
              className={classes.logoProps}
              data-tip
              data-for="registerTip"
              title="Java Script"
            />
            <img
              src={bootstrap}
              className={classes.logoProps}
              title="Bootstrap"
            />
            <img src={git} className={classes.logoProps} title="Git" />
            <img src={react} className={classes.logoProps} title="React JS" />
            <img
              src={photoshop}
              className={classes.logoProps}
              title="Photo Shop"
            />
            <img
              src={ubuntu}
              className={classes.logoProps}
              title="Ubuntu / Linux"
            />
            <img src={windows} className={classes.logoProps} title="Windows" />
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <h1>Personal Development Timeline</h1>
        <div className={classes.row}>

        <MyTimeline/>

        </div>
      </div>
    </div>
  );
}

export default Home;
