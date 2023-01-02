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
      <section className="cities-sections" id="citiesID">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col">
              <div className="cities-section__container">
                <div className="cites-section__text">
                  <h2>
                    <a href="/acre">Acre</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tulkarem">Tulkarem</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/haifa">Haifa</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/beersheba">Beersheba</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/hebron">Hebron</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/beisan">Beisan</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/jenin">Jenin</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/ramallah">Ramallah</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/nablus">Nablus</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/jerusalem">Jerusalem</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/nazareth">Nazareth</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/jaffa">Jaffa</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/safad">Safad</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/ramla">Ramla</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tiberias">Tiberias</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/gaza">Gaza</a>
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
