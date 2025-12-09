import React, { useEffect, useState } from "react";
import "./PricingTable.css";

const plans = [
  {
    name: "Basic Retouch",
    price: "0.7",
    unit: "$ / image",
    features: [
      "Basic Cleanup",
      "Brightness Fix",
      "Small Object Removal",
      "1 Revision"
    ],
  },
  {
    name: "Sky + Color Grading",
    price: "3",
    unit: "$ / image",
    highlight: true,
    features: [
      "Sky Replacement",
      "HDR Enhancement",
      "Color Grading",
      "2 Revisions"
    ],
  },
  {
    name: "Day-to-Dusk",
    price: "2",
    unit: "$ / image",
    features: [
      "Full Dusk Conversion",
      "Advanced Editing",
      "Realistic Lighting",
      "Unlimited Revisions"
    ],
  },
  {
    name: "HDR Blending",
    price: "0.3",
    unit: "$ / image",
    features: [
      "Multiple Exposure Blending",
      "Highlight/Shadow Recovery",
      "Perspective Fix",
      "2 Revisions"
    ],
  },
];

const PricingTable = () => {
  // -------------------------
  // FIXED REVEAL ANIMATION
  // -------------------------
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    const revealElements = document.querySelectorAll(".reveal, .stagger");
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="pricing-title reveal">Pricing Plans</h2>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`price-card glow-card reveal stagger ${
                p.highlight ? "highlight" : ""
              }`}
              style={{ "--delay": `${i * 120}ms` }}
            >
              {/* Floating gradient background */}
              <div className="blob"></div>

              <h3 className="plan-name">{p.name}</h3>

              {/* Animated Price */}
              <h1 className="plan-price">
                ${p.price}
                <span className="price-unit"> {p.unit}</span>
              </h1>

              <ul className="plan-features">
                {p.features.map((f, i2) => (
                  <li key={i2}>{f}</li>
                ))}
              </ul>

              <a href="#contact" className="price-btn">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
