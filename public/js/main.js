require.config({
  baseUrl: '/js',
  paths: {
    jquery    : '../bower_components/jquery/dist/jquery.min',
    underscore: '../bower_components/underscore/underscore',
    backbone  : '../bower_components/backbone/backbone',
    d3        : '../bower_components/d3/d3.min'
  }
});

require( [ 'jquery' ] );
require( [ 'underscore' ] );
require( [ 'backbone' ] );

define(
  [ 'app' ],
  function( app ) {
    app.init();
  }
);
