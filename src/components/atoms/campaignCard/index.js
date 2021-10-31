import React from "react";
import { Card } from "antd";

const CampaignCard = (props) => {
  return (
    <div className="card-wrapper">
      {" "}
      <Card
        title={props.title}
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>{props.code}</p>
      </Card>
    </div>
  );
};

export default CampaignCard;
