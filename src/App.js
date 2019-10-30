import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Answer from './components/Answer.js';
import { randomOf } from './components/helpers';
import GetQuestions from './components/GetQuestions';


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
          movies: data.movies[randomOf(82)]
        });
      });
  };

  render() {
    return (
      <div className="App">
        <GetQuestions movie={this.state.movies} />
        <Answer movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;


