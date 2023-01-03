import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Feather from "../../../Assets/Images/feather.svg";
import Flower from "../../../Assets/Images/flower_2.svg";
import IMG from "../../../Assets/Images/samaria.png";
import Shapes from "../../Shapes";

function Tulkarem() {
  var city = {
    name: "Tulkarem's",
    nameAr: "طولكرم",
    description:
      " Canaanite name, which survived through to Roman times, was Birat Sorqua ('well of the chosen vine'), The Arabic name translates as 'mountain of vines' and may be derived from the Aramaic name Tur Karma ('vineyard hill') which was used for Tulkarem by the Crusaders and by the mediaeval Samaritan inhabitants. It has a rich history dating back to ancient times, and it has been inhabited by a variety of different cultures throughout its history, including the Israelites, the Romans, and the Ottoman Turks. Prior to the 1948 War, Tulkarem had a major agricultural sector, with grain, olives and fruits, especially watermelons, being the major crops cultivated by in the town's lands. One interesting fact about Tulkarem is that it is home to a number of ancient cave systems. These cave systems have been used for a variety of purposes throughout history, including as burial sites, places of worship, and hideouts for resistance fighters.",
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

export default Tulkarem;
