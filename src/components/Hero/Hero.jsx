import React, { useState, useEffect } from "react";
import "./Hero.css";

// Import ALL slider images you have


import img9 from "../../assets/slider/newimg1.jpg"
import img10 from "../../assets/slider/newimg2.jpg"
import img11 from "../../assets/slider/newimg3.jpg"
import img12 from "../../assets/slider/newimg4.jpg"
import img13 from "../../assets/slider/newimg5.jpg"
import img14 from "../../assets/slider/newimg6.jpg"

// Put all images into array
const sliderImages = [img9,img10,img11,img12,img13,img14];

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
