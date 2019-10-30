import React, { Component } from "react";

class GetQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="DisplayQuestion">
        <div>{this.props.questionsObject.question}</div>
      </div>
    );
  }
}

export default GetQuestions;
