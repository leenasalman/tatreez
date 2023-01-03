import React, { useEffect } from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Watch from "../../../Assets/Images/watch.svg";
import Cross from "../../../Assets/Images/cross.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/jerusalem.png";

function Jerusalem() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  var city = {
    name: "Jerusalem",
    nameAr: "القدس",
    description:
    " is a city with a rich history and a vibrant culture. It's known for its religious significance to Christians, Jews, and Muslims, and it's home to a number of important religious sites, including the Western Wall, the Church of the Holy Sepulchre, and the Dome of the Rock. But Jerusalem isn't just a city for history buffs - it's also a great place to have fun and try new things! From hiking in the beautiful hills surrounding the city to trying delicious Palestinian cuisine. Throughout its long history, Jerusalem has been destroyed at least twice, besieged 23 times, captured and recaptured 44 times, and attacked 52 times.",
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

export default Jerusalem;
