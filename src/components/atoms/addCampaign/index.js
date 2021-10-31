import React from "react";

import { SectionTitle } from "../../index";
import { ClickCampaign } from "../../../utils";

//antd design
import { Button } from "antd";

const AddComponent = (props) => {
  return (
    <div>
      <div className="main">
        <div className="flex-horizontal">
          <SectionTitle title="Campagne" />
          <Button variant="outlined" type="submit" onClick={ClickCampaign}>
            Nuova campagna
          </Button>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default AddComponent;
