import React from "react";
import "./BeforeAfterSlider.css";

const BeforeAfterSlider = ({ image, onClose }) => {
  return (
    <div className="ba-overlay">
      <div className="ba-modal">

        <button className="ba-close" onClick={onClose}>×</button>

        <div className="ba-frame">
          <img src={image} alt="edit" />
          <div className="ba-divider"></div>
        </div>

      </div>
    </div>
  );
};

export default BeforeAfterSlider;
