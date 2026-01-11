import React from "react";
import "./Testimonial.css";
import { TESTIMONIALS } from "./testimonialsData";
import { motion } from "framer-motion";

/* Container stagger */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

/* Fade + rise */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // 🔥 premium easing
    },
  },
};

/* Card animation */
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

/* Avatar pop */
const avatarAnim = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <motion.div
        className="testimonials-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >

        {/* HEADER */}
        <motion.div
          className="testimonials-header"
          variants={container}
        >
          <motion.h2 variants={fadeUp}>
            CLIENT FEEDBACK
          </motion.h2>

          <motion.p variants={fadeUp}>
            Trusted by world-leading brands and event planners globally.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="testimonials-grid"
          variants={container}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              className="testimonial-card"
              variants={cardAnim}
              whileHover={{
                y: -10,
                boxShadow: "0 30px 70px rgba(0,0,0,0.3)",
              }}
            >
              {/* AVATAR */}
              <motion.img
                src={t.image}
                alt={t.author}
                className="testimonial-avatar"
                variants={avatarAnim}
              />

              {/* TEXT */}
              <motion.p
                className="testimonial-text"
                variants={fadeUp}
              >
                <span className="quote top">“</span>
                {t.content}
                <span className="quote bottom">”</span>
              </motion.p>

              {/* AUTHOR */}
              <motion.div
                className="testimonial-author"
                variants={fadeUp}
              >
                <h4>{t.author}</h4>
                <p>{t.role}</p>
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Testimonials;
