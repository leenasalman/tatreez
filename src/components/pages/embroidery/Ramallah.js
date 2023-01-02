import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Watch from "../../../Assets/Images/watch.svg";
import Cross from "../../../Assets/Images/cross.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/jerusalem.png";

function Ramallah() {
  var city = {
    name: "Ramallah",
    nameAr: "رام الله",
    description:
      "  has been described as the seat of power of the Palestinian Authority and serves as the headquarters for most international NGOs and embassies. Hundreds of millions of dollars in aid flowing into the city have boosted Ramallah's economy greatly since the end of the Second Intifada. Ramallah, like most Palestinian areas, has a rich folklore of song and dance. Songs accompanied people in every occasion whether it was the harvest season, roofing a house, traveling, coming back from travel, engagement, wedding, or even death.",
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

export default Ramallah;
