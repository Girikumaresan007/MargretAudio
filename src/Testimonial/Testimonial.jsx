import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Testimonial.css";
import { TESTIMONIALS } from "./testimonialsData";

const AUTO_DELAY = 3500;

/* 🔥 Framer Motion Variants */
const sectionAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Testimonials = () => {
  const [index, setIndex] = useState(1);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  /* RESPONSIVE */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCardsPerView(mobile ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* AUTOPLAY – DESKTOP ONLY */
  useEffect(() => {
    if (isMobile) return;

    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, [isMobile]);

  /* CLONE LOGIC */
  const cloneCount = cardsPerView;
  const firstCards = TESTIMONIALS.slice(0, cloneCount);
  const lastCards = TESTIMONIALS.slice(-cloneCount);
  const items = [...lastCards, ...TESTIMONIALS, ...firstCards];

  /* ✅ TRANSLATE LOGIC */
  const gap = isMobile ? 20 : 30;
  const cardWidthPercent = 100 / cardsPerView;
  const translateX = `-${index * cardWidthPercent}%`;

  const handleTransitionEnd = () => {
    if (index >= TESTIMONIALS.length + cloneCount) {
      setTransition(false);
      setIndex(cloneCount);
    } else if (index <= 0) {
      setTransition(false);
      setIndex(TESTIMONIALS.length);
    }
  };

  useEffect(() => {
    if (!transition) {
      const t = setTimeout(() => setTransition(true), 50);
      return () => clearTimeout(t);
    }
  }, [transition]);

  /* MANUAL CONTROLS */
  const handlePrev = () => {
    setTransition(true);
    setIndex((i) => i - 1);
  };

  const handleNext = () => {
    setTransition(true);
    setIndex((i) => i + 1);
  };

  return (
    <motion.section
      id="testimonials"
      className="testimonials-section"
      variants={sectionAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: isMobile, amount: 0.2 }}   // ✅ ONLY CHANGE
    >
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>CLIENT FEEDBACK</h2>
          <p>Trusted by world-leading brands globally.</p>
        </div>

        <div className="carousel-wrapper">
          <button className="nav-btn left" onClick={handlePrev}>
            ‹
          </button>

          <div className="carousel-viewport">
            <motion.div
              className="carousel-track"
              animate={{ x: translateX }}
              transition={
                transition
                  ? { ease: "easeInOut", duration: 0.6 }
                  : { duration: 0 }
              }
              onAnimationComplete={handleTransitionEnd}
            >
              {items.map((t, i) => (
                <motion.div
                  key={i}
                  className="testimonial-card"
                  variants={cardAnim}
                  initial="hidden"
                  animate="show"
                  style={{
                    minWidth: `calc(${cardWidthPercent}% - ${
                      (gap * (cardsPerView - 1)) / cardsPerView
                    }px)`,
                    flex: `0 0 calc(${cardWidthPercent}% - ${
                      (gap * (cardsPerView - 1)) / cardsPerView
                    }px)`,
                  }}
                >
                  <img src={t.image} alt={t.author} />
                  <p className="text">“{t.content}”</p>
                  <h4>{t.author}</h4>
                  <span>{t.role}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button className="nav-btn right" onClick={handleNext}>
            ›
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
