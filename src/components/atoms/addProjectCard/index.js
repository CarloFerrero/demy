import React from "react";
import "./style.css";

const AddProjectCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="project-card add-p">
        <a href="www.google.com" className="btn-add-p-a">
          <button variant="outlined" className="btn-add-p">
            +
          </button>
        </a>
      </div>
    </div>
  );
};

export default AddProjectCard;
