import React, { useState, useEffect } from "react";
import "./BookingPage.css";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const pageAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BookingPage = () => {
  const [formData, setFormData] = useState({
    packageName: "",
    eventDate: "",
    eventLocation: "",
    eventType: "",
    attendees: "",
    requirements: "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
    agreeTerms: false,
  });
   const isMobile = window.innerWidth <= 768;
  /* 🔥 AUTO-FILL PACKAGE FROM PLAN DETAILS */
  useEffect(() => {
  const savedPlan = localStorage.getItem("selectedPlan");

  if (savedPlan) {
    setFormData((prev) => ({
      ...prev,
      packageName: savedPlan,
    }));

    // 🔥 IMPORTANT: remove after using once
    localStorage.removeItem("selectedPlan");
  }
}, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // 🔁 map camelCase → snake_case
  const payload = {
    package_name: formData.packageName,
    event_date: formData.eventDate,
    event_location: formData.eventLocation,
    event_type: formData.eventType,
    attendees: formData.attendees,
    requirements: formData.requirements,
    full_name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    company: formData.company, 
    agree_terms :formData.agreeTerms
  };

  try {
    const res = await fetch(
      "http://127.0.0.1:8000/new_form/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("Backend error:", err);
      alert("Submission failed");
      return;
    }

    alert("Booking request sent successfully!");

    // clear form
    setFormData({
      packageName: "",
      eventDate: "",
      eventLocation: "",
      eventType: "",
      attendees: "",
      requirements: "",
      fullName: "",
      email: "",
      phone: "",
      company: "",
      agreeTerms: false,
    });

  } catch (err) {
    console.error(err);
    alert("Submission failed");
  }
};



  return (
    <motion.div
      className="booking-container"
      variants={pageAnim}
      initial="hidden"
      animate="show"
      id="bookingpage"
    >
      <div className="booking-content">

        {/* LEFT SIDE: FORM */}
        <motion.div
          className="form-section"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.header className="form-header" variants={fadeUp}>
            <h1>Event Booking Request</h1>
            <p>
              Fill out the details below, and our team will get back to you within
              24 hours.
            </p>
          </motion.header>

          <motion.form onSubmit={handleSubmit} variants={stagger}>

            {/* EVENT DETAILS */}
            <motion.section className="input-group" variants={fadeUp}>
              <h3>Event Details</h3>

              <div className="grid-row">
                <motion.div className="field" variants={fadeUp}>
                  <label>Select Package</label>
                  <select
                    name="packageName"
                    value={formData.packageName}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a Package</option>
                    <option value="Basic">Basic - Small Events</option>
                    <option value="Professional">Professional</option>
                    <option value="Premium">Premium - Large Scale</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </motion.div>

                <motion.div className="field" variants={fadeUp}>
                  <label>Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </div>

              <motion.div className="field" variants={fadeUp}>
                <label>Event Location</label>
                <input
                  type="text"
                  name="eventLocation"
                  placeholder="Venue Name or Address"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <div className="grid-row">
                <motion.div className="field" variants={fadeUp}>
                  <label>Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="corporate">Corporate Gala</option>
                    <option value="wedding">Wedding</option>
                    <option value="conference">Conference</option>
                    <option value="product-launch">Product Launch</option>
                  </select>
                </motion.div>

                <motion.div className="field" variants={fadeUp}>
                  <label>Number of Attendees</label>
                  <input
                    type="number"
                    name="attendees"
                    placeholder="Expected Count"
                    value={formData.attendees}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </div>

              <motion.div className="field" variants={fadeUp}>
                <label>Special Requirements</label>
                <textarea
                  name="requirements"
                  placeholder="Tell us about any specific AV, catering, or decor needs..."
                  value={formData.requirements}
                  onChange={handleChange}
                ></textarea>
              </motion.div>
            </motion.section>

            {/* CONTACT INFO */}
            <motion.section className="input-group" variants={fadeUp}>
              <h3>👤 Contact Information</h3>

              <div className="grid-row">
                <motion.div className="field" variants={fadeUp}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div className="field" variants={fadeUp}>
                  <label>Email Address</label>
               <input
  type="email"
  name="email"
  placeholder="john@example.com"
  value={formData.email}
  onChange={handleChange}
  required
/>

                </motion.div>
              </div>

              <div className="grid-row">
                <motion.div className="field" variants={fadeUp}>
                  <label>Phone Number</label>
                 <input
  type="tel"
  name="phone"
  placeholder="9876543210"
  value={formData.phone}
  onChange={handleChange}
  required
  pattern="[0-9]{10}"     
  maxLength={10}
  title="Enter a valid 10-digit phone number"
/>

                </motion.div>

                <motion.div className="field" variants={fadeUp}>
                  <label>Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </motion.div>
              </div>
            </motion.section>

            <motion.div className="terms-container" variants={fadeUp}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <span>
                  I agree to the <strong>Terms & Conditions</strong> and the{" "}
                  <strong>Privacy Policy</strong>.
                </span>
              </label>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Confirm Booking Request
            </motion.button>

          </motion.form>
        </motion.div>

        {/* RIGHT SIDE: SIDEBAR */}
        <motion.aside
          className="info-sidebar"
          variants={stagger}
          initial="hidden"
          whileInView="show"
        viewport={{ once: isMobile }}
        >
          <motion.div className="help-box" variants={cardAnim}>
            <h4>Need Help?</h4>
            <p>
              Not sure which package fits your event? Our coordinators are here to assist you.
            </p>
            <div className="contact-info">
              <p><strong>📞 Phone:</strong> +1 (800) EVENT-PRO</p>
              <p><strong>📧 Email:</strong> support@eventmanage.com</p>
              <p><strong>🕒 Hours:</strong> Mon - Fri, 9am - 6pm</p>
            </div>
          </motion.div>

          <motion.div className="whats-next-box" variants={cardAnim}>
            <h4>What's Next?</h4>
            <div className="process-steps">
              {[1, 2, 3, 4].map((num) => (
                <div className="step" key={num}>
                  <span className="step-num">{num}</span>
                  <div>
                    <h6>
                      {["Submission", "Review", "Quotation", "Confirmation"][num - 1]}
                    </h6>
                    <p>
                      {[
                        "We receive your detailed event brief.",
                        "A specialist reviews venue availability.",
                        "You receive a formal quote via email.",
                        "Deposit payment and date locking.",
                      ][num - 1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.aside>

      </div>
    </motion.div>
  );
};

export default BookingPage;
