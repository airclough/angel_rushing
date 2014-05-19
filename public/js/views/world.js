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

        this.renderWorldViz()
          .subscribe();
      },

      renderWorldViz: function() {
        worldViz.init( this.el, this.win );

        return this;
      },

      subscribe: function() {
        this.win.on( 'Win:scroll', this.onScroll.bind( this ) );
        return this;
      },

      onScroll: function( win ) {
        this.$worldViz = this.$worldViz || $( 'svg' );

        var y = win.height - win.viewport;
        var v = 20 + ( ( win.scrollTop / y ) * 10 );

        this.$worldViz.css({
          transform: 'translateY(-' + v + '%)'
        });
      }
    });
  }
);
