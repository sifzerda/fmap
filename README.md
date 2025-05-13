# Fiction Map

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Description ](#description)
- [Badges ](#badges)
- [Visuals ](#visuals)
- [Installation ](#installation)
- [Usage ](#usage)
- [Tech](#tech)
- [Support ](#support)
- [Contributing ](#contributing)
- [Authors and Acknowledgment ](#authors-and-acknowledgment)
- [License ](#license)
- [Project Status ](#project-status)
- [To Do ](#to-do)

# Description <a name="description"></a>

A fullstack MERN blog. My blog provides an in-depth guide on fiction and narrative writing. It runs front-end in React, on an Express server, with Node.js. There are 25+ pages each covering a separate topic on writing, including plot, dialogue, characters, conflict, theme, settings, etc. The back-end has a Mongodb database, and graphql queries, and enables user registration for basic account access, user authentication by JWT. Users can leave comments on each page, and contact me via a working contact form on the contact page (to do).

This is a personal project that has been probably 10 or so years in the making, including accumulation of 113,000 words worth of writing advice from various published sources, as well as the piles of fiction I've read. Examples are also sourced from non-fiction which uses narrative-style writing.

The aim was to create a comprehensive guide for fiction-writing, compiling all the good advice I've found in various helpful how-to-write guides all in one single place. It includes advice on fiction-writing, screenwriting, and even improv acting guides.

It cites professional advice, techniques, and examples. The guide assumes the user knows nothing about fiction-writing and explains concepts in depth. 

# Badges <a name="badges"></a>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![NPM](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white) 
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql) 
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) 
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-538DD7.svg?style=for-the-badge&logo=Font-Awesome&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

# Visuals <a name="visuals"></a>

![screenshot](https://github.com/user-attachments/assets/f88a64b6-5f3c-4e1f-a250-0ac4eb3a823a)

Link to app deployed on Heroku:

https://fiction-map-d72538a215a2.herokuapp.com/

# Installation <a name="installation"></a>

CODE EDITOR TERMINAL:

- npm install i
- npm run start or develop

# Usage <a name="usage"></a>

User authentication with JWTs allow users to create an account, which stores user posts ('thoughts') on subjects. Each page displays a separate comment list. The user profile page shows a user's posts.

Registered users are welcome to leave comments, criticism, and feedback on the pages. I appreciate your feedback or comments if any part of the site has been helpful to your writing.

# Tech <a name="tech"></a>

- React Router: SPA with page router
- Apollo: DB queries on user and comments
- MongoDB: stores user accounts and comments
- zustand: store dynamically managing footnote assignment

## Footnotes

New Footnotes can be added by pasting: 

```bash
<FootnoteRef text="Author, Title." />
```

Right after a reference/quote (no space) and filling in the full citation. Paste before </ p>  to preserve formatting.

# Support <a name="support"></a>

For support, users can contact tydamon@hotmail.com. Links to my github and the app repo are also in the footer of the blog.

# Contributing <a name="contributing"></a>

Any contributions you make are greatly appreciated. 

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/NewFeature)
3.	Commit your Changes (git commit -m 'Add some NewFeature')
4.	Push to the Branch (git push origin feature/NewFeature)
5.	Open a Pull Request

Contributors can also help provide writing tips or techniques, or anything not covered. Email me with writing tips and I will add these to the site, and attribute to you. You can also sign up for a user account and leave your feedback as comments.

# Authors and Acknowledgment <a name="authors-and-acknowledgment"></a>

The author acknowledges and credits those who have contributed to this project, including:

-   Refer to references page on app for list of writing materials referred to throughout site pages.

# License <a name="license"></a>

Distributed under the MIT License. See LICENSE.txt for more information.

# Project Status <a name="project-status"></a>

This project is substantially complete, with minor formalization and addition of content that still needs to be done throughout site.

# To Do <a name="to-do"></a>

- [x] User accounts
- [x] Commenting on each page
- [x] Footnotes
- [x] Put Hero's Journey into separate page accessible via Story
- [x] Make Thought model, link to User model
- [x] User Account page with list of all comments user made
- [ ] ~~There may have to be models for each chapter/subject, to attach thoughts to that page (and not spawn every post)~~
- [ ] ~~A web3form contact page (pull from react challenge)~~
- [ ] ~~Go through source word .doc, find all review comments, insert these as cross-hyperlinks to page paragraphs~~
- [ ] Fix up reference page, grab all footnotes
- [ ] Give each subject page a proper image banner, remove post title 'continue reading' stuff:
    - [x] story
    - [x] premise
    - [x] plot
    - [x] themes
    - [x] conflict
    - [ ] scenes
    - [x] main characters
    - [x] secondary characters
    - [x] setting
    - [ ] subtext 
    - [ ] description
    - [ ] dialogue
    - [ ] suspense
    - [ ] pov
    - [ ] voice
    - [x] antagonists
    - [ ] the first words
    - [ ] the next words
    - [ ] the last words
    - [ ] writing devices
    - [ ] writing block
    - [ ] editing
    - [ ] title 
    - [ ] logline
    - [ ] synopsis
- [x] Fix up main nav tab pages: Portfolio page, contact page, about, etc.
- [ ] fill in About summary cards for each chapter
    - [x] story
    - [x] premise
    - [x] plot
    - [ ] themes
    - [ ] conflict
    - [ ] scenes
    - [ ] main characters
    - [ ] secondary characters
    - [x] setting
    - [ ] subtext 
    - [ ] description
    - [ ] dialogue
    - [ ] suspense
    - [ ] pov
    - [ ] voice
    - [ ] antagonists
    - [ ] the first words
    - [ ] the next words
    - [ ] the last words
    - [ ] writing devices
    - [x] writing block
    - [x] editing
    - [x] title 
    - [x] logline
    - [x] synopsis
- [x] change bs-light gold boxes to 'custom light box' (pale yellow)
- [ ] either move footnotes below thought section, or shift footnotes into tooltips which display on ft# hover
- [ ] make sure contact page works. Can maybe use the same program as used to send demo bookings in next.js site
- add quotes for each chapter:
    - [x] story
    - [x] premise
    - [x] plot
    - [x] themes
    - [x] conflict
    - [ ] scenes
    - [x] main characters
    - [x] secondary characters
    - [x] setting
    - [ ] subtext 
    - [x] description
    - [x] dialogue
    - [x] suspense
    - [x] pov
    - [x] voice
    - [x] antagonists
    - [ ] the first words
    - [x] the next words
    - [x] the last words
    - [ ] writing devices
    - [x] writing block
    - [x] editing
    - [x] title 
    - [ ] logline
    - [ ] synopsis

- [ ] change the <link rel="icon" type="image/svg+xml" href="/vite.svg" /> inside index.html 

- [ ] there's a roy peter clark reference under conflict chapter -- look in original word doc to see what it is

- [ ] remove the blue footnotes sections out of each chapter

- [ ] style the footnotes with black tooltip styling

- [x] style the under the volcano part in scenes like the nexus stuff (with footnotes)

### LATER:
- [ ] when page flexes in, the 'about' 'index' and 'also see' parts are pushed to the bottom of page. they need to be pushed to the top under the image banner.

- [ ] figure out how to work out the subjects href list when page flexed narrow or on mobile phone. Can it be pushed  to center (otherwise remaining the same, clicking to open)

- [ ] up to footnotes: setting, story, the first words, the last words, the last words, title, 

Changes:

- removed padding-top: 40px for div justify center (footer) /
- removed zerda author attribution /
- removed disabled newer button /
- changed banner image html and added banner images
- filled in elsewhere box to say Also see with 3 links
- changed img location from public to assets /
- removed spare portfolio and profile and other navs /
- removed sidebar comp and subjects comp /
- removed superfluous package json installations /
- filled about section summaries
- removed extra router links from main and app.jsx /
- Made footnotes a dynamic context (see components)
