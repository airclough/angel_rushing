define(
  [ 'backbone',
    'collections/skills',
    'views/skills-collection',
    'views/world' ],
  function( Backbone, SkillsCollection, SkillsCollectionView, WorldView ) {
    'use strict';

    return Backbone.View.extend({
      el: '#content',

      initialize: function( opts ) {
        this.win = opts.win;
        this.skillsCollection = new SkillsCollection();

        this.listenTo( this.skillsCollection, 'reset', this.renderSkillsCollectionView );
        this.skillsCollection.fetch( { reset: true } );
      },

      renderSkillsCollectionView: function() {
        var skillsCollectionView = new SkillsCollectionView( { collection: this.skillsCollection } );

        this.$el.append( skillsCollectionView.el );
        this.renderWorldView();
      },

      renderWorldView: function() {
        this.win.setHeight( this.$el );
        this.worldView = new WorldView( { win: this.win } );
        this.$el.append( this.worldView.el );
      }
    });
  }
);

// Your code will be applied across many devices, browsers, and countries. So, you know, no pressure
