import React from "react";
import "./style.css";

const ComponentCard = () => {
  return (
    <div className="card-wrapper">
      <div className="component-card">
        <div className="flex-title-vertical">
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30.496"
              height="23.302"
              viewBox="0 0 30.496 23.302"
            >
              <g
                id="Raggruppa_75"
                data-name="Raggruppa 75"
                transform="translate(-283.609 -294.534)"
              >
                <path
                  id="Tracciato_4"
                  data-name="Tracciato 4"
                  d="M283.609,296.744v18.882a2.212,2.212,0,0,0,2.21,2.21h26.076a2.212,2.212,0,0,0,2.21-2.21V296.744a2.212,2.212,0,0,0-2.21-2.21H285.819A2.212,2.212,0,0,0,283.609,296.744Zm1.369,0a.842.842,0,0,1,.841-.841h26.076a.842.842,0,0,1,.841.841v13.511l-7.965-8.649-7.287,8.048-5.772-4.4-6.733,5.83Z"
                  fill="#191919"
                />
                <path
                  id="Tracciato_5"
                  data-name="Tracciato 5"
                  d="M360.043,349.673a1.772,1.772,0,1,1-1.772-1.772A1.772,1.772,0,0,1,360.043,349.673Z"
                  transform="translate(-67.754 -49.607)"
                  fill="#191919"
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

export default ComponentCard;
