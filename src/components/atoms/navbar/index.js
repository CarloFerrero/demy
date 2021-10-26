import React from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Router>
        <Link exact="true" to="/" className="nav-link">
          dashboard
        </Link>

        <Link exact="true" to="/code-editor" className="nav-link">
          devTool
        </Link>

        <Link exact="true" to="/designer" className="nav-link">
          designer
        </Link>
      </Router>
    </div>
  );
};

export default Navbar;
