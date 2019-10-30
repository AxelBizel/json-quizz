import React, { Component } from "react";
import axios from "axios";
import Answer from "./components/Answer.js";
import { randomOf } from "./components/helpers";
import GetQuestions from "./components/GetQuestions";
import DisplayAnswers from "./components/DisplayAnswers";
import Countdown from "react-countdown-now";
import renderer from "./components/timer";
import "./components/timer.css";
import "./index";
import Start from "./components/Start.js";
import Count from "./components/Count.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      questionsObject: {},
      answer: true,
      showModal: true,
      count: 0,
      wrongMovies: []
    };
    console.log(this.state.showModal);
  }

  componentDidMount() {
    this.getMovie();
  }

  startGame = () => {
    this.setState({ showModal: false });
  };

  getMovie = () => {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => {
        const selectedMovie =
          response.data.movies[randomOf(response.data.movies.length)];
        const wrongMoviesArray = [];
        wrongMoviesArray.push(
          response.data.movies[randomOf(response.data.movies.length)],
          response.data.movies[randomOf(response.data.movies.length)],
          response.data.movies[randomOf(response.data.movies.length)],
        );
        this.setState({
          movie: selectedMovie,
          questionsObject: this.getQuestion(selectedMovie),
          wrongMovies: wrongMoviesArray
        });
      });
  };


  getQuestion = movie => {
    const questionsObject = [
      {
        question: `Qui est le réalisateur du film ${movie.title} ?`,
        type: "director"
      },
      {
        question: `Quel film a été réalisé par ${movie.director} ?`,
        type: "title"
      },
      {
        question: `En quelle année le film ${movie.title} est-il sorti ?`,
        type: "year"
      },
      {
        question: `Quel film a été réalisé en ${movie.year} ?`,
        type: "title"
      },
      {
        question: `Quel film a été tourné dans ce pays : ${movie.country} ?`,
        type: "title"
      }
    ];

    return questionsObject[Math.floor(questionsObject.length * Math.random())];
  };


  addPoints = () => {
    if (this.state.answer === true) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    if (this.state.wrongMovies.length === 0) {
      return <div></div>;
    }
    return (
      <div className="App">
        <GetQuestions questionsObject={this.state.questionsObject} />
        <DisplayAnswers
          movie={this.state.movie}
          questionsObject={this.state.questionsObject}
          // genAnswers={this.genAnswers()}
          wrongMovies={this.state.wrongMovies}
        />
        <Countdown
          date={Date.now() + 11000}
          intervalDelay={0}
          precision={3}
          renderer={renderer}
        />
        <Count addPoints={this.addPoints} count={this.state.count} />
        <Answer movie={this.state.movie} answer={this.state.answer} />
        <Start show={this.state.showModal} startGame={this.startGame} />
      </div>
    );
  }
}

export default App;
