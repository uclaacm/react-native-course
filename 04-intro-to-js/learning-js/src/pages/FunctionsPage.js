import React, { useState } from "react";
import { addFiveSolution } from "../solutions";

export default function FunctionsPage() {
  const [numInput, setNumInput] = useState(0);
  function addFive(num) {
    return num + 5;
  }

  //If you use numbers, you need to parseInt for the state to ensure that a number gets passed in for the user!
  function handleNum(event) {
    const newVal = parseInt(event.target.value);
    setNumInput(newVal);
  }

  return (
    <div className="page">
      <div className="description">
        <div className="title-text">Functions</div>
        <p>
          Functions are blocks of code that perform a particular task, taking in
          input and returning output. Try completing the function "addFive" that
          adds 5 to an input number!
        </p>
        <p>
          Once you think you've finished, hit save and test out your function
          below to see if it works against our example answer!
        </p>
      </div>
      <p>Adding 5 to the number: {numInput} </p>

      <div className="input-row">
        Input A Number:
        <input
          type="number"
          value={numInput}
          onChange={(event) => handleNum(event)}
        />
      </div>
      <p>
        Your Function's Output: {numInput} + 5 = {addFive(numInput)}
      </p>
      <p>
        Intended Output: {numInput} + 5 = {addFiveSolution(numInput)}
      </p>
    </div>
  );
  // }
}
