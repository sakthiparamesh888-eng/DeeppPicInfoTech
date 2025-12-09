import React, { useState } from "react";
import "./PortfolioGrid.css";

// MANUAL IMPORTS
import ai1 from "../../assets/slider/ai1.jpg";
import ai2 from "../../assets/slider/ai2.jpg";
import ai3 from "../../assets/slider/ai3.jpg";
import ai4 from "../../assets/slider/ai4.jpg";
import ai5 from "../../assets/slider/ai5.jpg";
import ai6 from "../../assets/slider/ai6.jpg";
import ai7 from "../../assets/slider/ai7.jpg";
import ai8 from "../../assets/slider/ai8.jpg";
import ai9 from "../../assets/slider/ai9.jpg";
import ai10 from "../../assets/slider/ai10.jpg";

import dd1 from "../../assets/slider/dd1.jpg";
import dd2 from "../../assets/slider/dd2.jpg";
import dd3 from "../../assets/slider/dd3.jpg";
import dd4 from "../../assets/slider/dd4.jpg";

import hdr1 from "../../assets/slider/hdr1.jpg";
import hdr2 from "../../assets/slider/hdr2.jpg";
import hdr3 from "../../assets/slider/hdr3.jpg";
import hdr4 from "../../assets/slider/hdr4.jpg";

import sky1 from "../../assets/slider/sky1.jpg";
import sky2 from "../../assets/slider/sky2.jpg";
import sky3 from "../../assets/slider/sky3.jpg";
import sky4 from "../../assets/slider/sky4.jpg";

// CATEGORY LIST
const IMAGES = [
  { src: hdr1, cat: "HDR Retouching" },
  { src: hdr2, cat: "HDR Retouching" },
  { src: hdr3, cat: "HDR Retouching" },
  { src: hdr4, cat: "HDR Retouching" },

  { src: sky1, cat: "Sky Replacement" },
  { src: sky2, cat: "Sky Replacement" },
  { src: sky3, cat: "Sky Replacement" },
  { src: sky4, cat: "Sky Replacement" },

  { src: dd1, cat: "Day-to-Dusk" },
  { src: dd2, cat: "Day-to-Dusk" },
  { src: dd3, cat: "Day-to-Dusk" },
  { src: dd4, cat: "Day-to-Dusk" },

  { src: ai1, cat: "Single Image Retouch" },
  { src: ai2, cat: "Single Image Retouch" },
  { src: ai3, cat: "Single Image Retouch" },
  { src: ai4, cat: "Single Image Retouch" },
  { src: ai5, cat: "Single Image Retouch" },
  { src: ai6, cat: "Single Image Retouch" },
  { src: ai7, cat: "Single Image Retouch" },
  { src: ai8, cat: "Single Image Retouch" },
  { src: ai9, cat: "Single Image Retouch" },
  { src: ai10, cat: "Single Image Retouch" }
];

const categories = [
  "All",
  "HDR Retouching",
  "Sky Replacement",
  "Day-to-Dusk",
  "Single Image Retouch",
];

const PortfolioGrid = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? IMAGES : IMAGES.filter((img) => img.cat === active);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-sub">Explore our professional edits</p>

        {/* FILTER BUTTONS */}
        <div className="portfolio-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="masonry-grid">
          {filtered.map((img, idx) => (
            <div className="masonry-item tilt-card" key={idx}>
              
              {/* BEFORE FRAME */}
              <div
                className="before-frame"
                style={{ backgroundImage: `url(${img.src})` }}
              >
                <span className="before-text">Before</span>
              </div>

              {/* AFTER FRAME */}
              <div className="after-frame">
                <img src={img.src} alt="" loading="lazy" />
                <span className="after-text">After</span>
              </div>

              {/* LABEL */}
              <span className="img-tag">{img.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
