import React, { useEffect } from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Flower from "../../../Assets/Images/flower_2.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/galilee.png";
function Nazareth() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  var city = {
    name: "Nazareth",
    nameAr: "الناصرة",
    description:
    " is one of the holiest Christian cities on earth. It's known for being the childhood home of Jesus and for its religious significance to Christians, but it's also home to a large Palestinian population and has a vibrant Muslim community. The city has a lively arts scene, with galleries, theaters, and music venues, and it's also home to a number of delicious restaurants serving a variety of cuisines. Nazareth surrendered to Jewish forces and its inhabitants were allowed to remain in situ. In 1948 the Zionist attitude towards the Palestinian Christian communities in Galilee was generally less aggressive than the attitude towards the local Palestinian Muslims.",
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

export default Nazareth;
