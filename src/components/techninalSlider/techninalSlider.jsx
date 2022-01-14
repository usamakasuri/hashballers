import React from "react";
import Slider from "react-slick";

import UnionIcon from "../../assets/Union.png";
import MemoryIcon from "../../assets/memory.png";
import LinkLineIcon from "../../assets/links-line-1.png";
import AwardLineIcon from "../../assets/award-line-1.png";

import './techninalSlider.css';

export default function SimpleSlider() {
  var settings = {
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
          slidesToShow: 1,
          // centerMode: true,
          // centerPadding: '10%',
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="slick-slider-component pb-5" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
      <Slider {...settings}>
        <div className="specs-box">
          <img src={UnionIcon} className="img-fluid pb-4" alt="union" />
          <h4>ERC-1155 </h4>
          <p>
            All Hashballers live on
            an ERC-1155 compatible
            Smart Contract on the
            Ethereum blockchain.
          </p>
        </div>
        <div className="specs-box">
          <img src={MemoryIcon} className="img-fluid pb-4" alt="union" />
          <h4>Matching algorithm </h4>
          <p>
            An on-chain random
            starting index generation
            assures that everybody
            is treated equally.
          </p>
        </div>
        <div className="specs-box">
          <img src={LinkLineIcon} className="img-fluid pb-4" alt="union" />
          <h4>IPFS</h4>
          <p>
            The NFT metadata and
            images, are dual hosted
            on both IPFS and the
            Arweave blockchain
          </p>
        </div>
        <div className="specs-box">
          <img src={AwardLineIcon} className="img-fluid pb-4" alt="union" />
          <h4>Provenance</h4>
          <p>
            Our Smart contract implements a locking mechanism that prevents tampering and will be activated at the time
            the community chooses.
          </p>
        </div>
      </Slider>

    </div>
  );
}
