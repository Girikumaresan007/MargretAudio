import React from "react";
import "./Package.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ------------------ Animations ------------------ */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Packages = () => {
  const navigate = useNavigate();

  // ✅ detect mobile (ONLY addition)
  const isMobile = window.innerWidth <= 768;

  const handleChoosePlan = (pkg) => {
    navigate("/plan-details", {
      state: { plan: pkg },
    });
  };

  return (
    <section id="packages" className="packages-section">
      <motion.div
        className="packages-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: isMobile, amount: 0.3 }}
      >
        {/* HEADER */}
        <motion.div className="packages-header" variants={container}>
          <motion.h2 variants={fadeUp}>SERVICE PACKAGES</motion.h2>
          <motion.p variants={fadeUp}>
            Tailored solutions to fit any scale and budget without compromising
            on quality.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div className="packages-grid" variants={container}>
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`package-card ${pkg.isPopular ? "popular" : ""}`}
              variants={cardAnim}
              whileHover={{
                y: -10,
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              {pkg.isPopular && (
                <motion.div
                  className="popular-badge"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Most Popular
                </motion.div>
              )}

              <motion.h3 variants={fadeUp}>{pkg.name}</motion.h3>

              <motion.div className="price" variants={fadeUp}>
                <span className="amount">{pkg.price}</span>
              </motion.div>

              <motion.p className="description" variants={fadeUp}>
                {pkg.description}
              </motion.p>

              <motion.ul className="features" variants={container}>
                {pkg.features.map((feature, idx) => (
                  <motion.li key={idx} variants={fadeUp}>
                    <span className="check">✔</span>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* CHOOSE PLAN BUTTON */}
              <motion.button
                className="choose-btn"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoosePlan(pkg)}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ------------------ DATA ------------------ */
const PACKAGES = [
  {
    id: 1,
    name: "Basic",
    price: "₹25,000",
    description: "Ideal for small events and basic setups.",
    isPopular: false,
    features: [
      "Basic sound system",
      "Standard lighting",
      "On-site technician",
      "Single High-Def Projector & Screen",
      "2 Wireless Handheld Mics",
      "Setup & Strike included",
    ],
  },
  {
    id: 2,
    name: "Professional",
    price: "₹45,000",
    description: "Perfect for corporate and medium-scale events.",
    isPopular: true,
    features: [
      "Premium Audio Array (4 Speakers)",
      "Stage lighting",
      "Dual 75 LED Displays or 12ft Wall",
      "Dedicated technician",
      "4 Wireless Mics (Lapel/Handheld)",
      "Event Manager & Lead Tech (8h)",
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: "Custom",
    description: "High-end production for large events.",
    isPopular: false,
    features: [
      "Custom Massive LED Wall Arrays",
      "Line Array Sound Systems",
      "Full Intelligent Light Show",
      "Multi-Camera Live Streaming",
      "Production Crew & Technical Director",
      "Pre-event Visualization",
    ],
  },
  {
    id: 4,
    name: "Corporate",
    price: "Custom",
    description: "Professional AV solutions for corporate conferences.",
    isPopular: false,
    features: [
      "High-Resolution LED Display Solutions",
      "Professional PA & Conference Audio Systems",
      "Intelligent & Architectural Lighting Setup",
      "Multi-Camera Recording & Live Streaming",
      "Dedicated Technical & Production Team",
    ],
  },
];

export default Packages;
