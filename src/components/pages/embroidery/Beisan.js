import React, { useEffect } from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Shapes from "../../Shapes";
import Flower from "../../../Assets/Images/flower_2.svg";
import IMG from "../../../Assets/Images/galilee.png";
import Footer from "../../sections/Footer";
function Beisan() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  var city = {
    name: "Beisan",
    nameAr: "بيسان",
    description:
      " is an ancient city with a long history, dating back to at least the Bronze Age. Beisan has been conquered and ruled by a number of different empires and civilizations over the centuries, including the Egyptians, the Canaanites, the Philistines, the Persians, the Greeks, the Romans, the Byzantines, and the Ottoman Turks.",
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
      <Footer />
    </>
  );
}

export default Beisan;
