import React from "react";

export default () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-left">
            Copyright © Kamisushi 2020
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a className="btn btn-warning btn-social mx-2" href="#!">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="btn btn-warning btn-social mx-2"
              href="https://www.facebook.com/illionkami/"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-warning btn-social mx-2"
              href="https://www.instagram.com/kamisushi/"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="col-lg-4 text-lg-right">
            <a className="mr-3" href="#!">
              Privacy Policy
            </a>
            <a href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
