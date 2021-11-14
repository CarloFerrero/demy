import React, { useState } from "react";
import "./style.css";
import "../../../theme.css";

//Firebase storage
import { storage } from "../../../firebase";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

//ant
import { Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadImage = (props) => {
  const [imageName, setImageName] = useState("");
  const [btnName, setBtnName] = useState("Upload file");

  const inputStyle = {
    display: "none",
  };
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  async function onChange(e) {
    const file = e.target.files[0];
    const storageRef = ref(storage, `campaignImage/${file.name}`);
    const nameRef = file.name;
    const uploadTask = uploadBytesResumable(storageRef, file);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);
    //pass url and name
    setImageName(nameRef);
    props.addBgImg(imageUrl);
    setBtnName("Change image");
    uploadTask.on(
      (snapshot) => {
        message.success(`${file.name} è stato caricato correttamente`);
      },
      (error) => {
        message.error(`${file.name} non si è caricato`);
      }
    );
  }

  return (
    <div className="flex">
      <div className="mr15">{imageName}</div>
      <div>
        <Button onClick={handleClick} icon={<UploadOutlined />}>
          {btnName}
        </Button>
      </div>
      <input
        style={inputStyle}
        type="file"
        onChange={onChange}
        ref={hiddenFileInput}
      />
    </div>
  );
};

export default UploadImage;
