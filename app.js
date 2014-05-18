'use strict';

var http    = require( 'http' );
var express = require( 'express' );
var config  = require( './config' );
var routes  = require( './app/routes' );

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// configure express
config( app );

// wire up routes
routes( app );

var port   = process.env.PORT || 7874;
var server = http.createServer( app );

server.listen( port, function() {
  console.log( 'node rushing on port ' + port );
});
