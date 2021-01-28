## More on Functional Components ##

Now that we've seen an overview of what functional components are and what they can do, let's see a few more examples.

Say you have an assignment where you need to write an essay. When you're done, you realize that this essay is a masterpiece and you just <b>need</b> to share it with the world, so of course you decide to start a blog. Instead of writing lots of HTML to structure your page, you choose to use React so you can use <strong>functional components</strong>.

Let's see how a functional component can help you create a header for your blog article.

First, a refresher on how we'd do this in HTML.
```html
<html>
  <p>FirstName LastName</p>
  <p>month-day-year</p>
  <p>Class<p>
  <h1>My Great Essay</p>
</html>
```
We can see that this header is really made up of 4 pieces: your name, the date, the name of the class, and the title of your essay. Let's take the name part of the header and make it into a React component.

It's important to remember that functional components are JavaScript functions that return a piece of what looks like HTML. (It's really JSX, but it's really similar to HTML. Consider them interchangable for now.) Then, React takes these blocks and updates the structure of your webpage.

Okay, so what should our component return? We want a paragraph that displays your first and last name. `<p>FirstName LastName</p>` should do the trick. Now we wrap this in a function. This gives us:

```jsx
function Name(props){
  return (
    <p>{props.first} {props.last}</p>
  );
}
```
But wait a sec-- what's this `props` business all about? And why are there `{ }` inside the paragraph tags?

`props` is an object that lets us pass data to our functional components so that our components can react to different situations. In this situation, you want your name to show. But what if you want your friend's name to show instead? That's where `props` comes in. In this example, props has the variables `first` and `last`, which specify first and last name, respectively. We need to use `{ }` to make it clear that these are JavaScript variables and not plain text. This lets us print the value of the variable.

Now we can use this component in our function App, which gets exported. You can use this component with the `<Name />` tag. Since our function uses the variables `first` and `last`, we need to make sure that we include the attributes `first` and `last` when we use our Name tag, like this:

```jsx
<Name first={"FirstName"} last={"LastName"} />
```

Awesome! You just made a functional component that displays a name. Just by changing what goes inside the `{}` when you use the Name tag, you can change the name that shows up.

Now lets work on the date. Similarly, to how we made the name component, let's use `props` to make a date component. Our date needs the day, the month, and the year, so lets pass in these values in our props just like we passed in `first` and `last ` in the `Name` component. So, we can write this function which has the month then the day then the year separated by dashes.

```jsx
function MyDate(props) {
  return (
    <p> {props.month}-{props.day}-{props.year} </p>
  );
}
```

We can now use this component to show the date "01-28-2021".

```jsx
<MyDate month={"01"} day={"28"} year={"2021"}/>
```

However, there is a slight problem. You love your essay and are constantly updating it. So, your essay changes every day. But, you keep forgetting to update the date in your header. Is there any way to automatically update the date so that your blog will always show the current date? We could find some way to do this ourselves, but it sounds like hard work. We would have to spend a couple of hours (or days) in the frustration of writing and debugging the code, or we could be lazy and take the easier and better way.

Last time we talked about using functions to hide complex (or hard) work which we do not want to deal with. Well, one advantage of hiding this work is that we can use functions from other people without knowing how they work. We don't need to figure out how to get the current date. We only need to know how to use the functions made by other people that does what we want.

Luckily for us, JavaScript has `Date` object which can retrieve the current time. We get the code automatically as part of JavaScript's built-in libraries. When we call `new Date(),` we get information about the current time. We don't have to worry about how JavaScript gets the value or represents it. We simply need to know how to use `new Date()`. Some interesting functions that let us use the date object are...

* `getMonth()`: this function returns the number of the month from 0 (January) to 11 (December)
* `getDate()`: this function returns the number of the day of the month (1-31)
* `getYear()`: this function returns the number of the year (for example: 2021)

These functions seem to give us what we want, but `getMonth()` gives us a number from 0 to 11 while we are used to having months that are numbered from 1 to 12. So we need to add 1 to get the normal month number. Now that we know how to use this Date information. Let us use them to automatically get the current date.

```jsx
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();
<MyDate month={month} day={day} year={year}/>
```

This code stores the date value in the variable `today`. Then, it calls the `getMonth()`, `getDate()`, and `getYear()` functions to get the current month, day, and year using the information stored in `today`. We can then use those values to tell our component `MyDate` what the date is. This is simple and easy to use and we saved a lot of time and effort by using the code written by other people.

Now, I am sure that you have all been wondering why we named our component `MyDate` instead of `Date`. Well, to answer your question, you have to remember that computers are stupid and are easily confused. If we have a component named `Date` defined using a function named `Date` when we are also using another function named `Date` to get the current date information, the computer can get confused about which `Date` function we mean. So to help the computer not be confused, we named our component `MyDate` to distinguish between the `Date` constructor function which other people made and the date component that we are making.

Now, we’ve put together two functional components in React! Give yourselves a pat on the back before we add one final step to create our finalized header. 

Remember, to create a functional component in React, we use the opening line to call our functional component a name `Header`. It looks something like this 
```jsx
function Header(props) {
```
In this function, our aim is to utilize the two functional components we just created to create one more functional component that will do the whole header for us. 

Just like before, we will need to use `props`, which will allow us to pass information to our functional component so that it can “react” (pun intended) to different data, which basically allows us to simulate real-world scenarios and problems. 
So, we will want to pass our header component, our name, the date, along with our class name and the title of our essay. 

Now, if we stop and think before we try to write this code, we will remember that we just wrote functional components to display our name and date, so instead of writing this code all over again, we can use our functional components to simplify the process of displaying our header. 

To use this, we will use the tag 
```jsx
<Name first={props.first} last={props.last} />
```
to use our functional component that we called Name and the tag 
```jsx
<MyDate month={props.month} day={props.day} year={props.year}/>
```
to use our functional component that we called MyDate. To recap, we should have this so far: 
```jsx
function Header(props) { 
return (
  <div>
    <Name first={props.first} last={props.last} />
    <MyDate month={props.month} day={props.day} year={props.year}/>
  </div>
  );
}
```
At this point, we have coded a functional component that does the work of our two combined functional components that we created previously. But, as we stated before, we now need to add the class that we're in and the title of our essay. 

To do this, we will use JSX tags (just think of them as HTML tags) to display our class and title of essay that will be passed by `props`. So we will now add these tags, using a p tag for our class name and a header tag for our title. 

So, when we update our functional component, it should look like this now: 
```jsx
function Header(props) { 
return (
  <div>
    <Name first={props.first} last={props.last} />
    <MyDate month={props.month} day={props.day} year={props.year}/>
    <p>{props.class}</p>
    <h1>{props.title}</h1>
  </div>
  );
}
```

Here, we added `class` variable and a `title` variable to our props, so that we can pass these in when using our `Header` functional component. 

So, we now have successfully created a functional component that utilizes `props` to display a header, with our name, the date, our class, and the title. 

To use this functional component in React, we can write 
```jsx
<Header first={"FirstName"}
        last={"LastName"}
        month={"month"} 
        day={"day"}
        year={"year"}
        class={"AP CS Principles"}
        title={"My Great Essay"}
/>
```

and our functional component will take this code and display to us a beautiful header. 
