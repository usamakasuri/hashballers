
import Slider from "react-slick";
import { RiVipDiamondFill } from "react-icons/ri";
import TeamOne from "../../assets/avatar-banner.png";
import websitePlayerCards from "./website-player-card-sample.json";
// import PlayerCardIcon from "../../assets/Group-182.svg";

import "./playercard.css";

/**
 * @description Itrates player cards
 * @returns JSX.Element
 */
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
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="player-section">
      <Slider {...setting}>
        {websitePlayerCards.data.map((card, index) => {
          return (
            <div key={`player-card-${index}`} className="player-box">
              <div className="player-box-header d-flex justify-content-between">
                <div className="player-box-name">
                  <p className="m-0">{card.attributes.name}</p>
                  <span>{card.attributes.score_tier} </span>
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
                  <h6>{card.attributes.score}</h6>
                </div>
                <div className="pts">
                  <ul>
                    <li>
                      <p>PTS</p>
                      <h6>{card?.attributes?.pts}</h6>
                    </li>
                    <li>
                      <p>REB</p>
                      <h6>{card?.attributes?.reb}</h6>
                    </li>
                    <li>
                      <p>AST</p>
                      <h6>{card?.attributes?.ast}</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
