import classes from "./header.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
      setActive(!isActive); 
     };
    

  return (
    <div className={classes.fixedHeader}>
      <div className={classes.flexHeader}>
        <div className={classes.logo}>
        <FontAwesomeIcon icon={faUserCircle}/>
         <span>My Portfolio</span>
        </div>
        
        <div className={classes.navigation}>
          <ul className={isActive ? classes.listHeader : classes.listHeaderHidden}>
            <Link to="/" onClick={ToggleClass}>
              <li>About Me</li>
            </Link>
            <Link to="/projects" onClick={ToggleClass}>
              <li>Projects</li>
            </Link>
            <Link to="/contact" onClick={ToggleClass}>
              <li>Contact</li>
            </Link>
          </ul>
       
        </div>
        
        <Link to="#">
          <div className={classes.burger} onClick={ToggleClass}>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
