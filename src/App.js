import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Answer from "./components/Answer.js";
import { randomOf } from "./components/helpers";
import GetQuestions from "./components/GetQuestions";
import DisplayAnswers from "./components/DisplayAnswers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      questionsObject: {},
      answer: true
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie = () => {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => {
        const selectedMovie =
          response.data.movies[randomOf(response.data.movies.length)];
        this.setState({
          movie: selectedMovie,
          questionsObject: this.getQuestion(selectedMovie)
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
    // console.log(randomQuestion);
    // this.setState({ movies: movie, question: randomQuestion });
  };

  render() {
    return (
      <div className="App">
        <GetQuestions
          questionsObject={this.state.questionsObject}
        />
        <DisplayAnswers movie={this.state.movie}
          questionsObject={this.state.questionsObject}/>
        <Answer movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
