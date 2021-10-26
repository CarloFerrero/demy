import React from "react";
import "./style.css";
// Component import
import { SectionTitle, AddProjectCard } from "../../components";

const DashboardMain = (props) => {
  const ProjectUpdated = props.project;

  return (
    <div>
      <div className="space"></div>
      <SectionTitle title="Progetti" />
      <div className="main">
        <div className="project-wrapper">
          <AddProjectCard />
          {ProjectUpdated}
        </div>
      </div>
      {/*<SectionTitle title="Componenti" />
      <ComponentCard />
      <SectionTitle title="Layout" />
      <LayoutCard />
      <SectionTitle title="Partial" />
  <LayoutCard />*/}
    </div>
  );
};

export default DashboardMain;
