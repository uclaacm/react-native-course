import React, { useState } from "react";
/*TODO: Import your solution in like:
import { NAME_OF_SOLUTION_FUNCTION } from "../solutions";
*/

export default function LoopsPage() {
  /*Input is kept track of using React State, you can use the 
    useState hook with the name of how to access the variable as well
    as the function you want to use to change it like so.
    You can rename input or setInput to whatever you want, or add in more state variables as necessary!
    More about useState here!: https://reactjs.org/docs/hooks-reference.html#usestate
    */
  const [input, setInput] = useState(null);
  /*TODO: Make a function that teaches about how loops work in JavaScript!
    Rename the Function To Something Else You Want! */
  function variableFunction(input /*CHANGE PARAMS AS NEEDED HERE*/) {
    return input;
  }

  {
    /* TODO: If your input is a number, you must use parseInt on event.target.value*/
  }
  function handleInput(event) {
    const userInput = event.target.value;
    setInput(userInput);
  }

  return (
    <div className="page">
      <div className="description">
        <div className="title-text">Loops</div>
        <p>
          {/*TODO: Write in the topic description*/}Add in a description to the
          topic and introduce the example exercise here!
        </p>
        Once you think you've finished, hit save and test out your function
        below to see if it works against our solution!
      </div>

      {/* TODO: You can use a bunch of different types of HTML input,
             check here for a list of them!
            https://www.w3schools.com/html/html_form_input_types.asp
            */}
      <div class="input-row">
        Input:
        {/* TODO: Change the names of input or handleInput accordingly for the input element,*/}
        <input
          type="text"
          value={input}
          onChange={(event) => handleInput(event)}
        />
      </div>
      <div>User's Input: {input}</div>
      {/* TODO: For loops, it could be helpful to visualize to the student how the output changes after each iteration through their loop? */}
      <div>Your Function's Output: {variableFunction(input)}</div>
      <div>
        Intended Output: {`IMPLEMENT ME!`}
        {/*TODO: Put your solution in solutions.js and import it in to use! */}
      </div>
    </div>
  );
}
