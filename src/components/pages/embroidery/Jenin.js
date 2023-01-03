import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import Feather from "../../../Assets/Images/feather.svg";
import Flower from "../../../Assets/Images/flower_2.svg";
import IMG from "../../../Assets/Images/samaria.png";

function Jenin() {
  var city = {
    name: "Jenin",
    nameAr: "الخليل",
    description:
      " is a city with a rich history and a vibrant culture. It's known for its bustling markets, where you can find everything from fresh produce to handmade crafts. The city is also home to a number of cultural and historical sites, such as the Jenin Freedom Theatre and the ruins of the ancient city of Jenin.",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "Feather",
      shapeImage: Feather,
    },
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

export default Jenin;
