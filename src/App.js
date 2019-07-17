import React, { Component } from 'react';
import { fetchTrivia } from './apiCalls.js';
import TriviaSection from './TriviaSection.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trivia: [],
      error: ''
    }
  }

  componentDidMount() {
    fetchTrivia()
    .then(response => this.setState({trivia: response.results}))
    .catch(error => this.setState({error: error.message}))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Trivia!</h1>
        </header>
        {this.state.error && <h2>{this.state.error}</h2>}
        <TriviaSection trivia={this.state.trivia} />
      </div>
    );
  }
}

export default App;
