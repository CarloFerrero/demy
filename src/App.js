import React, { useState, useEffect } from "react";

//antd import
import "./theme.css";

//firestore
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import db from "./firebase";

//components
import {
  AddProjectBar,
  Footer,
  Header,
  ProjectCard,
  SearchBarTitle,
} from "./components/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CodeEditor,
  Designer,
  DashboardMain,
  DashboardSingle,
} from "./pages/index";

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
      setProjectID(snapshot.docs.map((doc) => ({ id: doc.id })));
    });
    return unsub;
  }, []);

  const handleProjectID = ProjectID;

  return (
    <div>
      <Router>
        {/* <Header /> */}
        <div>
          {state === "SearchBarTitle" && (
            <SearchBarTitle changeBar={() => setState("AddProjectBar")} />
          )}
          {state === "AddProjectBar" && (
            <AddProjectBar
              addProject={(newProject) => setProject([...project, newProject])}
              changeBar={() => setState("SearchBarTitle")}
            />
          )}
        </div>
        <Switch>
          <Route path="/code-editor">
            <CodeEditor />
          </Route>
          <Route path="/designer">
            <Designer />
          </Route>
          <Route exact path="/">
            <DashboardMain project={listProjectCard} />
          </Route>
          {handleProjectID.map((projectID) => (
            <Route exact path={"/" + projectID.id}>
              <DashboardSingle projectID={projectID.id} />
            </Route>
          ))}
          <Route exact path="/ciao">
            <DashboardSingle />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
