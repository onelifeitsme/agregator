import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('http://0.0.0.0:8000') // Замените на ваш эндпоинт FastAPI
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {/* Отображение данных из ответа FastAPI */}
          {data && <p>{data.message}</p>}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
