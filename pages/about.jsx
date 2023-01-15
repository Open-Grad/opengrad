import React from "react";
import About from "../components/About/About";
import { Carousel1 } from "../components/Carousels/Carousel1";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Carousel1/>
      <Footer />
    </div>
  );
};

export default Aboutpage;
