import React, { useEffect } from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import Flower from "../../../Assets/Images/flower_2.svg";
import IMG from "../../../Assets/Images/galilee.png";

function Acre() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  var city = {
    name: "Acre",
    nameAr: "عكّا",
    description:
      " was first founded  by either a Canaanite or a Phoenician Arab tribe known by al-Jar Jashyyein on Tel al-Fukhar. For the Canaanites, Acre was known by 'Akkaw (meaning hot sand), which is derived from the Arabic word of 'Akk, meaning intense rubbing. Acre's Old City is a UNESCO World Heritage site and features a number of historic landmarks, including the Crusader-era city walls, the Al-Jazzar Mosque, and the Acre Citadel. The city is predominantly Arab and has a mixed population of Jews, Muslims, and Christians. It should noted that the villages of Iqrit, Tabrikha, and al-Mansura are Lebanese villages which became part of Palestine after WWI.",
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

export default Acre;
