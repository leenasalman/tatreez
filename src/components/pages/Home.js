import React from "react";
import HeroSection from "../sections/HeroSection";
import Cities from "../Cities";
import FilmsSlider from "../sections/FilmsSlider";
import Button from "../Button";
import Footer from "../sections/Footer";

function Home() {
  return (
    <>
    <Button Title="Support Palestine" pagePath="/support-palestine" additionalClass="float-btn"/>
      <HeroSection />
      <Cities />
      <FilmsSlider />
      <Footer />
    </>
  );
}

export default Home;
