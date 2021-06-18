import classes from "./footer.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faArrowRight,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.column}>
      <FontAwesomeIcon className={classes.footericon} icon={faUserCircle}/>
        <h2>About Me</h2>
        <p>
          10 years of experience in consulting with SME's, in various areas of
          business, integrated with web development knowledge are my advantage,
          which I will bring to you.
        </p>
      </div>
      <div className={classes.column}>
        <h2>My Projects</h2>

        <ul>
          <Link to="/projects/project1/">
            <li>Project - 1</li>
          </Link>
          <Link to="/projects/project2/">
            <li>Project - 2</li>
          </Link>
          <Link to="/projects/project3/">
            <li>Project - 3</li>
          </Link>
          <Link to="/projects/project4/">
            <li>Project - 4</li>
          </Link>
        </ul>
      </div>
      <div className={classes.column}>
        <h2>Contact Me</h2>
        <h3 className={classes.iconsContact}>
          <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
          <span>Serbia / Krusevac / Ulica bb</span>
        </h3>
        <h3 className={classes.iconsContact}>
          <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
          <span>budimir.milojevic@gmail.com</span>
        </h3>
        <h3 className={classes.iconsContact}>
          <FontAwesomeIcon icon={faPhone} className={classes.icon} />
          <span>064 671 10 70</span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
