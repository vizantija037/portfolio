
import React from "react";
import education from "../images/education.png";
import working from "../images/working.png";
import timelineElements from "./timelineDataBase";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import  "./timeline.css";

function MyTimeline() {
  let workIconStyles = { background: "rgb(107, 138, 197)", display: "flex" };
  let educationIconStyles = { background: "#e4894d", display: "flex" };

  return (
    <div className="timelineContainer">
      <VerticalTimeline >
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "working";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
            
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : educationIconStyles}
              icon={
                isWorkIcon ? (
                  <img className="iconsTimeline" src={working} />
                ) : (
                  <img src={education} className="iconsTimeline" />
                )
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.employer}
              </h5>
              <p id="description" className="description">{element.description}</p>
              {showButton && (<a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href={element.link} target="_blank">{element.buttonText}</a>)}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default MyTimeline;
