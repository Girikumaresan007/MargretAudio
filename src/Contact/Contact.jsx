import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
    },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >

          {/* ================= INFO SIDE ================= */}
          <motion.div className="contact-info" variants={fadeUp}>

            <motion.h2 variants={fadeUp}>
              Ready to <span>Transform</span> Your Event?
            </motion.h2>

            <motion.p className="contact-subtext" variants={fadeUp}>
              Let's discuss how our technical expertise can elevate your next project.
              We respond to all inquiries within 24 hours.
            </motion.p>
             
             {/* PHONE */}
<motion.div className="info-item" variants={fadeUp}>
  <div className="info-icon">
    {/* PHONE ICON */}
    <svg viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2
      19.79 19.79 0 01-8.63-3.07
      19.5 19.5 0 01-6-6
      19.79 19.79 0 01-3.07-8.67
      A2 2 0 014.11 2h3
      a2 2 0 012 1.72
      12.84 12.84 0 00.7 2.81
      a2 2 0 01-.45 2.11L8.09 9.91
      a16 16 0 006 6l1.27-1.27
      a2 2 0 012.11-.45
      12.84 12.84 0 002.81.7
      A2 2 0 0122 16.92z" />
    </svg>
  </div>

  <div>
    <span className="info-label">CALL US</span>
    <p className="info-value">+91 98765 43210</p>
  </div>
</motion.div>

            {/* EMAIL */}
            <motion.div className="info-item" variants={fadeUp}>
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="info-label">EMAIL US</span>
                <p className="info-value">hello@lumina-av.com</p>
              </div>
            </motion.div>

            {/* LOCATION */}
            <motion.div className="info-item" variants={fadeUp}>
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
              </div>
              <div>
                <span className="info-label">VISIT US</span>
                <p className="info-value">123 Production Way, Los Angeles, CA</p>
              </div>
            </motion.div>

{/* BUSINESS HOURS */}
<motion.div className="info-item" variants={fadeUp}>
  <div className="info-icon">
    {/* CLOCK ICON */}
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  </div>

  <div>
    <span className="info-label">BUSINESS HOURS</span>
    <p className="info-value">
      Mon – Sat : 9:00 AM – 7:00 PM
    </p>
  </div>
</motion.div>

            {/* SOCIAL */}
          <motion.div className="social-wrapper" variants={fadeUp}>
  <p className="social-title">Follow Our Journey</p>

  <div className="social-icons">

    {/* YouTube */}
    <motion.a
      href="#"
      className="social-icon"
      aria-label="YouTube"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    </motion.a>

    {/* Instagram */}
    <motion.a
      href="#"
      className="social-icon instagram"
      aria-label="Instagram"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" className="ig-dot" />
      </svg>
    </motion.a>

    {/* Facebook */}
    <motion.a
      href="#"
      className="social-icon"
      aria-label="Facebook"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.784h-2.957v-3.431h2.957v-2.531c0-2.931 1.791-4.524 4.404-4.524 1.252 0 2.327.093 2.641.135v3.061h-1.812c-1.422 0-1.697.676-1.697 1.666v2.193h3.389l-.441 3.431h-2.948v8.784h6.128c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/>
      </svg>
    </motion.a>

    {/* Twitter */}
    <motion.a
      href="#"
      className="social-icon"
      aria-label="Twitter"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    </motion.a>

  </div>
</motion.div>


          </motion.div>

          {/* ================= FORM SIDE ================= */}
          <motion.div className="contact-form-box" variants={fadeUp}>
            <form
              action="mailto:hello@lumina-av.com"
              method="POST"
              encType="text/plain"
            >
              <div className="form-grid">
                <motion.div variants={fadeUp}>
                  <label>Name</label>
                  <input type="text" name="Name" placeholder="John Doe" required />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label>Event Date</label>
                  <input type="date" name="Event Date" required />
                </motion.div>
              </div>

              <motion.div variants={fadeUp}>
                <label>Email Address</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label>Tell us about your event</label>
                <textarea
                  name="Message"
                  rows="4"
                  placeholder="Venue, scale, specific requirements..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
       {/* ================= RESPONSE TIME CARD ================= */}
<motion.div
  className="response-time-card"
  variants={fadeUp}
  whileHover={{ y: -4 }}
>
  <h4>Response Time</h4>
  <p>
    We typically respond to all inquiries within <strong>24 hours</strong>
    during business days.
  </p>
  <p className="response-note">
    For urgent requests, please call us directly at
    <strong> +91 98765 43210</strong>.
  </p>
</motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
