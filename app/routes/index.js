'use strict';

var skillsController = require( '../controllers/skills' );

module.exports = function( app ) {
  app.get( '/api/skills', skillsController.getAll );
  app.get( '*', function( req, res ) {
    res.render( 'index' );
  });
};
