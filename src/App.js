import React from 'react';
import './App.css';
import NameTag from './components/NameTag';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Name List</h1>
        <NameTag firstName="john" lastName="johnson"></NameTag>
        <NameTag firstName="peter" lastName="peterson"></NameTag>
        <NameTag firstName="jill" lastName="jillson"></NameTag>
        <NameTag ></NameTag>
      </header>
    </div>
  );
}

export default App;
