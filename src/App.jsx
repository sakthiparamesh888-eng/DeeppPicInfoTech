import React, { useState, useEffect } from "react";
import "./global.css";

// Components

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import FloatingEmail from "./components/FloatingEmailButton/FloatingEmail";
import Home from "./pages/Home";

// Reveal engine
import { initReveal } from "./utils/reveal";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader delay
    const timer = setTimeout(() => setLoading(false), 1800);

    // Initialize scroll animations AFTER load
    setTimeout(() => {
      initReveal();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          {/* Page Fade Wrapper */}
          <div className="fade">
            <Home />
          </div>

          {/* Floating Mail Button */}
          <FloatingEmail />
        </>
      )}
    </>
  );
}

export default App;
