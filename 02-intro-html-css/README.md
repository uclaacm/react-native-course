# Lesson 2: Intro to HTML & CSS

In this lesson, we'll take our first look at the building blocks of the web: **HTML** and **CSS**.


## On Hacking TikTok (the Structure of a Webpage)
![Whoops](images/inspectele.png)

They were right, as it turns out. If an app with access to all of your personal data can be hacked by a single college student, surely it's too dangerous to be on your phone.

Except there's a trick! We haven't actually hacked TikTok, if you can believe it. If you navigate to tiktok.com yourself, you can see that our "hack" has been reverted. So what did we do?

Let's highlight some text with our cursor, and then right click, and then click **"inspect"**

![Your page should look something like this](images/inspected.png)

If you remember from last week, what we're looking at right now is the HTML code for TikTok.com. HTML dictates the layout of the page, essentially what and where our browser displays things.

To replicate our "hack", all we need to do is modify the element that displays "Make your Day" in big black letters.

```<h1 class="slogan">Make Your Day</h1>```

We'll explain how HTML actually works in a bit, but all you need to do is replace *"Make your Day"* with any other text and it should update instantly.

If you mouse around the HTML, you can see the corresponding elements on the page getting highlighted. Clearly there's a lot going on here.

There’s a bar at the top (called a header) and inside that bar, there’s links to other pages. There’s a main part of the page (called a body) and inside of that are some blobs of text, and they’re all formatted differently. There’s a part to the side (called a sider) with some dropdown menus. There's a part toward the bottom (called a footer) with even more links and important information.

As you can probably imagine, this can get super messy and hard to keep track of if we don’t have a simple and easy way to represent this in code.

When you’re coding in HTML, you’re basically **describing** to the computer what you want your webpage to look like. You don’t really care *how* the computer does it, you just need it to give you something that meets your exact specifications.

If your computer spoke english, maybe you’d say something like
‘I need a block at the top that’s 20 pixels high, and then one below that that takes up most of the page, and oh, I need a small section of that block to have a picture of myself. And then at the bottom i want another block that’s ten pixels high’

But your computer doesn't speak english, which makes things harder for us, but it helps in one really big way: using HTML correctly means you’ll get exactly what you want (There’s no ambiguity), which means it’s a super powerful tool. Let’s look at how to actually code…



## What are HTML & CSS?

**HTML** (HyperText Markup Language) is a "markup" language that defines the **structure** of the page. It deals with the **content** of the page (e.g. text, images, videos, lists, tables), and the **relationship** between content (e.g. the order, links to other content, where the header or footer is).

**CSS** (Cascading Style Sheets) is a language that defines the **style** of the page. Style is all sorts of things: the color, shape, and size of content (e.g. text or images); the position and layout of items on a page; animations and effects that draw the user's attention.

We could spend a bit more time talking about the background of HTML & CSS, but, this is a **hands-on** class. So, let's get our hands dirty!


## Hello World: HTML

Create a new file called `page.html` in your editor. The `.html` extension tells the computer that we're writing HTML.

In the file, just put in:

```html
Hello world!
```

Yup, that's it. Just that. If you open this file in your browser (or if you're using an online editor, peek at the output), you should see something like this:

![hello world demonstration - look at it being rendered!](images/hello-world.png)

Wow, that was the first line of HTML code that we just wrote! But... it looks just like English, right?

Well, it turns out, HTML is really just a bunch of English that's "marked up" by what we call *tags*. This is not unlike marking up a book to take notes in it.

Let's try our very first tag, `<h1>`.

```html
<h1>Hello world!</h1>
```

You should get something like:

![hello world, but now with h1 - it looks different!](images/hello-world-h1.png)

Huh, that looks different! The `<h1>` tag is used to create **headings**, like the title of a page or chapter. `<h1>` is the most important heading that describes all of the content: it is your version of a book title, movie title, etc.

Hm, we've also learned a few things about tags in HTML. We'll use this approach a lot: try something new, and see what we've learned. In this case:

* so far, it looks like a tag has two components: an opening tag, `<___>`, and a closing tag, `</___>`
* inside the `___`, you can put in a name of the tag; we know `h1` is used for title headings
* if we put text *between* the tags, our browser interprets it differently!

But hm, there are still some other things we don't know. Do all tags create different styles? What happens if you put text outside of a tag? Do spaces matter?

Well, the nice thing about our class is that we can just try this out. So, let's do it:

```html
<h1>This is the most important title!</h1>
<h2>If there's an h1, there's probably an h2, right?</h2>
<h3>What about h3?</h3>
<h9000>Or h9000?</h9000>
<matt>I wonder... can I put anything inside the tags?</matt>
```

## CSS, a Primer

Okay, so we know there are a few ways to style elements on our page. But how exactly do we do it?

Let's take a look at a very simple CSS declaration:

```css
.red-text {
  color: red;
}
```

```html
<p class="red-text">this text will be red!</p>
```

This is a *CSS class declaration*; you might guess that it makes text red, and you'd be right!

There are a few things we should break down on how exactly this works. Don't stress about the names - the concepts or what matters!

1. The `.red-text` is called the *selector*, and it says what the style applies to. In this case, it applies to anything that we name `red-text` - which we did with `class`
2. Then, there are a few things in between our braces, `{` and `}` - these are the styles that will be applied!
3. Each line of CSS within the braces is of the form `PROPERTY:VALUE;`:
    * the property is the `color`
    * then, we have a `:` - this is mandatory
    * then, we have the value, in this case, `red`
    * finally, we have the semicolon, `;`

This takes a lot of time to get used to, so don't overstress about it! The best way to get better with this is with practice.

Let's add on to our example:

```css
.large-red-text {
  color: red;
  font-size: 30px;
}
```

```html
<p class="large-red-text">this text will be large and red!</p>
```

We've introduced a new CSS property, `font-size`: its value can be in `px`, a unit tied to the pixels on your screen.

We can have multiple classes, and apply them to different elements:

```css
.red-text {
  color: red;
}
.blue-text {
  color: blue;
}
.large-text {
  font-size: 30px;
}
```

```html
<p class="blue-text">this text will be blue!</p>
<p class="blue-text large-text">this text will be large and blue!</p>
```
