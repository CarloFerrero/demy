import React, { useState, useRef } from "react";
import "./style.css";
import "../../../theme.css";

//component
import { SelectColor, UploadImage } from "../../index";

//firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../../firebase";

//antd design
import { Button, Input } from "antd";
import { CloseCircleTwoTone } from "@ant-design/icons";

const AddProjectBar = (props) => {
  const [Color, setColor] = useState("");
  const [Title, setTitle] = useState("");
  const [BgImg, setBgImg] = useState("");

  const inputEl = useRef();

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const addColor = (color) => {
    setColor(color);
  };

  const addBgImg = (img) => {
    setBgImg(img);
  };

  const handleSubmit = async () => {
    const titolo = inputEl.current.input.value;
    const colore = Color;
    const bgImg = BgImg;
    const collectionRef = collection(db, "Progetti");
    const payload = { titolo, colore, bgImg, timestamp: serverTimestamp() };
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
          <div className="mr15">
            <UploadImage addBgImg={addBgImg} />
          </div>
          <div>
            <SelectColor addColor={addColor} />
          </div>
          <div className="aggiungi-progetto">
            <Button
              className="btn"
              variant="outlined"
              type="submit"
              onClick={handleSubmit}
            >
              Aggiungi progetto
            </Button>
            <CloseCircleTwoTone
              twoToneColor="#4353ff"
              className="ml15"
              onClick={() => {
                props.changeBar();
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProjectBar;
