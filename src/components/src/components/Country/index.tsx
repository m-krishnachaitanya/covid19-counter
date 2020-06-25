import React from 'react';
import './index.css';
import Chart from '../chart';

const Country:React.FC = () => {

    const [status, setStatus] = React.useState('loading');
    const url = 'https://cors-anywhere.herokuapp.com/https://covid19-api-data.herokuapp.com/';
    
    const [countries, setCountries] = React.useState<React.SetStateAction<string>[]>([]);
    const [countryindex, setCountryindex] = React.useState(-1);
        
    const [confirmed, setConfirmed] = React.useState(0);
    const [recovered, setRecovered] = React.useState(0);
    const [deaths, setDeaths] = React.useState(0);
    const [active, setActive] = React.useState(0);
    const [todayconfirmed, setTodayConfirmed] = React.useState(0);
    const [todaydeaths, setTodayDeaths] = React.useState(0);
    const [todayrecovered, setTodayRecovered] = React.useState(0);
    const [confirmedData, setConfirmedData] = React.useState([]);
    const [recoveredData, setRecoveredData] = React.useState([]);
    const [deathsData, setDeathsData] = React.useState([]);
    const [activeData, setActiveData] = React.useState([]);

    React.useEffect(()=>{
      if(status === "loading"){
        getdata();
        setStatus("loaded");
      }
        handleChange();
    },[countryindex]);

    const onchangehandle = (event: any) => {
        setCountryindex(event.target.value);
      };
    
      const getdata = async () =>{
        const response = await fetch(url+"countries");
        const data = await response.json();
        setCountries(data.countries);
        // fetch(url+"countries")
        // .then(response => response.json())
        // .then(data => setCountries(data.countries));
        setCountryindex(0);
      }
    
      const handleChange = async () =>{
        const response = await fetch(url+"country/"+countries[countryindex]);
        const data = await response.json();
        setConfirmed(data.confirmed);
        setRecovered(data.recovered);
        setDeaths(data.deaths);
        setActive(data.active);
        setTodayConfirmed(data.todayConfirmed);
        setTodayDeaths(data.todayDeaths);
        setTodayRecovered(data.todayRecovered);
        setConfirmedData(data.confirmedData);
        setRecoveredData(data.recoveredData);
        setActiveData(data.activeData);
        setDeathsData(data.deathsData);
      };
    
      const countryOptions = countries.map((countryopt,index)=>(
      <option key={index} value={index}>{countryopt}</option>
      ));

    return (<>
    <article className="view">
        <select onChange={onchangehandle} className="countries">
          {countryOptions}
        </select>
        <article className="country-analysis">
          <article className="overall">
            <article>
              <article className="common confirmed"><p>Confirmed: {confirmed}</p></article>
              <Chart linedata={confirmedData} color="red"/>
            </article>
            <article>
              <article className="common recovered"><p>Recovered: {recovered}</p></article>
              <Chart linedata={recoveredData} color="green"/>
            </article>
            <article>
              <article className="common deaths"><p>Deaths: {deaths}</p></article>
              <Chart linedata={deathsData} color="red"/>
            </article>
            <article>
              <article className="common active"><p>Active: {active}</p></article>
              <Chart linedata={activeData} color="orange"/>
            </article>
          </article>
          <article className="today">
            <article className="common todayconfirmed"><p>Today Confirmed: {todayconfirmed}</p></article>
            <article className="common todayrecovered"><p>Today Recovered: {todayrecovered}</p></article>
            <article className="common todaydeaths"><p>Today Deaths: {todaydeaths}</p></article>
          </article>
        </article>
      </article></>);
}

export default Country;