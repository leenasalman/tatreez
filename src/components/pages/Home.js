import React from "react";
import HeroSection from "../sections/HeroSection";
import Cities from "../Cities";
import FilmsSlider from "../sections/FilmsSlider";
import Button from "../Button";

function Home() {
  return (
    <>
    <Button Title="Support Palestine" pagePath="/support-palestine" additionalClass="float-btn"/>
      <HeroSection />
      <Cities />
      {/* <FilmsSlider /> */}
    </>
  );
}

export default Home;
