## What's up with variables?
In our last lesson, we saw how JavaScript can bring a website to life- that is, add functionality to a static site.

We also looked at how we can harness the power of JavaScript in our own websites by writing a function to change our site at the click of a button (remember buttonClick()?).

Today, we&#39;re going to dive a little deeper into JavaScript so that we can get to writing more complex functions.

To write fancy functions, we need to take a closer look at variables.

Here&#39;s an example from the previous lesson:

```javascript
let name = "Bob";
let age = 25;
```

Here, *name* and *age* hold two different kinds of data. One is a number and the other is a word. That's easy enough to see. But how exactly do we keep track of what kind of data a variable holds when we code? Well, we use **data types**!

The main data types that you'll use in JavaScript are
* Number
* Boolean
* String

These foundational data types are called *primitive* data types.
(there are also other data types including undefined, BigInt, and, Symbol, but we won&#39;t go over these today.
You can read more about them here if you&#39;re interested: [Data Types in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures))

JavaScript is a dynamically typed language, which means that every variable type is determined at runtime, when you actually go to use it.

This means you don&#39;t have to worry about specifying the type of each variable you use. That&#39;s really convenient, but it&#39;s still important to know what kind of variable you have, since each data type has its own quirks.

For example, as you might expect, you can add, subtract, multiply, and divide numbers. But what about strings, or a boolean?

### String Concatenation
It turns out that you actually can add strings! What happens when you add them? One string is appended to the other, exactly as they are.

For example:

```javascript
let firstName = Joe;

let lastName = Bruin;

console.log(firstName + " " + lastName); // Joe Bruin
```

*Note: console.log() is a function that writes a message to the debugging console*

What does this look like when you run the code on repl.it?
![repl example](/05-more-on-vars-funcs/images/repl_ex.png)

Unfortunately, we can only add strings. We can't subtract/multiply/divide them.
What about adding strings and numbers? Strings and booleans? Well, turns out we also can't mix numbers and strings.

Alright, that's enough about strings for now! What about booleans? 

### Operations with Booleans
Booleans are special. Not only can they be added/subtracted/multiplied/divided like numbers, but they can also be operated on logically. Let's look at the arithmetic operations first.

#### Arithmetic Operations
So we can add strings, but can you add AND subtract booleans? What about multiply and divide?

Turns out you can do all of those things! When you use a boolean value in JavaScript, true = 1 and false = 0. If you do arithmetic with booleans, booleans just evaluate to numbers. Like in math, you can't divide by false since that would be dividing by zero, but you can add/subtract/multiply/divide to your heart's content otherwise.

Some examples:
```javascript
let bool1 = true; // 1
let bool2 = false; // 0

// adding/subtracting bools
console.log(true + false); // prints 1
console.log(10 - false); // prints 10
console.log(true - 10); // prints -9

// multiplying/dividing bools 
console.log(false/true); // prints 0
console.log(13/true); // prints 13
console.log(10/false); // ERROR: this is illegal!
```
#### Logical Operations
Recall that booleans also have logical significance. For example, a boolean could represent an on/off switch. If the switch is on, the value would be true. Otherwise, the value would be false.

There are 3 main logical operators that act on booleans. 

Name | Symbol
-----|-------
logical and | &&
logical or | \|\|
logical not | !

Say we have booleans a and b. 
a && b is true only when a is true and b is true. If either is false, or if both are false, a && b is false.
a || b is true when at least one argument is true. If a and b are both true, a || b returns true.
!a takes the argument and gives the opposite. 

** Note that logical operators convert each operand to a boolean value.**
(If you want to know more about these things, take a look at this page on [Logical Operators](https://javascript.info/logical-operators).)

Some examples:
```javascript
let bool1 = true;
let bool2 = false;

console.log(bool1 & bool2); // false
console.log(false & bool1); // false
console.log(bool1 & 1) // 1

console.log(bool1 || bool2); // true

console.log(!bool2); //true
```

Let's put this all together with an in-depth example combining variables and your best friend in JavaScript, functions!

## The Anatomy of a Function

Last week, we discussed functions in JavaScript as a way to simplify our code. This allows us to code a specific set of tasks and then be able to do that set of tasks again without typing it all out again!

Last week we made a function that counted how many times a button was pressed, and displayed that number on our web page! We then passed that function to the onclick attribute of a button, which is really just a fancy way of saying that we told the button to run our function when it is clicked!

Let&#39;s take a look at the function we made last week:

```javascript
function buttonClick() { // the function declaration

click = click + 1; //body of the function

document.getElementByID(&#39;num&#39;).innerHTML = click

} // closing brace
```

Right now, to demonstrate the parts of a function, we will dissect each line, to hopefully make functions seem a little simpler.

The first line is called the function declaration, where we tell our page that we want to define a function called buttonClick. The second and third line are just lines of code that represent the function body--basically just doing what we want our function to do.

The two parentheses after buttonClick () are where we store what are called function parameters or function arguments!

Since there is nothing between the parentheses in this line, it means that we are requiring no parameters for our function. Put more simply, the user doesn&#39;t need to put in any data for our function to work, it&#39;ll just do the same work each time.

However, many times we will need the user to give us input data. We are only able to use this data if it passed to our function through the use of parameters. Parameters are basically just variables that we give our function that it can work with to influence the action of the function.

For example, if we want to create a function that adds two numbers and prints the result to the console log and returns the result as well, it might look something like this:
```javascript
function addTwoNumbers(number1, number2) { // function declaration and specify function arguments

result = number1 + number2; // adds the two numbers into a variable called result

console.log(result); //prints the sum to the console log

return result; // returns the sum to "whoever" called the function

} // closing brace
```
So, let me take you guys through what this all means. The first line is the function declaration, where we define a function called addTwoNumbers. Since there are words between the parentheses, we know that there are function arguments. The function arguments we have are called number1 and number2.

We add together the variables number1 and number2, then print it to the console log in the body of our function, then return the sum, and then close the function with the ending curly brace.

So, basically what we&#39;ve done is we&#39;ve allowed the user to pass us information through the use of function arguments or parameters, specifically two variables called number1 and number2. You can think of these variables as just nicknames of the variables that will be passed to them when the function is called.

This is how we could call the function in our code:
```javascript
num1 = 5;

num2 = 3;

addTwoNumbers(num1, num2); // this will result in 8 being printed to the console log
                           // 8 is also the return value of the function
```
One thing we notice here is that our variables themselves are not called number1 and number2! In fact, they can be called anything they want!

In this example, the real variable names were `num1` and `num2`, but JavaScript knows that in our function body when we type `number1` that we just mean the first argument passed to the function.

Additionally, we can easily change this function we've created to do different things. We learned earlier about all the operations we can do on numbers, booleans, and strings. 

So for example, we could easily just change the plus sign in our function body to a multiplication sign and now it'll multiply: (Note: I also changed the function name so that it's more appropriate)
```javascript
function multiplyTwoNumbers(number1, number2) { // function declaration and specify function arguments

result = number1 * number2; // multiplies the two numbers into a variable called result

console.log(result); //prints the product to the console log

return result; // returns the product to "whoever" called the function

} 
```

Or we could change it to divide! :
```javascript
function divideTwoNumbers(number1, number2) { // function declaration and specify function arguments

result = number1 / number2; // divides the two numbers into a variable called result

console.log(result); //prints the quotient to the console log

return result; // returns the quotient to "whoever" called the function

} 
```

We could even put an == to compare them and see if they are equal! Instead of a number result, this will return a boolean result in the form of a number. If the statement is true (i.e. the two numbers are equal) it will return and print 1. If the statement is false(the numbers are not equal), then the function will return and print 0. 
This is what the function will look like now : 

```javascript
function compareTwoNumbers(number1, number2) { // function declaration and specify function arguments

result = number1 == number2; // sees if the numbers are equal

console.log(result); //prints 1 or 0 (true or false) to the console log

return result; // returns 1 or 0 (true or false) to "whoever" called the function

} 
```

We now know types of variables in JavaScript and the operations we can do on them, as well as how to write functions in JavaScript with multiple function arguments! We are seriously making progress in having the skills to develop a well-functioning web application!

Now, let's all try to write the function that can subtract two numbers!
