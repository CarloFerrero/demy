import React from "react";
import "./style.css";

const LayoutCard = () => {
  return (
    <div className="card-wrapper">
      <div className="layout-card">
        <div className="flex-title-vertical">
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="75"
              viewBox="0 0 150 75"
            >
              <g
                id="Raggruppa_133"
                data-name="Raggruppa 133"
                transform="translate(-55 -1018.5)"
              >
                <rect
                  id="Rettangolo_211"
                  data-name="Rettangolo 211"
                  width="150"
                  height="75"
                  transform="translate(55 1018.5)"
                  fill="#e4e4e4"
                />
                <rect
                  id="Rettangolo_212"
                  data-name="Rettangolo 212"
                  width="126"
                  height="75"
                  transform="translate(67 1018.5)"
                  fill="#f8f8f8"
                />
              </g>
            </svg>
          </div>
          <a href="www.google.com" target="_blank" className="component-title">
            Tuttofood
          </a>
        </div>
      </div>
    </div>
  );
};

export default LayoutCard;
