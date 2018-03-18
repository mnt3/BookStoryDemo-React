import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './komponent/Books';
import AddBook from './komponent/AddBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Book Store</h1>
        </header>
        <p className="App-intro">
         
        </p>
        <Books/>
        <AddBook/>
      </div>
    );
  }
}

export default App;
