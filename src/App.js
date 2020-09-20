import React from "react";
import "./style.css";
import Nav from './components/Nav';
import Tweets from './components/Tweets'

export default function App() {
  return (
    <div className="App">
      <Nav />  
      <Tweets />
    </div>
  );
}
