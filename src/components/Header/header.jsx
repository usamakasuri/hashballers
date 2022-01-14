import "./header.css";

import { useEffect } from 'react';
import Aos from 'aos';

import Banner from '../Banner/banner';

// import Frame from '../../assets/mobile/Frame.png';
import LogoImg from "../../assets/logo-main.png";
import Insta from "../../assets/insta-icon.png";
import Twitter from "../../assets/twitter-icon.png";
import OpenSea from "../../assets/open-sea-icon.png";
import Discord from "../../assets/discord-icon.png";

function Header() {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="main-header">
      <div className="container">
        <div className="row main-header-comp">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">
              <a className="navbar-brand" href="#">
                <img src={LogoImg} alt="Logo" className="img-fluid" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll main-nav-link">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#minting-now">
                          Minting Now
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#technical-specs">
                          Technical Specs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#ready-to-hashballers">
                          Ready to hashballers?
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#road-map">
                          Roadmap
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#team">
                          Team
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Meet the ballers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Leaderboard
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll social-icons">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img src={Insta} alt="instagram" className="img-fluid" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src={Twitter}
                        alt="instagram"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src={OpenSea}
                        alt="instagram"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src={Discord}
                        alt="instagram"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" class="btn btn-primary btn-lg meet-ballers active connect-wallet" role="button" aria-pressed="true">connect wallet</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className='banner'>
          <Banner />
        </div>

      </div>
    </div>
  );
}

export default Header;
