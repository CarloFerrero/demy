import React, { useState, useRef } from "react";
import "./style.css";

//component
import { SelectColor } from "../../index";

//firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../../firebase";

//antd design
import { Button, Input } from "antd";

const AddProjectBar = (props) => {
  const [Color, setColor] = useState("");
  const [Title, setTitle] = useState("");
  const inputEl = useRef();

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const addColor = (color) => {
    setColor(color);
  };

  const handleSubmit = async () => {
    const titolo = inputEl.current.input.value;
    const colore = Color;
    const collectionRef = collection(db, "Progetti");
    const payload = { titolo, colore, timestamp: serverTimestamp() };
    await addDoc(collectionRef, payload);
    props.changeBar();
  };

  return (
    <div className="search-main">
      <form className="form-project">
        <div className="section-title-wrapper">
          <Input
            ref={inputEl}
            value={Title}
            onChange={onChange}
            placeholder="Project name"
          />
        </div>

        <div className="addProject">
          <div>
            <SelectColor addColor={addColor} />
          </div>
          <div className="aggiungi-progetto">
            <Button variant="outlined" type="submit" onClick={handleSubmit}>
              Aggiungi progetto
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProjectBar;
