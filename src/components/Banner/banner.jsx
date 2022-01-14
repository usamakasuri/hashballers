import "./banner.css";

import PlayerCard from '../PlayerCard/playercard';
import ShopOpenSea from "../../assets/shop-open-sea.png";

function Banner() {
  return (
    <div className="banner-section">
      <div className="container-fluid">
        <div className="row banner-section-one">
          <div className="col-sm-12 col-lg-8 col-md-8 banner-text" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
            <h1>
              it's the year <span className="span-class">2270</span> & the game
              is in peril<span className="span-class">.</span> <br /> build your team
              today<span className="span-class">.</span>
            </h1>
        
            <div className="banner-button">
              <a href="#" class="btn btn-primary btn-lg meet-ballers active" role="button" aria-pressed="true">meet the ballers</a>
              <a href="#" class="btn btn-secondary btn-lg opensea-shop active" role="button" aria-pressed="true"><img src={ShopOpenSea} className="shop" /> shop on opensea</a>
            </div>

          </div>
          <div className="col-md-4 plyer-card-section" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
            <PlayerCard />
          </div>
        </div>
        <div className="row text-center backstory-content" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
          <div className="offset-md-1 col-md-10">
            <div className="backstory">
              <h1>Backstory</h1>
              <p>
                The year is 2270. A tragic world event has left Earth
                uninhabitable. Basketball has ceased being played. The new
                colony on a distant rock is joyless without the game, until a
                curious data scientist discovers a sight to behold: the best
                basketball moments permanently etched on the blockchain. He
                awakens to possibility and a plot is hatched to recreate these
                superstars and bring joy to his people. The only problem is, all
                of the player data on the blockchain is encrypted... hashed.
              </p>
              <p>
                Hashballer NFT’s represent the scientist's decision to take on
                the task of resuscitating the game. These collectibles are the
                result-with varying degrees of success- of their painstaking
                efforts at decrypting the data necessary to recreate the game’s
                most Legendary Ballers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
