# The Anatomy of a React App

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