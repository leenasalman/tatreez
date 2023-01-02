import React from "react";
import CitySectionTemplate from "../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../sections/CityInfoSectionTemplate";
import Watch from "../../Assets/Images/watch.svg";
import FlowerPot from "../../Assets/Images/flower_pot.svg";
import Tent from "../../Assets/Images/tent.svg";
import Shapes from "../Shapes";
import IMG from '../../Assets/Images/lydda.png';

function Jaffa() {
  var city = {
    name: "Jaffa",
    nameAr: "يافا",
    description:
      " was the most advanced city in Palestine in the development of its commercial, banking, fishing, and agriculture industries. Jaffa had many factories specializing in cigarette making, cement making, tile and roof tile production, iron casting, cotton processing plants, traditional handmade carpets, leather products, wood box industry for Jaffa orange, textile, presses and publications. It should also be noted that the majority of all publications and newspapers in Palestine were published in Jaffa.",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "FlowerPot",
      shapeImage: FlowerPot,
    },
    {
      shapeText: "Watch",
      shapeImage: Watch,
    },
    {
      shapeText: "Tent",
      shapeImage: Tent,
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

export default Jaffa;
