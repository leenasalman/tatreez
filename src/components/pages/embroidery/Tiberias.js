import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Flower from "../../../Assets/Images/flower_2.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/galilee.png";

function Tiberias() {
  var city = {
    name: "Tiberias",
    nameAr: "طبريا",
    description:
    " has a long and interesting history that dates back over 2,000 years. The city was founded in the 1st century CE by the Roman emperor Augustus, and it was named after him (the name 'Tiberias' is derived from the Greek name for the emperor, 'Tiberius'). The southern gate of the city was discovered and found between 1975 and 1976 AD, in addition to the discovery of a network of sewage pipes that were built in the traditional Roman manner. Tiberias earn their livelihood from agriculture and work in fishing and some related work, and tourism has become the main occupation of the city's residents because of its location on the shore of the lake and near mineral springs. Tiberias is also known for its hot springs, which have been used for therapeutic purposes for centuries. The city has a number of spas and baths that are fed by the hot springs, and the waters are believed to have a number of health benefits, including relieving stress and improving circulation.",
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
