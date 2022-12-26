import React from "react";
import Cursor from "../../Cursor";
import CitySectionTemplate from "../../CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../CityInfoSectionTemplate";
import Flower from "../../../Assets/Images/flower_2.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/galilee.png";

function Safad() {
  var city = {
    name: "Safad",
    nameAr: "صفد",
    description:
      " one of the oldest cities in historical Palestine, founded by the Canaanites over Trifut Castle on the southwestern slope of Mount Canaan. It is the capital of the occupied Upper Galilee, and the center of a district bearing its name located between Syria and Lebanon and the districts of Acre and Tiberias. The city is famous for its almond trees, olives, grapes, orchards, and its many springs. Four rivers cross the lands of the city: Hasbaya, Banias, Dan, and Brighith, which originate from Mount Hermon and flow into the Jordan River.",
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

export default Safad;
