import React from "react";
import Cursor from "../../Cursor";
import CitySectionTemplate from "../../CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../CityInfoSectionTemplate";
import Flower from "../../../Assets/Images/flower_2.svg";
import Shapes from "../../Shapes";
import IMG from "../../../Assets/Images/galilee.png";

function Acre() {
  var city = {
    name: "Acre",
    nameAr: "عكّا",
    description:
      " was first founded  by either a Canaanite or a Phoenician Arab tribe known by al-Jar Jashyyein on Tel al-Fukhar, two kilometers East of the city.  For the Canaanites, Acre was known by 'Akkaw (meaning hot sand), which is derived from the Arabic word of 'Akk, meaning intense rubbing. In 1945, the district covered an area of 799.67 square kilometer, of which 2.79 square kilometer were allocated for public use, such as roads, wadies, railroads ... etc. Zionists owned only 25 square kilometer, which constituted 3.1% of the overall district's size. During the Ottoman period, the district was made up of 60 plus villages, but during the British Mandate it was shrunk to 48 village (of which 26 villages where completely ethnically cleansed and defaced by the Zionists after the 194 war), eight Bedouin localities, and nine Zionist colonies. It should noted that the villages of Iqrit, Tabrikha, and al-Mansura are Lebanese villages which became part of Palestine after WWI. In 1908, Acre had 1,000 houses, 6 mosques, 2 prisons, 5 churches, 166 warehouses, 13 coffee shops, and 415 shops.",
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
      <Cursor />
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

export default Acre;
