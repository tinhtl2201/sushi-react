import React from "react";

export default () => {
  return (
    <div>
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              VELKOMMEN TIL KAMISUSHI
            </h2>
            <h3 className="section-subheading text-muted">
              Du bestiller, vi leverer! ring oss på 22 22 06 67!
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <a href="/meny">
                  <i className="fa fa-bars fa-stack-1x fa-inverse"></i>
                </a>
              </span>
              <h4 className="my-3">Meny</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <a href="/">
                  <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                </a>
              </span>
              <h4 className="my-3">App</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <a href="/">
                  <i className="fa fa-car fa-stack-1x fa-inverse"></i>
                </a>
              </span>
              <h4 className="my-3">Hjemkjøring</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
