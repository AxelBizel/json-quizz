import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Answer from './components/Answer.js';
import { randomOf } from './components/helpers';
import GetQuestions from './components/GetQuestions';
import Start from './components/Start.js';
import Count from './components/Count.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: "",
      answer: true,
      showModal: true, 
      count: 0,
    };
    console.log(this.state.showModal)  
  }

  componentDidMount() {
    this.getMovie();
  }

  startGame = () => {
    this.setState({showModal: false})
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

  addPoints = () => {
    if (this.state.answer === true) {
      this.setState({count: this.state.count + 1});
    }
  }

  render() {
    return (
      <div className="App">
        <Count addPoints ={this.addPoints} count={this.state.count}/>
        <GetQuestions movie={this.state.movies} />
        <Answer movies={this.state.movies} answer={this.state.answer}/>
        <Start show={this.state.showModal} startGame={this.startGame} />
      </div>
    );
  }
}

export default App;


