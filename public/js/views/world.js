define(
  [ 'backbone',
    'world-viz' ],
  function( Backbone, worldViz ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      id: 'world',

      initialize: function( opts ) {
        this.win = opts.win;

        this.renderWorldViz();
      },

      renderWorldViz: function() {
        worldViz.init( this.el, this.win );

        return this;
      }
    });
  }
);
