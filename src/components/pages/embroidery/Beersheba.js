import React from "react";
import Cursor from "../../Cursor";
import CitySectionTemplate from "../../CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/gaza.png";
import Ship from "../../../Assets/Images/ship.svg";
import Watch from "../../../Assets/Images/watch.svg";
import ButterFly from "../../../Assets/Images/butterfly.svg";
function Beersheba() {
  var city = {
    name: "Beersheba",
    nameAr: "بئر السبع",
    description:
      " was one of the subdistricts of Mandatory Palestine. It was located in modern-day southern Israel (The colonisation). The city of Beersheba was the capital. After the 1948 Arab-Israeli War, the subdistrict largely transformed into the Beersheba Subdistrict of Israel (The colonisation). The vast majority of the population, approximately 90%, consisted of nomadic Palestinian Bedouins.",
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
      <Cursor />
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
