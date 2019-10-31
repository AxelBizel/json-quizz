import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          <p id="counter">- {this.props.seconds} -</p>
        </div>
        <div className="DisplayQuestion">
          {this.props.questionsObject.question}
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
                {this.props.answers[0]}
              </Button>
            </Col>
            <Col xs="6">
              <Button
                outline
                color="warning"
                size="lg"
                onClick={() => this.props.returnAnswer(this.props.answers[1])}
              >
                {this.props.answers[1]}
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
                {this.props.answers[2]}
              </Button>
            </Col>
            <Col xs="6">
              <Button
                outline
                color="danger"
                size="lg"
                onClick={() => this.props.returnAnswer(this.props.answers[3])}
              >
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
