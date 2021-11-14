import React, { useState } from "react";
import { Dot } from "../../index";
import { useHistory } from "react-router-dom";
import "./style.css";
import "../../../theme.css";

//ant
import { Card } from "antd";
import { Skeleton, Switch, Avatar } from "antd";
import { EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import {
  EditOutlined,
  //EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Modal, Button, Space } from "antd";
import {
  ExclamationCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

//utils
import { EditProgetti, DeleteProgetti } from "../../../utils";

const { Meta } = Card;
const { confirm } = Modal;

const ProjectCard = (props) => {
  const style = {
    display: "flex",
    alignItems: "center",
    color: "#161616",
    marginTop: "0px",
    padding: "0px",
  };

  const projectstyle = {
    borderRadius: "16px",
    color: "#161616",
    border: "1px solid #e1e1e1",
    backgroundColor: "#fafafa",
  };

  const history = useHistory();

  const routeChange = (pat) => {
    let path = pat;
    history.push(path);
  };

  function showDeleteConfirm(itemID) {
    confirm({
      title: "Sei sicuro di voler cancellare il progetto?",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      closable: true,
      maskClosable: true,
      maskStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(2px)",
      },
      closeIcon: <CloseCircleOutlined />,
      content:
        "Una volta cancellato non potrai più accedere ai contenuti presenti all'interno del progetto",
      okText: "Sì, sono sicuro",
      okType: "danger",
      cancelText: "No, torna indietro",
      onOk() {
        DeleteProgetti(itemID);
      },
      onCancel() {},
    });
  }

  return (
    <div className="card-wrapper">
      <Card
        style={projectstyle}
        //cover={<img alt="example" src={props.bgImg} />}
        //actions={[
        //  <DeleteOutlined
        //    key="setting"
        //    onClick={() => DeleteProgetti(props.id)}
        //  />,
        //  <EditOutlined key="edit" onClick={() => routeChange(props.id)} />,
        //  <EllipsisOutlined key="ellipsis" onClick={() => routeChange(props.id)} />,
        // ]}
      >
        <div className="align-right">
          <EditOutlined key="edit" onClick={() => routeChange(props.id)} />
          <DeleteOutlined
            key="setting"
            onClick={() => showDeleteConfirm(props.id)}
          />
        </div>
        <div className="flex mt40">
          <div className="mr5">
            <Dot color={props.color} />
          </div>
          <Meta style={style} title={props.title} />
        </div>
        12 Component
      </Card>
    </div>
  );
};

export default ProjectCard;
