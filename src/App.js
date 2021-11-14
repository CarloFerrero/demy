import React, { useState, useEffect } from "react";

//antd import
import "./theme.css";

//firestore
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import db from "./firebase";

//components
import {
  AddProjectBar,
  //Footer,
  Header,
  ProjectCard,
  SearchBarTitle,
} from "./components/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CodeEditor,
  CodeEditorSingle,
  Designer,
  DashboardMain,
  DashboardSingle,
} from "./pages/index";

import DashboardMainV2 from "./pages/dashboardMainV2";
import Layout from "antd/lib/layout/layout";

const App = () => {
  const [project, setProject] = useState([]);
  const [state, setState] = useState("SearchBarTitle");

  const listProjectCard = project.map((prop) => (
    <ProjectCard
      title={prop.title}
      color={prop.color}
      bgImg={prop.bgImg}
      id={prop.id}
      key={prop.id}
    />
  ));

  const [ProjectID, setProjectID] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Progetti"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setProjectID(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const handleProjectID = ProjectID;

  const [LayoutID, setLayoutID] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Layout"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setLayoutID(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const handleLayoutID = LayoutID;

  const [ComponentID, setComponentID] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Component"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setComponentID(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

  const handleComponentID = ComponentID;

  const [CampagneID, setCampagneID] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Campagne"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setCampagneID(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

  const handleCampagneID = CampagneID;

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/code-editor" component={CodeEditor} />
          <Route path="/designer" component={Designer} />
          <Route path="/dashboardV2" component={DashboardMainV2} />
          <Route exact path="/">
            <Header />
            <div>
              {state === "SearchBarTitle" && (
                <SearchBarTitle changeBar={() => setState("AddProjectBar")} />
              )}
              {state === "AddProjectBar" && (
                <AddProjectBar
                  addProject={(newProject) =>
                    setProject([...project, newProject])
                  }
                  changeBar={() => setState("SearchBarTitle")}
                />
              )}
            </div>
            <DashboardMain project={listProjectCard} />
          </Route>
          {handleProjectID.map((projectID) => (
            <Route exact path={"/" + projectID.id}>
              <DashboardSingle
                projectID={projectID.id}
                key={projectID.id}
                projectTitle={projectID.titolo}
              />
            </Route>
          ))}
          {handleLayoutID.map((LayoutID) => (
            <Route exact path={"/" + LayoutID.id}>
              <CodeEditorSingle
                title={LayoutID.titolo}
                projectID={LayoutID.projectID}
                subcategory={LayoutID.subcategory}
                code={LayoutID.code}
                key={LayoutID.id}
                id={LayoutID.id}
                color={LayoutID.colore}
                projectTitle={LayoutID.projectTitle}
              />
            </Route>
          ))}
          {handleComponentID.map((ComponentID) => (
            <Route exact path={"/" + ComponentID.id}>
              <CodeEditorSingle
                title={ComponentID.titolo}
                projectID={ComponentID.projectID}
                subcategory={ComponentID.subcategory}
                code={ComponentID.code}
                key={ComponentID.id}
                id={ComponentID.id}
                color={ComponentID.colore}
                projectTitle={ComponentID.projectTitle}
              />
            </Route>
          ))}
          {handleCampagneID.map((CampagneID) => (
            <Route exact path={"/" + CampagneID.id}>
              <CodeEditorSingle
                title={CampagneID.titolo}
                projectID={CampagneID.projectID}
                subcategory={CampagneID.subcategory}
                code={CampagneID.code}
                key={CampagneID.id}
                id={CampagneID.id}
                color={CampagneID.colore}
                projectTitle={CampagneID.projectTitle}
              />
            </Route>
          ))}
        </Switch>
        {/* <Footer />*/}
      </Router>
    </div>
  );
};

export default App;
