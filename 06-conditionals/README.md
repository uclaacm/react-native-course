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
``` isRaining = *True or False* 
    if (!isRaining){
        goToPark()
    }
    else{
        stayHome(amongUs)
    }
```
If you think about it, you use "conditional statements" many times a day in your own thinking, so when you approach coding them out, try to think about what you'd do if you were the one making the decision you want your code to make. 
