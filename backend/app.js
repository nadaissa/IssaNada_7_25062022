//general imports
const express = require('express');
const path = require('path');
//const helmet = require('helmet');

//importing api routers
/*const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const likesRoutes = require('./routes/likes');*/





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
  //app.use(helmet());

//indication to express for static handling of images ressources 
//app.use('/images', express.static(path.join(__dirname, 'images'))); //dirname is the target folder

//api routes
//app.use('/api/auth', userRoutes);
//app.use('/api/posts', postsRoutes);
//app.use('/api/likes', likesRoutes);



//app export
module.exports = app;