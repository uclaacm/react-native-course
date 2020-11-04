## Javascript: Variables and Functions


In our last lesson, we saw how JavaScript can bring a website to life- that is, add functionality to a static site. 
We also looked at how we can harness the power of JavaScript in our own websites by writing a function to change our site at the click of a button (remember `buttonClick()`?). 

Today, we’re going to dive a little deeper into JavaScript so that we can get to writing more complex functions. 

To write fancy functions, we need to take a closer look at variables.
Here’s an example from the previous lesson: 

```
let name = "Bob"
let age = 25
```

The main primitive data types in JavaScript are:
1. Number
2. Boolean
3. String

There are also other data types including undefined, BigInt, and, Symbol, but we won’t go over these today.
You can read more about them here if you’re interested: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

JavaScript is a dynamically typed language, which means that every variable type is determined at runtime, when you actually go to use it.

This means you don’t have to worry about specifying the type of each variable you use. That’s really convenient, but it’s still important to know what kind of variable you have, since each data type has its own quirks.

For example, as you might expect, you can add, subtract, multiply, and divide numbers. But what about strings, or a boolean?


**String Concatenation**

So it turns out that you can actually add strings.  What happens when you add them? One string is appended to the other, exactly as they are.

For example:

```
let firstName = "Joe";
let lastName = "Bruin";
console.log(firstName + " " + lastName); // Joe Bruin
```
For reference, console.log() is a function that writes a message to the debugging console. 

Now for booleans. Can you add AND subtract booleans? What about multiply and divide?

Math with Booleans:

Turns out you can do all of those things! When you use a boolean value in JavaScript, true = 1 and false = 0. If you do arithmetic with booleans, booleans just evaluate to numbers. Like in math, you can’t divide by false since that would be dividing by zero, but you can add/subtract/multiply/divide to your heart’s content otherwise.

What about adding strings and numbers? Strings and booleans?

Although you can mix numbers and booleans in JavaScript, you can’t mix numbers and strings. 

Let’s put this all together with an example combining JavaScript with some HTML.




Last week, we discussed functions in JavaScript as a way to simplify our code. This allows us to code a specific set of tasks and then be able to do that set of tasks again without typing it all out again! 

Last week we made a function that counted how many times a button was pressed, and displayed that number on our web page! We then passed that function to the onclick attribute of a button, which is really just a fancy way of saying that we told the button to run our function when it is clicked!

Let’s take a look at the function we made last week: 

```
function buttonClick() {
	click = click + 1; 
	document.getElementByID(‘num’).innerHTML = click
}
```

Right now, to demonstrate the parts of a function, we will dissect each line, to hopefully make functions seem a little simpler. 

The first line is called the function declaration, where we tell our page that we want to define a function called buttonClick. The second and third line are just lines of code that represent the function body--basically just doing what we want our function to do. 

The two parentheses after buttonClick in the first line are where we store what are called function **parameters** or **function arguments**!

Since there is nothing between the parentheses in this line(it simply has "`()`"), it means that we are requiring no parameters for our function. Put more simply, the user doesn’t need to put in any data for our function to work, it’ll just do the same work each time. 

However, many times we will need the user to give us input data, and we are only able to use this data if it passed to our function through the use of parameters. Parameters are basically just variables that we give to our function so that it can influence the actions of the function. 

For example, if we want to create a function that adds two numbers and prints the result to the console log and returns the result as well, it might look something like this: 

```
function addTwoNumbers(number1, number2) {
	sum = number1 + number2; 
	console.log(sum); 
	return sum;
}
```

So, let me take you guys through what this all means. The first line is the function declaration, where we define a function called `addTwoNumbers`. Since there are words between the parentheses, we know that there are function arguments. The function arguments we have are called `number1` and `number2`. 

We add together the variables `number1` and `number2`, print it to the console log in the body of our function, return the sum, and then close the function with the ending curly brace. 

So, basically what we’ve done is we’ve allowed the user to pass us information through the use of **function arguments**, specifically two variables called `number1` and `number2`. You can think of these as just nicknames of the variables that will be passed to them when the function is called later.

You may now be wondering how this will work on our web page. Here is an example of how we could call the function in our code: 

```
num1 = 5; 
num2 = 3; 
addTwoNumbers(num1, num2); 
/*  
This will result in ‘8’ being printed to the console log and 8 as the return value of the function
*/
```

One thing we notice here is that our variables themselves are not called `number1` and `number2`! In fact, they can be called anything they want! 

In this example, the real variable names were `num1` and `num2`, but JavaScript knows that in our function body when we type `number1` that we just mean the first argument passed to the function. 

We now know types of variables in JavaScript and the operations we can do on them, as well as how to write functions in JavaScript with multiple function arguments! We are seriously making progress in having the skills to develop a well-functioning web application!

Possible example code: (give them outline and have them write addTwoNumbers on their own after they've seen it already?)

```
<!DOCTYPE html> 
<html> 
	<head> 
		<meta charset="utf-8"> 
		<meta name="viewport" content="width=device-width"> 
		<title>repl.it</title> 
		<link href="style.css" rel="stylesheet" type="text/css" /> 
	</head> 
	<body> 
		<script src="script.js"></script> 
		<script> 
			function addTwoNumbers(number1, number2) { 
				sum = number1 + number2; 
				console.log(sum); 
				return sum; 
			} 
	
			function helperFunction() { 
				num1 = Number(fnum.value); 
				num2 = Number(snum.value); 
				result.value = addTwoNumbers(num1, num2); 
			} 
		</script> 
		<h1> Adder </h1> 
		<label for="fnum">First number:</label> 
		<input type="number" id="fnum" name="fnum"><br><br> 
		<label for="snum">Second number:</label> 
		<input type="number" id="snum" name="snum"><br><br> 
		<button onclick="helperFunction()">Calculate</button><br><br> 
		<label for="result">Result:</label> 
		<input type="number" id="result" name="result"> 
	</body> 
</html>
