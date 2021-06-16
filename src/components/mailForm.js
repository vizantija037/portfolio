import classes from "./mailForm.module.css";
import "../index.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

function MailForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_px2amt1",
        "template_dog6vbi",
        e.target,
        "user_fBm9eMPLnBHE6AfKbqKI1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      alert("\n\n MESSAGE SENT");
      e.target.reset();
  }
  return (
    <div className={classes.row}>
      <form className={classes.form} action="" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" placeholder="Enter name" name="name" required></input>
        <label>Email</label>
        <input type="email" placeholder="Enter mail address" name="email" required></input>
        <label>Message</label>
        <textarea placeholder="Enter message" name="message" required></textarea>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MailForm;
