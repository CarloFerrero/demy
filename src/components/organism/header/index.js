import React from "react";
import "./style.css";
import Navbar from "../../atoms/navbar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h2 className="logo">deM</h2>
      </div>
      <div className="menu-container">
        <Navbar />
      </div>
      <div className="login-container">
        <p className="nav-link">LOGIN</p>
      </div>
    </div>
  );
};

export default Header;
