import React, { useEffect, useState } from "react";
import "./style.css";

//firestore
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import db from "../../../firebase";
import { handleClick, handleEdit, handleDelete } from "../../../utils";

//components
import { Dot, SelectOptionTitle } from "../../index";

//antd design
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Select, Button } from "antd";
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const SelectColor = () => {
  const [Colors, setColors] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Colors"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  return (
    <div class="flex-center">
      <Select
        style={{ width: 240 }}
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
          <Option value={item.nome}>
            <Dot color={item.color} />
            {item.nome}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectColor;
