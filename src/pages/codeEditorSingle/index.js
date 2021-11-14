import React, { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useHistory } from "react-router-dom";

import { Form, Input, Button, Select, Cascader } from "antd";
import "./style.css";
import "../../theme.css";

//firestore
import {
  collection,
  updateDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import db from "../../firebase";
import HeaderDev from "../../components/organism/headerDev";

const { Option } = Select;

const CodeEditorSingle = (props) => {
  const editorRef = useRef(null);
  const [Title, setTitle] = useState(props.title);
  const [Colore, setColore] = useState(props.color);
  const [ProjectID, setProjectID] = useState(props.projectID);
  const [Progetti, setProgetti] = useState([]);
  const [SubCategory, setSubCategory] = useState(props.subcategory);

  useEffect(() => {
    const q = query(collection(db, "Progetti"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setProgetti(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const history = useHistory();
  const routeChange = (pat) => {
    let path = pat;
    history.push(path);
  };

  const handleValue = async () => {
    const titolo = Title;
    const projectID = ProjectID;
    const colore = Colore;
    const code = editorRef.current.getValue();
    const documentRef = doc(db, SubCategory, props.id);
    const payload = {
      titolo,
      projectID,
      code,
      colore,
      timestamp: serverTimestamp(),
    };
    await updateDoc(documentRef, payload);
    await routeChange(`/${ProjectID}`);
  };

  const children = Progetti.map((item) => (
    <Option value={item.id} color={item.colore}>
      {item.titolo}
    </Option>
  ));

  const handleChange = (value, color) => {
    setProjectID(value);
    setColore(color.color);
  };
  const handleSubCategory = (value) => {
    setSubCategory(value);
  };
  const [editorTheme, seteditorTheme] = useState();
  const changeTheme = (themeColor) => {
    seteditorTheme(themeColor);
  };

  return (
    <div>
      <HeaderDev changeTheme={changeTheme} />
      <div className="dark">
        <div className="flex-top">
          <Editor
            theme={editorTheme}
            height="83vh"
            width="73%"
            defaultLanguage="html"
            defaultValue={props.code}
            onMount={handleEditorDidMount}
          />
          <Form id="form-dev" size="middle" layout="vertical">
            <div className="topForm">
              <Form.Item className="form-item">
                <div className="mb5">
                  <label className="label">Title</label>
                </div>
                <Input
                  defaultValue={props.title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item className="form-item">
                <div className="mb5">
                  <label className="label">Category</label>
                </div>
                <div>
                  <Select
                    placeholder="Category"
                    onChange={handleChange}
                    defaultValue={props.projectTitle}
                    autoClearSearchValue={true}
                    dropdownRender={(menu) => (
                      <div>
                        {menu}
                        <Button type="link">Add Project</Button>
                      </div>
                    )}
                  >
                    {children}
                  </Select>
                </div>
              </Form.Item>
              <Form.Item className="form-item">
                <div className="mb5">
                  <label className="label">Category</label>
                </div>
                <div>
                  <Select
                    placeholder="Category"
                    defaultValue={props.subcategory}
                    onChange={handleSubCategory}
                    autoClearSearchValue={true}
                  >
                    <Option value="Campagne">Campagne</Option>
                    <Option value="Component">Component</Option>
                    <Option value="Layout">Layout</Option>
                  </Select>
                </div>
              </Form.Item>
            </div>
            <div className="bottomForm">
              <Form.Item style={{ marginBottom: "0px" }}>
                <div className="btnSave">
                  <Button type="primary" onClick={handleValue}>
                    Update
                  </Button>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorSingle;
