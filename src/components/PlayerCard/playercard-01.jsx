import './playercard.css';

import Slider from "react-slick";
import { RiVipDiamondFill } from "react-icons/ri";

import PlayerCardIcon from '../../assets/Group-182.svg';

import TeamOne from '../../assets/avatar-banner.png';

export default function PlayerCard() {
  var setting = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='player-section'>
      <Slider {...setting}>
        <div className="player-box">
          <div className="player-box-header d-flex justify-content-between">
            <div className="player-box-name">
              <p className="m-0">Hashballer # 8075</p>
              <span>LEGENDARY</span>
            </div>
            <div className="player-badge">
              <span>
                <RiVipDiamondFill />
              </span>
            </div>
          </div>
          <div className="player-box-body">
            <img src={TeamOne} className="img-fluid" />
          </div>
          <div className="player-box-footer">
            <div className="player-score">
              <p>Score</p>
              <h6>68.7</h6>
            </div>
            <div className="pts">
              <ul>
                <li>
                  <p>PTS</p>
                  <h6>28.9</h6>
                </li>
                <li>
                  <p>REB</p>
                  <h6>8.9</h6>
                </li>
                <li>
                  <p>AST</p>
                  <h6>12.1</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}