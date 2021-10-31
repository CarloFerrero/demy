import React from "react";
import { Dot } from "../../index";
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
  return (
    <div className="card-wrapper">
      <Card
        className="project-card"
        cover={
          <img
            alt="example"
            src="https://www.inixgroup.com/wp-content/uploads/2020/12/placeholder.png"
          />
        }
        actions={[
          <DeleteOutlined
            key="setting"
            onClick={() => DeleteProgetti(props.id)}
          />,
          <EditOutlined key="edit" onClick={() => EditProgetti(props.id)} />,
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
