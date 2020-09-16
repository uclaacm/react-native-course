# Lesson 1: Welcome & Course Overview

In this lesson, we'll walk you through what you'll be learning in the course, why it's useful, and get a brief taste of what's to come!

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

## How will this class work?

Our class is more **project-based** and **hands-on** and less *theoretical* or *lecture-styled*. That means a few things: during lectures, we'll spend much more time live-coding (and hope that you'll do it with us); instead of reading textbooks or long notes on JS or app development, we'll focus on you learning things by *you practicing those things*. That does mean that, in order to get the most out of this course, **you do need to practice**. Hopefully, you'll enjoy practicing with us!

It also means that a lot of the concepts we'll cover at the beginning of the course might be confusing, which is totally okay! Trust us, when we first learned these things, we felt the exact same way. Over time, we'll work with you to conquer these scary concepts and make you a web and mobile app development master!

This class is supposed to be fun and low-stress! That means: **no grading**, **no mandatory homework**, and **time to work on your projects in-class**. We'll provide lots of optional resources to guide you on your journey: extra videos, optional homework, and next steps, but only put in how much time you can!

All of our class resources will be posted in this GitHub repository (except live recordings, which we're not allowed to post). You can always send us an email (at [acmteachla@gmail.com](mailto:acmteachla@gmail.com)) if something is missing, wrong, or if you're confused!

## Why are we learning ____?

As a note, this section is a bit more in-depth on technology and curriculum than we expect from students. Don't worry about it if these things don't make sense to you!

### Why JavaScript

### Why Mobile & Web App Development

### Why React & React Native & Expo?

We chose the React + React Native + Expo stack for a few reasons:

* **instant feedback**: compared to other app development methods that require lots of tooling and compile times (e.g. native Swift, native Java, Koitlin), our stack lets see students **see changes instantly**. We think this is really important in connecting the code to the product!
* **cross-platform**: we don't have to worry about the hardware the students have: iOS, Android, or no phone, everybody can participate!
* **broad applications**: choosing a web-focused stack gives us the opportunity to provide both web and mobile development opportunities!
* **course familiarity**: students have already explored JavaScript from APCSP standards. Compare this to Flutter/native iOS/native Android that all require different languages (Dart/Swift/Java)!

## Course Philosophy and Overview (10 mins)


* One incredibly important thing to keep in mind is that thinking programmatically (That is, being able to translate your thoughts into code) is super difficult at first,
and you can't expect yourself to be able to do it right away. If you get discouraged at any point, try to remember how impressive what you're doing is.
You're unlocking an entirelly new way of thinking that'll let you do things that very, very few people can, and even if you don't end up being a programmer professionally,
this is a skill that'll set you apart in nearly any field you can think of. It'll take a lot of hard work, but I promise you that it's worth it.

## Polls (5 mins)
* Previous experience coding
* Projects that kids would be interested in
* Preliminary questions, concerns

## Course Outline (10-15 mins)

* (Syllabus reading, sorry)

https://docs.google.com/document/d/1c1tZGzy3m9kLpzrR6sEkx4MDKSrUbYDiub1x_Hyy8yk/edit?usp=sharing

## Expo set-up (20 mins)

* Snack is an incredible system that allows you to write code and then it immediately updates on your phone. In the byegone days, this would take way, way more time.

(Provide tech support)

1. Go to snack.expo.io
2. Click upper right silhouette
3. login->sign up
4. create account
5. Snacks -> new Snack

6. Download Expo Client on your phone
7. Scan QR code. Alternatively sign in with your account and select your project.
8. In the text tag, write 'Hello World!' or some message of your choice.
```
return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
```
**Congratulations, you just made your first app!**
* If kids finish early they can mess around until everybody gets caught up.

## Asset Demo (if time allows)

1. download a picture from internet
2. drag it into editor and 'assets' folder
3. Click on components/AssetExample.js
4. Change ```<Image style={styles.logo} source={require('../assets/snack-icon.png')} />``` to ```<Image style={styles.logo} source={require('../assets/myImage.png')} />```

**Wow, that picture's on your phone!**

## Conclusion (2 mins)

* Thanks for coming to class, super excited, React is a super cool technology that'll let you make some professional apps very quickly and easily.
* Next week, we'll be looking at what we wrote today actually works (via HTML and CSS)
