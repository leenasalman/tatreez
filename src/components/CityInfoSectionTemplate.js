import React from "react";
import "./CityInfoSectionTemplate.css";

function CityInfoSectionTemplate(props) {
  return (
    <>
      <section className="city-info-section-template">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col">
                <div className="city-info-section-template__text">
                    <p>{props.cityName} (<span className="font-arabic">{props.cityNameAr}</span>) {props.Info}</p>
                </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default CityInfoSectionTemplate;
