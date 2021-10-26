import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="foot-container">
        <div className="col-container">
          <h2 className="foot-title">Learn & Get Help</h2>
          <a href="www.google.com" className="foot-link">
            Support
          </a>
          <a href="www.google.com" className="foot-link">
            University
          </a>
          <a href="www.google.com" className="foot-link">
            Blog
          </a>
          <a href="www.google.com" className="foot-link">
            Forum
          </a>
        </div>
        <div className="col-container">
          <h2 className="foot-title">Terms & Condition</h2>
          <a href="www.google.com" className="foot-link">
            Terms of service
          </a>
          <a href="www.google.com" className="foot-link">
            Privacy Policy
          </a>
          <a href="www.google.com" className="foot-link">
            Cookie Policy
          </a>
          <a href="www.google.com" className="foot-link">
            Change cookie settings
          </a>
        </div>
        <div className="col-container">
          <h2 className="foot-title">Social</h2>
          <a href="www.google.com" className="foot-link">
            Instagram
          </a>
          <a href="www.google.com" className="foot-link">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
