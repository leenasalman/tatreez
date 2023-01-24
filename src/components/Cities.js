import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Cities.css";
function Cities() {
  useEffect(() => {
    var cities = document.querySelectorAll(".cites-section__text");
    setTimeout(() => {
      for (let i = 0; i < cities.length; i++) {
        cities[i].style.top = `${Math.random() * 90}%`;
        cities[i].style.bottom = `${Math.random() * 90}%`;
        cities[i].style.left = `${Math.random() * 90}%`;
        cities[i].style.right = `${Math.random() * 90}%`;
        cities[i].style.opacity = `${Math.random() * 1}`;
      }
    }, 100);
  }, []);
  return (
    <>
      <section className="cities-sections" id="citiesID">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col">
              <div className="cities-section__container">
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/acre">Acre</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/tulkarem">Tulkarem</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/haifa">Haifa</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/beersheba">Beersheba</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/hebron">Hebron</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/beisan">Beisan</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/jenin">Jenin</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/ramallah">Ramallah</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/nablus">Nablus</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/jerusalem">Jerusalem</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/nazareth">Nazareth</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/jaffa">Jaffa</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/safad">Safad</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/ramla">Ramla</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/tiberias">Tiberias</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/tatreez/embroidery/gaza">Gaza</Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cities;
