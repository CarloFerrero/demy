import React from "react";
import "./style.css";

import { ClickLayout } from "../../../utils";

//antd design
import { Button } from "antd";

const AddLayout = (props) => {
  return (
    <div>
      <div className="main">
        <div className="flex-horizontal">
          <h2>{props.title}</h2>
          <Button variant="outlined" type="submit" onClick={ClickLayout}>
            Aggiungi layout
          </Button>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default AddLayout;
