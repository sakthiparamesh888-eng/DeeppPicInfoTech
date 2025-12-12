// components/SwiperCard.jsx
import React, { useRef, useEffect } from "react";
import "./SwiperCard.css";

const SwiperCard = ({ before, after, tag }) => {
  const containerRef = useRef(null);
  const beforeRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const beforeLayer = beforeRef.current;
    const handle = handleRef.current;

    let dragging = false;

    const updateSlider = (clientX) => {
      const rect = container.getBoundingClientRect();
      let pos = ((clientX - rect.left) / rect.width) * 100;

      if (pos < 0) pos = 0;
      if (pos > 100) pos = 100;

      // High-FPS DOM updates
      requestAnimationFrame(() => {
        beforeLayer.style.width = `${pos}%`;
        handle.style.left = `${pos}%`;
      });
    };

    const startDrag = () => (dragging = true);
    const endDrag = () => (dragging = false);

    const onMove = (e) => {
      if (!dragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      updateSlider(x);
    };

    // Mouse
    handle.addEventListener("mousedown", startDrag);
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("mousemove", onMove);

    // Touch
    handle.addEventListener("touchstart", startDrag);
    window.addEventListener("touchend", endDrag);
    window.addEventListener("touchmove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", endDrag);
    };
  }, []);

  return (
    <div className="swipe-card" ref={containerRef}>
      {/* AFTER – full image */}
      <img className="after-img" src={after} />

      {/* BEFORE – clipped image */}
      <div className="before-layer" ref={beforeRef} style={{ width: "50%" }}>
        <img src={before} />
      </div>

      {/* SLIDER HANDLE */}
      <div className="slider-handle" ref={handleRef} style={{ left: "50%" }}>
        <div className="handle-circle" />
      </div>

      <span className="swipe-tag">{tag}</span>
    </div>
  );
};

export default SwiperCard;
