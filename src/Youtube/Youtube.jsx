import React from "react";
import "./Youtube.css";
import { motion } from "framer-motion";

/* Container stagger */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

/* Video card animation */
const videoAnim = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Youtube = () => {
  return (
    <section id="video" className="video-section">
      <motion.div
        className="video-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* HEADER */}
        <motion.div
          className="video-header"
          variants={container}
        >
          <motion.h2 variants={fadeUp}>
            PRODUCTION SHOWCASE
          </motion.h2>

          <motion.p variants={fadeUp}>
            Experience the scale and quality of our technical delivery through
            our highlight reel.
          </motion.p>
        </motion.div>

        {/* VIDEO GRID */}
        <motion.div
          className="video-grid"
          variants={container}
        >
          {/* VIDEO 1 */}
          <motion.div
            className="video-wrapper"
            variants={videoAnim}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/0DvvfhOgYPM"
              title="Event Highlights Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* VIDEO 2 */}
          <motion.div
            className="video-wrapper"
            variants={videoAnim}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/YFtGs1QSQ6A"
              title="Event Highlights Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Youtube;
