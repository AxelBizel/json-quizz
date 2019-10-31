import React, { Component } from "react";
import axios from "axios";
import AnswerScreen from "./components/AnswerScreen.js";
import { randomOf } from "./components/helpers";
import "./components/timer.css";
import "./index";
import Start from "./components/Start.js";
import Count from "./components/Count.js";
import QuestionScreen from "./components/QuestionScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      questionsObject: {},
      answer: true,
      showModal: true,
      count: 0,
      displayQuestion: false,
      displayAnswer: false,
      wrongMovies: [],
      seconds: 10,
      answerClicked: false,
      returnedAnswer: ""
    };
    console.log(this.state.displayQuestion);
    console.log(this.state.displayAnswer);
  }

  componentDidMount() {
    this.getMovie();    
  }

  startGame = () => {
    this.setState({ showModal: false });
    this.interval = setInterval(() => this.tick(), 1000);
    this.goToQuestion();
  };

  goToQuestion = () => {
    this.setState({ displayQuestion: true });
  };

  // goToAnswer = () => {
  //   this.setState({displayAnswer: true});
  // }

  tick = () => {
    let { seconds, answerClicked } = this.state;
    this.setState({ seconds: seconds - 1 });

    if (seconds === 0) {
      this.setState({ seconds: 0 });
      this.setState({ displayAnswer: true });
      this.setState({ displayQuestion: false });
      clearInterval(this.interval);
    }

    if (answerClicked === true) {
      this.goToQuestion();
    }
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
          response.data.movies[randomOf(response.data.movies.length)]
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
        answer: movie.director,
        type: "director"
      },
      {
        question: `Quel film a été réalisé par ${movie.director} ?`,
        answer: movie.title,
        type: "title"
      },
      {
        question: `En quelle année le film ${movie.title} est-il sorti ?`,
        answer: movie.year,
        type: "year"
      },
      {
        question: `Quel film a été réalisé en ${movie.year} ?`,
        answer: movie.title,
        type: "title"
      },
      {
        question: `Quel film a été tourné dans ce pays : ${movie.country} ?`,
        answer: movie.title,
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

  returnAnswer = (x) => {
      console.log("answer=",this.state.questionsObject.answer, "x=",x)
      this.setState({
        returnedAnswer: x,
        answer: (this.state.questionsObject.answer === x)
      });
  }

  // trueOrFalse = () => {
  //   if (this.state.questionsObject.title != this.state.returnedAnswer)
  //   this.setState({
  //     answer: false
  //   }); 
  // }

  render() {
    
    if (this.state.wrongMovies.length === 0) {
      return <div></div>;
    }
    return (
      <div className="App">
        {/* <Start show={this.state.showModal} startGame={this.startGame} /> */}
        {this.state.displayQuestion && (
          <QuestionScreen
            seconds={this.state.seconds}
            movie={this.state.movie}
            questionsObject={this.state.questionsObject}
            wrongMovies={this.state.wrongMovies}
            returnedAnswer={this.returnAnswer}
            trueOrFalse={this.trueOrFalse}
          />
        )}
        <Count addPoints={this.addPoints} count={this.state.count} />
        {this.state.displayAnswer && (
          <AnswerScreen
            movie={this.state.movie}
            answer={this.state.answer}
            goToQuestion={this.goToQuestion}
            displayQuestion={this.state.displayQuestion}
          />
        )}
        <Start show={this.state.showModal} startGame={this.startGame} />
      </div>
    );
  }
}

export default App;
