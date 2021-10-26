import React from "react";
import "./style.css";

const ProjectCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="project-card"></div>
      <div className="flex-title">
        <div className={props.color}></div>
        <a href="www.google.com" target="_blank" className="link-title">
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
