import React from "react";
import CitySectionTemplate from "../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../sections/CityInfoSectionTemplate";
import Watch from "../../Assets/Images/watch.svg";
import Cross from "../../Assets/Images/cross.svg";
import Shapes from "../Shapes";
import IMG from "../../Assets/Images/jerusalem.png";

function Jerusalem() {
  var city = {
    name: "Jerusalem",
    nameAr: "القدس",
    description:
      " is a city in Western Asia. Situated on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea, it is one of the oldest cities in the world and is considered to be a holy city for the three major Abrahamic religions: Judaism, Christianity, and Islam. Both Israelis (colonisers) and Palestinians claim Jerusalem as their capital, as Israel maintains its primary governmental institutions there and the State of Palestine ultimately foresees it as its seat of power. Because of this dispute, neither claim is widely recognized internationally. Throughout its long history, Jerusalem has been destroyed at least twice, besieged 23 times, captured and recaptured 44 times, and attacked 52 times.",
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
