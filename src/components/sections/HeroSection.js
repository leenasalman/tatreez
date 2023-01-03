import React from "react";
import "./HeroSection.css";
import CityOutlineSection from "../CityOutlineSection";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row flex-column flex-md-row">
            <div className="col-md-6 col first-col">
              <div className="hero-section__text">
                <h1>
                  Palestinian embroidery, or Tatreez (
                  <span className="font-arabic">تطريز</span>) is a traditional
                  art form that has been passed down through generations of
                  Palestinian women. Tatreez is a website
                  showcasing palestinian cities' tatreez form, films and ways to
                  support palestine.
                </h1>
              </div>
            </div>
            <div className="col-md-6 col second-col">
              <CityOutlineSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
