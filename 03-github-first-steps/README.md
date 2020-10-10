# First Steps w/ GitHub

* [What is GitHub? Why are we using it?](#what-is-github-why-are-we-using-it)
* [Creating a GitHub Account](#creating-a-github-account)
* [Creating a GitHub Repository](#creating-a-github-repository)
* [Committing and Uploading Files](#committing-and-uploading-files)
* [Enabling GitHub Pages!](#enabling-github-pages)
* [Conclusion](#conclusion)

## What is GitHub? Why are we using it?
Github is many things. Let's write out some of the different things that describe it. In doing so we'll get a clearer understanding of why it's so useful from a software viewpoint.

**Github is a place to store files.**

Specifically Github is often used to store files with code in them. Think `.js`, `.html`, and `.css` files, all things you've worked with before!
But if that's all Github does, why don't we just opt for another platform to store our files? Why can't we just upload all our code files to Google Drive?

**Github/git offers version control**

Good question! Github is very similar to Google Drive, but it has the added benefit of tracking history. Think of uploading a a photo to Google Drive, you'll know who modified the image and at what time. With code, however, we need our history to be more *granular*. It's not enough to know when a file changed, programmers want to know when specific lines change and who changed those lines (think of how easy it was to break your html by just omitting a closing bracket). 

This detail also allows programmers to create a rich history about the creation of their code: if Evan updates lines 3 through 10 on a carrot-cake.js on Matt's birthday at 10:00 a.m. Pacific Time, a programmer 20 years down the line can see that specific update Evan wrote. We call this creation of history through small updates (or *commits* in Github jargon) version control.

**Github is a place to collaborate**

With Github's rich history it is easy for multiple programmers to collaborate on a single project at the same time. Think of a Google Doc, where multiple people can work on writing a different parts of a report at the same time. Github lets programmers do a very similar thing, but it's even more powerful.

Evan and Matt can be working on different parts of a `.js` file at the same time (much like our Google Doc example) but Evan could we working on a *different version* than Matt. If you want, you can think of these different versions as parallel timelines in separate (alternate) universes. Does this mean Github lets us be time travelers?! Sort of. 

Evan can work on a certain feature in his timeline (such as cleaning up a bug he made in a previous commit), while Matt works on a different feature (like creating a cool new online code editor). When they're both done, they can combine those two parallel timelines together back into our current timeline (more jargon here that you can ignore if you just want the bigger picture: in Git we usually call parallel timelines *branches*, and the combination of parallel timelines *merges*).

In conclusion: Github let's us track a rich history of the development of code, and it lets us become time travelers!

## Creating a GitHub Account
To create a Github account you'll need an email address you can log in to, a secure password you'll remember and a creative username!
![github account creation](images/create-account.png)

Once you've created an account select the options that best describe you in the welcome flow
![Select student because you are a student](images/welcome-1.png)
![Select Create a Website with Github Pages](images/welcome-2.png)

Github will prompt you to confirm your email, which you should do now.

## Creating a GitHub Repository
We now need to create a *Repository*. Think of a repository as analogous to a Google Drive folder, but with the added benefit of version control like we said before. Put simply, Github will track the history of your files, which includes information about who updated which files at what time, and what content they added or deleted.

Let's make a repository. Click on the `Create a repository` button on the left-hand side
![Create a new repository](images/create-repo-1.png)

This part is important: name your new repository `YOUR_USER_NAME.github.io`
This special name signals to Github that you plan to use this repository to host your account's Github pages, which we'll talk about later.
![Name your new repository](images/create-repo-2.png)

We now have to fiddle around with the settings a bit to enable Github pages.
Navigate to the settings tab from your homepage:
![Find the settings tab](images/settings-1.png)

Find the section titled: `Github Pages`. In the dropdown menu in that section, select the `main` option
![Switch to the main branch](images/settings-2.png)

Wait a few minutes then navigate to `https://YOUR_USER_NAME.github.io`. (For example, mine would be: https://git-gud-at-github.github.io/index.html)
You'll be able to see your own webpage live on the internet! Any computer can navigate to your specific url and find your website.

## Committing and Uploading Files

## Enabling GitHub Pages!

## Conclusion
