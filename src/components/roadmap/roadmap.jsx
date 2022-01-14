import './roadmap.css';

import TenPercentIcon from '../../assets/10-percent.png';
import TwentyPercentIcon from '../../assets/20-percent.png';
import ThirtyPercentIcon from '../../assets/30-percent.png';
import FiftyPercentIcon from '../../assets/50-percent.png';
import sevenfivePercentIcon from '../../assets/75-percent.png';
import HunderedPercentIcon from '../../assets/100-percent.png';


import MTenPercentIcon from '../../assets/mobile/m-10-percent.png';
import MTwentyPercentIcon from '../../assets/mobile/m-20-percent.png';
import MThirtyPercentIcon from '../../assets/mobile/m-30-percent.png';
import MFiftyPercentIcon from '../../assets/mobile/m-50-percent.png';
import MsevenfivePercentIcon from '../../assets/mobile/m-75-percent.png';
import MHunderedPercentIcon from '../../assets/mobile/m-100-percent.png';

function RoadMap() {
  return (

    <div>

      {/* desktop view */}
      <div className='road-map-section' id='road-map'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='roadmap' data-aos="fade-down" data-aos-duration="3000" data-aos-anchor-placement="center-bottom" data-aos-once="true">roadmap</h1>
            </div>
          </div>
        </div>

        <div className='road-map-bg'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 road-map-div'>
                <div className='container'>
                  <div className='row road-map-row' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                    <div className='col-md-5'>
                      <p className='text-right text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
                    </div>
                    <div className='col-md-2 text-center'>
                      <img src={TenPercentIcon} alt='icon' className='img-fluid ten-percent' />
                    </div>
                    <div className='col-md-5 text-white'>
                    </div>
                  </div>
                  <div className='row road-map-row' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                    <div className='col-md-5'>
                    </div>
                    <div className='col-md-2 text-center '>
                      <img src={TwentyPercentIcon} alt='icon' className='img-fluid twenty-percent' />
                    </div>
                    <div className='col-md-5'>
                      <p className='text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus
                        rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor
                        eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
                    </div>
                  </div>
                  <div className='row road-map-row' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                    <div className='col-md-5'>
                      <p className='text-right text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas
                        tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor
                        eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
                    </div>
                    <div className='col-md-2 text-center'>
                      <img src={ThirtyPercentIcon} alt='icon' className='img-fluid thirty-percent' />
                    </div>
                    <div className='col-md-5 text-white'>
                    </div>
                  </div>
                  <div className='row road-map-row' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                    <div className='col-md-5'>
                    </div>
                    <div className='col-md-2 text-center'>
                      <img src={FiftyPercentIcon} alt='icon' className='img-fluid fifty-percent' />
                    </div>
                    <div className='col-md-5'>
                      <p className='text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
                    </div>
                  </div>
                  <div className='row road-map-row' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                    <div className='col-md-5'>
                      <p className='text-right text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
                    </div>
                    <div className='col-md-2 text-center'>
                      <img src={sevenfivePercentIcon} alt='icon' className='img-fluid sevenfive-percent' />
                    </div>
                    <div className='col-md-5'>
                    </div>
                  </div>
                  <div className='row road-map-row' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                    <div className='col-md-5'>
                    </div>
                    <div className='col-md-2 text-center'>
                      <img src={HunderedPercentIcon} alt='icon' className='img-fluid hundred-percent' />
                    </div>
                    <div className='col-md-5'>
                      <p className='text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end desktop view */}

      {/* mobile view */}
      <div className='container mobile-view-section' id='road-map'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 data-aos="fade-down" data-aos-duration="3000" data-aos-anchor-placement="center-bottom" data-aos-once="true">ROADMAP</h1>
          </div>
        </div>
        <div className='mobile-view-bg'>
          <div className='row pt-5 pb-5'>
            <div className='col-md-12'>
              <div className='mobile-view-sec text-center' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                <img src={MTenPercentIcon} alt='icon' className='img-fluid padding-top-40' />
                <p className='pt-3 pb-3 text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='mobile-view-sec text-center' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                <img src={MTwentyPercentIcon} alt='icon' className='img-fluid' />
                <p className='pt-3 pb-3 text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='mobile-view-sec text-center' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                <img src={MThirtyPercentIcon} alt='icon' className='img-fluid' />
                <p className='pt-3 pb-3 text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='mobile-view-sec text-center' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                <img src={MFiftyPercentIcon} alt='icon' className='img-fluid' />
                <p className='pt-3 pb-3 text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='mobile-view-sec text-center' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                <img src={MsevenfivePercentIcon} alt='icon' className='img-fluid' />
                <p className='pt-3 pb-3 text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='mobile-view-sec text-center' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
                <img src={MHunderedPercentIcon} alt='icon' className='img-fluid' />
                <p className='pt-3 pb-3 text-white'>Porta lorem mollis aliquam ut porttitor leo a diam. Phasellus egestas tellus rutrum tellus pellentesque eu. Non consectetur a erat nam at lectus urna. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Leo in vitae turpis massa sed elementum tempus </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end mobile view */}

    </div>



  );
}

export default RoadMap;


