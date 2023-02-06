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
import { Responsivehook } from "../Responsivehook";
import { Carousel1 } from "../Carousels/Carousel1";
import { CarouselNews } from "../Carousels/CarouselNews";
import { CarouselOffer } from "../Carousels/CarouselOffer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Landingpagebanner />
      <Videosection />
      <Responsivehook mobile={<Carousel1 />} pc={<Mentors />} />
      <Responsivehook mobile={<CarouselNews />} pc={<News />} />
      <Offer />
      <Collabe />
      <Responsivehook mobile={<CarouselOffer />} pc={<Blog />} />
      <Footer />
    </>
  );
};

export default HomePage;
