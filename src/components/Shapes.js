import React from "react";
import "./Shapes.css";

function Shapes(props) {
  return (
    <>
      <section className="shapes">
        <div className="container shapes-container">
          <div className="row shapes-row flex-md-row flex-column">
            <div className="col">
              <div className="object-container">
                <img
                  className="object"
                  data-aos={props.animation}
                  src={props.shapeImage}
                  alt={props.text}
                />
              </div>
            </div>
            <div className="col">
              <div className="text-style" data-aos={props.textAnimation}>
                <h3>{props.text}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shapes;
