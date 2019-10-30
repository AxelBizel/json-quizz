import React from 'react';
import axios from 'axios';
import './App.css';
import GetQuestions from './components/GetQuestions';
import { randomOf } from './components/helpers'


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        movies: "",
      }
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = () => {
    // Send the request
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data =>{
        this.setState({
          movies: data.movies[randomOf(82)],
        }); 
    });
  }

  render() {
    return (
      <div className="App">
        <GetQuestions movie={this.state.movies} />
        <button type="button" onClick={this.getQuestions}>Get question</button>

      </div>
    );
  }
}

export default App;


