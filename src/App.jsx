import "./App.css";
import useReveal from "./useReveal";

import CursorRings from "./Components/CursorRings";


import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Youtube from "./Youtube/Youtube";
import Testimonial from "./Testimonial/Testimonial";
import Package from "./Package/Package";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import WhyChooseProLED from "./Mission/WhyChooseProLED";
import BookingPage from "./BookUS/BookingPage";
import Gallery from "./Gallery/Gallery";
import WhatsAppFloat from "./Whatapp/WhatsAppFloat";
import AboutUs from "./AboutUS/AboutUs";




function App() {
  useReveal();

  return (
    <>
      {/* CUSTOM CURSOR – ALL PAGES */}
      <CursorRings />

      <Navbar />
    <WhatsAppFloat/>
      <Hero />
      {/* <AboutUs/> */}
      <About />
      <WhyChooseProLED/>
      <Services />
      {/* <Gallery/> */}
      <Testimonial />
      <Package />
      <Youtube />
      <Contact />
      <BookingPage/>
      <Footer />
    </>
  );
}

export default App;
