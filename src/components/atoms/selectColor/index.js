import React, { useEffect, useState } from "react";
import "./style.css";

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

  return (
    <div class="flex-center">
      <Select
        style={{ width: 200 }}
        placeholder="Add color"
        onChange={handleChange}
        dropdownRender={(menu) => (
          <div>
            {menu}
            <Button type="link" onClick={handleClick}>
              <PlusOutlined /> Add Color
            </Button>
          </div>
        )}
      >
        {Colors.map((item) => (
          <Option title={item.nome} value={item.color}>
            <Dot color={item.color} />
            {item.nome}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectColor;
