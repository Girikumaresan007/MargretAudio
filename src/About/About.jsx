import "./About.css";
import { motion } from "framer-motion";
import useCountUpOnView from "../About/useCountUpOnView";

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
  hidden: { opacity: 0, scale: 0.95, x: 40 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};
/* ------------------------------------------------ */

const About = () => {
  const clients = useCountUpOnView(10);
  const adSpend = useCountUpOnView(1000);
  const roi = useCountUpOnView(98);
  const retention = useCountUpOnView(24/7);

  return (
    <>
      {/* STORY */}
      <section className="story-section" id="about">
       <motion.div
      className="story-content"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
        >

          {/* TEXT */}
          <motion.div className="story-text" variants={container}>
            <motion.h3 variants={fadeUp}>ABOUT OUR AGENCY</motion.h3>

            <motion.h2 variants={fadeUp}>
              Leading the Future of
              <br />
              Event Experiences
            </motion.h2>

            <motion.p variants={fadeUp}>
             Margret Audio Visual is a full-service event management and technical production agency 
             specializing in high-impact LED wall solutions for events of all sizes.
            </motion.p>

            <motion.p variants={fadeUp}>
             We provide professional LED wall rentals for corporate and live events, 
             backed by award-winning creative direction and expert technical execution.
            </motion.p>

            <motion.p variants={fadeUp}>
            With experienced on-site support and end-to-end event logistics,
             we ensure seamless, reliable, and visually powerful event experiences.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
         <motion.div className="story-image" variants={imageAnim}>
         <img
          src="https://4.imimg.com/data4/VH/CO/MY-19253486/event-management-services.jpg"
          alt="Our Team"
         />
</motion.div>

        </motion.div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <motion.div
          className="stats-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.div className="stat-card" ref={clients.ref} variants={fadeUp}>
            <div className="stat-number">{clients.count}+</div>
            <div className="stat-label">Years Experience</div>
          </motion.div>

          <motion.div className="stat-card" ref={adSpend.ref} variants={fadeUp}>
            <div className="stat-number">{adSpend.count}+</div>
            <div className="stat-label">Events Managed</div>
          </motion.div>

          <motion.div className="stat-card" ref={roi.ref} variants={fadeUp}>
            <div className="stat-number">{roi.count}+</div>
            <div className="stat-label">Client Satisfaction</div>
          </motion.div>

          <motion.div className="stat-card" variants={fadeUp}>
  <div className="stat-number">24/7</div>
  <div className="stat-label">Technical Support</div>
</motion.div>

        </motion.div>
      </section>
    </>
  );
};

export default About;
