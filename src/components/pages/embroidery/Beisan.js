import React from "react";
import Cursor from "../../Cursor";
import CitySectionTemplate from "../../CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../CityInfoSectionTemplate";
import Flower from "../../../Assets/Images/flower_2.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/galilee.png";
function Beisan() {
  var city = {
    name: "Beisan",
    nameAr: "بيسان",
    description:
      " was one of the subdistricts of Mandatory Palestine. It was located around the city of Baysan. After the 1948 Arab-Israeli War, the subdistrict disintegrated; most of it became part of Israel (The colonisation), and has been merged with the neighboring Nazareth Subdistrict to from the modern-day Jezre'el County. The southernmost parts, however, fell within the modern-day West Bank - because of that, they were first occupied and unilaterally annexed by Jordan, and were later occupied by Israel (The colonisation) following the Six-day War.",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "Flower",
      shapeImage: Flower,
    },
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

export default Beisan;
