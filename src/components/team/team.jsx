import './team.css';

import Slider from "react-slick";
import { BsTwitter } from "react-icons/bs";

import TeamOne from '../../assets/avatar01.png';
import TeamTwo from '../../assets/avatar02.png';
import TeamThree from '../../assets/avatar03.png';
import TeamFour from '../../assets/avatar04.png';

import MobileTeamTile from '../../assets/mobile/title-team-mobile01.png';

export default function Team() {
  var setting = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          centerMode: true,
          centerPadding: '15%',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='team-section' id='team'>
       <img src={MobileTeamTile} class="img-fluid" class="MobileTeamTile" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true" />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 justify-content-center team-slider' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
           
            <Slider {...setting}>
              <div className="team-box text-center">
                <img src={TeamOne} className="img-fluid pb-4" alt="union" />
                <p>Joe Russell</p>
                <h4>Developer</h4>
                <span>
                  <a href='#'><BsTwitter /></a>
                </span>
              </div>
              <div className="team-box text-center">
                <img src={TeamTwo} className="img-fluid pb-4" alt="union" />
                <p>JOSH FIRESTONE</p>
                <h4>FINANCIAL GURU</h4>
                <span>
                  <a href='#'><BsTwitter /></a>
                </span>
              </div>
              <div className="team-box text-center">
                <img src={TeamThree} className="img-fluid pb-4" alt="union" />
                <p>BEN HAYES</p>
                <h4>TOKENOMICS EXPERT</h4>
                <span>
                  <a href='#'><BsTwitter /></a>
                </span>
              </div>
              <div className="team-box text-center">
                <img src={TeamFour} className="img-fluid pb-4" alt="union" />
                <p>JAMIE MASON</p>
                <h4>ART DIRECTOR</h4>
                <span>
                  <a href='#'><BsTwitter /></a>
                </span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}