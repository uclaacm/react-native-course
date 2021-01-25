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
