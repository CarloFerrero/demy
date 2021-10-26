import React from "react";
import "./style.css";

//antd design
import { Button } from "antd";

const SearchBarTitle = (props) => {
  return (
    <div className="search-main">
      <div className="form-project">
        <div className="section-title-wrapper">
          <h2 className="new-project">Dashboard</h2>
        </div>
        <div className="addProject">
          <Button type="primary" onClick={props.changeBar}>
            Nuovo progetto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarTitle;
