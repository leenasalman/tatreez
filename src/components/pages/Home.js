import React from "react";
import Cursor from "../Cursor";
import HeroSection from "../HeroSection";
import Loader from "../Loader";
import Cities from "../Cities";
import FilmsSlider from "../FilmsSlider";

function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <HeroSection />
      <Cities />
      <FilmsSlider />
    </>
  );
}

export default Home;
