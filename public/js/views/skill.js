define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'li',

      className: function() {
        return this.model.get( 'id' );
      },

      template: function() {
        return ''
          + '<h2>' + this.model.get( 'skill' ) + '</h2>'
          + '<p>' + this.model.get( 'desc' ) + '</p>';
      },

      initialize: function( opts ) {
        this.win = opts.win;

        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
        this.$el.css( 'margin-top', this.win.viewport );
        return this;
      }
    });
  }
);
