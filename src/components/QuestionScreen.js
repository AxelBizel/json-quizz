import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { shuffle } from "./helpers"
import './questionscreen.css'

const btnStyle = {
  float: "right",
  margin: "120px",
  padding: "20px",
}
class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="questionscreen">
        <div id="counter">- {this.props.seconds} -</div>
        <div className="DisplayQuestion">
          {this.props.questionsObject.question}
        </div>
        <div id="buttonsA">
          <button id="buttonsanswers" onClick={() => this.props.returnAnswer(this.props.answers[0])}>{this.props.answers[0]}</button>
          <button id="buttonsanswers" onClick={() => this.props.returnAnswer(this.props.answers[1])}>{this.props.answers[1]}</button>
          <button id="buttonsanswers" onClick={() => this.props.returnAnswer(this.props.answers[2])}>{this.props.answers[2]}</button>
          <button id="buttonsanswers" onClick={() => this.props.returnAnswer(this.props.answers[3])}>{this.props.answers[3]}</button>
        </div>
      </div>
      
      
    // <Container>
    //   <Row>
    //     <Col xs="6">
    //       <Button
    //         outline
    //         color="primary"
    //         size="lg"
    //         onClick={() => this.props.returnAnswer(this.props.answers[0])}
    //       >
    //         {this.props.answers[0]}
    //       </Button>
    //     </Col>
    //     <Col xs="6">
    //       <Button
    //         outline
    //         color="warning"
    //         size="lg"
    //         onClick={() => this.props.returnAnswer(this.props.answers[1])}
    //       >
    //         {this.props.answers[1]}
    //       </Button>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col xs="6">
    //       <Button
    //         outline
    //         color="success"
    //         size="lg"
    //         onClick={() => this.props.returnAnswer(this.props.answers[2])}
    //       >
    //         {this.props.answers[2]}
    //       </Button>
    //     </Col>
    //     <Col xs="6">
    //       <Button
    //         outline
    //         color="danger"
    //         size="lg"
    //         onClick={() => this.props.returnAnswer(this.props.answers[3])}
    //       >
    //         {this.props.answers[3]}
    //       </Button>
    //     </Col>
    //   </Row>
    // </Container>
    );
  }
}

export default QuestionScreen;