import React, { useEffect, useState } from "react";
import "./AboutUs.css";

const statsData = [
  { label: "Years Experience", value: 10  },
  { label: "Event Managed", value: 1000 },
  { label: "Years Experience", value: 10 },
  { label: "Team Members", value: 45 },
];

const AboutUs = () => {
  const [stats, setStats] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((item, index) => {
      const interval = setInterval(() => {
        setStats(prev => {
          const updated = [...prev];
          if (updated[index] < item.value) {
            updated[index] += Math.ceil(item.value / 60);
          } else {
            updated[index] = item.value;
            clearInterval(interval);
          }
          return updated;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="about-wrapper" id="aboutus">
      {/* MAIN CONTENT */}
      <div className="about-container">
        {/* LEFT BIG IMAGE */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Event Team"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="tag"> ABOUT OUR AGENCY</span>

          <h2>
            Leading the Future of 
            <br /> <span>Event Experiences</span>
          </h2>

          <p>
            We are a professional event organizing company delivering
            extraordinary experiences through innovation, creativity,
            and flawless execution. From corporate events to grand
            celebrations, we bring visions to life.
          </p>

          {/* SMALL IMAGES */}
          <div className="small-images">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
              alt="Event"
            />
            <img
              src="https://images.unsplash.com/photo-1515169067865-5387ec356754"
              alt="Conference"
            />
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="stats-section">
        {statsData.map((item, index) => (
          <div className="stat-card floating" key={index}>
            <h3>{stats[index]}+</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;