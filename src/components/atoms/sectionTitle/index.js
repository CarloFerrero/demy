import React from "react";
import "./style.css";

const SectionTitle = (props) => {
  return (
    <div>
      <div className="main">
        <div className="title-wrapper">
          {props.icon}
          <h2 className="sec-title">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
