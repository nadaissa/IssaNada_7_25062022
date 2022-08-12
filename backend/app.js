//general imports
const express = require('express');

//path for system files
const path = require('path');

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

//app export
module.exports = app;