const express = require('express');
const app =  express();
const routes = require('./routes');

routes(app);



app.listen( 4040 , console.log('api run on port 4040'));

module.exports =  app; 