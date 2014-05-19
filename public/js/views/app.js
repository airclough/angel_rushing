define(
  [ 'backbone',
    'collections/skills',
    'views/skills-collection',
    'views/world' ],
  function( Backbone, SkillsCollection, SkillsCollectionView, WorldView ) {
    'use strict';

    return Backbone.View.extend({
      el: '#content',

      template: function() {
        return '<div id="skills"><h1>Required <span>Skills</span></h1></div>';
      },

      initialize: function( opts ) {
        this.win = opts.win;
        this.skillsCollection = new SkillsCollection();

        this.listenTo( this.skillsCollection, 'reset', this.render );
        this.skillsCollection.fetch( { reset: true } );
      },

      render: function() {
        this.$el.html( this.template() );

        this.renderSkillsCollectionView()
          .renderWorldView();
      },

      renderSkillsCollectionView: function() {
        var skillsCollectionView = new SkillsCollectionView({
                                         collection: this.skillsCollection,
                                         win: this.win });

        this.$el.find( '#skills' )
          .append( skillsCollectionView.el );
        return this;
      },

      renderWorldView: function() {
        this.win.setHeight( this.$el );
        this.worldView = new WorldView( { win: this.win } );
        this.$el.append( this.worldView.el );
        return this;
      }
    });
  }
);

// Your code will be applied across many devices, browsers, and countries. So, you know, no pressure
