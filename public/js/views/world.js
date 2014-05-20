define(
  [ 'backbone',
    'views/world-viz',
    'views/world-viz-legend' ],
  function( Backbone, worldViz, worldVizLegend ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      id: 'world',

      initialize: function( opts ) {
        this.win = opts.win;

        this.renderWorldViz()
          .renderWorldVizLegend()
          .subscribe();
      },

      renderWorldViz: function() {
        worldViz.init( this.el, this.win );

        return this;
      },

      renderWorldVizLegend: function() {
        worldVizLegend.init( this.el );

        return this;
      },

      subscribe: function() {
        this.win.on( 'Win:scroll', this.onScroll.bind( this ) );
        return this;
      },

      onScroll: function( win ) {
        this.$worldViz = this.$worldViz || $( 'svg#map' );

        var y = win.height - win.viewport;
        var v = 20 + ( ( win.scrollTop / y ) * 10 );

        this.$worldViz.css({
          transform: 'translateY(-' + v + '%)'
        });
      }
    });
  }
);
