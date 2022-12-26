import React from "react";
import "./CityHeroSectionTemplate.css";

function CityHeroSectionTemplate(props) {
  return (
    <section className="city-section-template">
      <div className="container h-100">
        <div className="row h-100 flex-md-row flex-column">
          <div className="col">
            <div className="city-section-template__img d-flex justify-content-md-end align-items-md-center justify-content-center align-items-center ">
              <img
                src={props.imgSrc}
                alt={props.cityName + " embroidery pattern"}
              />
            </div>
          </div>
          <div className="col">
            <div className="city-section-template__text">
              <h2>{props.cityName}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CityHeroSectionTemplate;
