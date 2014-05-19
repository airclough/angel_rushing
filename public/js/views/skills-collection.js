define(
  [ 'backbone',
    'views/skill' ],
  function( Backbone, SkillView ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'ul',

      id: 'skills',

      initialize: function( opts ) {
        this.win = opts.win;

        this.render();
      },

      render: function() {
        this.collection.each( this.eachSkill, this );
        return this;
      },

      eachSkill: function( skill ) {
        var skillView = new SkillView( { model: skill, win: this.win } );

        this.$el.append( skillView.el );
      }
    });
  }
);
