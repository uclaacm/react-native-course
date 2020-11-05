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

[want to expand here]

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

*Note: console.log() is just a function that writes a message to the debugging console*

What does this look like when you run the code on repl.it?

![](RackMultipart20201104-4-g0ysye_html_a63e2d43d9297fbd.png)
Okay, cool! That's enough about strings for now. What about booleans? Can you add AND subtract booleans? What about multiply and divide?

### Math with Booleans

Turns out you can do all of those things! When you use a boolean value in JavaScript, true = 1 and false = 0. If you do arithmetic with booleans, booleans just evaluate to numbers. Like in math, you can&#39;t divide by false since that would be dividing by zero, but you can add/subtract/multiply/divide to your heart&#39;s content otherwise.

Adding strings and numbers? Strings and booleans?

Although you can mix numbers and booleans in JavaScript, you can&#39;t mix numbers and strings.

Let&#39;s put this all together with an example combining JavaScript with some HTML.

## The Anatomy of a Function

Last week, we discussed functions in JavaScript as a way to simplify our code. This allows us to code a specific set of tasks and then be able to do that set of tasks again without typing it all out again!

Last week we made a function that counted how many times a button was pressed, and displayed that number on our web page! We then passed that function to the onclick attribute of a button, which is really just a fancy way of saying that we told the button to run our function when it is clicked!

Let&#39;s take a look at the function we made last week:

```javascript
function buttonClick() {

click = click + 1;

document.getElementByID(&#39;num&#39;).innerHTML = click

}
```

Right now, to demonstrate the parts of a function, we will dissect each line, to hopefully make functions seem a little simpler.

The first line is called the function declaration, where we tell our page that we want to define a function called buttonClick. The second and third line are just lines of code that represent the function body--basically just doing what we want our function to do.

The two parentheses after buttonClick () are where we store what are called function parameters or function arguments!

Since there is nothing between the parentheses in this line, it means that we are requiring no parameters for our function. Put more simply, the user doesn&#39;t need to put in any data for our function to work, it&#39;ll just do the same work each time.

However, many times we will need the user to give us input data. We are only able to use this data if it passed to our function through the use of parameters. Parameters are basically just variables that we give our function that it can work with to influence the action of the function.

For example, if we want to create a function that adds two numbers and prints the result to the console log and returns the result as well, it might look something like this:
```javascript
function addTwoNumbers(number1, number2) {

sum = number1 + number2;

console.log(sum);

return sum;

}
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
We now know types of variables in JavaScript and the operations we can do on them, as well as how to write functions in JavaScript with multiple function arguments! We are seriously making progress in having the skills to develop a well-functioning web application!