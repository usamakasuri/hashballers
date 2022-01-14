import './footer.css';

import MainLogo from '../../assets/logo-main.png';
import INSTA from '../../assets/insta-icon.png';
import TWITTER from '../../assets/twitter-icon.png';
import OPENSEA from '../../assets/open-sea-icon.png';
import DISCORD from '../../assets/discord-icon.png';

function Footer() {
  return (
    <div className='footer-component'>
      <div className='container border-top-color'>
        <div className='row pt-5' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-easing="linears">
              <div className='col-md-4 logo-section'>
                <a href="/">
                <img src={MainLogo} alt="footer-logo" className='img-fluid footer-logo' />
                </a>
              </div>
              <div className='col-md-4 footer-links'>
                <ul className='footer-pages'>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">The Ballers</a>
                  </li>
                  <li>
                    <a href="#">Laederboard</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-4 footer-social-media'>
                <ul>
                  <li>
                    <a href="#">
                      <img src={INSTA} className='img-fluid' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={TWITTER} className='img-fluid' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={OPENSEA} className='img-fluid' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={DISCORD} className='img-fluid' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='row copyright' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
              <div className='col-md-12 text-center text-white'>
                <p>Copyright ©  2021 Harshballers. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Footer;


