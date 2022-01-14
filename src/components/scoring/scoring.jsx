import './scoring.css';

import Diamond from '../../assets/icon-color01.png';
import Elite from '../../assets/icon-color02.png';
import AllStar from '../../assets/icon-color03.png';
import Starter from '../../assets/icon-color04.png';
import BENCHWARMER from '../../assets/icon-color05.png';
import ScoreMobileImg from '../../assets/mobile/bg-scoring-mobile01.jpg';


function Scoring() {
  return (
    <div className='scoring-comp' id='ready-to-hashballers'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 content-section'>
            <h1 data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">Scoring</h1>
            <img src={ScoreMobileImg} alt="image" class="score-bg-img" />
            <p data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">Feugiat pretium nibh ipsum consequat nisl vel pretium. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Vulputate odio ut enim blandit volutpat maecenas. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum et sollicitudin.</p>
            <div className='table-data' data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">skill level</th>
                    <th scope="col">score</th>
                    <th scope="col">count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row text-center icon-row">
                      <img src={Diamond} alt='diamond' className='table-img' />
                    </th>
                    <td>legend</td>
                    <td>+50</td>
                    <td>400(4%)</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img src={Elite} alt='diamond' className='table-img' />
                    </th>
                    <td>Elite</td>
                    <td>42-49</td>
                    <td>1200(12%)</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img src={AllStar} alt='diamond' className='table-img' />
                    </th>
                    <td>all-star</td>
                    <td>35-41</td>
                    <td>1700(17%)</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img src={Starter} alt='diamond' className='table-img' />
                    </th>
                    <td>starter</td>
                    <td>28-34</td>
                    <td>2700(27%)</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img src={BENCHWARMER} alt='diamond' className='table-img' />
                    </th>
                    <td>BENCHWARMER</td>
                    <td>0-27</td>
                    <td>4000(40%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">Rarity</h1>
            <p data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">Posuere urna nec tincidunt praesent semper. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ac tincidunt vitae semper quis lectus nulla at. Libero volutpat sed cras ornare arcu dui vivamus. Donec ultrices tincidunt arcu non sodales. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Amet purus.</p>
            {/* <a href='/' className='btn parity-toolactive' role="button" aria-pressed="true">Check on rarity tools</a> */}
            <a href="#" class="btn btn-secondary parity-toolactive active" role="button" aria-pressed="true" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" data-aos-once="true">Check on rarity tools</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoring;