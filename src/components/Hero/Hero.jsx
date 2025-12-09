import React, { useState, useEffect } from "react";
import "./Hero.css";

// Import ALL slider images you have
import img1 from "../../assets/slider/ai1.jpg";
import img2 from "../../assets/slider/ai2.jpg";
import img3 from "../../assets/slider/ai3.jpg";
import img4 from "../../assets/slider/ai4.jpg";
import img5 from "../../assets/slider/hdr1.jpg";
import img6 from "../../assets/slider/hdr2.jpg";
import img7 from "../../assets/slider/sky1.jpg";
import img8 from "../../assets/slider/sky2.jpg";

// Put all images into array
const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-change slider every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Slider */}
      <div className="hero-slider">
        {sliderImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="slide"
            className={`hero-slide ${i === index ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Overlay Text */}
      <div className="hero-content">
        <h1 className="hero-title">Turn Raw Images Into Stunning Masterpieces</h1>

        <p className="hero-subtitle">
          Professional Real Estate, Product & Creative Photoshop Editing Services.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="btn-primary">View Portfolio</a>
          <a href="#contact" className="btn-secondary">Contact Us</a>
        </div>
      </div>

      {/* Blue particle glow bubbles */}
      <div className="blue-particles"></div>
    </section>
  );
};

export default Hero;
