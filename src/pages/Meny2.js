import React from "react";
import Footer from "../components/Footer";
import HeaderMeny from "../components/HeaderMeny";
import Nigiri from "../assets/img/nigiri.jpg";

function Meny2() {
  return (
    <div>
      <HeaderMeny />
      <section class="page-section">
        <div class="container">
          <h2 class="menyHeading" id="sushi">
            Sushi - Set meny
          </h2>
          <div className="row">
            <div class="column">
              <ul class="meny2">
                <li className="meny-list">
                  <img className="meny-img" src={Nigiri} alt="" />
                  <h4 className="meny-heading">12. Liten sushi (8 biter)</h4>
                  <p className="meny-pris">91,-</p>
                  <p className="meny-text">
                    4 Laks og 4 Laks Maki. Inneholder fisk.
                  </p>
                </li>
                <li className="meny-list">
                  <img className="meny-img" src={Nigiri} alt="" />
                  <h4 className="meny-heading">12. Liten sushi (8 biter)</h4>
                  <p className="meny-pris">91,-</p>
                  <p className="meny-text">
                    4 Laks og 4 Laks Maki. Inneholder fisk.
                  </p>
                </li>
                <li className="meny-list">
                  <img className="meny-img" src={Nigiri} alt="" />
                  <h4 className="meny-heading">12. Liten sushi (8 biter)</h4>
                  <p className="meny-pris">91,-</p>
                  <p className="meny-text">
                    4 Laks og 4 Laks Maki. Inneholder fisk.
                  </p>
                </li>
              </ul>
            </div>
            <div class="column">
              <ul class="meny2">
                <li className="meny-list">
                  <img className="meny-img" src={Nigiri} alt="" />
                  <h4 className="meny-heading">12. Liten sushi (8 biter)</h4>
                  <p className="meny-pris">91,-</p>
                  <p className="meny-text">
                    4 Laks og 4 Laks Maki. Inneholder fisk.
                  </p>
                </li>
                <li className="meny-list">
                  <img className="meny-img" src={Nigiri} alt="" />
                  <h4 className="meny-heading">12. Liten sushi (8 biter)</h4>
                  <p className="meny-pris">91,-</p>
                  <p className="meny-text">
                    4 Laks og 4 Laks Maki. Inneholder fisk.
                  </p>
                </li>
                <li className="meny-list">
                  <img className="meny-img" src={Nigiri} alt="" />
                  <h4 className="meny-heading">12. Liten sushi (8 biter)</h4>
                  <p className="meny-pris">91,-</p>
                  <p className="meny-text">
                    4 Laks og 4 Laks Maki. Inneholder fisk.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Meny2;
