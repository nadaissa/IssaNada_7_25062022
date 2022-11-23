# Project n°7 (version before the 28th of september 2022) - Groupomania  - OpenClassrooms courses

:globe_with_meridians: Create a test version for a private :closed_lock_with_key: social media website (client: Groupomania)

## Project targets
:unlock: Authentificate a user and maintain their connection untill logout :white_check_mark:

:bookmark_tabs: :key: Implement a secure data storing system using a database :white_check_mark:

:iphone: Developp the website interface using a front-end framework :white_check_mark:

## Expected operations and features

### Connection pages:
:busts_in_silhouette: Create a user account with minimum info :white_check_mark:
:unlock: Login with an email and a password :white_check_mark:
:lock: Possibility to logout :white_check_mark:
:key: Connection data must be secure :white_check_mark:

### Feed page:
:page_facing_up: List of the posts created by users :white_check_mark:
:arrow_down: Reverse chronological order listing :white_check_mark:

### Share operation:
:pencil2: Create a post with text and/or image :white_check_mark:
:pencil:  Modify a post (by creator or admin) :white_check_mark:
:x: Delete a post (by creator or admin) :white_check_mark:
:+1: Like a post (only once) :white_check_mark:

### Admin account:
:passport_control: Admin must be able to modify/delete all posts :white_check_mark:

## User guide: :clipboard:

### Install Node js [if it's already installed make sure the version you have is compatible with React Js v18.0]
### Clone this repo [ https://github.com/nadaissa/IssaNada_7_25062022.git ]

#### Project dependencies:
- Back-end:
bcrypt, cors, dotenv, email-validator, express, express-rate-limit, fs, helmet, jsonwebtoken, multer, mysql, mysql2, nodemon, password-validator, sequelize, sequelize-cli.

- Front-end:
axios, js-cookie, moment, node-sass, prop-types, react, react-dom, react-lazy-load-image-component, react-router, react-router-dom, react-scripts

### Install and setup your database - this project was conceived with MySQL (see the official MySQL documentation for installation and you can use MySQL Workbench to an easier management of your DB)
- The database contains 3 principle tables:
:pushpin: users: id, email, password, firstName, lastName, bio, picture, admin, createdAt, updatedAt
:pushpin: posts: id, userId, postContent, postMedia, createdAt, updatedAt 
:pushpin: likes: id, postId, userId, createdAt, updatesAt 

- the ORM used to manage the API connection with the DB is Sequelize [ see below to transfer the models of the DB]

### From within the back-end folder provided 

1- Inside the main folder create an "images" folder

2- Inside the main folder create an ".env" file and define the environnement variables:

- DB_USERNAME: "your database username"
- DB_PASSWORD:"your database password"
- DB_NAME_DEV: "your database name in dev mode"
- DB_NAME_TEST: "your database name in test mode" (if necessary)
- DB_NAME_PROD: "your database name in test mode" (if necessary)
- SECRET_TOKEN: "your database password generated secret token"

3- Run  `yarn add`

5- Run `yarn sequelize-cli db:migrate`

4- Run `node server` or `nodemon server` 

**Note: the server port depends on the sequelize db configurantion file, the alternative back-end port is '3001'



### From within the front-end folder provided
1- Run `yarn add`

2- Install React

3- Follow these front-end readme file instructions:


#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### Available Scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
