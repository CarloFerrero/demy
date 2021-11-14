import React, { useEffect, useState } from "react";
import "./style.css";

//firestore
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import db from "../../firebase";

// Component import
import {
  AddCampaign,
  CampaignCard,
  //SliderHome,
  AddComponent,
  AddLayout,
  ComponentCard,
  LayoutCard,
} from "../../components/index";

//ant breadcrumbs
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const DashboardSingle = (props) => {
  const title = props.projectTitle;
  const [Component, setComponent] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Component"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setComponent(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const filteredComponent = Component.filter(
    (item) => item.projectID === props.projectID
  );

  const [Layout, setLayout] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Layout"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setLayout(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const filteredLayout = Layout.filter(
    (item) => item.projectID === props.projectID
  );

  const [Campagne, setCampagne] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Campagne"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setCampagne(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const filteredCampagne = Campagne.filter(
    (item) => item.projectID === props.projectID
  );

  return (
    <div>
      {/*<SliderHome />*/}
      <div className="bredcrumbBar">
        <Breadcrumb>
          <Breadcrumb.Item href="http://localhost:3000">
            <HomeOutlined />
            <span>Dashboard main</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <span>{title}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="space"></div>
      <AddCampaign />
      <div className="main">
        <div className="project-wrapper">
          {filteredCampagne.map((item) => (
            <CampaignCard
              title={item.titolo}
              id={item.id}
              key={item.id}
              code={item.code}
              category={item.category}
              color={item.colore}
            />
          ))}
        </div>
      </div>
      <div className="space40"></div>
      <AddComponent title="Componenti" />
      <div className="main">
        <div className="component-wrapper">
          {filteredComponent.map((item) => (
            <ComponentCard
              title={item.titolo}
              key={item.id}
              id={item.id}
              color={item.colore}
              code={item.code}
            />
          ))}
        </div>
      </div>
      <div className="space40"></div>
      <AddLayout title="Layout" />
      <div className="main">
        <div className="layout-wrapper">
          {filteredLayout.map((item) => (
            <LayoutCard
              title={item.titolo}
              key={item.id}
              id={item.id}
              color={item.colore}
              code={item.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSingle;
