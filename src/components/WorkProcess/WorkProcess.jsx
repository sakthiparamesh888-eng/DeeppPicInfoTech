import React from "react";
import "./WorkProcess.css";

import {
  FaUpload,
  FaMagic,
  FaEye,
  FaCheckCircle
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload />,
    title: "Upload",
    desc: "Securely upload your raw images using our encrypted uploader."
  },
  {
    icon: <FaMagic />,
    title: "Retouch",
    desc: "We apply professional Photoshop enhancements to your images."
  },
  {
    icon: <FaEye />,
    title: "Preview",
    desc: "Review your edits and request unlimited revisions."
  },
  {
    icon: <FaCheckCircle />,
    title: "Deliver",
    desc: "Receive final high-resolution images within 24–48 hours."
  }
];

const WorkProcess = () => {
  return (
    <section id="process" className="work-section">
      <div className="container">
        <h2 className="work-title">How Our Editing Process Works</h2>
        <p className="work-subtitle">
          A simple, professional workflow designed for speed and quality.
        </p>

        <div className="work-grid">
          {steps.map((step, i) => (
            <div className="process-card" key={i}>
              <div className="process-icon">{step.icon}</div>

              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>

              {i < steps.length - 1 && <div className="connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
