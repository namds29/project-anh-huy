import { useState } from "react";
import "./body.scss";
import { Download } from "./download/download";
import { Upload } from "./upload/upload";

export const Body = () => {
  const [changeTab, setChangeTab] = useState("upload");

  return (
    <div className="section-content">
      <div className="body-box">
        <div className="header-box">
          <div
            className="upload"
            style={changeTab === "upload" ? { backgroundColor: "#4199D9" } : {}}
            onClick={() => setChangeTab("upload")}
          >
            UPLOAD
          </div>
          <div
            className="download"
            style={
              changeTab === "download" ? { backgroundColor: "#4199D9" } : {}
            }
            onClick={() => setChangeTab("download")}
          >
            DOWNLOAD
          </div>
        </div>
        {/*SECTION DRAG FILE */}
        {changeTab === "upload" && <Upload />}

        {/* SECTION DOWNLOAD */}
        {changeTab === "download" && <Download />}
      </div>
    </div>
  );
};
