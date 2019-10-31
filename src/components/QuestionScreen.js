import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { replace } from './helpers';

class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

      
  render() {
    const questionAPI = this.props.questionsObject.question;
    const questionDisplay = replace(questionAPI);
    const answer0API = this.props.answers[0]
    const answer0Display = replace(answer0API);
    const answer1API = this.props.answers[1]
    const answer1Display = replace(answer1API);
    const answer2API = this.props.answers[2]
    const answer2Display = replace(answer2API);
    const answer3API = this.props.answers[3]
    const answer3Display = replace(answer3API);

    return (
      <div>
        <div>
          {" "}
          <p id="counter">- {this.props.seconds} -</p>
        </div>
        <div className="DisplayQuestion">
          {questionDisplay}
        </div>

        <Container>
          <Row>
            <Col xs="6">
              <Button
                outline
                color="primary"
                size="lg"
                onClick={() => this.props.returnAnswer(this.props.answers[0])}
              >
                {answer0Display}
              </Button>
            </Col>
            <Col xs="6">
              <Button
                outline
                color="warning"
                size="lg"
                onClick={() => this.props.returnAnswer(this.props.answers[1])}
              >
                {answer1Display}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <Button
                outline
                color="success"
                size="lg"
                onClick={() => this.props.returnAnswer(this.props.answers[2])}
              >
                {answer2Display}
              </Button>
            </Col>
            <Col xs="6">
              <Button
                outline
                color="danger"
                size="lg"
                onClick={() => this.props.returnAnswer(this.props.answers[3])}
              >
                {answer3Display}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default QuestionScreen;
