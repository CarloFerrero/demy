import React from "react";
import "./style.css";
import Navbar from "../../atoms/navbar";
import { Avatar } from "antd";
import { UserOutlined, CaretDownOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/demy-9c1f7.appspot.com/o/Untitled-1.jpg?alt=media&token=70307559-1067-4795-b740-a9c1cf3626ea"
          className="logo"
          alt="logo"
        />
        <Navbar />
      </div>

      <div className="login-container">
        <div>
          <CaretDownOutlined />
          <span className="nav-link ml5">youngEto96</span>
        </div>
        <div>
          <Avatar src="https://firebasestorage.googleapis.com/v0/b/demy-9c1f7.appspot.com/o/JLkRF8ZY_400x400.png?alt=media&token=297bab8e-0852-413b-ae0a-250365c2cd23" />
        </div>
      </div>
    </div>
  );
};

export default Header;
