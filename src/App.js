import './App.css';

// import { useEffect } from 'react';

// import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home/Home.jsx'
import { useEffect } from 'react';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init({ });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
