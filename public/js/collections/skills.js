define(
  [ 'backbone',
    'models/skill' ],
  function( Backbone, Skill ) {
    'use strict';

    return Backbone.Collection.extend({
      model: Skill,
      url  : '/api/skills'
    });
  }
);
