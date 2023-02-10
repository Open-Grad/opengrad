import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Landingpagebanner from "./Landingpagebanner";
import Videosection from "./Videosection";
import Mentors from "./Mentors";
import News from "./News";
import Offer from "./Offer";
import Collabe from "./Collabe";
import Blog from "./Blog";
import Mentors1 from "./Mentors1";

const HomePage = () => {
  return (
    <>
      <Landingpagebanner />

      <Videosection />
      <Mentors />
      <Offer />
      <News />

      {/* <Collabe /> */}
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;
