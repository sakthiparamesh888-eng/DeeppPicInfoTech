import React, { useState, useEffect, useRef } from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Praveen Kumar",
    text: "Amazing real estate edits! Sky replacement and HDR correction were perfect.",
    rating: 5,
  },
  {
    name: "Hari Haran",
    text: "Very professional and quick delivery. Loved the color grading!",
    rating: 5,
  },
  {
    name: "Shalini",
    text: "Best Photoshop editing team we've worked with. Highly recommended!",
    rating: 5,
  },
  {
    name: "Shiva",
    text: "Best Photoshop editing team we've worked with. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rithi",
    text: "Best Photoshop editing team we've worked with. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sathis",
    text: "Best Photoshop editing team we've worked with. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  // Auto-sliding reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Scroll-trigger cinematic reveal
  useEffect(() => {
    const revealOnScroll = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("cine-active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        <h2 className="reviews-title cinematic-title">
          What Clients Say
        </h2>

        {/* GRID */}
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`review-card cine-card ${active === i ? "highlight" : ""}`}
            >
              <div className="review-avatar">{review.name.charAt(0)}</div>

              <p className="review-text">“{review.text}”</p>

              <h4 className="review-author">– {review.name}</h4>

              {/* STAR FILL ANIMATION */}
              <div className="review-stars">
                {[...Array(review.rating)].map((_, idx) => (
                  <span key={idx} className="star-wrapper">
                    <FaStar className="star-outline" />
                    <span className="star-fill"></span>
                  </span>
                ))}
              </div>

              {/* AUDIO WAVEFORM */}
              <div className="audio-wave">
                {Array.from({ length: 22 }).map((_, idx) => (
                  <span key={idx} className="wave-bar"></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
