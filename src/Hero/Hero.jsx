import "./Hero.css";
import img from './Hero Assets/image.jpeg'
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

     <motion.div
  className="hero-content"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.6, ease: "easeOut" }}
>

        {/* TAG */}
       <motion.span
  className="hero-tag"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
>

          PREMIUM EVENT SOLUTIONS
        </motion.span>

        {/* TITLE */}
        <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.1,
    delay: 0.6,
    ease: [0.16, 1, 0.3, 1], // 🔥 cinematic easing
  }}
>

          Professional LED & Audio Visual <br />
          <span>Solution for Every Event </span>
        </motion.h1>

        {/* TEXT */}
       <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.9,
    ease: "easeOut",
  }}
>

          Transform your events with cutting-edge LED screens, crystal-clear audio systems and professional lighting solution.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
  className="hero-actions"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 1.2,
    ease: "easeOut",
  }}
>

          <motion.a
            href="#packages"
            className="btn primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Packages ➜
          </motion.a>

          <motion.a
            href="#services"
            className="btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
