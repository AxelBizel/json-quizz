import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
// import { shuffle } from "./helpers"

class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // answers:[]
    };
  }

    // componentDidMount() {
    //   this.genAnswersArray();
    // }

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
  // genAnswers = movie => {
  //   const type = this.props.questionsObject.type;
  //   if (type === "title") {
  //     return movie.title;
  //   } else if (type === "year") {
  //     return movie.year;
  //   } else if (type === "director") {
  //     return movie.director;
  //   }
  // };

  // genAnswersArray = ()=> {
  //   const answersArray = [];
  //   answersArray.push(
  //     this.genAnswers(this.props.movie),
  //     this.genAnswers(this.props.wrongMovies[0]),
  //     this.genAnswers(this.props.wrongMovies[1]),
  //     this.genAnswers(this.props.wrongMovies[2])
  //   );
  //   const answersShuffled = shuffle(answersArray);
  //    this.setState({answers:answersShuffled})
  //   console.log(answersArray)
  // }

  render() {
    // if (this.props.answers.length === 0) {
    //   return (<div></div>)
    // }
    return (
      <div>
        <div> <p id="counter">- {this.props.seconds} -</p></div>
        <div className="DisplayQuestion">
          {this.props.questionsObject.question}
        </div>

        <Container>
          <Row>
            <Col xs="6">
              <Button outline color="primary" size="lg">
                {this.props.answers[0]}
              </Button>
            </Col>
            <Col xs="6">
              <Button outline color="warning" size="lg">
                {this.props.answers[1]}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <Button outline color="success" size="lg">
                {this.props.answers[2]}
              </Button>
            </Col>
            <Col xs="6">
              <Button outline color="danger" size="lg">
                {this.props.answers[3]}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default QuestionScreen;
