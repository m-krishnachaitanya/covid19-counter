import React from 'react';
import './index.css';

const State:React.FC = () => {

    const [status, setStatus] = React.useState('loading');
    const url = 'https://cors-anywhere.herokuapp.com/https://covid19-api-data.herokuapp.com/';
    
    const [states, setStates] = React.useState<React.SetStateAction<string>[]>([]);
    const [stateindex, setStateindex] = React.useState(-1);
        
    const [confirmed, setConfirmed] = React.useState(0);
    const [recovered, setRecovered] = React.useState(0);
    const [deaths, setDeaths] = React.useState(0);
    const [active, setActive] = React.useState(0);

    React.useEffect(()=>{
      if(status === "loading"){
        getdata();
        setStatus("loaded");
      }
      else{
        handleChange();
      }
    },[stateindex]);

    const onchangehandle = (event: any) => {
        setStateindex(event.target.value);
      };
    
      const getdata = async () =>{
        const response = await fetch(url+"states");
        const data = await response.json();
        setStates(data.states);
      };
    
      const handleChange = async () =>{
        const response = await fetch(url+"state/"+states[stateindex]);
        const data = await response.json();
        setConfirmed(data.confirmed);
        setRecovered(data.recovered);
        setDeaths(data.deaths);
        setActive(data.active);
      };
    
      const stateOptions = states.map((stateopt,index)=>(
      <option key={index} value={index}>{stateopt}</option>
      ));

    return (<>
    <article className="view">
        <select onChange={onchangehandle} className="states" defaultValue={"SELECT STATE"}>
          <option value="SELECT STATE" disabled>SELECT STATE</option>
          {stateOptions}
        </select>
        <article className="state-analysis" style={{display:stateindex===-1?"none":"flex"}}>
          <article className="overall">
            <article>
              <article className="common confirmed"><p>Confirmed: {confirmed}</p></article>
            </article>
            <article>
              <article className="common recovered"><p>Recovered: {recovered}</p></article>
            </article>
            <article>
              <article className="common deaths"><p>Deaths: {deaths}</p></article>
            </article>
            <article>
              <article className="common active"><p>Active: {active}</p></article>
            </article>
          </article>
        </article>
      </article></>);
};

export default State;