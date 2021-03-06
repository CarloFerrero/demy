import React, { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

import { Form, Input, Button, Select, Cascader } from "antd";
import "./style.css";
import "../../theme.css";

//firestore
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import db from "../../firebase";
import HeaderDev from "../../components/organism/headerDev";

const { Option } = Select;

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [Title, setTitle] = useState([]);
  const [Colore, setColore] = useState([]);
  const [ProjectID, setProjectID] = useState([]);
  const [Progetti, setProgetti] = useState([]);
  const [SubCategory, setSubCategory] = useState("");

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
  const handleValue = async () => {
    const titolo = Title;
    const projectID = ProjectID;
    const colore = Colore;
    const code = editorRef.current.getValue();
    const collectionRef = collection(db, SubCategory);
    const payload = {
      titolo,
      projectID,
      code,
      colore,
      timestamp: serverTimestamp(),
    };
    await addDoc(collectionRef, payload);
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
            defaultValue="// some comment"
            onMount={handleEditorDidMount}
          />
          <Form id="form-dev" size="middle" layout="vertical">
            <div className="topForm">
              <Form.Item className="form-item">
                <div className="mb5">
                  <label className="label">Title</label>
                </div>
                <Input
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
                    onChange={handleSubCategory}
                    autoClearSearchValue={true}
                  >
                    <Option value="Campaign">Campaign</Option>
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
                    Salva
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

export default CodeEditor;
