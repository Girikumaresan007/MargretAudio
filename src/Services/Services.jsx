import React, { useEffect, useState } from "react";
import "./Services.css";
import { SERVICES } from "./servicesData";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

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
  /* ✅ TRUE MOBILE DETECTION */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="services-section" id="services">
      <motion.div
        className="services-container"
        variants={container}
        initial="hidden"

        /* 🔥 KEY FIX */
        animate={isMobile ? "show" : undefined}
        whileInView={!isMobile ? "show" : undefined}
        viewport={!isMobile ? { amount: 0.2 } : undefined}
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
              whileHover={
                !isMobile
                  ? {
                      y: -8,
                      boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
                    }
                  : {}
              }
            >
              <div className="service-overlay" />

              <motion.h4 className="service-name" variants={fadeUp}>
                {service.title}
              </motion.h4>

              <motion.p className="service-desc" variants={fadeUp}>
                {service.description}
              </motion.p>

              <motion.div
                className="service-image"
                whileHover={!isMobile ? { scale: 1.06 } : {}}
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
