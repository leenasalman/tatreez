import React, { useEffect } from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Flower from "../../../Assets/Images/flower_2.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/galilee.png";

function Safad() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  var city = {
    name: "Safad",
    nameAr: "صفد",
    description:
    " one of the oldest cities in historical Palestine, founded by the Canaanites over Trifut Castle on the southwestern slope of Mount Canaan. It is the capital of the occupied Upper Galilee, and the center of a district bearing its name located between Syria and Lebanon and the districts of Acre and Tiberias. It's known for its beautiful mountainous setting and for its religious significance to Jews, as it was an important center of Torah study and Kabbalah during the 16th and 17th centuries. The city is famous for its almond trees, olives, grapes, orchards, and its many springs. Four rivers cross the lands of the city: Hasbaya, Banias, Dan, and Brighith.",
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

export default Safad;
