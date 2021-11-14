import React, { useState, useEffect } from "react";
import "./style.css";

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import db from "../../../firebase";

// import { ClickComponent } from "../../../utils";

//antd design
import { Button, Modal } from "antd";
import { RocketTwoTone, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Select, Switch } from "antd";

const { Option } = Select;

const AddLayout = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Title, setTitle] = useState([]);
  const [ProjectID, setProjectID] = useState([]);
  const [Progetti, setProgetti] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (value) => {
    setProjectID(value);
  };

  useEffect(() => {
    const q = query(collection(db, "Progetti"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setProgetti(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const children = Progetti.map((item) => (
    <Option value={item.id}>{item.titolo}</Option>
  ));

  const filteredColorByID = Progetti.filter((item) => item.id === ProjectID);

  const singleColor = filteredColorByID.map((item) => item.colore);

  const AddLayout = async () => {
    const titolo = Title;
    const projectID = ProjectID;
    const colore = singleColor;
    const collectionRef = collection(db, "Layout");
    const payload = { titolo, projectID, colore, timestamp: serverTimestamp() };
    await addDoc(collectionRef, payload);
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="main">
        <div className="flex-horizontal">
          <div className="title-wrapper">
            <RocketTwoTone twoToneColor="#4353ff" className="icon-title" />
            <h2 className="sec-title">{props.title}</h2>
          </div>
          <div>
            <Button type="primary" shape="round" onClick={showModal}>
              Add new
            </Button>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={AddLayout}
              onCancel={handleCancel}
            >
              <Form layout="vertical" size="middle">
                <Form.Item label="Titolo">
                  <Input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item label="Project">
                  <Select
                    style={{ width: 200 }}
                    placeholder="Category"
                    onChange={handleChange}
                    autoClearSearchValue={true}
                    allowClear
                    dropdownRender={(menu) => (
                      <div>
                        {menu}
                        <Button type="link">Add Project</Button>
                      </div>
                    )}
                  >
                    {children}
                  </Select>
                </Form.Item>
                <Form.Item label="Make it global" valuePropName="checked">
                  <Switch />
                </Form.Item>
              </Form>
            </Modal>

            <Button type="link">
              See all
              <PlusOutlined />
            </Button>
          </div>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default AddLayout;
