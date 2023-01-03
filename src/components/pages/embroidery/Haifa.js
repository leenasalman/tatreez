import React, { useEffect } from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import Scale from "../../../Assets/Images/scale.svg";
import Star from "../../../Assets/Images/star.svg";
import PalmTree from "../../../Assets/Images/palm_tree.svg";
import IMG from "../../../Assets/Images/haifa.png";
import Footer from "../../sections/Footer";

function Haifa() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  var city = {
    name: "Haifa",
    nameAr: "حيفا",
    description:
      " name is derived from the Canaanite Arabic word al-Hayfah meaning nearby, and during the Roman period it was known by Efa. The Crusades called Haifa by Cayphas and sometime they referred to it also by Sycaminon, meaning Wild Strawberry which is abandoned in the area.",
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
      <Footer />
    </>
  );
}

export default Haifa;
