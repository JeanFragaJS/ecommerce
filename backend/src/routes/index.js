const express = require('express');
const {urlencoded} = require('body-parser');
const { type } = require('express/lib/response');



module.exports = app => {
  app.use( urlencoded( { extended: true } ) );
  app.use( express.json() );
}
