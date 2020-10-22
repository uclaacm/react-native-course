## Making our Webpages Interactive! 

So as we just observed, not having JavaScript makes webpages **essentially unusable** (in most cases!)
  
At this point, you're probably asking "Well, how do I actually harness the power of JavaScript to make interactive websites and apps?", and for that, you've come to the right place!  

There are two main ways to incorporate JavaScript into your HTML file, and they both involve the \<script> tag.  
(The \<script> tag is simply a way to let the browser know that whatever is inside should be **interpreted as JavaScript code**) 

1. You can link an external .js file by specifying the *src* (source) *attribute*  
``` <script src="script.js"> </>```  
This way is great when you have a lot of code, because it lets you keep your HTML file neat and easy to read. 
2. You can write your JavaScript **inside** of your script tag
``` <script> var i = 0... </>```  
This way is good if you have a small amount of code, and we'll be using it for its simplicity. 

Now that we know how to incorporate JavaScript in our HTML, we need a way to allow *input* from the user of our website.  
  
At its most basic level, we define *input* as any information, or message,  we get from our user. Our goal is to take in that input, and send back a relevant *output*, or message, back to our user.  

One really easy way to get input from our user is with the *onclick* attribute. As you might have guessed, the *onclick* attribute defines what should happen when an element is clicked!  

Let's define a paragraph tag as:  
```<p onclick="">Click me!</p>```  
And a element to display how many times we've clicked:
```<p id="num>0</p>```
But what actually goes in those ""? We need a **repeatable task, or way of doing something**, or in other words, a **function!**  

So let's go back to our \<script> tag, and write some JavaScript to define a **function** that tracks how many times we've clicked our element. 


```var click = 0;```

In english, this means 
```define a variable called click, and start it at zero```  

Next, we have

```function buttonClick() {}```

Which means 

```Define a function called buttonClick. Anything inside of the curly braces is what it does.```

Inside of the curly braces:  
 
```function buttonClick(){ click = click + 1; }```

Which means  

```Every time you buttonClick, the variable click is whatever it used to be plus 1, or in other words, just adding 1 to click```  

We have one last line, and this is the one that actually changes our HTML:  

``` function buttonClick(){ click = click + 1;    document.getElementById('num').innerHTML = click;}```

Ok, that's a lot.  
The first part of that line ```document.getElementByID('num')``` means that we're asking to find some element in our HTML that has the ID 'num'. But what is an ID?  

An ID is another HTML attribute that let's us identify unique elements. Much like a student ID, where one student gets one ID, one element gets one ID.  
This lets us give the page an ID and the page will always respond *"Oh, I know exactly which element you're talking about, here it is"*  

The next part of the line ```.innerHTML = click;``` 
The *innerHTML* specifies what goes inside of the element's tags! In this case, we're setting it equal to the number of times we've clicked our \<p> tag.  
*Note that this is not an HTML attribute, it is javascript*  

All together, this line is saying:  
```Get the element whose ID is 'num', and make the stuff inside of its tags equal to the number of times we've clicked our button element```

All we need to do now is make a new element, with the ID 'num', to display how many times we've clicked our button element. 

