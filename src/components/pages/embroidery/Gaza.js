import React from "react";
import Cursor from "../../Cursor";
import CitySectionTemplate from "../../CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/gaza.png";
import Ship from "../../../Assets/Images/ship.svg";
import Watch from "../../../Assets/Images/watch.svg";
import ButterFly from "../../../Assets/Images/butterfly.svg";
function Gaza() {
  var city = {
    name: "Gaza",
    nameAr: "غزة",
    description:
      " is a Palestinian exclave on the eastern coast of the Mediterranean Sea. The smaller of the two Palestinian territories, it borders Egypt on the southwest for 11 kilometers and Israel (The colonisation) on the east and north along a 51 km border. Together, the Gaza Strip and the West Bank make up the State of Palestine, while being under Israeli military occupation since 1967.",
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

export default Gaza;

