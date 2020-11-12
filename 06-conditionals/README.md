## Decision Making: If and Else  

Why do we make decisions? What's in a choice? Seriously.  
It's a question worth thinking about, especially since when we code, we want the computer to be able to do whatever our brains can (but faster)!  

Why don't we just do the same thing all the time?  
It's because the world is **dynamic**  
In other words, it changes, and we have to change our behavior if we want to successful when things change. So at its core, conditionals in programming allow us to make our code dynamic and responsive.  
If our code was static and unresponsive, it wouldn't worth much, because for code to be useful, it needs to be able to react to dynamic input from our dynamic world. It needs give us meaningful output for any set of inputs we could give it.  

What's the best way we could represent something that changes in our programs?  
Variables let us represent some quantity that could change at any given time.  
So if we had a variable x, it could represent 1 or it could represent '2' or 'blue' or True, we don't know, and that's why it's called a variable.  

Our goal for writing *conditional statements* is to be okay with not knowing what exactly that variable x represents, because what ever it represents, we'll be able to react to it accordingly.  

The conditional statement revolves around a condition (which is a boolean variable!)  
If that boolean variable that represents that condition is True, it will run the code that is contained within that statement. If that boolean variable is False, it'll go on to some other code (which is typically the *Else* statement).  

If you were to think about how you 'use conditional statements' in your own decision making, what would it sound like?  
Maybe something like: If it's not raining today, I'll go to the park, but if it is raining, I'll just stay home and play Among us.  
Let's try to convert that to code:  
```js isRaining = *True or False* 
    if (!isRaining){
        goToPark()
    }
    else{
        stayHome(amongUs)
    }
```
If you think about it, you use "conditional statements" many times a day in your own thinking, so when you approach coding them out, try to think about what you'd do if you were the one making the decision you want your code to make. 

For example in our daily life, we often make sequential decisions. For example if I want to deliver homemade baked goods to my friends I would have to consider what each person's favorite desert is
```js
    let desert;
    if(name == "Matt"){
        desert = "brownies";
    }
    else if (name == "Chase"){
        desert = "cake";
    }
    else {
        desert = "chocolate chip cookies";
    }
    console.log("I should bring " + desert + " for " + name);
```
How would you translate this code snippet translate to English? (Pause to think about this for a moment)

You might end up with something like this:
```
If I'm delivering deserts to Matt, I should bring brownies.
If I'm not delivering to Matt but I'm delievering to Chase then I should bring cake.
Else if I'm not delievering to either Matt or Chase I should bring chocolate chip cookies.
```

Note that the order of our `if` and `else if` statements is important. If we instead wrote
```js
    let desert;
    if(name == "Chase"){
        desert = "cake";
    }
    else if (name == "Matt"){
        desert = "brownies";
    }
    else {
        desert = "chocolate chip cookies";
    }
    console.log("I should bring " + desert + " for " + name);
```
Our English translation would end up looking like 
```
If I'm delivering to Chase then I should bring cake.
If I'm not delivering to Chase, but I'm delivering to Matt, I should bring brownies.
Else if I'm not delievering to either Matt or Chase I should bring chocolate chip cookies.
```

This difference is very subtle here, and probably won't end up affecting the larger behavior of our conditional statement, but there *is a difference*. The ordering of our conditional matters because our code is run sequentially.

The only way we consider the line `else if (name == "Matt"){` in the above example is if the first conditional evaluates to false. In other words `name != "Chase"`.

Here's an example to demonstrate this. For what range of hunger will cookiesEaten be set to exactly 10 cookies?
```js
    if (hunger < 4) {
        cookiesEaten = 5;
    }
    else if(hunger > 9) {
        cookiesEaten = 15;
    }
    else {
        cookiesEaten = 10;
    }
```
Did you guess as long as hunger is between 4 and 9? If so that's right!

Hopefully this example demonstrates why conditionals are so powerful. Depending how hungry we are, conditionals allow our code to adjust to that, making our program and webpages more reactive.
