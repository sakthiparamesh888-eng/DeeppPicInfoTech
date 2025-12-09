import React from "react";
import "./FloatingEmail.css";
import { FaEnvelope } from "react-icons/fa";

const FloatingEmail = () => {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=sakthiparamesh888@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-email"
    >
      <FaEnvelope />
    </a>
  );
};

export default FloatingEmail;
