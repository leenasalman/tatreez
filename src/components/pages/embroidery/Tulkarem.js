import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Feather from "../../../Assets/Images/feather.svg";
import Flower from "../../../Assets/Images/flower_2.svg";
import IMG from "../../../Assets/Images/samaria.png";
import Shapes from "../../Shapes";


function Tulkarem() {
  var city = {
    name: "Tulkarem",
    nameAr: "طولكرم",
    description:
      " is a Palestinian city in the West Bank, located in the Tulkarm Governorate of the State of Palestine. The Canaanite name, which survived through to Roman times, was Birat Sorqua ('well of the chosen vine'), The Arabic name translates as 'mountain of vines' and may be derived from the Aramaic name Tur Karma ('vineyard hill') which was used for Tulkarm by the Crusaders and by the mediaeval Samaritan inhabitants. Prior to the 1948 War, Tulkarm had a major agricultural sector, with grain, olives and fruits, especially watermelons, being the major crops cultivated by in the town's lands.",
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
