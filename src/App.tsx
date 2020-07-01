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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      {/* <!-- covid19-counter ad --> */}
      <ins className="adsbygoogle"
          style={{display:'block'}}
          data-ad-client="ca-pub-7333060626743598"
          data-ad-slot="3593859641"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  );
}

export default App;
