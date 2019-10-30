import React from 'react';
import logo from './logo.svg';
// import axios from 'axios';
import './App.css';
import Questions from './components/GetQuestions';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Questions />
      </div>
    );
  }
}

export default App;


