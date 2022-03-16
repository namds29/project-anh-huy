import trash from "../../../main-app/img/trash.svg";
import icon from "../../img/icon.png";
import "./upload.scss";
export const Upload = () => {
  return (
    <div className="section-upload">
      <div className="section-drag-file">
        <div className="box-drag-file">
          <div className="position-content">
            <div className="click-area">
              <div className="box-click"></div>
            </div>
            <div className="title">
              Click or drag file to this area to upload
            </div>
          </div>
        </div>
      </div>
      {/*SECTION PROCESS */}
      <div className="section-process">
        <div className="process-box">
          <div className="process-bar">
            <div className="content">
              <div className="select">
                <img src={icon} />
              </div>
              <div className="file-name">File name</div>
            </div>

            <div className="process-infor">
              <div className="percent">90%</div>
              <progress className="progress1" value="90" max="100">
                90%
              </progress>
              <button>
                <img src={trash} alt="" />
              </button>
            </div>
          </div>

          <div className="process-bar bg-red">
            <div className="content">
              <div className="select">
                <img src={icon} />
              </div>
              <div className="file-name">File name</div>
            </div>
          </div>

          <div className="process-bar ">
            <div className="content">
              <div className="select">
                <img src={icon} />
              </div>
              <div className="file-name">File name</div>
            </div>

            <div className="process-infor">
              <div className="percent">50%</div>
              <progress className="progress1" value="50" max="100">
                50%
              </progress>
              <button>
                <img src={trash} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION BOTTOM */}
      <div className="section-bottom">
        <div className="text-file">File quality</div>
        <div className="quality-section">
          <div className="quality">GOOD</div>
          <button className="save">
            <img src={icon} />
            <span className="text-button">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};
