import icon from "../../img/icon.png";
import "./download.scss";

export const Download = () => {
  return (
    <div className="section-download">
      <div className="upper-section">
        <div className="text">File quality</div>
        <div className="quality">GOOD</div>
        <button className="save">
          <img src={icon} />
          <span className="text-button">Save</span>
        </button>
      </div>

      <div className="lower-section">
        <div className="section-file">
          <div className="date">16/03/2020</div>
          <div className="content">
            <div className="select">
              <img src={icon} />
            </div>
            <div className="file-name">File name</div>
          </div>

          <div className="content">
            <div className="select">
              <img src={icon} />
            </div>
            <div className="file-name">File name</div>
          </div>

          <div className="content">
            <div className="select">
              <img src={icon} />
            </div>
            <div className="file-name">File name</div>
          </div>

          <div className="content">
            <div className="select">
              <img src={icon} />
            </div>
            <div className="file-name">File name</div>
          </div>
        </div>
      </div>
    </div>
  );
};
