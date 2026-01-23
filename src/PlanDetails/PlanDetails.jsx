import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./PlanDetails.css";

/* 🔥 EXTRA DETAILS ONLY FOR DETAIL PAGE */
const PLAN_DETAILS = {
  Basic: {
    description:
      "The Basic package is designed for small events that require clear sound and simple lighting. It is ideal for birthday parties, family functions, and small indoor gatherings where reliability is key.",
    features: [
      "Compact PA system with clear output",
      "Basic front lighting setup",
      "2 wireless handheld microphones",
      "Standard speaker stands & cabling",
      "On-site technician assistance",
      "Quick setup & strike",
    ],
  },

  Professional: {
    description:
      "The Professional package is perfect for corporate meetings, conferences, and medium-scale events. It offers balanced sound, enhanced lighting, and professional technical support throughout the event.",
    features: [
      "Premium audio array (4 speakers)",
      "Stage wash & spotlight lighting",
      "Dual LED displays or 12ft LED wall",
      "4 wireless microphones (lapel & handheld)",
      "Dedicated sound & lighting technician",
      "Event manager support",
      "Backup audio equipment",
    ],
  },

  Premium: {
    description:
      "The Premium package delivers a high-end event experience with concert-grade audio, intelligent lighting, and flawless execution.",
    features: [
      "Concert-grade PA system (up to 300 guests)",
      "Intelligent moving head lights",
      "Full LED uplighting package",
      "4–6 wireless microphones",
      "Dual on-site technicians",
      "Backup equipment included",
      "Dedicated event coordinator",
    ],
  },

  Corporate: {
    description:
      "The Corporate package is built for conferences, product launches, and professional business events.",
    features: [
      "High-resolution LED display solutions",
      "Conference-grade PA system",
      "Podium & lapel microphone setup",
      "Presentation switcher & laptop support",
      "Live streaming / recording",
      "Pre-event technical rehearsal",
    ],
  },
};

const pageAnim = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PlanDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ mobile detect (ONLY addition)
  const isMobile = window.innerWidth <= 768;

  const plan = state?.plan;
  const detailedPlan = PLAN_DETAILS[plan?.name];

  if (!plan || !detailedPlan) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h2>No plan selected</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const handleConfirmBooking = () => {
    localStorage.setItem("selectedPlan", plan.name);
    navigate("/");

    setTimeout(() => {
      document.getElementById("bookingpage")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  return (
    <motion.div
      className="plan-details-page"
      variants={pageAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: isMobile, amount: 0.2 }}
    >
      <div className="container">
        {/* LEFT */}
        <div>
          <a
       href="/#packages"
       className="back"
       onClick={(e) => {
      e.preventDefault();
      navigate("/");
       setTimeout(() => {
        document.getElementById("packages")?.scrollIntoView({
        behavior: "smooth",
        });
      }, 300);
       }}
         >
            ← Back to Packages
          </a>

          {plan.isPopular && <div className="badge">Most Popular Choice</div>}

          <h1>{plan.name} Package</h1>

          <p className="description">{detailedPlan.description}</p>

          <div className="pills">
            <div className="pill">
              ⏱ Duration <br />
              <strong>8–10 hours</strong>
            </div>
            <div className="pill">
              👥 Coverage <br />
              <strong>Up to 300 guests</strong>
            </div>
          </div>

          <h3 className="Head">What's Included</h3>

          <div className="features">
            {detailedPlan.features.map((f, i) => (
              <div className="feature" key={i}>
                ✓ {f}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="card">
          <small>Starting price</small>
          <div className="price">{plan.price}</div>

          <button onClick={handleConfirmBooking}>Confirm Booking</button>

          <p>No payment required now.</p>

          <div className="contact">
            Questions? <br />
            <span>events@sonicevents.com</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanDetails;
