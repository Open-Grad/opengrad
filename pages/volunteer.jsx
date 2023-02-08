import React from "react";
import Volunteer from "../components/volunteer/Volunteer";
import Navbar1 from "../components/navbar/Navbar1";
import Faq from "../components/volunteer/Faq";
import Footer from "../components/footer/Footer";

export default function volunteer() {
  return (
    <>
      <Navbar1 />
      <Volunteer />
      <Faq />
      <Footer />
    </>
  );
}
