define(
  [ 'backbone',
    'views/world' ],
  function( Backbone, WorldView ) {
    'use strict';

    return Backbone.View.extend({
      el: '#content',

      initialize: function( opts ) {
        this.win = opts.win;

        this.renderWorldView();
      },

      renderWorldView: function() {
        this.worldView = new WorldView( { win: this.win } );

        this.$el.append( this.worldView.el );
      }
    });
  }
);

// Your code will be applied across many devices, browsers, and countries. So, you know, no pressure
