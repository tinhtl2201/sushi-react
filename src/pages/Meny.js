import React from "react";
import Footer from "../components/Footer";
import HeaderMeny from "../components/HeaderMeny";
import Nigiri from "../assets/img/nigiri.jpg";
import Closeicon from "../assets/img/close-icon.svg";

function Meny() {
  return (
    <div>
      <HeaderMeny />
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Sushi</div>
                </div>
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Nigiri} alt="sushi_example" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Sashimi</div>
                </div>
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Nigiri} alt="sushi_example" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Maki</div>
                </div>
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Nigiri} alt="sushi_example" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Nigiri</div>
                </div>
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Nigiri} alt="sushi_example" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Salater</div>
                </div>
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Nigiri} alt="sushi_example" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Småretter</div>
                </div>
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Nigiri} alt="sushi_example" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Varmretter</div>
                </div>
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal7"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Nigiri} alt="sushi_example" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Ekstra</div>
                </div>
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal8"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Nigiri} alt="sushi_example" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src={Closeicon} alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Sushi</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/01-full.jpg"
                      alt=""
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal2"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src={Closeicon} alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Sashimi</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/02-full.jpg"
                      alt=""
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Explore</li>
                      <li>Category: Graphic Design</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal3"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src={Closeicon} alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Maki</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/03-full.jpg"
                      alt=""
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Finish</li>
                      <li>Category: Identity</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal4"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src={Closeicon} alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Nigiri</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/04-full.jpg"
                      alt=""
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Lines</li>
                      <li>Category: Branding</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal5"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src={Closeicon} alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Salater</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/05-full.jpg"
                      alt=""
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Southwest</li>
                      <li>Category: Website Design</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal6"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src={Closeicon} alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Småretter</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/06-full.jpg"
                      alt=""
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Window</li>
                      <li>Category: Photography</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal7"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src={Closeicon} alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Varmretter</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/06-full.jpg"
                      alt=""
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Window</li>
                      <li>Category: Photography</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal8"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src={Closeicon} alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Ekstra</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/06-full.jpg"
                      alt=""
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Window</li>
                      <li>Category: Photography</li>
                    </ul>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meny;
