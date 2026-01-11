import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1: BRAND */}
        <div className="footer-column brand-section">
          <div className="footer-logo">
            MARGERT<span> AUDIO</span> VISUAL
          </div>
          <p className="footer-description">
            Elevating your experiences through seamless event management and
            unparalleled coordination services.
          </p>
        <div className="social-links-text">
  <a href="#linkedin" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.53-1 1.84-2.1 3.8-2.1 4.07 0 4.82 2.68 4.82 6.16V24h-4v-7.38c0-1.76-.03-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.9V24h-4V8.5z"/>
    </svg>
  </a>

  <a href="#twitter" aria-label="Twitter">
    <svg viewBox="0 0 24 24">
      <path d="M24 4.56c-.88.39-1.83.65-2.83.77a4.93 4.93 0 002.16-2.72 9.86 9.86 0 01-3.13 1.2A4.92 4.92 0 0016.62 3c-2.73 0-4.95 2.24-4.95 4.99 0 .39.04.77.13 1.13C7.69 8.9 4.07 6.93 1.64 3.93a5 5 0 00-.67 2.51c0 1.72.87 3.23 2.2 4.12a4.9 4.9 0 01-2.24-.63v.06c0 2.4 1.69 4.4 3.94 4.85a4.9 4.9 0 01-2.23.09c.63 1.98 2.45 3.42 4.6 3.46A9.87 9.87 0 010 20.13a13.9 13.9 0 007.55 2.22c9.05 0 14-7.55 14-14.1 0-.21 0-.43-.02-.64A10.1 10.1 0 0024 4.56z"/>
    </svg>
  </a>

  <a href="#instagram" aria-label="Instagram">
    <svg viewBox="0 0 24 24">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.24 2.43.4a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.16.46.34 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.97-.4 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.16-1.26.34-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.24-2.43-.4a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.16-.46-.34-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.24-1.97.4-2.43a4.9 4.9 0 011.15-1.77A4.9 4.9 0 015.59 2.67c.46-.16 1.26-.34 2.43-.4C8.42 2.21 8.8 2.2 12 2.2zm0 3.2a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 10.9a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6zm6.8-11.5a1.54 1.54 0 11-3.08 0 1.54 1.54 0 013.08 0z"/>
    </svg>
  </a>
</div>

        </div>

        {/* COLUMN 2 */}
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="#about">Our Story</a></li>
            <li><a href="#team">Meet the Team</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Latest News</a></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#corporate">Corporate Events</a></li>
            <li><a href="#wedding">Weddings & Galas</a></li>
            <li><a href="#conference">Conferences</a></li>
            <li><a href="#launch">Product Launches</a></li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-column">
  <h4 className="footer-heading">Get in Touch</h4>

  <div className="contact-item">
    <span className="contact-icon">
      {/* EMAIL ICON */}
      <svg viewBox="0 0 24 24">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    </span>
    <div>
      <span className="contact-label">EMAIL</span>
      <p>hello@eventpro.com</p>
    </div>
  </div>

  <div className="contact-item">
    <span className="contact-icon">
      {/* PHONE ICON */}
      <svg viewBox="0 0 24 24">
        <path d="M6.6 10.8a15.4 15.4 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.36 2.3.56 3.6.56a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.56 3.6a1 1 0 01-.24 1L6.6 10.8z"/>
      </svg>
    </span>
    <div>
      <span className="contact-label">PHONE</span>
      <p>+1 (800) EVENT-PRO</p>
    </div>
  </div>

  <div className="contact-item">
    <span className="contact-icon">
      {/* OFFICE ICON */}
      <svg viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
      </svg>
    </span>
    <div>
      <span className="contact-label">OFFICE</span>
      <p>123 Event Plaza, NY 10001</p>
    </div>
  </div>
</div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>
            © {new Date().getFullYear()} EventPro Management. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
