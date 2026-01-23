import React from "react";
import "./Services.css";
import { SERVICES } from "./servicesData";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

/* Container stagger */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* Fade + slide up */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Card animation */
const cardAnim = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Services = () => {
  /* 🔥 DEVICE DETECTION (CRITICAL FIX) */
  const isSmallMobile =
    window.innerWidth <= 375 || window.innerHeight <= 600; // iPhone SE safe

  return (
    <section className="services-section" id="services">
      <motion.div
        className="services-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,                     // animate only once (ALL devices)
          amount: isSmallMobile ? 0.05 : 0.05, // 🔥 FIX blank screen on iPhone SE
        }}
      >
        {/* ================= HEADER ================= */}
        <motion.div className="services-header" variants={container}>
          <motion.h2 className="services-tag" variants={fadeUp}>
            OUR EXPERTISE
          </motion.h2>

          <motion.h3 className="services-title" variants={fadeUp}>
            Comprehensive Event Services
          </motion.h3>

          <motion.p className="services-subtitle" variants={fadeUp}>
            Tailored audio-visual and management solutions for every scale,
            ensuring your event stands out from the competition.
          </motion.p>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div className="services-grid" variants={container}>
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardAnim}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
              }}
            >
              {/* Overlay (disabled on mobile via CSS) */}
              <div className="service-overlay"></div>

              <motion.h4 className="service-name" variants={fadeUp}>
                {service.title}
              </motion.h4>

              <motion.p className="service-desc" variants={fadeUp}>
                {service.description}
              </motion.p>

              <motion.div
                className="service-image"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img src={service.imageUrl} alt={service.title} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
