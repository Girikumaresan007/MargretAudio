import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="logo-box">
          <span className="logo-icon">▣</span>
          <span className="logo-text">MARGRET AUDIO VISUAL</span>
        </div>
      </div>

      {/* Desktop Menu (UNCHANGED) */}
    <nav className="nav-right">
  <a href="#home">Home</a>
  <a href="#about">About Us</a>
  <a href="#services">Services</a>
  <a href="#testimonials">Testimonials</a>
  <a href="#contact">Contact</a>

  {/* 🔥 NEW BUTTON */}
  <a href="#bookingpage" className="book-btn">Book Us</a>
</nav>

      {/* Hamburger (mobile only) */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
     <div className={`mobile-menu ${open ? "show" : ""}`}>
  <a href="#home" onClick={() => setOpen(false)}>Home</a>
  <a href="#about" onClick={() => setOpen(false)}>About Us</a>
  <a href="#services" onClick={() => setOpen(false)}>Services</a>
  <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
  <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

  {/* 🔥 NEW BUTTON */}
  <a
    href="#bookingpage"
    className="book-btn mobile"
    onClick={() => setOpen(false)}
  >
    Book Us
  </a>
</div>

    </header>
  );
};

export default Navbar;
