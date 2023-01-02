import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import Scale from "../../../Assets/Images/scale.svg";
import Star from "../../../Assets/Images/star.svg";
import PalmTree from "../../../Assets/Images/palm_tree.svg";
import IMG from "../../../Assets/Images/haifa.png";

function Haifa() {
  var city = {
    name: "Haifa",
    nameAr: "حيفا",
    description:
      " name is derived from the Canaanite Arabic word al-Hayfah meaning nearby, and during the Roman period it was known by Efa. The Crusades called Haifa by Cayphas and sometime they referred to it also by Sycaminon (meaning Wild Strawberry which is abandoned in the area). During the Islamic period, Acre dominated the coastal area, and Haifa was just a small town. Out of the 61,000 Palestinian Arabs who used to call Haifa home, only 3,566 Palestinians were allowed to stay. The remaining population were in constant fear on their lives and properties, and many of them witnessed the looting of their homes and possessions by the Zionists.",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "Scale",
      shapeImage: Scale,
    },
    {
      shapeText: "Star",
      shapeImage: Star,
    },
    {
      shapeText: "PalmTree",
      shapeImage: PalmTree,
    }
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

export default Haifa;
