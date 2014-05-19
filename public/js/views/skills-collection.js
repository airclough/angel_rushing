define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'ul',

      id: 'skills',

      initialize: function() {
        this.render();
      },

      render: function() {
        this.collection.each( this.eachSkill, this );
      },

      eachSkill: function( skill ) {
        console.log( skill );
      }
    });
  }
);
