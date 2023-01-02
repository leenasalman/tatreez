import React from "react";
import CitySectionTemplate from "../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../sections/CityInfoSectionTemplate";
import Feather from "../../Assets/Images/feather.svg";
import Flower from "../../Assets/Images/flower_2.svg";
import IMG from "../../Assets/Images/samaria.png";
import Shapes from "../Shapes";


function Jenin() {
  var city = {
    name: "Jenin",
    nameAr: "الخليل",
    description:
      " is a Palestinian city in the northern West Bank. It serves as the administrative center of the Jenin Governorate of the State of Palestine and is a major center for the surrounding towns. In 2007, Jenin had a population of approximately 40,000 people, whilst the Jenin refugee camp had a population of 10,000. Jenin is under the administration of the Palestinian National Authority (as part of Area A of the West Bank).",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "Feather",
      shapeImage: Feather,
    },
    {
      shapeText: "Flower",
      shapeImage: Flower,
    },
  ];
  return (
    <>
      <CitySectionTemplate cityName={city.name} imgSrc={city.imgSrc} />
      <CityInfoSectionTemplate
        cityName={city.name}
        cityNameAr={city.nameAr}
        Info={city.description}
      />
      {shapes.map((shape, index) => {
        return (
          <Shapes
            key={index}
            animation={"fade-up"}
            shapeImage={shape.shapeImage}
            text={shape.shapeText}
            textAnimation={"fade-left"}
          />
        );
      })}
    </>
  );
}

export default Jenin;
