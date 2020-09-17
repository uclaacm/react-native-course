# Lesson 1: Welcome & Course Overview

In this lesson, we'll walk you through what you'll be learning in the course, why it's useful, and get a brief taste of what's to come!

* [What's the point of this class?](#whats-the-point-of-this-class)
  * [A note on thinking programatically](#a-note-on-thinking-programatically)
* [How will this class work?](#how-will-this-class-work)
* [Why are we learning ____?](#why-are-we-learning-____)
  * [Why JavaScript](#why-javascript)
  * [Why Mobile &amp; Web App Development](#why-mobile--web-app-development)
  * [Why React &amp; React Native &amp; Expo?](#why-react--react-native--expo)
  * [Why GitHub?](#why-github)
* [The Demo!](#the-demo)
  * [Using Snack &amp; Expo](#using-snack--expo)
  * [Asset Demo (if time allows)](#asset-demo-if-time-allows)
* [Conclusion](#conclusion)

## What's the point of this class?

Very broadly, this class is about **helping you**. We're really passionate about helping students - beyond just teaching you about React Native, or mobile app development, or whatever. If you have any questions about anything, please please please ask us!

Slightly more narrowly, we want you to come away with a few skills:

* **problem solving**: how can we break down large problems into small, easy problems? How can we use computers to help us do this?
* **programming fundamentals**: how can we use JavaScript to tell computers to do things for us? Beyond JS, what are common ways to communicate with computers?
* **practice with real-world development**: how do people write code in real-life? how do things like collaboration work with code?

More narrowly, our class's curriculum is focused on teaching you a few core technologies:

* **HTML** - the language that defines the structure of websites
* **CSS** - the language that defines the look and layout of websites
* **JavaScript (JS)** - the programming language that makes websites *interactive*; we'll use JavaScript heavily!
* **React + React Native + Expo** - a set of programming libraries that make mobile app developmentvery easy. React Native uses JavaScript!
* **GitHub** - a service based on a technology (git) that helps you keep track of your code and show it off to other people!

By the end of the class, our goal is to have you walk away with **real projects**. At the end of the year, we're aiming for you to have created:

* a personal website
* a BuzzFeed-style quiz
* a data visualisation app
* your own, completely new app!

Wow, that was a lot of bullet points. If you have any more questions, feel free to ask us; we'll also have a more formal course outline in a bit.

### A note on thinking programatically

One incredibly important thing to keep in mind is that thinking programmatically (That is, being able to translate your thoughts into code) is super difficult at first,
and you can't expect yourself to be able to do it right away. If you get discouraged at any point, try to remember how impressive what you're doing is.
You're unlocking an entirelly new way of thinking that'll let you do things that very, very few people can, and even if you don't end up being a programmer professionally,
this is a skill that'll set you apart in nearly any field you can think of. It'll take a lot of hard work, but I promise you that it's worth it.

## How will this class work?

Our class is more **project-based** and **hands-on** and less *theoretical* or *lecture-styled*. That means a few things: during lectures, we'll spend much more time live-coding (and hope that you'll do it with us); instead of reading textbooks or long notes on JS or app development, we'll focus on you learning things by *you practicing those things*. That does mean that, in order to get the most out of this course, **you do need to practice**. Hopefully, you'll enjoy practicing with us!

It also means that a lot of the concepts we'll cover at the beginning of the course might be confusing, which is totally okay! Trust us, when we first learned these things, we felt the exact same way. Over time, we'll work with you to conquer these scary concepts and make you a web and mobile app development master!

This class is supposed to be fun and low-stress! That means: **no grading**, **no mandatory homework**, and **time to work on your projects in-class**. We'll provide lots of optional resources to guide you on your journey: extra videos, optional homework, and next steps, but only put in how much time you can!

All of our class resources will be posted in this GitHub repository (except live recordings, which we're not allowed to post). You can always send us an email (at [acmteachla@gmail.com](mailto:acmteachla@gmail.com)) if something is missing, wrong, or if you're confused!

## Why are we learning ____?

As a note, this section is a bit more in-depth on technology and curriculum than we expect from students. Don't worry about it if these things don't make sense to you!

### Why JavaScript

Two, brief reasons:

1. JavaScript is a very popular language: it underpins the entire internet, and can be used for many different things (frontends, servers, games, apps, scripts, etc.)
2. JavaScript is part of the existing APCSP curriculum in schools that we work with

There are many problems with JavaScript too - but don't worry, we'll still have a good time.

### Why Mobile & Web App Development

Simply put, mobile & web application development is an **impactful** way for students to put their computer science skills to practice. Consider how revolutionary websites and apps like Facebook, Twitter, or Quora are - and all with their only infrastructure being code and servers.

Mobile and web app development are also **widely-applicable** skills: they're extremely hireable skills, and cross-disciplinary - everybody needs a website!

And finally, it's easy to learn. Unlike AI & ML, cryptography, or lower-level systems programming, web and mobile app development **require zero prior math experience** and **no understanding of computer architecture or complex computer systems**. This makes it a very accessible entrypoint into the wonderful world of software development.

### Why React & React Native & Expo?

We chose the React + React Native + Expo stack for a few reasons:

* **instant feedback**: compared to other app development methods that require lots of tooling and compile times (e.g. native Swift, native Java, Koitlin), our stack lets see students **see changes instantly**. We think this is really important in connecting the code to the product!
* **cross-platform**: we don't have to worry about the hardware the students have: iOS, Android, or no phone, everybody can participate!
* **broad applications**: choosing a web-focused stack gives us the opportunity to provide both web and mobile development opportunities!
* **course familiarity**: students have already explored JavaScript from APCSP standards. Compare this to Flutter/native iOS/native Android that all require different languages (Dart/Swift/Java)!

### Why GitHub?

Simply put, using version-control systems like `git` are a really important part of the software development. However, you don't often have an opportunity to learn how to use it in most CS classes; we're here to bridge the gap.

GitHub is one of the many `git` providers out there, but it's a personal favourite of the curriculum team. It also has lots of nifty features and integrations that make it useful for tasks in our class!

## The Demo!

### Using Snack & Expo

Snack and Expo form an incredible system that allows you to write code, and immediately see it on your browser or phone. Previously, this would take much more time and energy to do; but now, it's a piece of cake (or a snack)!

1. Go to snack.expo.io
2. Click the upper right silhouette
3. Go to login->sign up
4. Create an Account
5. Go to Snacks -> new Snack
6. Download Expo Client on your phone
7. Scan QR code; alternatively sign in with your account and select your project.
8. In the text tag, write 'Hello World!' or some message of your choice.

```jsx
return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello world!
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
```

**Congratulations, you just made your first change to an app!**

Spend a bit of time and mess around with what's in the `App.js` file - it is JavaScript (if you're familiar).

### Asset Demo (if time allows)

1. download a picture from internet
2. drag it into editor and `assets` folder
3. Click on `components/AssetExample.js`
4. Change ```<Image style={styles.logo} source={require('../assets/snack-icon.png')} />``` to ```<Image style={styles.logo} source={require('../assets/myImage.png')} />```

**Wow, that picture's on your phone!**

## Conclusion

Thank you for bearing with us here! We hope you better understand what this course is about, and the potential for how awesome making websites and apps can be!

Next week, we'll be starting to look at how to structure and style web pages with HTML and CSS. In the meantime, there's no homework or required readings; relax, focus on other classes, and live life - we'll see you soon!
