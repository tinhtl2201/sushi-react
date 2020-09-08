import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import kamilogo from "../assets/img/kami-logo.png";

export default () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/">
            <img src={kamilogo} alt="kamisushi_logo" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/home">
                    Forside
                  </a>
                </li>
              </Link>
              <Link to="/meny">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/meny">
                    Meny
                  </a>
                </li>
              </Link>
              <Link to="/meny2">
                <li class="nav-item dropdown js-scroll-trigger" href="/meny2">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/meny2"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Meny2
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <HashLink to="meny2#sushi" class="dropdown-item">
                      Sushi
                    </HashLink>
                    <HashLink to="meny2#sashimi" class="dropdown-item">
                      Sashimi
                    </HashLink>
                    <HashLink to="meny2#maki" class="dropdown-item">
                      Maki
                    </HashLink>
                    <HashLink to="meny2#nigir" class="dropdown-item">
                      Nigiri
                    </HashLink>
                    <HashLink to="meny2#salater" class="dropdown-item">
                      Salater
                    </HashLink>
                    <HashLink to="meny2#småretter" class="dropdown-item">
                      Småretter
                    </HashLink>
                    <HashLink to="meny2#varmretter" class="dropdown-item">
                      Varmretter
                    </HashLink>
                    <HashLink to="meny2#ekstra" class="dropdown-item">
                      Ekstra
                    </HashLink>
                  </div>
                </li>
              </Link>
              <Link to="/about">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/about">
                    Om oss
                  </a>
                </li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/contact">
                    Kontakt oss
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
