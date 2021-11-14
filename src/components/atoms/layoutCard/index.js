import React, { useState } from "react";
import { Dot } from "../../index";
import { useHistory } from "react-router-dom";
import "./style.css";

//ant
import { Card, Popover } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  CopyOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

//utils
import { EditLayout, copyToClipboard, DeleteLayout } from "../../../utils";

const { Meta } = Card;

const LayoutCard = (props) => {
  const [hover, setHover] = useState(false);

  let style = {
    display: "flex",
    alignItems: "center",
    color: "#161616",
    marginTop: "0px",
  };
  if (hover) {
    style = {
      display: "flex",
      alignItems: "center",
      color: "#161616",
      marginTop: "0px",
      cursor: "pointer",
      //more Hover effect styles
    };
  }

  let projectstyle = {
    borderRadius: "16px",
    color: "#161616",
    border: "1px solid #e1e1e1",
    backgroundColor: "#fafafa",
    transition: "0.2s",
  };
  if (hover) {
    projectstyle = {
      borderRadius: "16px",
      color: "#161616",
      border: `1px solid ${props.color}`,
      backgroundColor: `${props.color}15`,

      //more Hover effect styles
    };
  }

  const history = useHistory();
  const routeChange = (pat) => {
    let path = pat;
    history.push(path);
  };

  return (
    <div className="card-wrapper">
      <div className="layout-card">
        <Card
          style={projectstyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="headCard">
            <CopyOutlined
              onClick={() => navigator.clipboard.writeText(props.code)}
            />
            <DeleteOutlined
              key="setting"
              onClick={() => DeleteLayout(props.id)}
            />
          </div>
          <div className="flex mt40">
            <div className="mr5">
              <Dot color={props.color} />
            </div>
            <Meta
              style={style}
              title={props.title}
              onClick={() => routeChange(props.id)}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LayoutCard;
