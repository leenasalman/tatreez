import React from "react";
import CitySectionTemplate from "../../sections/CityHeroSectionTemplate";
import CityInfoSectionTemplate from "../../sections/CityInfoSectionTemplate";
import Watch from "../../../Assets/Images/watch.svg";
import FlowerPot from "../../../Assets/Images/flower_pot.svg";
import Tent from "../../../Assets/Images/tent.svg";
import Shapes from "../../Shapes";
import IMG from '../../../Assets/Images/lydda.png';

function Ramla() {
  var city = {
    name: "Ramla",
    nameAr: "الرمله",
    description:
    " was founded by Sulyman Ibn 'Abdel Malik ('Umayad dynasty) in 715 A.D. The city's name (which means 'The female of the sand' in Arabic) may have been named after the abundance of sand in the area, or it could have been named after a beautiful woman named Ramlah who was generous to Sulyman Ibn 'Abdel Malik at al-Lydd! It's also home to a number of museums, including the Ramla Museum of Art and the L.A. Meyer Institute for Islamic Art.",
    imgSrc: IMG,
  };
  var shapes = [
    {
      shapeText: "FlowerPot",
      shapeImage: FlowerPot,
    },
    {
      shapeText: "Watch",
      shapeImage: Watch,
    },
    {
      shapeText: "Tent",
      shapeImage: Tent,
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

export default Ramla;
