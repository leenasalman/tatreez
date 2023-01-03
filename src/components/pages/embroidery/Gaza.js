import React, { useEffect } from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/gaza.png";
import Ship from "../../../Assets/Images/ship.svg";
import Watch from "../../../Assets/Images/watch.svg";
import ButterFly from "../../../Assets/Images/butterfly.svg";
function Gaza() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  var city = {
    name: "Gaza",
    nameAr: "غزة",
    description:
      " is a small coastal territory in the eastern Mediterranean and is home to a population of around 2 million people. Together, the Gaza Strip and the West Bank make up the State of Palestine, while being under Israeli military occupation since 1967.",
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

export default Gaza;
