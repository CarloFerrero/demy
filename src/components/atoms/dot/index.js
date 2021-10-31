import React from "react";

const Dot = (props) => {
  const style = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: props.color,
    display: "inline-block",
  };
  return <span style={style}></span>;
};

export default Dot;
