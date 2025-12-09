import React from "react";
import "./ServicesSection.css";

import ServiceCard from "../ServiceCard/ServiceCard";

// Real Images
import img1 from "../../assets/slider/ai1.jpg";
import img2 from "../../assets/slider/dd1.jpg";
import img3 from "../../assets/slider/hdr1.jpg";
import img4 from "../../assets/slider/sky1.jpg";
import img5 from "../../assets/slider/ai2.jpg";
import img6 from "../../assets/slider/hdr2.jpg";

import {
  FaMagic,
  FaEraser,
  FaSun,
  FaCloud,
  FaCrop,
  FaPalette,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaMagic />,
      title: "Cleanup & Enhancement",
      desc: "Advanced noise reduction, clarity boost, and lighting correction.",
      image: img1,
    },
    {
      icon: <FaEraser />,
      title: "Object & Dust Removal",
      desc: "Remove distractions like wires, bins, blemishes or unwanted objects.",
      image: img2,
    },
    {
      icon: <FaSun />,
      title: "HDR Photo Enhancement",
      desc: "Balanced lighting and HDR blending for stunning dynamic range.",
      image: img3,
    },
    {
      icon: <FaCloud />,
      title: "Sky Replacement",
      desc: "Beautiful sky transformations for dull or overexposed skies.",
      image: img4,
    },
    {
      icon: <FaCrop />,
      title: "Perspective Fixing",
      desc: "Straightening walls, correcting lens distortion & vertical alignment.",
      image: img5,
    },
    {
      icon: <FaPalette />,
      title: "Color Grading & Tone Fix",
      desc: "Professional color correction and cinematic-grade toning.",
      image: img6,
    },
  ];

  return (
    <section id="services" className="services-section">

      <div className="container">
        <h2 className="services-title">Professional Editing Services</h2>
        <p className="services-subtitle">
          High-end Photoshop editing for photographers, agencies & real estate brands.
        </p>

        <div className="services-grid">
          {services.map((srv, i) => (
            <ServiceCard
              key={i}
              icon={srv.icon}
              title={srv.title}
              desc={srv.desc}
              image={srv.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
