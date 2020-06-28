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
      <article>
        <script data-ad-client="pub-7333060626743598" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </article>
    </div>
  );
}

export default App;
