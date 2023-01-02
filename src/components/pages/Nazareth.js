import React from "react";
import CitySectionTemplate from "../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../sections/CityInfoSectionTemplate";
import Flower from "../../Assets/Images/flower_2.svg";
import Shapes from "../Shapes";
import IMG from "../../Assets/Images/galilee.png";
function Nazareth() {
  var city = {
    name: "Nazareth",
    nameAr: "الناصرة",
    description:
      " is the largest Palestinian Arab city inside Israel and one of the holiest Christian cities on earth. In the New Testament the town is described as the childhood home of Jesus and as such is a centre of Christian shrines and pilgrimage, with many shrines commemorating biblical events. Although according to the 1947 UN Partition plan the city was part of the Palestinian Arab state, it was conquered in 1948 by the Israeli army and annexed to the Israeli state. On 16 July, three days after the mass expulsion of the Palestinian cities of Lydda and Ramle by the Israeli army, Nazareth surrendered to Jewish forces and its inhabitants were allowed to remain in situ. In 1948 the Zionist attitude towards the Palestinian Christian communities in Galilee was generally less aggressive than the attitude towards the local Palestinian Muslims. This article addresses the question: how and why did Nazareth survive the 1948 Nakba and mass expulsion of Palestinians from the Galilee? While exploring this Christian dimension, the article focuses on the key roles played by the Muslim Mayor Yusuf al-Fahum, Israeli Prime Minister and Defence Minister Ben-Gurion and army commanders involved in deciding the fate of the city.",
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
    </>
  );
}

export default Nazareth;
