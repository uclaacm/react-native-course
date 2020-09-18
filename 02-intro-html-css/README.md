# Lesson 2: Intro to HTML & CSS

In this lesson, we'll take our first look at the building blocks of the web: **HTML** and **CSS**.


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
