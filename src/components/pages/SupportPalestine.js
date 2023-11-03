import React from "react";
import Item from "../Item";
import Footer from '../sections/Footer';


function SupportPalestine() {
  return (
    <>
      <section className="support-section">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col">
              <div className="d-flex flex-column justify-content-center align-items-start h-100">
                <h2 className="title-style">Learn, Donate and Boycott</h2>
                <ul className="list-items">
                  <Item
                    LinkUrl="https://www.map.org.uk/"
                    Text="Medical Aid for Palestine"
                  />
                  <Item
                    LinkUrl="https://bdsmovement.net/"
                    Text="Boycott, Divestment, Sanctions"
                  />
                  <Item
                    LinkUrl="https://decolonizepalestine.com/"
                    Text="Decolonize Palestine"
                  />
                  <Item
                    LinkUrl="https://al-shabaka.org/civicrm/contribute/transact/?reset=1&id=1"
                    Text="Al Shabaka"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SupportPalestine;
