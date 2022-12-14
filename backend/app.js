//general imports
const express = require('express');
const path = require('path');

const helmet = require('helmet');
const cors = require('cors');

//importing api routers
const usersRoutes = require('./routes/users.router');
const postsRoutes = require('./routes/posts.router');
const likesRoutes = require('./routes/likes.router');

//lines to be put in the controllers files once routes are initiated in app
const db = require("./models");

//database sync test
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


//Instantiate server app
const app = express();

//ligns for the CROS error => to give the app access to the API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
    next();
    });
  
  //JSON parse method (express version >4.16 so no need to bodyparser)
  app.use(express.json());
  app.use(helmet());
  app.use(cors());

//indication to express for static handling of images ressources 
app.use('/images', express.static(path.join(__dirname, 'images'))); //dirname is the target folder

//api routes
app.use('/api/auth', usersRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/likes', likesRoutes);



//app export
module.exports = app;