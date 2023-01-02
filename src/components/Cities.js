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
                    <a href="/tatreez/acre">Acre</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/tulkarem">Tulkarem</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/haifa">Haifa</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/beersheba">Beersheba</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/hebron">Hebron</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/beisan">Beisan</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/jenin">Jenin</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/ramallah">Ramallah</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/nablus">Nablus</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/jerusalem">Jerusalem</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/nazareth">Nazareth</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/jaffa">Jaffa</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/safad">Safad</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/ramla">Ramla</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/tiberias">Tiberias</a>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <a href="/tatreez/gaza">Gaza</a>
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
