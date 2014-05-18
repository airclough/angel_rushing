'use strict';

var ejs     = require( 'ejs' );
var express = require( 'express' );

module.exports = function( app ) {
  app.set( 'views', __dirname + '/app/views' );
  app.engine( 'ejs', ejs.__express );
  app.use( express.static( __dirname + '/public' ) );
};
