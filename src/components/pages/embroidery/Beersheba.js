import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/gaza.png";
import Ship from "../../../Assets/Images/ship.svg";
import Watch from "../../../Assets/Images/watch.svg";
import ButterFly from "../../../Assets/Images/butterfly.svg";
function Beersheba() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  var city = {
    name: "Beersheba",
    nameAr: "بئر السبع",
    description:
      " is a city in Palestine with the largest in the Negev desert and the seventh-largest in the country. The city of Beersheba was the capital. The vast majority of the population, approximately 90%, consisted of nomadic Palestinian Bedouins.",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "Butterfly",
      shapeImage: ButterFly,
    },
    {
      shapeText: "Ship",
      shapeImage: Ship,
    },
    {
      shapeText: "Watch",
      shapeImage: Watch,
    }
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

export default Beersheba;
