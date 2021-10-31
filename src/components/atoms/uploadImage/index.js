import React from "react";
import "./style.css";
import "../../../theme.css";

import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadImage = () => {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Aggiungi immagine</Button>
      </Upload>
    </div>
  );
};

export default UploadImage;
