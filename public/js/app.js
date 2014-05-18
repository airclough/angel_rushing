define(
  [ 'backbone',
    'jquery',
    'win',
    'views/app' ],
  function( Backbone, $, Win, AppView ) {
    'use strict';

    function init() {
      var win = new Win();

      new AppView( { win: win } );
    }

    return {
      init: init
    };
  }
);
