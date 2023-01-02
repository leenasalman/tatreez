import React from "react";
import CitySectionTemplate from "../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../sections/CityInfoSectionTemplate";
import Flower from "../../Assets/Images/flower_2.svg";
import Shapes from "../Shapes";
import IMG from "../../Assets/Images/galilee.png";

function Tiberias() {
  var city = {
    name: "Tiberias",
    nameAr: "طبريا",
    description:
      " is located in northeastern Palestine on the western shore of Lake Tiberias. During the archaeological excavations that were conducted in the city between 1975 and 1976 AD, the southern gate of the city was discovered and found, in addition to the discovery of a network of sewage pipes that were built in the traditional Roman manner. Tiberias earn their livelihood from agriculture and work in fishing and some related work, and tourism has become the main occupation of the city's residents because of its location on the shore of the lake and near mineral springs.",
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

export default Tiberias;
