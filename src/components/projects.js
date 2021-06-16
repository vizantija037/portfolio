import classes from "./projects.module.css";
import React from "react";
import Cards from "./cards";
import { useState } from "react";
import ProjectsData from '../ProjectsData';


function Projects() {
  const [cards, setCards] = useState(ProjectsData);
  return (
    <div className="pageContainer">
      <h1>My Projects</h1>
      <div className={classes.cardsRow}>
        {cards.map((card) => (
          <Cards
            key={card.heading}
            heading={card.heading}
            image={card.image}
            description={card.description}
            address={card.address}
            technology={card.technology}
            task={card.task}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
