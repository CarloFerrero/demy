import React from "react";
import { Carousel } from "antd";

const SliderHome = () => {
  const contentStyle = {
    height: "40vh",
    color: "#fff",
    lineHeight: "40vh",
    textAlign: "center",
    background: "#191919",
  };
  return (
    <div>
      <Carousel autoplay effect="fade">
        <div className="SlideOne">
          <h3 style={contentStyle}>1</h3>
        </div>
        <div className="SlideTwo">
          <h3 style={contentStyle}>2</h3>
        </div>
        <div className="SlideThree">
          <h3 style={contentStyle}>3</h3>
        </div>
        <div className="SlideFour">
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderHome;
