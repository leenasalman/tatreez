import React from "react";
import { useEffect } from "react";
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
      <section className="cities-sections">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col">
              <div className="cities-section__container">
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/acre">Acre</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/tulkarem">Tulkarem</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/haifa">Haifa</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/beersheba">Beersheba</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/hebron">Hebron</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/beisan">Beisan</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/jenin">Jenin</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/ramallah">Ramallah</a>
                  </h2>
                </div>
                <div className="cities-style">
                  <h2 className="distinct-style">Cities</h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/nablus">Nablus</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/jerusalem">Jerusalem</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/nazareth">Nazareth</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/jaffa">Jaffa</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/safad">Safad</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/ramla">Ramla</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/tiberias">Tiberias</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/embroidery/gaza">Gaza</a>
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
