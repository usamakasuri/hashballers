import "./technical.css"


import SimpleSlider from '../techninalSlider/techninalSlider';

import DNA from '../../assets/dna01.png';

// import UnionIcon from "../../assets/Union.png";
// import MemoryIcon from "../../assets/memory.png";
// import LinkLineIcon from "../../assets/links-line-1.png";
// import AwardLineIcon from "../../assets/award-line-1.png";

function Techninal() {
  return (
    <div className="technical-section pb-5">

      <div className="container" id="minting-now">
        <div className="row" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
          <div className="offset-md-1 col-md-10 p-0">
            <img src={DNA} className="img-fluid dna" />
            <div className="row meeting-now">
              <div className="col-md-7 left-section">
                <h1>MINTING NOW</h1>
                <p>1,021 OF 10,000 MINTED</p>
              </div>
              <div className="col-md-5 pt-3 right-section">
                <p>Your will be randomly assigned a Hashballer on mint.</p>
                <div className="buy-now">
                  <select
                    id="select"
                    name="select"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option className="optionGroup" selected value="1">
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>


                  <a href="#" class="btn btn-primary btn-lg buy-button active" role="button" aria-pressed="true">BUY NOW</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container" id='technical-specs'>
        <div className="row techninal-specs">
          <div className="col-md-12 text-center">
            <h1 className="technical" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">TECHNICAL SPECS</h1>
            <SimpleSlider />
            <p className="verified-text" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">Veriefed Smart Contract Address: <a href="#"><span>0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</span></a> </p>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Techninal;
