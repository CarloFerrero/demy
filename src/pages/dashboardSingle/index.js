import React, { useEffect, useState } from "react";
import "./style.css";

//firestore
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import db from "../../firebase";

// Component import
import {
  AddCampaign,
  CampaignCard,
  SliderHome,
  AddComponent,
  AddLayout,
  ComponentCard,
  LayoutCard,
} from "../../components/index";

const DashboardSingle = (props) => {
  const [Project, setProject] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "campagne"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setProject(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const filteredProject = Project.filter(
    (item) => item.projectID === props.projectID
  );

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

  return (
    <div>
      <SliderHome />
      <div className="space"></div>
      <AddCampaign />
      <div className="main">
        <div className="project-wrapper">
          {filteredProject.map((item) => (
            <CampaignCard
              title={item.titolo}
              color={item.colore}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="space40"></div>
      <AddComponent title="Componenti" />
      <div className="main">
        <div className="component-wrapper">
          {filteredComponent.map((item) => (
            <ComponentCard title={item.titolo} />
          ))}
        </div>
      </div>
      <div className="space40"></div>
      <AddLayout title="Layout" />
      <div className="main">
        <div className="layout-wrapper">
          {filteredLayout.map((item) => (
            <LayoutCard title={item.titolo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSingle;
