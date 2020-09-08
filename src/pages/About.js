import React from "react";
import Footer from "../components/Footer";
import HeaderAbout from "../components/HeaderAbout";
import Onlylogo from "../assets/img/onlylogo.jpg";
import Kamimobil from "../assets/img/kamimobil.jpg";
import Kamibil from "../assets/img/kamibil.jpg";
import Kart from "../assets/img/kart.png";

function About() {
  return (
    <div>
      <HeaderAbout />
      <section class="page-section" id="about">
        <div class="container">
          <ul class="timeline">
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src={Onlylogo} alt="" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">Åpningstider</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src={Kamibil} alt="" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">Hjemkjøring</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src={Kamimobil} alt="" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">Kontaktinformasjon</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src={Kart} alt="" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">Hvor finner du oss?</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
