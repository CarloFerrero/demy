import React from "react";
import "./style.css";

const SectionTitle = (props) => {
  return (
    <div>
      <div className="main">
        <h2 className="sec-title">{props.title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
