import React, {useState} from "react";
import "./style.css";
import Nav from './components/Nav';
import Tweets from './components/Tweets'

export default function App() {

  const [counter, setCounter] = useState(0);
 
  const count = () => {
      setCounter(counter + 1);
  }

  return (
    <div className="App">
      <h1>Props and States {counter}</h1>
      <Nav />  
      <Tweets />
      <button onClick={count}>change Counter</button>
    </div>
  );
}
