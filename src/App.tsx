import React from 'react';
import logo from './logo.png';
import './App.css';
import Country from './components/Country';
import State from './components/States';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="logo"/>
        <p className="title">COVID-19 COUNTER</p>
      </header>
      <section className="countrySection">
        <p className="countryHeader">CountryWise Analysis</p>
        <Country/>
      </section>
      <section className="stateSection">
        <p className="stateHeader">StateWise Analysis</p>
        <State/>
      </section>
    </div>
  );
}

export default App;
