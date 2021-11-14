import React from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <span exact="true" to="/" className="nav-link-ligh">
        |
      </span>
      <Link exact="true" to="/" className="nav-link">
        dashboard
      </Link>
      <span exact="true" to="/" className="nav-link-ligh">
        |
      </span>
      <Link exact="true" to="/code-editor" className="nav-link">
        devTool
      </Link>
      <span exact="true" to="/" className="nav-link-ligh">
        |
      </span>
      <Link exact="true" to="/designer" className="nav-link">
        designer
      </Link>
    </div>
  );
};

export default Navbar;
