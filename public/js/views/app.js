define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      el: '#content',

      template: function() {
        return ''
          + '<div id="world"></div>'
          + '<div id="skills"></div>';
      },

      initialize: function( opts ) {
        this.win = opts.win;

        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      }
    });
  }
);
