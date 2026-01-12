import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import useReveal from "./useReveal";

import CursorRings from "./Components/CursorRings";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import WhyChooseProLED from "./Mission/WhyChooseProLED";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Package from "./Package/Package";
import Youtube from "./Youtube/Youtube";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import BookingPage from "./BookUS/BookingPage";
import WhatsAppFloat from "./Whatapp/WhatsAppFloat";
import PlanDetails from "./PlanDetails/PlanDetails"; // 👈 ADD

function HomePage() {
  useReveal();

  return (
    <>
      <CursorRings />
      <Navbar />
      <WhatsAppFloat />
      <Hero />
      <About />
      <WhyChooseProLED />
      <Services />
      <Testimonial />
      <Package />
      <Youtube />
      <Contact />
      <BookingPage/>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plan-details" element={<PlanDetails />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
