import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/slider/logo.jpg";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
       <div className="logo stacked">
  <img className="logo-img" src={logo} alt="logo" />
  <div className="logo-lines">
    <span className="blue">DEEP</span>
    <span className="small">PICINFOTECH</span>
  </div>
</div>



        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a onClick={() => setMenuOpen(false)} href="#home">Home</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#services">Services</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#portfolio">Portfolio</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#pricing">Pricing</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#reviews">Reviews</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
        </ul>

        {/* CTA BUTTON */}
        <a
          href="https://www.dropbox.com/scl/fo/kt8sf4ih3zoijkk0cuxzb/AJB5NHfJidW6oAI1yrbz-D0?rlkey=7uyilsvvfyif10rkkmfpijdft&dl=0"
          className="nav-btn cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Free Sample
        </a>

        {/* MOBILE HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
