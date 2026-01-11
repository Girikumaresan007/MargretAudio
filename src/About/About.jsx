import "./About.css";
import { motion } from "framer-motion";
import useCountUpOnView from "../hooks/useCountUpOnView";

/* ------------------ Animations ------------------ */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.95, x: -40 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};
/* ------------------------------------------------ */

const About = () => {
  const events = useCountUpOnView(1000);
  const satisfaction = useCountUpOnView(98);

  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* IMAGE + CONTENT */}
        <div className="about-wrapper">
          
          {/* LEFT IMAGE */}
          <motion.div className="about-image" variants={imageAnim}>
            <img
              src="https://4.imimg.com/data4/VH/CO/MY-19253486/event-management-services.jpg"
              alt="Event presentation"
            />

            {/* FLOATING BADGE */}
            <motion.div
              className="experience-badge"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <h2>10+</h2>
              <span>Years Experience</span>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div className="about-content" variants={container}>
            <motion.div className="about-top" variants={container}>
              <motion.span className="about-tag" variants={fadeUp}>
                ABOUT OUR AGENCY
              </motion.span>

              <motion.h2 variants={fadeUp}>
                Leading the Future of
                <br />
                Event Experiences
              </motion.h2>

              <motion.p variants={fadeUp}>
                Margret Audio Visual is a leading full-service event management
                and technical production agency, with LED wall rentals at the
                core of our expertise. We deliver seamless, high-impact visual
                experiences for events of any scale.
              </motion.p>

              <motion.ul className="about-points" variants={container}>
                {[
                  "Professional LED Wall Rentals for Corporate and Live Events",
                  "Award-Winning Creative Direction",
                  "Experienced On-Site Technical Support",
                  "End-to-End Event Logistics",
                ].map((point, i) => (
                  <motion.li key={i} variants={fadeUp}>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div className="about-stats" variants={container}>
          <motion.div className="stat-box" ref={events.ref} variants={fadeUp}>
            <h3>{events.count}+</h3>
            <p>Events Managed</p>
          </motion.div>

          <motion.div
            className="stat-box"
            ref={satisfaction.ref}
            variants={fadeUp}
          >
            <h3>{satisfaction.count}%</h3>
            <p>Client Satisfaction</p>
          </motion.div>

          <motion.div className="stat-box" variants={fadeUp}>
            <h3>24/7</h3>
            <p>Technical Support</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
