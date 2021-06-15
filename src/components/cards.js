import classes from "./cards.module.css";
import "../index.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cards({ heading, image, description, technology, task, address }) {
  return (
    <div className={classes.cardFrame}>
      <div className={classes.cardHeading}>
        <h2>{heading}</h2>
      </div>
      <div className={classes.leftCard}>
        <div className={classes.cardImage}>
          <img className={classes.imageProps} src={image}></img>
        </div>
      </div>
      <div className={classes.rightCard}>

        <div className={classes.cardDescription}>
          <p>{description}</p>
          <p>{technology}</p>
          <p>{task}</p>
        </div>
      </div>
      <div className={classes.buttonDiv}>
        <Link to={address} className={classes.cardButton} target="_blank">
          Live Preview
        </Link>
      </div>
    </div>
  );
}

export default Cards;
