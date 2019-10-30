import React from 'react';
import Countdown from 'react-countdown-now';
import renderer from './components/timer'
import axios from 'axios';
import './components/timer.css'


function App() {
  return (
    <div className="App">
        <Countdown date={Date.now() + 10000} intervalDelay={0} precision={3} renderer={renderer} />
      </div>
  );
}

export default App;