import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Answer from './components/Answer.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: "",
      answer: true,
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
        console.log(data)
        this.setState({
          movies: data.movies[0]
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Answer movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
