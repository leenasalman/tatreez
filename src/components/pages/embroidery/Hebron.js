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
      " is nestled in the Judaean Mountains, 930 metres above sea level. The second-largest city in the West Bank, and the third-largest in the Palestinian territories. It's known for its rich history and cultural significance. It's also a place where you can find some of the best food in the West Bank!",
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
