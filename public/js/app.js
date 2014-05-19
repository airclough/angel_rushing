define(
  [ 'backbone',
    'jquery',
    'win',
    'views/app' ],
  function( Backbone, $, Win, AppView ) {
    'use strict';

    function init() {
      new AppView( { win: new Win() } );
    }

    return {
      init: init
    };
  }
);
