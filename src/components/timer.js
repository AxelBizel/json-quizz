import React from 'react';
import './timer.css'


const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <span id="counter">✋🏻 TIME'S UP !! ✋🏻</span>;
    } else if (completed) {
      return <button>NEXT</button>
    } else {
      return <span id="counter">{seconds}</span>;
    }
  };

  export default renderer;