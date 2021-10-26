import React, { useState, useRef } from "react";
import "./style.css";

//component
import { SelectColor } from "../../index";

//antd design
import { Button } from "antd";

const AddProjectBar = (props) => {
  const [project, setProject] = useState([]);
  const [id, setID] = useState(0);
  const [Color, setColor] = useState("");
  const refTitle = useRef();
  const handleID = () => {
    setID(id + 1);
  };
  const addColor = (color) => {
    setColor(color);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleID();
    const newProject = {
      id: id,
      title: refTitle.current.value,
      color: Color,
    };
    setProject([...project, newProject]);
    refTitle.current.value = "";
    props.addProject(newProject);
    props.changeBar();
  };

  return (
    <div className="search-main">
      <form className="form-project">
        <div className="section-title-wrapper">
          <input
            ref={refTitle}
            className="new-project-input"
            placeholder="Project name"
          />
        </div>
        <div className="addProject">
          <div>
            <SelectColor addColor={addColor} />
          </div>
          <div className="aggiungi-progetto">
            <Button variant="outlined" type="submit">
              Aggiungi progetto
            </Button>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default AddProjectBar;
