import React from "react";
import "./style.css";

const SelectOptionTitle = (props) => {
  const style = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: props.color,
    display: "inline-block",
    marginRight: "10px",
  };
  return (
    <>
      <div className="SelectOptionTitle">
        <span style={style}></span>
        <p>{props.nome}</p>
      </div>
    </>
  );
};

export default SelectOptionTitle;
