import React from "react";
import "./WhyChooseProLED.css";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= DATA ================= */

const features = [
  {
    title: "Premium Equipment",
    description:
      "We use industry-standard LED screens, professional audio systems, and modern lighting solutions to deliver clear visuals and reliable performance for every event..",
  },
  {
    title: "Expert Technical Team",
    description:
      "Our experienced and certified technical team ensures smooth setup, precise operation, and professional management throughout the event lifecycle.",
  },
  {
    title: "Flexible Solutions",
    description:
      "We offer customized event and AV solutions tailored to your specific requirements, scale, and budget without compromising on quality.",
  },
  {
    title: "Reliable Service",
    description:
      "From planning to execution, we provide dependable service with on-site support, technical backup, and timely delivery for uninterrupted events.",
  },
];

const WhyChooseProLED = () => {
  return (
    <>
      {/* ================= MISSION SECTION ================= */}
      <section className="mission-section">
        <div className="mission-overlay">
          <motion.div
            className="mission-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.span className="mission-tag" variants={fadeUp}>
              OUR MISSION
            </motion.span>

            <motion.h1 className="mission-title" variants={fadeUp}>
              Delivering World-Class AV Experiences
            </motion.h1>

            <motion.p className="mission-text" variants={fadeUp}>
             Our mission is to deliver professionally managed, high-impact event solutions for political, corporate, and large-scale public events.
We specialize in advanced LED and audiovisual technologies to enhance visibility and audience engagement.
We are committed to precision planning, seamless execution, and operational reliability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="why-section">
        <motion.div
          className="why-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2 className="why-title" variants={fadeUp}>
            Why Choose Us
          </motion.h2>

          <motion.div className="why-grid" variants={staggerContainer}>
            {features.map((item, index) => (
              <motion.div
                className="why-card"
                key={index}
                variants={cardAnim}
                whileHover={{ y: -8 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default WhyChooseProLED;
