import { useState } from "react";
import icon from "../img/icon.png";
import img from "../img/img.png";
import "./header.scss";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="header">
        <div className="section-left">
          <div className="logo"></div>
          <div className="name-slogan">
            <div className="name">COMPANY NAME</div>
            <div className="slogan">short slogan</div>
          </div>
        </div>
        <div className="section-right">
          <button onClick={() => setIsVisible(!isVisible)}>
            <img src={icon} />
            <span className="text-button">Button</span>
          </button>
        </div>
      </div>
      {/* Modal */}
      {isVisible && (
        <div className="dialog-section">
          <div className="dialog">
            <div className="dialog-header">
              <div className="title">Title</div>
              <div className="close" onClick={() => setIsVisible(false)}>
                x
              </div>
            </div>
            <div className="dialog-body">
              <div className="upper">
                <div className="image">
                  <img src={img} />
                </div>
                <div className="text">WALL OF TEXT WILL BE SET HERE</div>
              </div>

              <div style={{ textAlign: "center", fontWeight: "600" }}>
                File quality
              </div>
              <div className="quality-section">
                <div className="quality">GOOD</div>
              </div>
            </div>
            <div className="dialog-footer">
              <button className="close-btn" onClick={() => setIsVisible(false)}>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <span className="text-button">Close</span>
              </button>
              <button className="save">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <span className="text-button">Save</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
