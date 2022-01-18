require('dotenv').config(); 

const express = require('express');
const app =  express();

const connectionDB = require('./src/database/db');
const routes = require('./src/routes');

connectionDB(); 
routes(app);

app.listen( 4040 , console.log(`api run on port 4040 🚀`)); 

module.exports =  app; 