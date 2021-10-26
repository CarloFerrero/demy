import React from "react";
import "./style.css";

const SectionTitle = (props) => {
  return (
    <div>
      <div className="main">
        <h2 className="sec-title">{props.title}</h2>
      </div>
      <hr className="line" />
    </div>
  );
};

export default SectionTitle;
