import React from "react";
import { Dot } from "../../index";
import { useHistory } from "react-router-dom";
import "./style.css";

//ant
import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

//utils
import { EditProgetti, DeleteProgetti } from "../../../utils";

const { Meta } = Card;

const ProjectCard = (props) => {
  const style = {
    display: "flex",
    alignItems: "center",
    margin: "0px",
    padding: "0px",
  };

  const history = useHistory();

  const routeChange = (pat) => {
    let path = pat;
    history.push(path);
  };

  return (
    <div className="card-wrapper">
      <Card
        className="project-card"
        cover={<img alt="example" src={props.bgImg} />}
        actions={[
          <DeleteOutlined
            key="setting"
            onClick={() => DeleteProgetti(props.id)}
          />,
          <EditOutlined key="edit" onClick={() => routeChange(props.id)} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          style={style}
          avatar={<Dot color={props.color} />}
          title={props.title}
        />
      </Card>
    </div>
  );
};

export default ProjectCard;
