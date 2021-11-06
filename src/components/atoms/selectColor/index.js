import React, { useEffect, useState } from "react";
import "./style.css";
import "../../../theme.css";

//firestore
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import db from "../../../firebase";
import { handleClick } from "../../../utils";

//components
import { Dot } from "../../index";

//antd design
import { PlusOutlined } from "@ant-design/icons";
import { Select, Button } from "antd";
const { Option } = Select;

const SelectColor = (props) => {
  const [Colors, setColors] = useState([]);
  const [ColorsValue, setColorsValue] = useState("");
  useEffect(() => {
    const q = query(collection(db, "Colors"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const handleChange = (value) => {
    setColorsValue(value);
  };
  props.addColor(ColorsValue);

  const children = Colors.map((item) => (
    <Option title={item.nome} value={item.color} key={item.id}>
      <div className="flex-center">
        <Dot color={item.color} />
        <div className="color-label">{item.nome}</div>
      </div>
    </Option>
  ));
  return (
    <div className="flex-center">
      <Select
        style={{ width: 200 }}
        placeholder="Add color"
        onChange={handleChange}
        autoClearSearchValue={true}
        dropdownRender={(menu) => (
          <div>
            {menu}
            <Button type="link" onClick={handleClick}>
              <PlusOutlined /> Add Color
            </Button>
          </div>
        )}
        allowClear
      >
        {children}
      </Select>
    </div>
  );
};

export default SelectColor;
