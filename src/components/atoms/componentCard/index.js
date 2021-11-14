import React, { useState, useEffect } from "react";
import { Dot } from "../../index";
import { useHistory } from "react-router-dom";
import "./style.css";

//ant
import { Card } from "antd";
import { DeleteOutlined, CopyOutlined } from "@ant-design/icons";

//utils
import { DeleteComponent } from "../../../utils";

//firestore
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import db from "../../../firebase";

const { Meta } = Card;

const ComponentCard = (props) => {
  const [Component, setComponent] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Component"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setComponent(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

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
    };
  }

  const history = useHistory();

  const routeChange = (pat) => {
    let path = pat;
    history.push(path);
  };

  return (
    <div className="card-wrapper">
      <Card
        style={projectstyle}
        className="card-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        id={props.id}
      >
        <div className="headCard">
          <CopyOutlined
            onClick={() => navigator.clipboard.writeText(props.code)}
          />
          <DeleteOutlined
            key="setting"
            onClick={() => DeleteComponent(props.id)}
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
  );
};

export default ComponentCard;
