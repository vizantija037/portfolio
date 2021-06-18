import classes from "./contact.module.css";
import "../index.css";
import React from "react";
import MailForm from "./mailForm";
import { init } from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faPhone,
  faStreetView,
  faGlobeAfrica,
} from "@fortawesome/free-solid-svg-icons";

init("user_fBm9eMPLnBHE6AfKbqKI1");

function Contact() {
  return (
    <div className="pageContainer">
      <h1>Contact Me</h1>
      <div className={classes.row}>
        <div className={classes.contactInfo}>
        <span className={classes.spanData}>+381 64 671 10 70</span>
          <FontAwesomeIcon icon={faPhone} className={classes.icon} />
          <span className={classes.spanData}>Central Zone</span>
          <FontAwesomeIcon icon={faStreetView} className={classes.icon} />
          <span className={classes.spanData}>Serbia</span>
          <FontAwesomeIcon icon={faCrosshairs} className={classes.icon} />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.map}>
          <iframe
            className={classes.mapbox}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1445.0709326309839!2d21.32553313223052!3d43.582761305617886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475687e2514eea5b%3A0x72c671e38d8a2109!2z0KbQtdC90YLQsNGAIDE!5e0!3m2!1ssr!2srs!4v1623759580074!5m2!1ssr!2srs"
          ></iframe>
        </div>
        <div className={classes.rightContact}>
          <MailForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
