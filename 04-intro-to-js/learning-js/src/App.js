import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FunctionsPage from "./pages/FunctionsPage";
import VariablesPage from "./pages/VariablesPage";
import ObjectsPage from "./pages/ObjectsPage";
import ArraysPage from "./pages/ArraysPage";
import ConditionalsPage from "./pages/ConditionalsPage";
import LoopsPage from "./pages/LoopsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Navbar />
        </nav>
        <Switch>
          <Route path="/functions">
            <FunctionsPage />
          </Route>
          <Route path="/variables">
            <VariablesPage />
          </Route>
          <Route path="/objects">
            <ObjectsPage />
          </Route>
          <Route path="/arrays">
            <ArraysPage />
          </Route>
          <Route path="/conditionals">
            <ConditionalsPage />
          </Route>
          <Route path="/loops">
            <LoopsPage />
          </Route>
          <Route path="*">
            <p>Select a Topic On the Top To Practice It!</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Navbar() {
  return (
    <div class="navigation">
      <div>
        <Link to="/functions">
          <button className="button-container">Functions</button>
        </Link>
      </div>
      <div>
        <Link to="/variables">
          <button className="button-container">Variables</button>
        </Link>
      </div>
      <div>
        <Link to="/objects">
          <button className="button-container">Objects</button>
        </Link>
      </div>
      <div>
        <Link to="/arrays">
          <button className="button-container">Arrays</button>
        </Link>
      </div>
      <div>
        <Link to="/conditionals">
          <button className="button-container">Conditionals</button>
        </Link>
      </div>
      <div>
        <Link to="/loops">
          <button className="button-container">Loops</button>
        </Link>
      </div>
    </div>
  );
}

// function App() {
//   const [numInput, setNumInput] = useState(0);
//   function addFive(num) {
//     return num + 5;
//   }

//   function handleNum(event) {
//     return setNumInput(parseInt(event.target.value));
//   }

//   //TODO: Greet this person!!
//   function greetPerson(person, pronouns, age) {
//     //given a person, pronouns, age, we are going to greet them.
//     let greeting = "";
//     greeting += "Hello ";
//     greeting += person;
//     greeting += " " + pronouns + ", " + age + " years old!";
//     return greeting;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Adding 5 to the number: {numInput} </p>
//         <input
//           type="number"
//           value={numInput}
//           onChange={(event) => setNumInput(parseInt(event.target.value))}
//         />
//         <p>{addFive(numInput)}</p>
//         <p>Greeting to Caden: {greetPerson("Caden", "(he/him)", "17")}</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
