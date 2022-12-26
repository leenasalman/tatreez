import React from "react";
import "./HeroSection.css";
import CityOutlineSection from "./CityOutlineSection";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row flex-column flex-md-row">
            <div className="col-md-6 col">
              <div className="hero-section__text">
                <h1>
                  Embroidery, or Tatreez (<span className="font-arabic">تطريز</span>) is an artistic tradition,
                  embroidery has been a key feature of traditional Palestinian
                  costumes for hundreds of years. Tatreez is a website created
                  to showcase everything palestine, including embroidery, films,
                  food and how to support palestine.
                </h1>
                <a href="/" className="btn tatreez-primary-btn">
                  explore more
                </a>
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
