import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from 'axios'; 

class DisplayAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Button outline color="primary" size="lg">
              {this.props.movie}
            </Button>
          </Col>
          <Col xs="6">
            <Button outline color="warning" size="lg">
              Réponse2
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Button outline color="success" size="lg">
              Réponse3
            </Button>
          </Col>
          <Col xs="6">
            <Button outline color="danger" size="lg">
              Réponse4
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DisplayAnswers;
