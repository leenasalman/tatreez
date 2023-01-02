import React from "react";
import "./HeroSection.css";
import CityOutlineSection from "../CityOutlineSection";
import Button from "../Button";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row flex-column flex-md-row">
            <div className="col-md-6 col">
              <div className="hero-section__text">
                <h1>
                  Embroidery, or Tatreez (
                  <span className="font-arabic">تطريز</span>) is an artistic
                  tradition, embroidery has been a key feature of traditional
                  Palestinian costumes for hundreds of years. Tatreez is a
                  website created to showcase everything palestine, including
                  embroidery, films, food and how to support palestine.
                </h1>
                <Button Title="explore more" pagePath="#citiesID" />
              </div>
            </div>
            <div className="col-md-6 col">
              <CityOutlineSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
