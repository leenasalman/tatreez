import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Watch from "../../../Assets/Images/watch.svg";
import Cross from "../../../Assets/Images/cross.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/jerusalem.png";

function Hebron() {
  var city = {
    name: "Hebron",
    nameAr: "الخليل",
    description:
      " is a Palestinian city in the southern West Bank, 30 kilometres south of Jerusalem. Nestled in the Judaean Mountains, it lies 930 metres above sea level. The second-largest city in the West Bank (after East Jerusalem), and the third-largest in the Palestinian territories (after East Jerusalem and Gaza), it has a population of over 215,000 Palestinians (2016), and seven hundred Jewish settlers concentrated on the outskirts of its Old City.",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "Cross",
      shapeImage: Cross,
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

export default Hebron;
