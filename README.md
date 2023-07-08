
# ENDORSE PLUS <!-- omit from toc -->

<kbd>[<img src="docs/logo.png" alt="Endorse Plus logo" title="Endorse Plus Live Site" width="200"/>](https://endorse-plus.herokuapp.com/)</kbd>


**Developer:** [**Khubab Shamsuddin**](https://www.linkedin.com/in/kshamse/)

[**Live Site URL**](https://endorse-plus.herokuapp.com/)

![Endorse Plus multi-screens](docs/amiresponsive.PNG)

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Goals](#goals)
- [User Stories](#user-stories)
- [Design](#design)
  - [Colours and Fonts](#colours-and-fonts)
  - [Mockups](#mockups)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Libraries](#libraries)
  - [Other Software and Tools](#other-software-and-tools)
- [Implementation](#implementation)
  - [Front-End](#front-end)
  - [Back-End API](#back-end-api)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Validation](#validation)
- [Testing](#testing)
- [Configurations](#configurations)
- [Credit](#credit)


# Overview
Endorse Plus is a platform where professionals can provide evidence-based recommendations and endorsements to each other. Everyone can request recommendations privately. Users can boost recommendations on each other's profiles to increase the authenticity level of the endorsement. Endorse Plus is a site where professionals can know more about each other skills and potential.

[*Back to Top*](#table-of-contents)
<hr>

# Goals

## User's Goals <!-- omit from toc -->

1. Exchange recommendations based on work-based qualities and skills. 
2. Support and promote current or previous colleagues by sending and boosting recommendations.
3. Search for new talented professionals who are endorsed and boosted.

## Site Onwer's Goals <!-- omit from toc -->

1. Build a platform that fosters support and promotion.
2. Develop a site with straightforward use and considerable impact. 


[*Back to Top*](#table-of-contents)
<hr>

# User Stories

## Anonymous User <!-- omit from toc -->

1. I can create an account so that I can request, send, and receive recommendations. (Must Have)
2. I can sign in to my account so that I can manage my requests and recommendation. (Must Have)
3. I can see the top-endorsed profiles so that I can get to know trending profiles. (Should Have)

## Logged-in User <!-- omit from toc -->

4.  I can create a recommendation so that I help other users gain professional endorsements. (Must Have)
5. I can access all recommendations so that I can update or delete sent recommendations or locate and read others' recommendations. (Must Have)
6. I can update a recommendation so that I can add or remove information. (Must Have)
7. I can feature a received recommendation so that it appears on top of my profile. (Could Have)
8. I can boost or un-boost others' recommendations so that I can affect the authenticity of a recommendation. (Must Have)
9.  I can delete a recommendation so that I pull back a given recommendation. (Must Have)
10. I can access boosted recommendations so that I can go back to them. (Should Have)
11. I can request others to recommend me so that I could gain more professional endorsements. (Must Have)
12. I can read the received requests and the ones I sent so that I could recommend others and expect others to recommend me based on my requests. (Must Have)
13. I can withdraw sent requests so that I pull back my request whenever I want. (Could Have)
14. I can update my profile data so that I will have my latest work information on it. (Must Have)

[*Back to Top*](#table-of-contents)
<hr>

# Design

## Colours and Fonts

- The used colours and fonts on this site reflect the professional theme and provide the required contrast and clarity.

<details>
  <summary>Colours</summary>

![Colours](docs/colours.png)
</details>

<details>
  <summary>Fonts</summary>

![Lora: Headers & Menus](docs/lora-font.PNG)
![Volkorn: Main Content](docs/volkorn-font.PNG)
</details>

## Mockups

<details>
  <summary>Home Page</summary>

![Home Page](docs/mockups/home.png)
</details>

<details>
  <summary>Boosted Page</summary>

![Boosted Page](docs/mockups/boosted.png)
</details>

<details>
  <summary>Requests Page</summary>

![Requests Page](docs/mockups/requests.png)
</details>

[*Back to Top*](#table-of-contents)
<hr>

# Technologies Used

## Languages

- HTML 
- CSS
- Javascript
  
## Libraries

- [React](https://react.dev/) is used for building user interfaces as components and controlling the platform's business logic and handling users' actions.
- [Axios](https://www.npmjs.com/package/axios) is used to send various types of API queries to the backend server.
- [React Router](https://www.npmjs.com/package/react-router-dom) is used to implement a single-page application, handling navigation through the platform without needing to refresh the page.
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/getting-started/introduction/) is used to enhance user interface responsiveness and styles.
- [React JWT Decode](https://www.npmjs.com/package/jwt-decode) is used to decode the authentication refresh token and stop the application from making unnecessary API requests.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) is used to load recommendations and requests automatically on user scrolling action.

## Other Software and Tools

- [Visual Studio Code](https://code.visualstudio.com/) was used as a code editor to develop this project.
- [Gitpod](https://gitpod.io/) was used as an online development environment to develop and test this project.
- [Github](https://github.com/) was used to store the code of this project.
- [Heroku](https://www.heroku.com/) was used for the deployment of this platform's live site. 
- [Chrome dev tools](https://developer.chrome.com/docs/devtools/) were used to test and debug the code of the site. 
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) was used to test the site based on best practice aspects.
- [W3C Validator](https://validator.w3.org/) was used to validate HTML code.
- [Jigsaw Validator](https://jigsaw.w3.org/css-validator/) was used to validate CSS code.
- [Wave](https://wave.webaim.org/) was used to validate accessibility.
- [Mockitt](https://mockitt.wondershare.com/) was used to create the sites' mockups.
- [Am I Responsive](https://ui.dev/amiresponsive) was used to generate multiple screen views of the site.
- [Google Fonts](https://fonts.google.com/) was used to import sites' fonts.
- [Font Awesome](https://fontawesome.com/) was used to import the icons on this site.
- [Canva](https://www.canva.com/) was used to create the logo and colours palette of this site.
- [Freepik](https://www.freepik.com/) was used to download the users' profile photos and error page icons. 
- [Favicon Converter](https://favicon.io/favicon-converter) was used to convert the created logo image to a favicon.
- [QuillBot](https://quillbot.com/) was used to check the grammar of the readme file.
- [Google Translate](https://translate.google.com/) was used to find translations needed for the readme file.
- [Grammarly](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) was used to check the grammar of the readme file on VS Code.
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) was used to generate the table of contents and organise the readme file on VS Code.
- [Glean](https://marketplace.visualstudio.com/items?itemName=wix.glean) was used to extract React components to separate files.
- [VS Code ES7+ React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) were used mainly to shortcut the creation of the functional components.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) was used to format and organise the JSX code and files.
  
[*Back to Top*](#table-of-contents)
<hr>

# Implementation
## Front-End
## Back-End API

[*Back to Top*](#table-of-contents)
<hr>

# Features
## Existing Features
## Features Left to Implement

[*Back to Top*](#table-of-contents)
<hr>

# Validation

[*Back to Top*](#table-of-contents)
<hr>

# Testing

[*Back to Top*](#table-of-contents)
<hr>

# Configurations

[*Back to Top*](#table-of-contents)
<hr>

# Credit

[*Back to Top*](#table-of-contents)
<hr>