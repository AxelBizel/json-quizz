import React, { Component } from "react";
import axios from "axios";
import QuestionScreen from "./components/QuestionScreen";
import AnswerScreen from "./components/AnswerScreen.js";
import { randomOf, shuffle } from "./components/helpers";
import Start from "./components/Start.js";
import Count from "./components/Count.js";
import "./components/timer.css";
import "./index";

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
      answers: []
    };
  }

  componentDidMount() {
    this.startGame();
  }

  startGame = () => {
    this.setState({
      showModal: false,
      seconds: 10,
      displayQuestion: true,
      displayAnswer: false
    });
    this.interval = setInterval(() => this.tick(), 1000);
    this.getMovie();
  };

  tick = () => {
    let { seconds, answerClicked } = this.state;
    this.setState({ seconds: seconds - 1 });

    if (seconds === 0) {
      this.setState({
        seconds: 0,
        displayAnswer: true,
        displayQuestion: false
      });
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
        const questionsObject = this.getQuestion(selectedMovie);
        this.setState({
          movie: selectedMovie,
          questionsObject: questionsObject,
          wrongMovies: wrongMoviesArray,
          answers: this.genAnswersArray(
            selectedMovie,
            wrongMoviesArray,
            questionsObject
          )
        });
      });
  };

  getQuestion = movie => {
    const questionsObject = [
      {
        question: `Who directed the movie ${movie.title}?`,
        type: "director"
      },
      {
        question: `Which movie was directed by ${movie.director}?`,
        type: "title"
      },
      {
        question: `Which year was the movie ${movie.title} released?`,
        type: "year"
      },
      {
        question: `Which movie was made in ${movie.year}?`,
        type: "title"
      },
      {
        question: `What movie was made in ${movie.country}?`,
        type: "title"
      },
      {
        question: `What is the country of origin of the movie ${movie.title}?`,
        type: "country"
      }
    ];

    return questionsObject[Math.floor(questionsObject.length * Math.random())];
  };

  addPoints = () => {
    if (this.state.answer === true) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  genAnswers = (movie, questionsObject) => {
    const type = questionsObject.type;
    if (type === "title") {
      return movie.title;
    } else if (type === "year") {
      return movie.year;
    } else if (type === "director") {
      return movie.director;
    } else if (type === "director") {
      return movie.director;
    }
  };

  genAnswersArray = (movie, wrongMovies, questionsObject) => {
    const answersArray = [];
    answersArray.push(
      this.genAnswers(movie, questionsObject),
      this.genAnswers(wrongMovies[0], questionsObject),
      this.genAnswers(wrongMovies[1], questionsObject),
      this.genAnswers(wrongMovies[2], questionsObject)
    );
    return shuffle(answersArray);
  };

  render() {
    if (this.state.wrongMovies.length === 0) {
      return <div></div>;
    }
    return (
      <div className="App">
        <Start show={this.state.showModal} startGame={this.startGame} />
        {this.state.displayQuestion && (
          <QuestionScreen
            seconds={this.state.seconds}
            movie={this.state.movie}
            questionsObject={this.state.questionsObject}
            wrongMovies={this.state.wrongMovies}
            answers={this.state.answers}
          />
        )}
        <Count addPoints={this.addPoints} count={this.state.count} />
        {this.state.displayAnswer && (
          <AnswerScreen
            startGame={this.startGame}
            movie={this.state.movie}
            answer={this.state.answer}
            displayQuestion={this.state.displayQuestion}
          />
        )}

        <Start show={this.state.showModal} startGame={this.startGame} />
      </div>
    );
  }
}

export default App;
