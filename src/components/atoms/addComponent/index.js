import React from "react";
import "./style.css";

import { ClickComponent } from "../../../utils";

//antd design
import { Button } from "antd";

const AddComponent = (props) => {
  return (
    <div>
      <div className="main">
        <div className="flex-horizontal">
          <h2 className="sec-title">{props.title}</h2>
          <Button variant="outlined" type="submit" onClick={ClickComponent}>
            Aggiungi componente
          </Button>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default AddComponent;
