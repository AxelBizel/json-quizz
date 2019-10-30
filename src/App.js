import React, { Component } from 'react';
import './App.css';
import Answer from './components/Answer.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies = null,
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie = () => {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        this.setState({
          movie: data
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Answer />
      </div>
    );
  }
}

export default App;
