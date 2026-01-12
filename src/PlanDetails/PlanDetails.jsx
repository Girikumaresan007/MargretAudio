import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PlanDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const plan = state?.plan;

  if (!plan) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h2>No plan selected</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const handleConfirmBooking = () => {
    // save plan
    localStorage.setItem("selectedPlan", plan.name);

    // go to home page
    navigate("/");

    // wait for home page to render, then scroll
    setTimeout(() => {
      const bookingSection = document.getElementById("bookingpage");
      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <div style={{ padding: "80px", maxWidth: "900px", margin: "auto" }}>
      <h1>{plan.name} Package</h1>
      <h2>{plan.price}</h2>
      <p>{plan.description}</p>

      <ul>
        {plan.features.map((feature, idx) => (
          <li key={idx}>✔ {feature}</li>
        ))}
      </ul>

      <button
        style={{ marginTop: "40px" }}
        onClick={handleConfirmBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default PlanDetails;
