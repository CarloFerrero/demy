import React, { useState } from "react";
import { Dot } from "../../index";
import "./style.css";

const ProjectCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="project-card"></div>
      <div className="flex-title">
        <Dot color={props.color} />
        <a href="www.google.com" target="_blank" className="link-title">
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
