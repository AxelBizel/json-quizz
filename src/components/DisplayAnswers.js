import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { randomOf } from "./helpers";
import axios from "axios";

class DisplayAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrongMovies: []
    };
  }

  componentDidMount() {
    this.getWrongMovies();
  }

  getWrongMovies = () => {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        const wrongMoviesArray = [];
        wrongMoviesArray.push(
          data.movies[randomOf(82)],
          data.movies[randomOf(82)],
          data.movies[randomOf(82)]
        );
        this.setState({
          wrongMovies: wrongMoviesArray
        });
      });
  };
  genAnswers = (movie) => {
    const type = this.props.questionsObject.type;
    if (type === "title") {
      return movie.title;
    } else if (type === "year") {
      return movie.year;
    } else if (type === "director") {
      return movie.director;
    }
  };

  render() {
    if (this.state.wrongMovies.length === 0) {
      return <div></div>;
    }
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Button outline color="primary" size="lg">
              {this.genAnswers(this.props.movie)}
            </Button>
          </Col>
          <Col xs="6">
            <Button outline color="warning" size="lg">
              {this.genAnswers(this.state.wrongMovies[0])}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Button outline color="success" size="lg">
              {this.genAnswers(this.state.wrongMovies[1])}
            </Button>
          </Col>
          <Col xs="6">
            <Button outline color="danger" size="lg">
              {this.genAnswers(this.state.wrongMovies[2])}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DisplayAnswers;
