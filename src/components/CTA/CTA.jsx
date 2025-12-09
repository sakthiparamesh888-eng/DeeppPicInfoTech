import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      {/* Floating Lights */}
      <div className="cta-light cta-light-1"></div>
      <div className="cta-light cta-light-2"></div>

      <div className="cta-inner">
        <h2 className="cta-title">
          Let’s Transform Your Images Today
        </h2>

        <a
          href="https://www.dropbox.com/scl/fo/kt8sf4ih3zoijkk0cuxzb/AJB5NHfJidW6oAI1yrbz-D0?rlkey=7uyilsvvfyif10rkkmfpijdft&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Get Free Sample →
        </a>
      </div>
    </section>
  );
};

export default CTA;
