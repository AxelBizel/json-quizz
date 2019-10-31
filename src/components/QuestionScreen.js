import React, { Component } from "react";
import { replace } from './helpers';
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
      <div id="questionscreen">
        <div id="counter">- {this.props.seconds} -</div>
        <div className="DisplayQuestion">
          {questionDisplay}
        </div>

        <div id="buttonsA">
          <button id="buttonsanswers" onClick={() => this.props.returnAnswer(this.props.answers[0])}>{answer0Display}</button>
          <button id="buttonsanswers" onClick={() => this.props.returnAnswer(this.props.answers[1])}>{answer1Display}</button>
          <button id="buttonsanswers" onClick={() => this.props.returnAnswer(this.props.answers[2])}>{answer2Display}</button>
          <button id="buttonsanswers" onClick={() => this.props.returnAnswer(this.props.answers[3])}>{answer3Display}</button>
        </div>
      </div>
    );
  }
}

export default QuestionScreen;