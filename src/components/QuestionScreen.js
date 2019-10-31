import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { shuffle } from "./helpers"
import './questionscreen.css'
import Count from "./Count";

const btnStyle = {
  float: "right",
  margin: "120px",
  padding: "20px",
}
class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers:[]
    };
  }

    componentDidMount() {
      this.genAnswersArray();
    }

  //   getWrongMovies = () => {
  //     axios
  //       .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
  //       .then(response => response.data)
  //       .then(data => {
  //         const wrongMoviesArray = [];
  //         wrongMoviesArray.push(
  //           data.movies[randomOf(82)],
  //           data.movies[randomOf(82)],
  //           data.movies[randomOf(82)]
  //         );
  //         this.setState({
  //           wrongMovies: wrongMoviesArray
  //         });
  //       });
  //   };

  genAnswers = movie => {
    const type = this.props.questionsObject.type;
    if (type === "title") {
      return movie.title;
    } else if (type === "year") {
      return movie.year;
    } else if (type === "director") {
      return movie.director;
    }
  };

  genAnswersArray = () => {
    const answersArray = [];
    answersArray.push(
      this.genAnswers(this.props.movie),
      this.genAnswers(this.props.wrongMovies[0]),
      this.genAnswers(this.props.wrongMovies[1]),
      this.genAnswers(this.props.wrongMovies[2])
    );
    const answersShuffled = shuffle(answersArray);
     this.setState({answers:answersShuffled})
    console.log(answersArray)
  }

  render() {
    if (this.state.answers.length === 0) {
      return (<div></div>)
    }
    return (
      <div id="questionscreen">
        <div id="counter">- {this.props.seconds} -</div>
        <div className="DisplayQuestion">
          {this.props.questionsObject.question}
        </div>
        <div id="buttonsA">
          <button id="buttonsanswers" onClick={() => this.props.addPoints()}>{this.state.answers[0]}</button>
          <button id="buttonsanswers" onClick={() => this.props.addPoints()}>{this.state.answers[1]}</button>
          <button id="buttonsanswers" onClick={() => this.props.addPoints()}>{this.state.answers[2]}</button>
          <button id="buttonsanswers" onClick={() => this.props.addPoints()}>{this.state.answers[3]}</button>
        </div>
      </div>
    );
  }
}

export default QuestionScreen;