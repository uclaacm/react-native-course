# Let's learn React
Now that we've (hopefully) convinced you that React is a powerful tool for creating applications, let's dive into the nitty gritty of how to write React.

## Anatomy of React

### Libraries (of code)
 Let's look at our starter code...
```JSX
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div  className="App">
      <h1 style={styles.title}>Hello North Hollywood High School </h1>
      <h2 style={styles.text}>Start editing to see some magic happen!</h2>
    </div>
  );
}

let styles = {
 title : {
   color: 'red'
 },
 text: {
   color: 'gray'
 }

}
```  


*import* and *export* are subtle, and often go unexplained, but they contain perhaps the most fundemental building block of software development: **Libraries**!

Libraries are simply code that someone else has written, expressly for the purpose of making your life easier. They contain *functions* that are often crucial to making your project work.

The library analogy, sadly, is somewhat outdated at this point, but imagine you needed to learn about *the migration patterns of anteaters to predict the price of wheat*.

You could either: 
Fly to South America, venture into the jungle, spend weeks taking detailed notes watching anteaters walk around and then fly back  
*or*  
Go to the library and read a book about anteaters

Obviously, going to the library saves a ton of time and spares you the pain of becoming an expert on anteaters, something that has almost nothing to do with what you wanted to do in the first place!

So the line 
```JSX 
import React from "react";
```
means that we're getting the React code someone else has already written for us, saving us a ton of time and effort,
and the line  
```JSX
export default function App() {
```
means we're making our function available for other people to import. 
In this case, it means we're making it so the react code we imported can load our page and display it!

### A page is a function  

Recall that (most) functions return *something*. That something can be an integer, a string, really anything that can be stored in a variable.  
When you ask the computer to perform a function, it runs any code written in the *function statement*, and then it *returns* a variable to you.  
Since the return value is a variable, it allows your code to be dynamic and responsive to user interaction!
In our react app, all our function does is return 
```JSX
return (
    <div  className="App">
      <h1 style={styles.title}>Hello North Hollywood High School </h1>
      <h2 style={styles.text}>Start editing to see some magic happen!</h2>
    </div>
  );
```
This should look familiar, it's almost identical to HTML.  It's called **JSX**, but it works nearly the same as HTML, so at this point you can consider them to be interchangable. We use JSX because it makes it possible to express *elements as variables*, which is what makes React so powerful.  

So in summary, this function returns the structure of our page. Making any changes to the return() statement changes which elements are included in our page and how it's structured!

## React Functional Components
Woah, that looks like a real alphabet soup: `React Functional Components.` It turns out it's just another example of Computer Scientists making names sound more complicated than they need to be. Don't worry if it doesn't make sense right now, let's dissect it piece by piece.

### A brief review of functions
Let's first analyze `Functional Components`. What does this mean? In an English sentence, we can say that
> The components that make up our application will be written as Javascript functions

Let's review Javascript functions briefly and see why we choose to represent our web application components in this way.
```js
function calc_num_cookies(input){
  let output = 0;
  output = (input * 8) - 17;
  if(output < 0) output = output * -1;
  output = Math.floor(output / 2) % 26;
  output = output + " chocolate chip cookies";
  return output;
}
```
This function, `calc_num_cookies()` takes a number as an `input`, and returns some number of cookies as an `output`. The inside of the function holds our implementation and there's a lot of complex math going on.

But remember that's exactly what makes functions so powerful. As a user, we don't care about the complex math that's going on behind the scenes. We only care that the function works as expected when we call it:
```js
calc_num_cookies(999)
"23 chocolate chip cookies"

calc_num_cookies(0.22)
"7 chocolate chip cookies"
```
React chooses to use functions to implement components exactly becauses **functions encapsulate complexity**, or in other words, functions hide implementations that we might not care about.

Recall how the Anatomy of React is made up of components, so putting all this information together we can say that
> The components that create the Anatomy of our React application will be written as Javascript functions.

### Creating Functional Components
Let's actually look at how we would write a Functional Component in React.
```jsx
function Hello(){
  return (
    <div>
      <h1>Hello Evan!</h1>
    </div>
  );
}
```
Here we've defined a functional component called `Hello` that takes no input and returns a bit of `HTML`.

That might seem odd, but think back to what `HTML` does: create the structure of a webpage. With that in mind, for React Functional Components to actually be useful, they have to return `HTML` as the building blocks to make our application.

What if we wanted to use our `Hello` component we just created?
```jsx
<div className="App">
  <p>
    This is a React Application!
  </p>
  <Hello/>
  <p>
    What brings you to this webpage?
  </p>
</div>
```
As shown above, we can simply use `<Hello/>` as if it were any other `HTML` tag. Neat!

But you may have noticed an issue with our Functional Component, it only displays one name! The world is complex, with a whole assortment of names, so our component must be able to adapt to all that complexity.
```jsx
function Hello(props){
  return (
    <div>
      <h1>Hello {props.name}!</h1>
    </div>
  );
}
```
Here we introduce `props` (short for properties) which is an input to our `Hello` functional component. You can think of `props` as a JavaScript object that holds all the information that makes our functional component work. In this case, our `props` object contains the variable `name`

We can edit our `<Hello/>` tag to now take an attribute called `name`. Note how it's spelled exactly the same and in the same case as our new property.
```jsx
<div className="App">
  <p>
    This is a React Application!
  </p>
  <Hello name={"Sam"}/>
  <p>
    What brings you to this webpage?
  </p>
</div>
```
Let's finally extend our `Hello` component to implement some logic. What is we don't know someone's name? Currently our website looks like this:
![no name bad ui](images/no_name_bad_ui.png)
Not a good user experience! 

We should edit our component like so
```jsx
function Hello(props){
  let user_name = props.name
  if (!user_name){
    user_name = "Stranger"
  }
  return (
    <div>
      <h1>Hello {user_name}!</h1>
    </div>
  );
}
```
Note how we've created a *variable* `user_name` to hold the property `props.name`. If `user_name` doesn't contain a name (i.e. contains nothing) then we'll set it to the string `"Stranger"`, allowing for a much cleaner user interface!
![no name bad ui](images/no_name_good_ui.png)

## The big picture
So what have we learned?

[TODO] Sam + Chase about anatomy

The anatomy of React is comprised of components, and we've learned how to write React Functional Components.

We're using functions to *encapsulate complexity* and hide complex implementations of the behavior we want out of our components. Instead of having to write the blob of code:
```jsx
let user_name = props.name
if (!user_name){
  user_name = "Stranger"
}
return (
  <div>
    <h1>Hello {user_name}!</h1>
  </div>
);
```
everytime we need to display a hello message, we can simply just use
```jsx
<Hello name={"Chase"} />
<Hello name={"Alice"} />
<Hello name={"Sam"} />
<Hello name={""} />
```
Our code is more compact, it's easier to read, and it can *React* to the dynmiac world (pun intended). For our `Hello` component, it will change what is displayed on our application based on the `props.name` input it receives.








