# Lesson 2: Intro to HTML & CSS

In this lesson, we'll take our first look at the building blocks of the web: **HTML** and **CSS**.

_We recommend following along in [repl.it](https://repl.it/) or [codepen](https://codepen.io/) for this lesson!_

- [On Hacking TikTok (the Structure of a Webpage)](#on-hacking-tiktok-the-structure-of-a-webpage)
- [What are HTML &amp; CSS?](#what-are-html--css)
- [Hello World: HTML](#hello-world-html)
- [Foundational HTML Tags](#foundational-html-tags)
  - [Paragraphs and Images](#paragraphs-and-images)
  - [Links (or more formally known as Anchors)](#links-or-more-formally-known-as-anchors)
  - [Explicit HTML structure](#explicit-html-structure)
- [Styling](#styling)
- [Classes and CSS](#classes-and-css)
  - [Setting up a "Stylesheet"](#setting-up-a-stylesheet)
  - [CSS Basics](#css-basics)
- [Conclusion](#conclusion)

## On Hacking TikTok (the Structure of a Webpage)

![Whoops](images/inspectele.png)

They were right, as it turns out. If an app with access to all of your personal data can be hacked by a single college student, surely it's too dangerous to be on your phone.

Except there's a trick! We haven't actually hacked TikTok, if you can believe it. If you navigate to tiktok.com yourself, you can see that our "hack" has been reverted. So what did we do?

Let's highlight some text with our cursor, and then right click, and then click **"inspect"**

![Your page should look something like this](images/inspected.png)

If you remember from last week, what we're looking at right now is the HTML code for TikTok.com. HTML dictates the layout of the page, essentially what and where our browser displays things.

To replicate our "hack", all we need to do is modify the element that displays "Make your Day" in big black letters.

`<h1 class="slogan">Make Your Day</h1>`

We'll explain how HTML actually works in a bit, but all you need to do is replace _"Make your Day"_ with any other text and it should update instantly.

If you mouse around the HTML, you can see the corresponding elements on the page getting highlighted. Clearly there's a lot going on here.

There’s a bar at the top (called a header) and inside that bar, there’s links to other pages. There’s a main part of the page (called a body) and inside of that are some blobs of text, and they’re all formatted differently. There’s a part to the side (called a sider) with some dropdown menus. There's a part toward the bottom (called a footer) with even more links and important information.

As you can probably imagine, this can get super messy and hard to keep track of if we don’t have a simple and easy way to represent this in code.

When you’re coding in HTML, you’re basically **describing** to the computer what you want your webpage to look like. You don’t really care _how_ the computer does it, you just need it to give you something that meets your exact specifications.

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

Well, it turns out, HTML is really just a bunch of English that's "marked up" by what we call _tags_. This is not unlike marking up a book to take notes in it.

Let's try our very first tag, `<h1>`.

```html
<h1>Hello world!</h1>
```

You should get something like:

![hello world, but now with h1 - it looks different!](images/hello-world-h1.png)

Huh, that looks different! The `<h1>` tag is used to create **headings**, like the title of a page or chapter. `<h1>` is the most important heading that describes all of the content: it is your version of a book title, movie title, etc.

Hm, we've also learned a few things about tags in HTML. We'll use this approach a lot: try something new, and see what we've learned. In this case:

- so far, it looks like a tag has two components: an opening tag, `<___>`, and a closing tag, `</___>`
- inside the `___`, you can put in a name of the tag; we know `h1` is used for title headings
- if we put text _between_ the tags, our browser interprets it differently!

We'll refer to these HTML components, consisting of the start tag, content, and closing tag, as HTML _elements_.

But hm, there are still some other things we don't know. Do all tags create different styles? What happens if you put text outside of a tag? Do spaces matter?

Well, the nice thing about our class is that we can just try this out. So, let's do it:

```html
<h1>This is the most important title!</h1>
<h2>If there's an h1, there's probably an h2, right?</h2>
<h3>What about h3?</h3>
<h9000>Or h9000?</h9000>
<matt>I wonder... can I put anything inside the tags?</matt>
```

## Foundational HTML Tags

After playing around with your `page.html` file, you may have noticed that not all words are recognized as tags.

For example `<matt></matt>` is not a valid tag, as much as we want it to be. Why isn't `<matt>` a tag? This isn't right. What kind of secret society gets to decide these things?

Put simply, all the web browsers have decided upon a HTML **standard**. Think of the standard as a rulebook for browsers that says something like:

> We'll support the `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` tags, but NOT the `<h7>`, `<h8>`, or `<matt>` tags.

This means we have to learn the foundational tags that the standard outlines. Let's dive into that. (by the way we will be working with HTML5, which is just a version of HTML that uses a certain standard)

We will start with HTML headings. Let's try out all the heading sizes supported by HTML5. Try typing the code below into your `page.html` file. (Don't copy paste! It's easier to remember the syntax when you type)

```html
<h1>This is the largest heading</h1>
<h2>This one is slightly smaller</h2>
<h3>This one is even smaller</h3>
<h4>They're getting tiny now!</h4>
<h5>This one is very unimportant</h5>
<h6>Can you even read this now?</h6>
```

You should get something that looks like:

![All the heading tags supported by HTML5 -- look at the hierarchical structure!](images/heading-hierarchy.png)

Do you notice anything? The font size gets smaller to indicate that certain text is less important than others. Your eyes are naturally guided towards the largest text first, then the next largest and so on. Neat huh?

This isn't a coincidence: HTML is structured in such a way where information and tags are ranked one above the other according to importance. This is called the `HTML Hierarchy` (Fancy word alert! Remember this, it will come up again later)

### Paragraphs and images

> Checkpoint alert! If you fell behind no worries, just copy the [code found here](checkpoints/01/page.html) into your `page.html`

What if you wanted to write lengthier text? Say you wanted to write a book or a paragraph that explains why Matt is so great and how he was cheated out of his own HTML tag. Or maybe we want to serenade Chase about how he's such a cool person and a fantastic teacher.

Let's add the following code to our `page.html` file

```html
<p>This is a paragraph, wow!</p>
<p>Let's write about Matt and Chase now.</p>
<p>
  What if you wanted to write lengthier text? Say you wanted to write a book or
  a paragraph that explains why Matt is so great and how he was cheated out of
  his own html tag. Or maybe we want to serenade Chase about how he's such a
  cool person and a fantastic teacher.
</p>
```

This should result in something like:
![Paragraphs in HTML](images/paragraphs.png)

Note how the paragraphs naturally have line breaks between them, even though we don't have any in our code. This is a great example of how HTML is _telling_ the browser how to display your information.

---

Let's add more content. What if we want an image? Here's an image of the [matt](https://avatars0.githubusercontent.com/u/14893287?s=400&u=7a0d69cf5f16e415439c20017f85f9c8dc4582d1&v=4)!

Let's add the following code into our `page.html` file. It's okay to copy and paste here, since the link is so long

```html
<img
  src="https://avatars0.githubusercontent.com/u/14893287?s=400&u=7a0d69cf5f16e415439c20017f85f9c8dc4582d1&v=4"
/>
```

You should now have a picture of matt on your webpage.

### Links (or more formally known as Anchors)

> Checkpoint alert! If you fell behind no worries, just copy the [code found here](checkpoints/02/page.html) into your `page.html`

What if we wanted to add a hyperlink to our webpage? Maybe a link to the [ACM Teach LA website](https://teachla.uclaacm.com/)?

We can do this with the `<a>` tag. Let's add it to our `page.html`

```html
<a href="https://teachla.uclaacm.com/">A link to the ACM TeachLA website!</a>
```

You should now have that familiar blue underlined text we all know as links!

![links](images/link.png)

But wait, why do the HTML tags for `<img>` and `<a>` have things inside of the tags? What are `href` and `src`?

These are known as HTML **attributes**, which you can think of little nametags you add to HTML tags. For example the `href` and `src` attributes tell their HTML tags where to look to find the webpage or image respectively. In English `<a href="https://teachla.uclaacm.com/">` would roughly translate to "put a link that points to the teach LA website".

We'll cover more about attributes later today.

### Explicit HTML structure

> Checkpoint alert! If you fell behind no worries, just copy the [code found here](checkpoints/03/page.html) into your `page.html`

Remember when we talked about the HTML hierarchy? Let's bring that back again.

There are some special tags in HTML, ones that delineate specific sections of a webpage. You don't need to copy any of this down in `page.html` but it's useful just to follow along with the images below.

```html
<html>
  <body>
    <header>This is some text in the header</header>
    This is some text in the main body
    <footer>This is some text in the footer</footer>
  </body>
</html>
```

In the HTML hierarchy, the `<html>` tag tells the browser: "Hey the webpage begins here! Everything surrounded by the `<html>` tags is part of the webpage"

The `<body>` tag tells the browser where to look for the main content. Everything that the user will end up seeing should be in the `body` tag.

`<header>` and `<footer>` indicate exactly what the words imply: a header at the top of a webpage and a footer at the bottom.

Let's see what this hierarchy looks like visually:

![an HTML wireframe](images/wireframe.png)
Here you can see the header surrounded by a red border, the main text surrounded by a green border and the footer surrounded by a blue border. The body has a dashed black border, and the HTML has a solid yellow border

## Styling

Now that we’ve defined the content and structure of our webpage with HTML, it’s time to specify how that content looks, also known as the _style_ -- for example, we might want to change the size, color, and position of elements on our page. This is where CSS comes in!

Before we dive right into it, we need to consider how we can use CSS with HTML. For starters, do we need to write our CSS in a separate file from our HTML code? The answer depends, as it turns out there’s actually several ways to use CSS with HTML. Let’s take a look at a couple of the most useful ways:

- Inline CSS
  - This is a way to write CSS directly into your HTML file, using the `style` attribute of HTML elements (more on this in a second!)
- External CSS
  - This involves writing CSS in a separate file. In practice, this is the most common and efficient way to use CSS with HTML. We’ll cover this method of using CSS later in the lesson!

Don’t worry about the names or specifics of these methods -- we just need a high level overview so that we can get right to using CSS. And if you’re wondering which method is “better,” as we’ll see, each method has its pros and cons! We’re going to start with the inline method, since this is the easiest way to demonstrate and get started with CSS.

As previously mentioned, the first step to adding inline CSS is to add the `style` attribute to the HTML element we want to customize. The value of the attribute is the particular CSS style(s) we want to apply. Here’s how this looks with HTML, minus the actual CSS:

```html
<tagname style="some CSS!">text</tagname>
```

CSS allows us to specify styles using certain **properties** and **values**. The property is the type of style we want to change (e.g. color, size), and its value is the exact style we want (e.g. color can be red). The CSS syntax is fairly straightforward:

```css
property: value;
```

Combining this with our HTML, we have:

```html
<tagname style="property:value;">text</tagname>
```

Not too bad so far! As you might imagine, [the list of properties we can use](https://www.w3schools.com/cssref/) is huge. In addition, each property only accepts certain values, though most tend to be pretty intuitive. Here’s a quick rundown of a few essential CSS properties and some values they accept -- but if you’d rather see CSS in action and check out the specifics later, feel free to skip straight to the demonstration!

- color
  - Specifies the color of the _text_ of an element
  - Value can be a color keyword (e.g. `red`, `blue`, `orange`, and who could forget `papayawhip` and `lemonchiffon`) or hex code, RGB, and HSL (if you’re unfamiliar with these, don’t worry about it yet!)
- background-color
  - Specifies the color of the _background_ of an element
  - Value can be same as those for `color`
- font-size
  - Specifies the font size of text
  - Value can be a keyword (e.g. `large`) or a number followed by one of various units. The most common of these is pixels, written as `px`
- font-weight
  - Specifies the degree of boldness of text
  - Value can be a certain number or keyword (e.g. `bold`, `lighter`)
- text-align
  - Specifies the horizontal alignment of text
  - Value can be a keyword (e.g. `left`, `right`, `center`)

Now that we’ve got all that out of the way, we can start actually writing some CSS! Let’s start with a heading and change its color to blue:

```html
<h1 style="color:blue;">a blue heading!</h1>
```

Let's see what else we can do!

```html
<a style="background-color:blanchedalmond;" href="https://teachla.uclaacm.com/"
  >a fancy link</a
>
<p style="font-size:75px;">biiig text</p>
<p style="font-weight:bold;">i'm feeling bold today</p>
<footer style="text-align:center;color:green;">
  this footer is centered and green!
</footer>
```

> Checkpoint alert! If you fell behind no worries, check out the [code found here](checkpoints/04/page.html)

Before we move on, there's one thing we need to note -- you may have noticed that certain HTML elements appear to already have their own styles. For example, text included in an `h1` tag is bigger and bolder than text in a `p` tag, even though we haven't specified those styles with CSS. This is because some elements have default CSS styles, which are often convenient -- typically, we'd like the heading to be big and bold. However, the styling differences between different tags are still the result of CSS, not HTML. Remember, styling is always done with CSS, not HTML -- if you want big and bold text that isn't intended to serve as a heading, you should use CSS and a more appropriate tag than `h1`.

## Classes and CSS

Okay, so now we know how to style elements with inline styling. But what if we wanted to use the same style for multiple elements - we don't want to repeat ourselves many times!

Turns out, computer programs are just as lazy are you, and hate repeating themselves. To solve this problem, they came up with a way to define reusable styles with CSS: using **CSS classes**. We can think of a class as a group of elements that we want to apply the same styles to. To include an element in a class, we use another HTML attribute, the `class` attribute, and specify the name of the class as the value. For example, to put a `p` element in a class called `group`, we would write

```html
<p class="group"></p>
```

### Setting up a "Stylesheet"

_Note: if you're using repl.it or codepen, you can skip this step!_

Before we do any legwork, we need to do a tiny bit of setup. We already have a `page.html`; but, we also need to create a `page.css` file. This file will contain ALL of our CSS - it is appropriately called a stylesheet.

Then, closer to the top of the `page.html`, we need to add in a `link` tag:

```html
<link rel="stylesheet" href="page.css" />
```

And, that's it! From now on, where you see CSS, plop that into `page.css`; for HTML, put it in `page.html`.

### CSS Basics

Let's take a look at a very simple CSS declaration:

```css
.red-text {
  color: red;
}
```

```html
<p class="red-text">this text will be red!</p>
<p class="red-text">so will this!</p>
```

This is a _CSS class declaration_; you might guess that it makes text red, and you'd be right!

There are a few things we should break down on how exactly this works. Don't stress about the names - the concepts or what matters!

1. The `.red-text` is called the _selector_, and it says what the style applies to. In this case, it applies to anything that we name `red-text` - which we did with `class`
2. Then, there are a few things in between our braces, `{` and `}` - these are the styles that will be applied!
3. Each line of CSS within the braces is of the form `PROPERTY:VALUE;`; this is what we've seen before. As a reminder:
   - the property is the `color`
   - then, we have a `:` - this is mandatory
   - then, we have the value, in this case, `red`
   - finally, we have the semicolon, `;`

This takes a lot of time to get used to, so don't over-stress about it! The best way to get better with this is with practice.

Let's add on to our example:

```css
.large-red-text {
  color: red;
  font-size: 30px;
}
```

```html
<p class="large-red-text">this text will be large and red!</p>
<p class="large-red-text">and this text too! wow!</p>
```

Wow, that's convenient! We can now apply many different complex styles to different HTML elements!

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

On top of classes, there are actually 3 different ways that we can "select" elements on our HTML page!

## CSS Selectors

When there are multiple rules applying to the same element, [CSS' cascade and specificity rules come into play](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

At a high level, the last rule to be declared is what takes precedence. So in our example above, the last `h1` styling rule takes precedence, making our font size 30px.

However, when there are multiple rules applying from multiple **selectors**, precedence takes effect. **The most specific selector wins out on conflicting rules**.

Here's the list of selector specificity, in order of least to most specific:

- Type selectors (`h1`, `div`, etc.)
- Class selectors (`.reallybig`)
- ID selectors (`#page-title`)

So if we wrote, using our stylesheet above:

```html
<h1 class="reallybig" id="page-title">Conflict?</h1>
```

We would see that the font size from the class selector (`.reallybig`) would win out, and the ID styles would still be respected (since there was no conflict).

Before we move on, there are of course ways to override these rules, but you should only do so sparingly. By appending `!important` to the end of a value for a particular rule, we can guarantee that the rule will win out in cases of conflict. However, this should be reserved for incredibly specific situations, such as for overwriting rules from a CSS framework - but even then you can take advantage of the cascade!

For some more info, check out ACM TeachLA's interactive guide on CSS Selectors, Selector Safari!

## CSS Box Model

The **box model** is a core part of HTML and CSS, and you'll likely hear about it more as you read web documentation, talk to web developers, and do front-end interviews. But what exactly does the box model mean?

The box model says that **every HTML element is really just a box**. Simple, right? But, there's a bit more. In particular, it says that each box is comprised of four (somewhat concentric) rectangles that describe the layout of element. These four rectangles (or areas, zones, parts), are called:

1. The Content Area
2. The Padding Area
3. The Border Area
4. The Margin Area

To see it in action, we can just run inspect element on whatever we want!

Let's go over all of them in action:

### The Content Area

The content area contains, well, your content. By default, the size of this area is determined by the size of your content: a `400px` image will have a content area of size `400px`, and text _generally_ fills as much space as possible (though we'll go into this more in a bit). In addition, we've played around with the `width` and `height` attributes: by default, the `width` and `height` attributes only affect the content area.

This is the easiest area to think about and examine. We can do this with a very trivial code example:

```css
/* CSS file */
.box {
  width: 300px;
  height: 300px;
  background-color: blue;
}
```

```html
<!-- HTML FILE -->
<div class="box">I'm a box!</div>
```

### The Padding Area

Now, let's throw our next box in. The **padding** of a box surrounds the content area with whitespace. I You can control the `padding` of a box with a set of CSS properties, such as:

- `padding-top: 5px;`, which would add 5 pixels of padding to the top of a content area
- `padding-right: 5px;`, which would add 5 pixels of padding to the right of a content area
- `padding-bottom: 5px;`, which would add 5 pixels of padding to the bottom of a content area
- `padding-left: 5px;`, which would add 5 pixels of padding to the left of a content area
- `padding: 5px;`, which adds 5 pixels of padding to the top, right, bottom, and left of a content area

When we say _whitespace_, we mean that there is nothing there, _transparently_; that is to say, we will display whatever is the background of the element.

Let's also take a look at this with a code example. One very common use case of `padding` is to "pad" some text, to make it more visually appealing.

```css
/* CSS file */
.orange-box {
  background-color: orange;
  width: 200px;
  height: 200px;
}
.padded-orange-box {
  background-color: orange;
  width: 200px;
  height: 200px;
  padding: 10px;
}
```

```html
<!-- HTML FILE -->
<div class="orange-box">
  Why are spiders so good at making websites? Because they're great web
  developers!
</div>
<br />
<div class="padded-orange-box">
  Why are spiders so good at making websites? Because they're great web
  developers!
</div>
```

### The Border Area

Hopefully, the **border area** should be somewhat self-explanatory: it creates a visible border around your padding and content areas. Unlike padding, border related properties all add some sort of color, and can sometimes add patterns as well.

There are a plethora of different options to customize a border (and we recommend you take a look at some documentation when you have the chance), but for now, we'll examine the `border` property (which is in reality shorthand for `border-width`, `border-style`, and then `border-color`).

This is best explained visually. Let's look at this with another common code example, a simple "card" element:

```css
/* CSS file */
.text-card {
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
}
```

```html
<!-- HTML FILE -->
<div class="text-card">
  I never understood Fifty Shades of Gray - there are at least thousands in RGB
  color space.
</div>
```

![screenshot of border + padding + content areas example](images/border-area.png)

Here, the `border: 1px solid black;` is telling us:

- the border should be `1px` wide
- the border should be `solid` (it could also be dashed)
- the border should be `black`

Also, note that the border goes around both the content and the padding! And, the border itself is adding to the size of our box: the total size of `.text-card` is actually `221px` now!

### The Margin Area

Last, but not least, let's talk about margin! Margin operates somewhat similarly to padding, in that we'll add some space around the element. Like `padding`, there's:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`
- and the shorthand `margin`

Let's take a look at an example with all of our elements in play, building on our card example:

```css
/* CSS file */
.text-card-mb {
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 50px;
}
```

```html
<!-- HTML FILE -->
<div class="text-card-mb">
  I never understood Fifty Shades of Gray - there are at least thousands in RGB
  color space.
</div>

<div class="text-card-mb">
  Paradoxically, taking computer organisation has made my computer less
  organized; there's stacks and heaps of files everywhere now!
</div>
```

![screenshot of margin + border + padding + content areas example, with margin-bottom: 50px;](images/margin-area.png)

Notice that, in addition to the padding within the box, we've now added space between the boxes: `50px` to be exact!

There is one difference between the behaviour of margin and padding, other than their difference in order respective to the box model. Margins "collapse": that is to say, if two elements on top of each other have `margin-bottom: X;` and `margin-top: Y;`, the total space won't be `X + Y` (as it would for padding); instead, it'll _collapse_ the margins, and pick the larger item. We can see this with our text cards:

```css
/* CSS file */
.text-card-spaced {
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
  margin: 50px;
}
```

```html
<!-- HTML FILE -->
<div class="text-card-spaced">
  I never understood Fifty Shades of Gray - there are at least thousands in RGB
  color space.
</div>

<div class="text-card-spaced">
  Paradoxically, taking computer organisation has made my computer less
  organized; there's stacks and heaps of files everywhere now!
</div>
```

![screenshot of margin + border + padding + content areas example with margin collapsing, with margin 50px;](images/margin-collapse.png)

Note that the visual distance between the two cards is the same as our previous example, even though we've changed the `margin-bottom: 50px;` to `margin: 50px;`!

### Padding vs. Margin

Often times, you'll want to add some space to your website. You now have two great options in your toolkit: `padding` and `margin`. But, which should you pick?

If you wanted a one-liner, it would look something like this:

> Padding creates space inside an element, while margin creates space between elements.

## The `position` property

We have now discussed layout and spacing, but how do we determine the position of an element? It turns out, there will be many different ways to do so, but one of the earliest ways to do so was with the `position` property. It has five values:

- `static` (the default)
- `relative`
- `fixed`
- `absolute`
- `sticky`

Everything so far we have discussed is what happens when you set `position:static`; elements appear one after another, known as the "normal" flow.

The other `position` values change what the properties `top`, `right`, `bottom`, and `left` do - things we haven't discussed yet. Let's discuss them now!

Each of those properties are an _offset property_, in that they tell the browser how far from the "offset" to place the new content area: for example,

```css
.some-element {
  top: 30px;
  left: 45px;
}
```

Would place that element 30 pixels from the top, and 45 from the left of its reference point.

But what is the reference point? That's what each of `relative`, `fixed`, and `absolute` describe:

- `relative`: the reference point is where the content area would be normally, i.e. before using `top`, `right`, `bottom`, and `left`. In our example, this would shift our element 30 pixels down, and 45 to the right.
- `fixed`: the reference point is the **viewport**, which is a fancy name for the edge of the browser. In our example, our element would be 30 pixels down and 45 to the right of the top-left corner of the screen, and it'll stay there **even when we scroll**.
- `absolute`: the reference point is the first parent that has `position` not equal to `static` (choosing the entire document if needed). In our example, our element would be 30 pixels down and 45 to the right of the top-left corner of the top of the page, and will move away as we scroll.

These are harder to demonstrate with screenshots, so we recommend that you visit [this W3Schools Demo](https://www.w3schools.com/css/css_positioning.asp) for more information!

Okay, and what about `position: sticky`? This one is a bit more complicated, and depends on the scroll position of the website. From a high level,

- by default, we treat it as `postion: relative`
- if the user has "scrolled past" where the element is on the website, it then becomes `position: fixed`

Why would we want this property? It turns out, it's very useful in creating navigation bars and table headers - something you'll probably do as a web developer at some point.

You can see a demo and more information on the [MDN Page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning).

### A quick aside on `z-index`

If you're thinking carefully, you might have the question: what happens when two elements overlap? What chooses what goes on top of what?

The answer is the `z-index` property, which we don't have too much time to go in-depth in the presentation. The very short answer is that if you think of the webpage as being governed by the x-axis and the y-axis, the natural "z-axis" would point at you, coming out of the monitor. By setting the `z-index` property, we can dictate the position of elements along this "z-axis". For example, an element with `z-index: 999` is "closer to you" than an element with `z-index: 100`, so it'll be on top. By default, elements have `z-index: 0`.

You should read more about `z-index`; the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) is pretty manageable.

## The `float` property

The `float` property is another CSS property that specifies position. It is used very frequently with objects appearing in the middle of text, like an image. If you've ever struggled with putting an image in-line with text in Microsoft Word or Google Docs, this is for you!

```css
.float-left {
  float: left;
  background: red;
}

.float-right {
  float: right;
  background: blue;
}
```

```html
<div>
  <div class="float-left">float left!</div>
  <div class="float-right">float right!</div>
  <p>
    You know, balloons tend to keep my spirits up. You know, balloons tend to
    keep my spirits up. You know, balloons tend to keep my spirits up. You know,
    balloons tend to keep my spirits up. You know, balloons tend to keep my
    spirits up.
  </p>
</div>
```

![screenshot comparing float left and float right](images/float.png)

Note how the text wraps around to content not filled by each float - the object is placed "in the middle" of the text, so to speak.

At the end of the day, there's quite a bit more to floats (for example, you often have to use clearfixes or the `clear` property). However, we won't spend too much time on them, as floats are used less and less for layouts in favour of solutions like Flexbox or CSS Grid, both of which we'll cover as well!

Checkout a linked writeup [here](https://github.com/uclaacm/learning-lab-crash-course-su20/tree/main/04-flexbox-grid) for some more info on what Flexbox and Grid is all about!

## Conclusion

We learned quite a few things in this lesson:

- what HTML and CSS are, and what they're used for
- the syntax for an HTML tag
- different types of HTML tags (`h1-6`, `p`, `a`, `img`, `header`, `footer`, etc.)
- how to use properties of HTML elements (e.g. `src` for `img`)
- how to use inline styling for CSS
- several basic CSS declarations: `color`, `background-color`, `font-size`, `font-weight`, `text-align`
- creating CSS classes in a stylesheet, and the `class` property
- The CSS Box Model and position properties
- Flexbox Model And Grid
