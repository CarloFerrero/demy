import React, { useEffect, useState } from "react";
import "./style.css";

//firestore
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import db from "../../firebase";

// Component import
import {
  SectionTitle,
  AddLayout,
  AddComponent,
  ProjectCard,
  ComponentCard,
  LayoutCard,
} from "../../components/index";
import { FireTwoTone } from "@ant-design/icons";

const DashboardMain = (props) => {
  const [Progetti, setProgetti] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Progetti"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setProgetti(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const [Component, setComponent] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Component"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setComponent(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const [Layout, setLayout] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Layout"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setLayout(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  return (
    <div>
      <div className="space"></div>
      <SectionTitle
        title="Progetti"
        icon={<FireTwoTone twoToneColor="#4353ff" className="icon-title" />}
      />
      <hr className="line" />
      <div className="main">
        <div className="project-wrapper">
          {Progetti.map((item) => (
            <ProjectCard
              title={item.titolo}
              color={item.colore}
              id={item.id}
              bgImg={item.bgImg}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className="space40"></div>
      <AddComponent title="Componenti" />
      <div className="main">
        <div className="component-wrapper">
          {Component.map((item) => (
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
          {Layout.map((item) => (
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

export default DashboardMain;
