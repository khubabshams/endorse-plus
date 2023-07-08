
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
  - [Back-End](#back-end)
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

### React <!-- omit from toc -->

React is an open-source JavaScript library that is used for building user interfaces in a declarative and efficient way. It is a component-based front-end library responsible only for the view layer of an MVC (Model View Controller) architecture. React is used to create modular user interfaces and it promotes the development of reusable UI components that display dynamic data[*](https://www.geeksforgeeks.org/react-js-introduction-working/). React is well-known for it is reusability, flexibility, simplicity, ease of use, and available wide range of community support. Many components were developed and reused throughout this project.
- Top-endorsed Profiles `<RecommendationsListPage />`: developed and used on the home page in addition to displaying it in the user's profile
- User's Avatar `<Avatar />`: reusable component used inside recommendation, request, and profile pages.
- Warning Alert `<CustomAlert />`: is used within the site forms to provide the user with the feedback necessary.
- Loading spinner `<Loader />`: is displayed in several places while the loading of the page content.
- Error Message `<ErrorMessage />`: is used in error pages to display an image, navigation options, and appropriate messages.

## Back-End

The backend side of this platform was built using the Django Rest Framework. Linked with the Postgresql database to store the data and deployed on Heroku.
[**(Backend Code Repository)**](https://github.com/kshamse/endorse-plus-backend)

[*Back to Top*](#table-of-contents)
<hr>

# Features

## Existing Features

### Sign Up Form  <!-- omit from toc -->

- Developed to help users create accounts to access all the platform features.
- *User stories covered: 1*

<details>
  <summary>Screenshot</summary>

![Sign Up](docs/screenshots/signup.PNG)
</details>

### Sign In Form  <!-- omit from toc -->

- Users can use the sign-in page to access thier recommendations and request.
- Only logged-in users can create recommendations and requests and boost recommendations.
- *User stories covered: 2*

<details>
  <summary>Screenshot</summary>

![Sign In](docs/screenshots/signin.PNG)
</details>


### Top-Endorsed Profiles  <!-- omit from toc -->

- Users can see a list of the most recommended professionals' profiles on the home.
- *User stories covered: 3*

<details>
  <summary>Screenshot</summary>

![Top-Endorsed Profiles](docs/screenshots/home.PNG)
</details>

### Recommendation Form  <!-- omit from toc -->

- Users can recommend each other by visiting their profiles and clicking on the recommend user button.
- A recommendation form will be displayed to enter the content, recommended experience, and recommender relationship to the recommendee.
- On the recommendation edit or update the same form will be displayed with the previously entered values.
- *User stories covered: 4, 6*

<details>
  <summary>Screenshot</summary>

![Recommendation Form](docs/screenshots/recommendation-form.PNG)
</details>

### Home Page - Recommendations Page  <!-- omit from toc -->
- Includes received and sent recommendations. 
- Contains all recommendations for anonymous users.
- Users can boost or un-boost recommendations.
- Only recommendations owners can delete or update them.
- The recommendee or recommendation receiver can feature the recommendation so it could appear on the top of his/ her profile.
- *User stories covered: 5, 6, 7, 8, 9*

<details>
  <summary>Screenshot</summary>

![Home Page](docs/screenshots/home.png)
</details>


### Boosted Page  <!-- omit from toc -->
- Boosted page is like a journal of all recommendations boosted by the current user.
- Boosted page only appears for logged-in users.
- *User stories covered: 10*

<details>
  <summary>Screenshot</summary>

![Boosted Page](docs/screenshots/boosted.png)
</details>

### Request Form  <!-- omit from toc -->

- Users can request each other privately for a recommendation by visiting their profiles and clicking on the request user button.
- A request form will be displayed to enter the message.
- *User stories covered: 11*

<details>
  <summary>Screenshot</summary>

![Request Form](docs/screenshots/request-form.PNG)
</details>


### Requests Page  <!-- omit from toc -->
- Includes received and sent requests. 
- Only logged-in users can access their sent or received requests.
- The sender can only withdraw the request while the receiver can mark it as read or unread.
- *User stories covered: 12,13*

<details>
  <summary>Screenshot</summary>

![Requests Page](docs/screenshots/requests.png)
</details>


### Profile Page  <!-- omit from toc -->
- The profile page is the place where all the necessary information about the user is displayed.
- Users can update their name, summary, Linkedin profile link, and experiences.
- Users can see each other received or sent recommendations on the profile page.
- *User stories covered: 14*

<details>
  <summary>Screenshot</summary>

![Profile Page](docs/screenshots/profile.png)
</details>

## Features Left to Implement

- *Recommendation Badges* users can share a badge of a given recommendation on social or professional networks.
- *LinkedIn API Integration* users can sign up via Linkedin and all profile and experience data could be imported then.

[*Back to Top*](#table-of-contents)
<hr>

# Validation

## [Lighthouse](https://developers.google.com/web/tools/lighthouse/) <!-- omit from toc -->
The Lighthouse tool is used to validate performance, accessibility, SEO and best practice aspects of this site and it is generated reports were as follows:

<details>
  <summary>Home Page</summary>

![Home Page](docs/validators/lighthouse-home.PNG)
</details>

<details>
  <summary>Boosted Page</summary>

![Boosted Page](docs/validators/lighthouse-boosted.PNG)
</details>

<details>
  <summary>Requests Page</summary>

![Requests Page](docs/validators/lighthouse-requests.PNG)
</details>

<details>
  <summary>Profile Page</summary>

![Profile Page](docs/validators/lighthouse-profile.PNG)
</details>

<details>
  <summary>Recommendation Page</summary>

![Recommendation Page](docs/validators/lighthouse-recommendation.PNG)
</details>

<details>
  <summary>Request Page</summary>

![Request Page](docs/validators/lighthouse-request.PNG)
</details>

## [W3C Validator](https://validator.w3.org/) <!-- omit from toc -->
Nu HTML Checker of the W3 Organisation was used to validate the HTML code of this project and reports were as follows:

<details>
  <summary>Home Page</summary>

![Home Page](docs/validators/w3c-home.PNG)
</details>

<details>
  <summary>Boosted Page</summary>

![Boosted Page](docs/validators/w3c-boosted.PNG)
</details>

<details>
  <summary>Requests Page</summary>

![Requests Page](docs/validators/w3c-requests.PNG)
</details>

<details>
  <summary>Profile Page</summary>

![Profile Page](docs/validators/w3c-profile.PNG)
</details>

<details>
  <summary>Recommendation Page</summary>

![Recommendation Page](docs/validators/w3c-recommendation.PNG)
</details>

<details>
  <summary>Request Page</summary>

![Request Page](docs/validators/w3c-request.PNG)
</details>

## [Jigsaw Validator](https://jigsaw.w3.org/css-validator/)  <!-- omit from toc -->
The Jigsaw of the W3 Organisation was used to validate the CSS code and discovered issue was resolved.

<details>
  <summary>Home Page</summary>

![Home Page](docs/validators/jigsaw-home.PNG)
</details>

<details>
  <summary>Boosted Page</summary>

![Boosted Page](docs/validators/jigsaw-boosted.PNG)
</details>

<details>
  <summary>Requests Page</summary>

![Requests Page](docs/validators/jigsaw-requests.PNG)
</details>

<details>
  <summary>Profile Page</summary>

![Profile Page](docs/validators/jigsaw-profile.PNG)
</details>

<details>
  <summary>Recommendation Page</summary>

![Recommendation Page](docs/validators/jigsaw-recommendation.PNG)
</details>

<details>
  <summary>Request Page</summary>

![Request Page](docs/validators/jigsaw-request.PNG)
</details>

[*Back to Top*](#table-of-contents)
<hr>

# Testing

## Manual Testing  <!-- omit from toc -->

__1. I can create an account so that I can request, send, and receive recommendations__

| Step                                                                  | Expected Result                                                                                                                                                | Actual Result     |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Open https://endorse-plus.herokuapp.com/                              | `Home page` should be loaded.                                                                                                                                  | Works as expected |
| Click on the `Sign Up` link on the top navigation bar.                | `Sign Up Form` should be loaded.                                                                                                                               | Works as expected |
| User need to enter the username, password, and password confirmation. | User should be forwared to the `Sign In` page if the entry is successfully done otherwise warning will be displayed with the reason of the submittion failure. | Works as expected |


__2. I can sign in to my account so that I can manage my requests and recommendation__

| Step                                                                                | Expected Result                                                                                                                                             | Actual Result     |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Click on the `Sign In` link on the top navigation bar.                              | `Sign In Form` should be loaded.                                                                                                                            | Works as expected |
| User need to enter the username and password provided on the registeration process. | User should be forwared to the `Home` page if the entry is successfully done otherwise warning will be displayed with the reason of the submittion failure. | Works as expected |


__3. I can see the top-endorsed profiles so that I can get to know trending profiles__

| Step                                                | Expected Result                                                                                                                                                                  | Actual Result     |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Click on the `Home` link on the top navigation bar. | `Home page` should be loaded includes top endorsed profile on the right side (on desktops and tablets) or the top of the home page below the navigation bar (on mobile devices). | Works as expected |


__4.  I can create a recommendation so that I help other users gain professional endorsements__

| Step                                                                                                                                           | Expected Result                                                                 | Actual Result     |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------- |
| After signing in go to the user profile URL `https://endorse-plus.herokuapp.com/profiles/{profile_id}`.                                        | `Profile page` should be loaded.                                                | Works as expected |
| Click on the `Recommend User` button below the name of the user.                                                                               | `Recommendation Form` should loaded                                             | Works as expected |
| Enter the related experience need to recommend user for, and work relationship with the recommendee in addition to the recommendation content. | `Recommendation` should be submitted and user should be forwared to it is page. | Works as expected |


__5. I can access all recommendations so that I can update or delete sent recommendations or locate and read others' recommendations__

| Step                                                                                                    | Expected Result                                                                                                                            | Actual Result     |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| Click on the `Home` link on the top navigation bar.                                                     | `Home page` should be loaded includes tabs of sent and received recommendations if the user is logged in or all recommendations otherwise. | Works as expected |
| Users can click on `Delete` or `Edit` buttons on their sent recommendations or `Feature` received ones. | an Alert of delete confirmation in case of the deletion. `Recommendation Form` should loaded if edit button pushed.                        | Works as expected |


__6. I can update a recommendation so that I can add or remove information__

| Step                                                                                | Expected Result                                                                                           | Actual Result     |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------- |
| Click on the `Edit` button on the top right of the recommendation needed to update. | `Recommendation Form` should loaded                                                                       | Works as expected |
| Enter the new recommendation data needed to update or add.                          | `Recommendation` should be updated if the entry is successfull otherwise a warning message will be shown. | Works as expected |


__7. I can feature a received recommendation so that it appears on top of my profile__

| Step                                                                                      | Expected Result                                                                                                                                    | Actual Result     |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Click on the `Feature` button on the bottom left of the recommendation needed to feature. | Feature button should be shown as clicked. Featured recommendation should appear on the user profile on the top of other received recommendations. | Works as expected |


__8. I can boost or un-boost others' recommendations so that I can affect the authenticity of __a recommendation__

| Step                                                                                                           | Expected Result                                                                                             | Actual Result     |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------- |
| Click on the `Boost` or `Un Boost` buttons on the bottom left of the recommendation needed to update boost on. | Boost button should be updated as clicked or not. Boosted recommendation should appear on the boosted page. | Works as expected |


__9.  I can delete a recommendation so that I pull back a given recommendation__

| Step                                                                                  | Expected Result                                                                     | Actual Result     |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------- |
| Click on the `Delete` button on the top right of the recommendation needed to delete. | Confirmation alert should be shown.                                                 | Works as expected |
| Click on `OK` to confirm the recommendation deletion decision.                        | `Recommendation` should be deleted and user should be forwarded to the `Home Page`. | Works as expected |


__10. I can access boosted recommendations so that I can go back to them__

| Step                                                   | Expected Result                                                       | Actual Result     |
| ------------------------------------------------------ | --------------------------------------------------------------------- | ----------------- |
| Click on the `Boosted` link on the top navigation bar. | `Boosted page` should be loaded includes all boosted recommendations. | Works as expected |


__11. I can request others to recommend me so that I could gain more professional endorsements__

| Step                                                                                                    | Expected Result                                                          | Actual Result     |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------- |
| After signing in go to the user profile URL `https://endorse-plus.herokuapp.com/profiles/{profile_id}`. | `Profile page` should be loaded.                                         | Works as expected |
| Click on the `Request Recommendation` User button below the name of the user.                           | `Request Form` should loaded                                             | Works as expected |
| Enter the request message need to send.                                                                 | `Request` should be submitted and user should be forwared to it is page. | Works as expected |


__12. I can read the received requests and the ones I sent so that I could recommend others and expect others to recommend me based on my requests__

| Step                                                    | Expected Result                                                        | Actual Result     |
| ------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------- |
| Click on the `Requests` link on the top navigation bar. | `Requests page` should be loaded includes all boosted recommendations. | Works as expected |


__13. I can withdraw sent requests so that I pull back my request whenever I want__

| Step                                                                             | Expected Result                     | Actual Result     |
| -------------------------------------------------------------------------------- | ----------------------------------- | ----------------- |
| Click on the `Withdraw` button on the top right of the request needed to delete. | Confirmation alert should be shown. | Works as expected |
| Click on `OK` to confirm the request deletion decision.                          | `Request` should be deleted.        | Works as expected |


__14. I can update my profile data so that I will have my latest work information on it__

| Step                                                                                                    | Expected Result                                                                                                                               | Actual Result     |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Click on the `Avatar Image` link on the top navigation bar.                                             | `Profile page` should be loaded includes tabs of sent and received recommendations if the user is logged in or all recommendations otherwise. | Works as expected |
| Click on the `Edit` button near to the profile image.                                                   | `Profile Form` should loaded                                                                                                                  | Works as expected |
| Enter the new title, summary, linkedin profile link data or update the name and click on `Save` button. | `Profile` should be updated if the entry is successfull otherwise a warning message will be shown.                                            | Works as expected |


[*Back to Top*](#table-of-contents)
<hr>

# Configurations

[*Back to Top*](#table-of-contents)
<hr>

# Credit

[*Back to Top*](#table-of-contents)
<hr>