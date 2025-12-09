import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, desc, image }) => {
  return (
    <div className="service-card">
      <div className="service-img-box">
        <img src={image} alt={title} />
      </div>

      <div className="service-icon">{icon}</div>

      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{desc}</p>
    </div>
  );
};

export default ServiceCard;
