import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [numInput, setNumInput] = useState(0);
  function addFive(num) {
    return num + 5;
  }

  function handleNum(event) {
    return setNumInput(parseInt(event.target.value));
  }

  function greetPerson(person, pronouns, age) {
    //given a person, pronouns, age, we are going to greet them.
    let greeting = "";
    greeting += "Hello ";
    greeting += person;
    greeting += " " + pronouns + ", " + age + " years old!";
    return greeting;
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Adding 5 to the number: {numInput} </p>
        <input
          type="number"
          value={numInput}
          onChange={(event) => setNumInput(parseInt(event.target.value))}
        />
        <p>{addFive(numInput)}</p>
        <p>Greeting to Caden: {greetPerson("Caden", "(he/him)", "17")}</p>
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

export default App;
