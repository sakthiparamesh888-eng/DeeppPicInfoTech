import React, { useState } from "react";
import "./PortfolioGrid.css";
import SwiperCard from "./SwiperCard";

// Auto-import all images from /assets/slider
const imported = import.meta.glob("../../assets/slider/*.{jpg,jpeg,png}", {
  eager: true,
});

// Convert to map: { filename : URL }
const imgMap = {};
Object.keys(imported).forEach((path) => {
  const file = path.split("/").pop();
  imgMap[file] = imported[path].default;
});

// Generic function to detect a/b image pairs
const buildPairs = (prefix, category) => {
  const list = [];
  let i = 1;

  while (true) {
    const after = imgMap[`${prefix}${i}a.jpg`];
    const before = imgMap[`${prefix}${i}b.jpg`];

    if (!after || !before) break;

    list.push({ cat: category, after, before });
    i++;
  }

  return list;
};

// DAY-TO-DUSK (single pair)
const buildDayToDusk = () => {
  const a = imgMap["daytoduskA.jpg"];
  const b = imgMap["daytoduskB.jpg"];

  return a && b ? [{ cat: "Day-to-Dusk", after: a, before: b }] : [];
};

// SKY (auto darkened before)
const buildSky = () => {
  const list = [];
  let i = 1;

  while (imgMap[`sky${i}.jpg`]) {
    const after = imgMap[`sky${i}.jpg`];
    list.push({
      cat: "Sky Replacement",
      after,
      before: after,
      sky: true,
    });
    i++;
  }

  return list;
};

// BUILD CATEGORIES
const HDR = buildPairs("hdr", "HDR Retouching");
const NEWIMG = buildPairs("newimg", "Object Removal");
const SINGLE = buildPairs("single", "Object Removal");
const DAY2DUSK = buildDayToDusk();
const SKY = buildSky();

const ALL = [...HDR, ...NEWIMG, ...SINGLE, ...DAY2DUSK, ...SKY];

const categories = [
  "All",
  "HDR Retouching",
  "Object Removal",
  "Day-to-Dusk",
  "Sky Replacement",
];

const PortfolioGrid = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? ALL : ALL.filter((item) => item.cat === active);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-sub">Slide to see Before & After</p>

        {/* Category Buttons */}
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

        {/* Grid */}
        <div className="masonry-grid">
          {filtered.map((img, i) => (
            <SwiperCard
              key={i}
              before={img.before}
              after={img.after}
              sky={img.sky}
              tag={img.cat}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
